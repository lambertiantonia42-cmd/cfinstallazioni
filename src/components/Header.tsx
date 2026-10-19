import ArrowIcon from './ArrowIcon'
import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/contact'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 80)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])
  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="header__inner container">
        <a href="/#inizio" className="header__brand" aria-label="CF Installazioni — inizio" onClick={() => setOpen(false)}>
          <img src="/images/optimized/logo-light.png" width="307" height="400" alt="" />
          <span>CF <strong>INSTALLAZIONI</strong></span>
        </a>
        <button ref={menuButton} className="header__menu" type="button" aria-label={open ? 'Chiudi menu' : 'Apri menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span className="header__menu-label">{open ? 'Chiudi' : 'Menu'}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
            <path d={open ? 'M6 6l12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <nav id="main-navigation" aria-label="Navigazione principale" className={`header__nav${open ? ' header__nav--open' : ''}`} onClick={() => setOpen(false)}>
          <a href="/#inizio">Home</a>
          <a href="/?pagina=chi-siamo">Chi siamo</a>
          <a href="/#servizi">Servizi</a>
          <a href="/#realizzazioni">Realizzazioni</a>
          <a href="/#contatti">Contatti</a>
          <a href={contact.whatsappUrl} className="header__cta">Richiedi preventivo <span aria-hidden="true"><ArrowIcon /></span></a>
        </nav>
      </div>
    </header>
  )
}
