import React from 'react'
import { motion } from 'framer-motion'

// Importa automaticamente todos os ícones da pasta /marketing (várias extensões)
const icons = import.meta.glob('../../marketing/*.{png,jpg,jpeg,svg,webp}', { eager: true })

const items = Object.entries(icons)
  .map(([path, mod]) => {
    const file = path.split('/').pop() || ''
    const name = file
      .replace(/\.(png|jpe?g|svg|webp)$/i, '')
      .replace(/[_-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase())
    return { name, src: mod.default || mod }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export default function Marketing() {
  return (
    <section id="marketing" className="section" aria-label="Marketing">
      <h2 className="typewriter">Marketing Digital</h2>
      <p style={{ color: 'var(--muted)' }}>
        aperfeiçoamos nossa própria metodologia de trabalho com o único objetivo de aumentar aa demanda do seu público-alvo pelo produto que oferece.
      </p>
      <div className="tech-grid">
        {items.map((it) => (
          <motion.div
            key={it.name}
            className="card tech-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={it.src} alt={it.name} className="tech-icon" />
            <span className="tech-name">{it.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
