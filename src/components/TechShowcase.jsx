import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function TechShowcase() {
  const mountRef = useRef(null)
  const rendererRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x05060a, 8, 22)

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0.8, 7)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Luz ambiente sutil
    const hemi = new THREE.HemisphereLight(0x00e5ff, 0x07202a, 0.7)
    scene.add(hemi)
    const dir = new THREE.DirectionalLight(0xffffff, 0.4)
    dir.position.set(2, 3, 4)
    scene.add(dir)

    // Rede de nós e arestas (grafo) com vibe de programação
    const NODE_COLOR = new THREE.Color(0x00e5ff)
    const EDGE_COLOR = new THREE.Color(0x7c4dff)
    const NODE_COUNT = 140
    const RADIUS = 3

    // Gera pontos em uma esfera
    const nodes = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)
      const r = RADIUS * (0.75 + Math.random() * 0.25)
      nodes.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      ))
    }

    // Buffer de nós (esferas pequenas como pontos)
    const nodeGeo = new THREE.BufferGeometry().setFromPoints(nodes)
    const nodeMat = new THREE.PointsMaterial({ size: 0.04, color: NODE_COLOR, transparent: true, opacity: 0.95 })
    const nodePoints = new THREE.Points(nodeGeo, nodeMat)
    scene.add(nodePoints)

    // Gera arestas para vizinhos próximos
    const edgePositions = []
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const d = nodes[i].distanceTo(nodes[j])
        if (d < 1.15) { // limiar de conexão
          edgePositions.push(nodes[i].x, nodes[i].y, nodes[i].z)
          edgePositions.push(nodes[j].x, nodes[j].y, nodes[j].z)
        }
      }
    }
    const edgeGeo = new THREE.BufferGeometry()
    edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3))
    const edgeMat = new THREE.LineBasicMaterial({ color: EDGE_COLOR, transparent: true, opacity: 0.35 })
    const edges = new THREE.LineSegments(edgeGeo, edgeMat)
    scene.add(edges)

    // "Pacotes" pulsando pelas arestas (efeito simples usando seno)
    const pulseUniform = { value: 0 }
    const pulseMat = new THREE.LineBasicMaterial({ color: 0x00ffaa, transparent: true, opacity: 0.0 })
    const pulse = new THREE.LineSegments(edgeGeo, pulseMat)
    scene.add(pulse)

    // Intro animation
    gsap.fromTo(camera.position, { z: 9 }, { z: 7, duration: 1.6, ease: 'power2.out' })
    gsap.fromTo(nodeMat, { opacity: 0 }, { opacity: 0.95, duration: 1.2, ease: 'power2.out' })
    gsap.fromTo(edgeMat, { opacity: 0 }, { opacity: 0.35, duration: 1.2, delay: 0.2, ease: 'power2.out' })

    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      // Rotação lenta do grafo
      nodePoints.rotation.y += 0.002
      edges.rotation.y += 0.002
      pulse.rotation.y += 0.002

      // Pulso nas arestas
      pulseUniform.value = (Math.sin(t * 2.0) + 1) / 2
      pulseMat.opacity = 0.15 + 0.15 * pulseUniform.value

      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
      if (rendererRef.current) {
        mount.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      nodeGeo.dispose()
      edgeGeo.dispose()
    }
  }, [])

  return (
    <section id="tecnologias" className="section" aria-label="Tecnologias">
      <h2>Stack para construir sistemas de verdade</h2>
      <p style={{ color: 'var(--muted)' }}>
        Framer Motion para microinterações, GSAP para flows animados e ScrollTrigger, Three.js para visualizações de dados e redes de serviços.
      </p>
      <div ref={mountRef} className="card canvas-wrap">
        <div className="canvas-overlay" />
      </div>
    </section>
  )
}
