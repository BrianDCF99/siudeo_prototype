import { useState } from 'react'

import { artist } from '../data/site'
import { Icon } from './Icon'

function Wordmark() {
  return <span className="wordmark">SIUDEO</span>
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${menuOpen ? ' site-header--open' : ''}`}>
      <div className="announcement">
        <p>Small-batch ceramics, handmade in Vancouver</p>
      </div>

      <div className="site-header__bar page-shell">
        <a className="site-header__brand" href="/#top" aria-label="Siudeo home" onClick={closeMenu}>
          <Wordmark />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/" aria-current={currentPath === '/' ? 'page' : undefined}>Home</a>
          <a href="/shop" aria-current={currentPath === '/shop' ? 'page' : undefined}>Shop</a>
          <a href="/about" aria-current={currentPath === '/about' ? 'page' : undefined}>About</a>
        </nav>

        <div className="site-header__actions">
          <span className="header-currency" aria-label="Prices shown in Canadian dollars">CAD $</span>
          <button className="header-account" type="button" aria-label="Sign in or view profile" title="Sign in or view profile">
            <Icon name="user" size={20} />
          </button>
          <a className="header-bag" href="/shop" aria-label="Shopping bag">
            <Icon name="bag" size={19} />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          <div className="page-shell mobile-nav__inner">
            <a href="/" aria-current={currentPath === '/' ? 'page' : undefined} onClick={closeMenu}>Home</a>
            <a href="/shop" aria-current={currentPath === '/shop' ? 'page' : undefined} onClick={closeMenu}>Shop</a>
            <a href="/about" aria-current={currentPath === '/about' ? 'page' : undefined} onClick={closeMenu}>About</a>
            <a href={`mailto:${artist.email}`} onClick={closeMenu}>Get in touch</a>
          </div>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__top">
        <div className="site-footer__brand">
          <a href="/#top" aria-label="Siudeo home"><Wordmark /></a>
          <p>Small-batch ceramics by Brianne Siu, made in Vancouver for cupboards, tables, and open shelves.</p>
        </div>

        <div className="site-footer__links">
          <div>
            <h2>Explore</h2>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/#studio-notes">Studio notes</a>
          </div>
          <div>
            <h2>Connect</h2>
            <a href={artist.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={`mailto:${artist.email}`}>Email Brianne</a>
          </div>
        </div>
      </div>

      <div className="page-shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Siudeo. Handmade in Vancouver, Canada.</p>
      </div>
    </footer>
  )
}
