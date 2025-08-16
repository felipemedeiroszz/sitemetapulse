import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', empresa: '', mensagem: '' })
  const [errors, setErrors] = useState({})

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.nome.trim()) errs.nome = 'Informe seu nome'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'E-mail inválido'
    if (form.empresa && form.empresa.trim().length < 2) errs.empresa = 'Empresa muito curta'
    if (form.mensagem.trim().length < 10) errs.mensagem = 'Mensagem muito curta'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent('Contato — METAPULSE')
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\nEmpresa: ${form.empresa}\n\n${form.mensagem}`)
    window.location.href = `mailto:contato@neonforge.dev?subject=${subject}&body=${body}`
  }

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }
  const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }

  return (
    <motion.section id="contato" className="section" aria-label="Contato"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}
    >
      <motion.h2 className="typewriter" variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Vamos Construir o Futuro Juntos
      </motion.h2>
      <motion.p style={{ color: 'var(--muted)' }} variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Conte sobre seu projeto. Respondemos em até 1 dia útil.
      </motion.p>
      <motion.form className="card contact-form" onSubmit={onSubmit} noValidate
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
      >
        <motion.div className="field" variants={item}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" value={form.nome} onChange={onChange} placeholder="Seu nome" />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </motion.div>
        <motion.div className="field" variants={item}>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="voce@email.com" />
          {errors.email && <span className="error">{errors.email}</span>}
        </motion.div>
        <motion.div className="field" variants={item}>
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" value={form.empresa} onChange={onChange} placeholder="Nome da empresa (opcional)" />
          {errors.empresa && <span className="error">{errors.empresa}</span>}
        </motion.div>
        <motion.div className="field full" variants={item}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={5} value={form.mensagem} onChange={onChange} placeholder="Descreva rapidamente seu objetivo, prazos e orçamento." />
          {errors.mensagem && <span className="error">{errors.mensagem}</span>}
        </motion.div>
        <motion.button className="button primary contact-submit" type="submit" variants={item} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          Enviar mensagem
        </motion.button>
      </motion.form>
      <motion.div className="contact-extras" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div className="contact-item" variants={item} whileHover={{ x: 2 }}>
          <i className="fa-brands fa-instagram" aria-hidden="true" />
          <a href="#" aria-label="Instagram">Instagram</a>
        </motion.div>
        <motion.div className="contact-item" variants={item} whileHover={{ x: 2 }}>
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          <a href="#" aria-label="WhatsApp">WhatsApp</a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

