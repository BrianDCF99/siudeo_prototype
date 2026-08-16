import { useEffect, useMemo, useState, type CSSProperties } from 'react'

import { ProductCard } from '../components/ProductCard'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { products, type Product } from '../data/site'
import '../styles/home.css'
import '../styles/shop.css'

type CollectionFilter = 'all' | 'tricolour-slipcast' | 'playful'
type SortOption = 'default' | 'price-asc' | 'price-desc'

const minimumPrice = 0
const maximumPrice = Math.max(...products.map((product) => product.price))
const priceStep = 5

const collectionOptions: Array<{ value: CollectionFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'tricolour-slipcast', label: 'Tricolour Slipcast' },
  { value: 'playful', label: 'Playful' },
]

function productCollectionSlug(product: Product): Exclude<CollectionFilter, 'all'> {
  return product.collection === 'Playful' ? 'playful' : 'tricolour-slipcast'
}

function initialCollectionFilter(): CollectionFilter {
  const collection = new URLSearchParams(window.location.search).get('collection')

  return collection === 'tricolour-slipcast' || collection === 'playful'
    ? collection
    : 'all'
}

export function ShopPage() {
  const [collection, setCollection] = useState<CollectionFilter>(initialCollectionFilter)
  const [priceLimit, setPriceLimit] = useState(maximumPrice)
  const [sort, setSort] = useState<SortOption>('default')

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCollection = collection === 'all' || productCollectionSlug(product) === collection
      const matchesPrice = product.price <= priceLimit

      return matchesCollection && matchesPrice
    })

    if (sort === 'price-asc') {
      return [...filtered].sort((first, second) => first.price - second.price)
    }

    if (sort === 'price-desc') {
      return [...filtered].sort((first, second) => second.price - first.price)
    }

    return filtered
  }, [collection, priceLimit, sort])

  useEffect(() => {
    document.title = 'Shop — SIUDEO'
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)

    if (collection === 'all') {
      url.searchParams.delete('collection')
    } else {
      url.searchParams.set('collection', collection)
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [collection])

  const hasActiveFilters = collection !== 'all' || priceLimit !== maximumPrice
  const clearFilters = () => {
    setCollection('all')
    setPriceLimit(maximumPrice)
  }

  const sliderFill = `${((priceLimit - minimumPrice) / (maximumPrice - minimumPrice)) * 100}%`

  return (
    <div className="shop-page storefront-theme" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <header className="shop-hero">
          <div className="page-shell">
            <h1 id="shop-title">Shop</h1>
          </div>
        </header>

        <section className="shop-catalog page-shell" aria-labelledby="shop-title">
          <aside className="shop-filters" aria-label="Shop filters">
            <div className="shop-filters__heading">
              <h2>Filter</h2>
              {hasActiveFilters && (
                <button type="button" onClick={clearFilters}>
                  Clear
                </button>
              )}
            </div>

            <fieldset className="shop-filter-group shop-collection-filter">
              <legend>Collection</legend>
              <div className="shop-filter-options">
                {collectionOptions.map((option) => (
                  <label className="shop-filter-option" key={option.value}>
                    <input
                      type="radio"
                      name="collection"
                      value={option.value}
                      checked={collection === option.value}
                      onChange={() => setCollection(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="shop-filter-group shop-price-filter">
              <legend>Price</legend>
              <div className="shop-price-slider">
                <div className="shop-price-slider__value">
                  <span>Up to</span>
                  <output htmlFor="maximum-price">${priceLimit}</output>
                </div>
                <input
                  id="maximum-price"
                  type="range"
                  min={minimumPrice}
                  max={maximumPrice}
                  step={priceStep}
                  value={priceLimit}
                  aria-label="Maximum price"
                  style={{ '--slider-fill': sliderFill } as CSSProperties}
                  onChange={(event) => setPriceLimit(Number(event.target.value))}
                />
                <div className="shop-price-slider__bounds" aria-hidden="true">
                  <span>${minimumPrice}</span>
                  <span>${maximumPrice}</span>
                </div>
              </div>
            </fieldset>
          </aside>

          <div className="shop-results">
            <div className="shop-toolbar">
              <p className="shop-result-count" aria-live="polite" aria-atomic="true">
                {visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <label className="shop-sort">
                <span>Sort by</span>
                <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)}>
                  <option value="default">Default</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                </select>
              </label>
            </div>

            {visibleProducts.length > 0 ? (
              <div className="product-grid shop-product-grid">
                {visibleProducts.map((product, index) => (
                  <ProductCard
                    product={product}
                    imageLoading={index < 3 ? 'eager' : 'lazy'}
                    key={product.id}
                  />
                ))}
              </div>
            ) : (
              <div className="shop-empty" role="status">
                <h2>No pieces match these filters.</h2>
                <button className="button button--ghost" type="button" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
