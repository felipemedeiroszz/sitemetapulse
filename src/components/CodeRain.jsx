import React, { useEffect, useRef } from 'react'

// Efeito Matrix code rain em canvas
export default function CodeRain({ density = 20, speed = 50, className = '', style = {} }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = canvas.clientWidth)
    let h = (canvas.height = canvas.clientHeight)

    const chars = '01{}[]<>=+-.;:/()$#@&%*ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const fontSize = 14
    const columns = Math.floor(w / fontSize)
    const drops = new Array(columns).fill(1)

    const color = '#00e5ff'

    let last = performance.now()
    const loop = (now) => {
      const delta = (now - last) / 1000
      last = now

      ctx.fillStyle = 'rgba(5,6,10,0.15)'
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = color
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < columns; i++) {
        if (Math.random() < 0.005) continue
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.shadowColor = color
        ctx.shadowBlur = 8
        ctx.fillText(text, x, y)
        ctx.shadowBlur = 0

        if (y > h && Math.random() > 0.975) drops[i] = 0
        drops[i] += Math.max(1, (speed * delta) / 8)
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    const onResize = () => {
      w = canvas.width = canvas.clientWidth
      h = canvas.height = canvas.clientHeight
    }
    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [density, speed])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block', background: 'transparent', ...style }}
    />
  )
}
