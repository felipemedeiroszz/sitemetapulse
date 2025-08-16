import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { title: 'Auditorias de Smart Contracts', desc: 'Identificamos vulnerabilidades e garantimos a integridade do seu projeto.' },
  { title: 'Desenvolvimento Web3', desc: 'DApps, integrações com carteiras digitais e protocolos descentralizados.' },
  { title: 'Sistemas Sob Medida', desc: 'Soluções criadas especialmente para as demandas do seu negócio.' },
  { title: 'Gateways de Pagamento Cripto', desc: 'Transações rápidas, seguras e com múltiplas moedas.' },
  { title: 'Criação de Tokens', desc: 'Planejamento, desenvolvimento e implementação de tokens personalizados.' },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        y: 24,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out',
        duration: 0.7,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%'
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="servicos" className="section" ref={ref} aria-label="Serviços">
      <h2>Nossas Soluções</h2>
      <div className="services">
        {items.map(it => (
          <div className="card service-card" key={it.title}>
            <h3>{it.title}</h3>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

