import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Plataforma SaaS de Assinaturas',
    stack: ['React', 'Node', 'Postgres', 'Stripe'],
    code: `GET /api/subscriptions
Authorization: Bearer <token>

{
  "plan": "pro",
  "userId": "u_123"
}`,
  },
  {
    title: 'Dashboard de Analytics em Tempo Real',
    stack: ['Next.js', 'Socket.IO', 'Redis'],
    code: `socket.on('metrics', (payload) => {
  setSeries((s) => [...s, payload])
})`,
  },
  {
    title: 'E-commerce Headless',
    stack: ['React', 'NestJS', 'MongoDB'],
    code: `mutation CreateOrder($input: OrderInput!) {
  createOrder(input: $input) { id status }
}`,
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="section" aria-label="Projetos">
      <h2 className="typewriter">Nossos Projetos</h2>
      <p style={{ color: 'var(--muted)' }}>Alguns exemplos de soluções que entregamos recentemente.</p>
      <div className="projects">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            className="card project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-head">
              <h3>{p.title}</h3>
              <div className="tags">
                {p.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <pre><code>{p.code}</code></pre>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
