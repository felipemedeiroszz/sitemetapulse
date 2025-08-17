import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../img/LOGO.png'

export default function Hero() {
  return (
    <section className="section hero" aria-label="Herói">
      <div>
        <motion.h1
          className="headline"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            textShadow: [
              '0 0 0px rgba(0,229,255,0.0), 0 0 0px rgba(124,77,255,0.0)',
              '0 0 12px rgba(0,229,255,0.35), 0 0 22px rgba(124,77,255,0.25)',
              '0 0 0px rgba(0,229,255,0.0), 0 0 0px rgba(124,77,255,0.0)'
            ]
          }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Criamos o Futuro Digital com <span className="headline-accent">Blockchain</span> e <span className="headline-accent">Web3</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Soluções inovadoras para auditorias, sistemas sob medida, gateways de pagamento e criação de tokens —
          tudo com a segurança e a eficiência da tecnologia blockchain.
        </motion.p>
        <div className="cta">
          <motion.a
            className="button primary"
            href="#contato"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Comece seu projeto hoje
          </motion.a>
          <motion.a
            className="button ghost"
            href="#projetos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver projetos
          </motion.a>
        </div>
      </div>
      <div className="hero-right">
        <motion.img
          src={logo}
          alt="Metapulse"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
    </section>
  )
}

