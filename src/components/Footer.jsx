import React from 'react'

export default function Footer() {
  return (
    <footer id="contato" aria-label="Rodapé">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <strong>NeonForge</strong> — Desenvolvimento de Software Futurista
          </div>
          <div>
            <a href="mailto:contato@neonforge.dev" style={{ color: 'inherit', textDecoration: 'none' }}>contato@neonforge.dev</a>
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 12 }}>
          © {new Date().getFullYear()} NeonForge. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
