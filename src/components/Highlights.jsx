import React from 'react'
import { motion } from 'framer-motion'
import blockchainImg from '../../img/BLOCKCHAIN.png'
import web3Img from '../../img/web3.png'
import personalizadosImg from '../../img/personalizados.png'
import tokensImg from '../../img/tokens.png'
import gatewayImg from '../../img/gateway.png'

const items = [
  { img: blockchainImg, title: 'Auditorias Blockchain', desc: 'Segurança máxima para seus smart contracts e sistemas.' },
  { img: web3Img, title: 'Web3 Development', desc: 'Aplicações descentralizadas e integrações avançadas.' },
  { img: personalizadosImg, title: 'Sistemas Personalizados', desc: 'Softwares exclusivos para necessidades únicas.' },
  { img: gatewayImg, title: 'Gateway de Pagamentos Cripto', desc: 'Receba e envie criptomoedas de forma simples e segura.' },
  { img: tokensImg, title: 'Criação de Tokens', desc: 'Do conceito ao lançamento do seu próprio ativo digital.' },
]

export default function Highlights() {
  return (
    <section id="destaques" className="section" aria-label="Destaques">
      <h2 className="typewriter">O que entregamos</h2>
      <p style={{ color: 'var(--muted)' }}>
        Soluções inovadoras com foco em segurança, escalabilidade e experiência — tudo com a eficiência da tecnologia blockchain.
      </p>
      <div className="highlights">
        {items.map((it) => (
          <motion.div
            key={it.title}
            className="card highlight-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="icon-wrap">
              <img src={it.img} alt="" aria-hidden="true" />
            </div>
            <div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
