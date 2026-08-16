import { useEffect } from 'react'

import { Icon } from '../components/Icon'
import { SiteFooter, SiteHeader } from '../components/SiteChrome'
import { artist } from '../data/site'
import '../styles/home.css'
import '../styles/about.css'

export function AboutPage() {
  useEffect(() => {
    document.title = 'Brianne Siu — SIUDEO'
  }, [])

  return (
    <div className="about-page storefront-theme" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content">
        <section className="about-hero page-shell" aria-labelledby="about-title">
          <figure className="about-portrait">
            <img
              src={artist.portrait}
              alt={artist.portraitAlt}
              width="1665"
              height="1110"
              fetchPriority="high"
            />
          </figure>

          <div className="about-copy">
            <h1 id="about-title">{artist.name}</h1>
            <p className="about-copy__role">Ceramic artist · {artist.location}</p>
            <div className="about-copy__biography">
              {artist.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-actions">
              <a className="button button--primary" href="/shop">
                Shop the collection
                <Icon name="arrow-right" size={18} />
              </a>
              <a className="button button--ghost" href={artist.instagram} target="_blank" rel="noreferrer">
                Instagram
                <Icon name="arrow-right" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
