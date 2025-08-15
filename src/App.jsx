import React, { useState } from 'react'
import Hero from './components/Hero'
import TechShowcase from './components/TechShowcase'
import Services from './components/Services'
import Footer from './components/Footer'
import CodeRain from './components/CodeRain'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
          <span className="logo-glow" />
          NeonForge
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
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <main>
        <Hero />
        <TechShowcase />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
