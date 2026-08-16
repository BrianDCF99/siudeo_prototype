import { Icon } from '../components/Icon'
import { formatPrice, products } from '../data/site'
import '../styles/admin.css'

const previewProduct = products[0]
const collectionCount = new Set(products.map((product) => product.collection)).size

export function AdminPage() {
  return (
    <div className="admin-page">
      <a className="skip-link" href="#admin-main">
        Skip to dashboard
      </a>

      <aside className="admin-sidebar" aria-label="Studio navigation">
        <a className="admin-brand" href="/" aria-label="Siudeo storefront">
          <span className="admin-brand__mark" aria-hidden="true">
            <Icon name="sparkle" size={22} />
          </span>
          <span>
            <strong>siudeo</strong>
            <small>Studio manager</small>
          </span>
        </a>

        <nav className="admin-nav" aria-label="Admin sections">
          <a className="admin-nav__link admin-nav__link--active" href="#admin-main" aria-current="page">
            <Icon name="grid" size={18} />
            Overview
          </a>
          <a className="admin-nav__link" href="#add-piece">
            <Icon name="plus" size={18} />
            Add a piece
          </a>
          <a className="admin-nav__link" href="#inventory">
            <Icon name="package" size={18} />
            Inventory
            <span className="admin-nav__count">{products.length}</span>
          </a>
        </nav>

        <div className="admin-sidebar__note">
          <span className="admin-sidebar__note-icon" aria-hidden="true">
            <Icon name="sparkle" size={16} />
          </span>
          <p>Made to stay simple, even on busy studio days.</p>
        </div>
      </aside>

      <div className="admin-workspace">
        <header className="admin-topbar">
          <div>
            <p className="admin-topbar__eyebrow">Siudeo ceramics</p>
            <p className="admin-topbar__title">Studio dashboard</p>
          </div>
          <a className="admin-storefront-link" href="/">
            <Icon name="eye" size={18} />
            View storefront
            <Icon name="arrow-right" size={16} />
          </a>
        </header>

        <main className="admin-main" id="admin-main">
          <div className="admin-prototype-notice" role="note" aria-label="Prototype notice">
            <span className="admin-prototype-notice__icon" aria-hidden="true">
              <Icon name="sparkle" size={17} />
            </span>
            <div>
              <strong>Prototype mode — nothing is saved</strong>
              <span> Explore the layout freely. Publishing and uploads are not connected yet.</span>
            </div>
          </div>

          <section className="admin-intro" aria-labelledby="admin-title">
            <div>
              <p className="admin-kicker">Welcome back, Brianne</p>
              <h1 id="admin-title">Your work, all in one place.</h1>
              <p className="admin-intro__copy">
                Add a new ceramic piece, see how it will look in the shop, and keep an eye on the current collection.
              </p>
            </div>

            <dl className="admin-stats" aria-label="Inventory summary">
              <div>
                <dt>Pieces online</dt>
                <dd>{products.length}</dd>
              </div>
              <div>
                <dt>Collections</dt>
                <dd>{collectionCount}</dd>
              </div>
            </dl>
          </section>

          <section className="admin-create-grid" id="add-piece" aria-labelledby="add-piece-title">
            <div className="admin-panel admin-form-panel">
              <div className="admin-panel__heading">
                <span className="admin-step-number" aria-hidden="true">01</span>
                <div>
                  <p className="admin-kicker">New listing</p>
                  <h2 id="add-piece-title">Add a new piece</h2>
                  <p>Start with the essentials. You can always refine the story later.</p>
                </div>
              </div>

              <form className="admin-form">
                <div className="admin-field admin-field--full">
                  <label htmlFor="piece-image">Piece photo</label>
                  <label className="admin-upload" htmlFor="piece-image">
                    <input id="piece-image" name="piece-image" type="file" accept="image/png,image/jpeg,image/webp,image/avif" />
                    <span className="admin-upload__icon" aria-hidden="true">
                      <Icon name="upload" size={22} />
                    </span>
                    <span className="admin-upload__copy">
                      <strong>Choose a photo</strong>
                      <small>or drop it here · JPG, PNG, WebP or AVIF</small>
                    </span>
                  </label>
                  <p className="admin-field__hint">A bright, square photo works beautifully in the shop.</p>
                </div>

                <div className="admin-field admin-field--full">
                  <label htmlFor="piece-title">Title</label>
                  <input id="piece-title" name="piece-title" type="text" placeholder="e.g. Sunroom Tumbler" autoComplete="off" />
                </div>

                <div className="admin-field admin-field--full">
                  <label htmlFor="piece-description">Description</label>
                  <textarea
                    id="piece-description"
                    name="piece-description"
                    rows={4}
                    placeholder="Describe its colours, shape, surface, and how it was made."
                  />
                </div>

                <div className="admin-field">
                  <label htmlFor="piece-price">Price (CAD)</label>
                  <div className="admin-price-input">
                    <span aria-hidden="true">$</span>
                    <input id="piece-price" name="piece-price" type="number" min="0" step="1" inputMode="decimal" placeholder="75" />
                  </div>
                </div>

                <div className="admin-field">
                  <label htmlFor="piece-collection">Collection</label>
                  <div className="admin-select-wrap">
                    <select id="piece-collection" name="piece-collection" defaultValue="">
                      <option value="" disabled>Select a collection</option>
                      <option value="tricolour-slipcast">Tricolour Slipcast</option>
                      <option value="playful">Playful</option>
                    </select>
                    <Icon name="chevron-down" size={16} />
                  </div>
                </div>

                <div className="admin-field">
                  <label htmlFor="piece-dimensions">
                    Dimensions <span>Optional</span>
                  </label>
                  <input id="piece-dimensions" name="piece-dimensions" type="text" placeholder="e.g. 8 oz or 4 × 5 in" />
                </div>

                <div className="admin-field">
                  <label htmlFor="piece-status">
                    Status <span>Optional</span>
                  </label>
                  <div className="admin-select-wrap">
                    <select id="piece-status" name="piece-status" defaultValue="available">
                      <option value="available">Available</option>
                      <option value="sold">Sold</option>
                      <option value="hidden">Hidden from shop</option>
                    </select>
                    <Icon name="chevron-down" size={16} />
                  </div>
                </div>

                <div className="admin-form__actions">
                  <button className="admin-button admin-button--secondary" type="button">Save draft</button>
                  <button className="admin-button admin-button--primary" type="button">
                    Publish piece
                    <Icon name="arrow-right" size={17} />
                  </button>
                  <p><Icon name="sparkle" size={14} /> Prototype only — these buttons are not connected.</p>
                </div>
              </form>
            </div>

            <aside className="admin-preview" aria-labelledby="preview-title">
              <div className="admin-preview__heading">
                <div>
                  <p className="admin-kicker">Storefront view</p>
                  <h2 id="preview-title">Live preview</h2>
                </div>
                <span><Icon name="eye" size={15} /> Example</span>
              </div>

              <div className="admin-preview-card">
                <div className="admin-preview-card__image">
                  <img src={previewProduct.image} alt={previewProduct.imageAlt} />
                  <span>Handmade</span>
                </div>
                <div className="admin-preview-card__body">
                  <p>{previewProduct.collection}</p>
                  <div className="admin-preview-card__title">
                    <h3>{previewProduct.name}</h3>
                    <strong>{formatPrice(previewProduct)}</strong>
                  </div>
                  <p className="admin-preview-card__description">{previewProduct.description}</p>
                  <button type="button">View piece <Icon name="arrow-right" size={16} /></button>
                </div>
              </div>

              <p className="admin-preview__note">
                <Icon name="image" size={16} /> Your details will appear here once the real dashboard is connected.
              </p>
            </aside>
          </section>

          <section className="admin-inventory" id="inventory" aria-labelledby="inventory-title">
            <div className="admin-inventory__heading">
              <div>
                <p className="admin-kicker">Current shop</p>
                <h2 id="inventory-title">Your inventory</h2>
              </div>
              <span>{products.length} pieces</span>
            </div>

            <div className="admin-inventory-table-wrap">
              <table className="admin-inventory-table">
                <thead>
                  <tr>
                    <th scope="col">Piece</th>
                    <th scope="col">Collection</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td data-label="Piece">
                        <div className="admin-product-cell">
                          <img src={product.image} alt="" />
                          <div>
                            <strong>{product.name}</strong>
                            <span>{product.volume}</span>
                          </div>
                        </div>
                      </td>
                      <td data-label="Collection">{product.collection}</td>
                      <td data-label="Price"><strong>{formatPrice(product)}</strong></td>
                      <td data-label="Status"><span className="admin-status"><i aria-hidden="true" /> Available</span></td>
                      <td className="admin-row-action">
                        <button type="button" aria-label={`More options for ${product.name}`}>
                          <Icon name="more" size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
