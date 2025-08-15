import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { title: 'Desenvolvimento de Software', desc: 'Aplicações completas (frontend + backend), arquitetura limpa, testes e CI/CD.' },
  { title: 'Sistemas e APIs', desc: 'APIs REST/GraphQL, autenticação, integrações com gateways de pagamento e ERPs.' },
  { title: 'Sites de Alta Performance', desc: 'Landing pages, sites institucionais e e-commerces headless com SEO e Web Vitals.' },
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
      <h2>Serviços sob medida</h2>
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
