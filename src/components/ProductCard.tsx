import { formatPrice, type Product } from '../data/site'
import { Icon } from './Icon'

type ProductCardProps = {
  product: Product
  imageLoading?: 'eager' | 'lazy'
}

export function ProductCard({ product, imageLoading = 'lazy' }: ProductCardProps) {
  return (
    <article className={`product-card${product.collection === 'Playful' ? ' product-card--playful' : ''}`}>
      <div className="product-card__media">
        <span className="product-card__collection">{product.collection}</span>
        <img
          className="product-card__image product-card__image--main"
          src={product.image}
          alt={product.imageAlt}
          loading={imageLoading}
        />
        <img
          className="product-card__image product-card__image--detail"
          src={product.detailImage}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <div className="product-card__heading">
          <h3>{product.name}</h3>
          <p className="product-card__price">{formatPrice(product)}</p>
        </div>
        <p className="product-card__meta">{product.volume} · Handmade ceramic</p>
        <p className="product-card__description">{product.description}</p>
        <button className="product-card__button" type="button" aria-label={`Add ${product.name} to cart`}>
          <span>Add to cart</span>
          <Icon name="plus" size={17} />
        </button>
      </div>
    </article>
  )
}
