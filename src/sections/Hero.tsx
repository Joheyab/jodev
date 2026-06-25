import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const CODE_SNIPPETS = [
  '<div>', 'const', 'async', 'await', '[]', '{}', '=>', '.map()',
  'fetch()', '.then()', 'SELECT', 'INSERT', 'supabase', 'useEffect',
  'useState', 'props', 'return', 'export', 'interface', 'type',
  'React', '.tsx', 'npm run', 'git push',
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  snippet: string
  alpha: number
  size: number
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    const particles: Particle[] = []
    const mouse = { x: 0, y: 0 }
    let rafId: number

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 600; i++) {
      particles.push({
        x:       Math.random() * window.innerWidth,
        y:       Math.random() * window.innerHeight,
        vx:      (Math.random() - 0.5) * 0.4,
        vy:      (Math.random() - 0.5) * 0.28,
        snippet: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        alpha:   Math.random() * 0.22 + 0.05,
        size:    Math.floor(Math.random() * 4) + 10,
      })
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    document.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          p.vx += (dx / dist) * 0.07
          p.vy += (dy / dist) * 0.07
        }

        p.x  += p.vx
        p.y  += p.vy
        p.vx *= 0.98
        p.vy *= 0.98

        if (p.x < -80)      p.x = W + 80
        if (p.x > W + 80)   p.x = -80
        if (p.y < -30)      p.y = H + 30
        if (p.y > H + 30)   p.y = -30

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.font        = `${p.size}px 'Space Grotesk', monospace`
        ctx.fillStyle   = '#d32f2f'
        ctx.fillText(p.snippet, p.x, p.y)
        ctx.restore()
      }

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          DISPONIBLE PARA PROYECTOS
        </div>

        <h1 className={styles.title}>
          Tu presencia digital,
          <br />
          <span className={styles.accent}>construida para convertir.</span>
        </h1>

        <p className={styles.subtitle}>
          Landing pages de alto impacto y dashboards inteligentes.
          Desde una página hasta una plataforma completa con Supabase.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.btnPrimary}>Ver planes →</a>
          <a href="#services" className={styles.btnSecondary}>Explorar servicios</a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.arrow} />
      </div>
    </section>
  )
}
