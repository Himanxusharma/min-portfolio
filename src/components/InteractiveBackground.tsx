'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    const createParticles = () => {
      const numParticles = 50
      return Array.from({ length: numParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 2 + Math.random() * 4,
        speedX: -2 + Math.random() * 4,
        speedY: -2 + Math.random() * 4,
        color: `hsl(${Math.random() * 360}, 40%, 30%)`
      }))
    }

    const particles = createParticles()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background gradient
      const bgGradient = ctx.createRadialGradient(
        springX.get(), springY.get(), 0,
        springX.get(), springY.get(), 500
      )
      bgGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
      bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connection lines to nearby particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Draw mouse trail effect
      const trailGradient = ctx.createRadialGradient(
        springX.get(), springY.get(), 0,
        springX.get(), springY.get(), 200
      )
      trailGradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)')
      trailGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)')
      trailGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = trailGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw ripple effect
      const rippleGradient = ctx.createRadialGradient(
        springX.get(), springY.get(), 0,
        springX.get(), springY.get(), 100
      )
      rippleGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
      rippleGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = rippleGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [mouseX, mouseY, springX, springY])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  )
} 