import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section hero" aria-label="Herói">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Criamos software, sistemas e sites — com código que fala por si
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Especialistas em engenharia de software: arquitetamos APIs, painéis, integrações e experiências web
          de alta performance, com animações que respiram programação.
        </motion.p>
        <div className="cta">
          <motion.a
            className="button primary"
            href="#contato"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar proposta técnica
          </motion.a>
          <motion.a
            className="button"
            href="#tecnologias"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver stack & ferramentas
          </motion.a>
        </div>
      </div>
      <div>
        <div className="card canvas-wrap">
          <div className="canvas-overlay" />
          {/* Background global já aplica o efeito de código. Mantemos o cartão como decoração. */}
        </div>
      </div>
    </section>
  )
}
