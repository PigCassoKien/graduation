import { useEffect, useRef } from 'react'

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const c = canvas as HTMLCanvasElement
    const ctx = c.getContext('2d')!

    let width = (c.width = window.innerWidth)
    let height = (c.height = window.innerHeight)

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    const particleCount = Math.max(28, Math.floor((width * height) / 70000))

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1 + Math.random() * 2,
      })
    }

    let raf = 0

    function onResize() {
      width = c.width = window.innerWidth
      height = c.height = window.innerHeight
    }

    window.addEventListener('resize', onResize)

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // subtle gradient background layer (composited)
      const g = ctx.createLinearGradient(0, 0, width, height)
      g.addColorStop(0, 'rgba(10,24,38,0.0)')
      g.addColorStop(1, 'rgba(6,30,52,0.08)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      // draw lines between close particles
      ctx.strokeStyle = 'rgba(79,176,255,0.12)'
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 140) {
            ctx.globalAlpha = 1 - d / 140
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // draw particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        ctx.globalAlpha = 0.9
        ctx.fillStyle = 'rgba(127,206,255,0.14)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="tech-bg-overlay" />
    </div>
  )
}

export default TechBackground
