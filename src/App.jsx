import React, { useState } from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CodeRain from './components/CodeRain'
import Contact from './components/Contact'
import Technologies from './components/Technologies'
import Marketing from './components/Marketing'
import metapulseLogo from '../img/metapulse.png'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <div className="app">
      <div className="bg-code">
        <CodeRain className="code-rain" speed={60} />
      </div>
      <div className="bg-grid" />
      <header className="nav">
        <div className="brand">
          <img src={metapulseLogo} alt="Metapulse" className="brand-logo" />
        </div>
        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="primary-nav" className={menuOpen ? 'open' : ''} onClick={closeMenu}>
          <a href="#destaques">Destaques</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#marketing">Marketing</a>
          <a href="#projetos">Nossos Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Highlights />
        <About />
        <Technologies />
        <Marketing />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

