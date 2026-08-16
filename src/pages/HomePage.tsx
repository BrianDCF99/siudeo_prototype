import type { FormEvent } from 'react'

import { Icon } from '../components/Icon'
import { ProductCard } from '../components/ProductCard'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { artist, collections, featuredProducts, products, studioFacts } from '../data/site'
import '../styles/home.css'

export function HomePage() {
  const preventPrototypeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="home-page storefront-theme" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="hero page-shell" id="artist" aria-labelledby="hero-title">
          <div className="hero-art">
            <figure className="hero-art__image hero-art__image--main">
              <img
                src="/images/hero.jpg"
                alt="Brianne Siu standing beneath the title of her Permission to Play exhibition"
                width="1080"
                height="810"
                fetchPriority="high"
              />
            </figure>
          </div>

          <div className="hero__copy">
            <h1 className="hero__title" id="hero-title">{artist.headline}</h1>
            <blockquote className="hero__promise">
              <p className="hero__intro">{artist.promise}</p>
            </blockquote>
            <div className="hero__actions">
              <a className="button button--primary" href="#collections">
                Shop the collection
                <Icon name="arrow-right" size={18} />
              </a>
              <a className="button button--ghost" href="/about">
                Meet the artist
                <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Studio and delivery details">
          <div className="page-shell trust-strip__inner">
            {studioFacts.map((fact) => (
              <div className="trust-strip__fact" key={fact}>
                <span className="trust-strip__icon" aria-hidden="true">
                  <Icon name="check" size={14} />
                </span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="collections-section" id="collections" aria-labelledby="collections-title">
          <div className="page-shell">
            <header className="merchandising-heading">
              <h2 id="collections-title">Collections</h2>
            </header>

            <div className="collection-grid">
              {collections.map((collection) => {
                const productCount = products.filter((product) => product.collection === collection.name).length

                return (
                  <article className="collection-card" key={collection.slug}>
                    <a className="collection-card__media" href={`/shop?collection=${collection.slug}`}>
                      <img src={collection.image} alt={collection.imageAlt} loading="lazy" />
                    </a>
                    <div className="collection-card__body">
                      <div>
                        <h3>{collection.name}</h3>
                        <p>{productCount} pieces</p>
                      </div>
                      <a className="button button--ghost" href={`/shop?collection=${collection.slug}`}>
                        Shop now
                        <Icon name="arrow-right" size={18} />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="featured-section" aria-labelledby="featured-title">
          <div className="page-shell">
            <header className="merchandising-heading merchandising-heading--split">
              <h2 id="featured-title">Featured pieces</h2>
              <a href="/shop">
                View all pieces
                <Icon name="arrow-right" size={18} />
              </a>
            </header>

            <div className="product-grid featured-grid">
              {featuredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter" id="studio-notes" aria-labelledby="newsletter-title">
          <div className="newsletter__shape newsletter__shape--one" aria-hidden="true" />
          <div className="newsletter__shape newsletter__shape--two" aria-hidden="true" />
          <div className="page-shell newsletter__inner">
            <div className="newsletter__copy">
              <h2 id="newsletter-title">Don’t miss the next drop.</h2>
              <p>Subscribe for updates, early access, and new drops!</p>
            </div>
            <form className="newsletter-form" onSubmit={preventPrototypeSubmit}>
              <label htmlFor="newsletter-email">Email address</label>
              <div className="newsletter-form__field">
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
                <button type="submit" aria-label="Join studio notes">
                  Join studio notes
                  <Icon name="arrow-right" size={18} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
