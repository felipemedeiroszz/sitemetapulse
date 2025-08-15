import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState({})

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const errs = {}
    if (!form.nome.trim()) errs.nome = 'Informe seu nome'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'E-mail inválido'
    if (form.mensagem.trim().length < 10) errs.mensagem = 'Mensagem muito curta'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent('Contato — NeonForge')
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.mensagem}`)
    window.location.href = `mailto:contato@neonforge.dev?subject=${subject}&body=${body}`
  }

  return (
    <section id="contato" className="section" aria-label="Contato">
      <h2>Entre em contato</h2>
      <p style={{ color: 'var(--muted)' }}>Conte sobre seu projeto. Respondemos em até 1 dia útil.</p>
      <form className="card contact-form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" value={form.nome} onChange={onChange} placeholder="Seu nome" />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="voce@email.com" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={5} value={form.mensagem} onChange={onChange} placeholder="Descreva rapidamente seu objetivo, prazos e orçamento." />
          {errors.mensagem && <span className="error">{errors.mensagem}</span>}
        </div>
        <button className="button primary" type="submit">Enviar mensagem</button>
      </form>
    </section>
  )
}
