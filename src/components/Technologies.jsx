import React from 'react'
import { motion } from 'framer-motion'

// Importa automaticamente todos os PNGs da pasta /tecnologias
// Vite suporta import.meta.glob para importar assets estaticamente
const icons = import.meta.glob('../../tecnologias/*.png', { eager: true })

// Normaliza o objeto em uma lista { name, src }
const techList = Object.entries(icons)
  .map(([path, mod]) => {
    const file = path.split('/').pop() || ''
    const name = file.replace(/\.png$/i, '')
    return { name, src: mod.default || mod }
  })
  // Ordena por nome para uma grade consistente
  .sort((a, b) => a.name.localeCompare(b.name))

export default function Technologies() {
  return (
    <section id="tecnologias" className="section" aria-label="Tecnologias">
      <h2 className="typewriter">Tecnologias que usamos</h2>
      <p style={{ color: 'var(--muted)' }}>
        CONHEÇA AS TECNOLOGIAS QUE A METAPULSE TEM MUITA COMPETENCIA E EXPERIENCIA
      </p>
      <div className="tech-grid">
        {techList.map((t) => (
          <motion.div
            key={t.name}
            className="card tech-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={t.src} alt={t.name} className="tech-icon" />
            <span className="tech-name">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
