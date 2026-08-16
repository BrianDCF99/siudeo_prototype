import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'

export function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/about') {
    return <AboutPage />
  }

  if (path === '/shop') {
    return <ShopPage />
  }

  return <HomePage />
}
