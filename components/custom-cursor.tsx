"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  life: number
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Add new particle
      const newParticle: Particle = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
        life: 1,
      }
      setParticles((prev) => {
        const updated = [...prev, newParticle]
        return updated.slice(-20) // Keep only last 20 particles
      })
      setNextId((prev) => prev + 1)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [nextId])

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.map((p) => ({ ...p, life: p.life - 0.05 })).filter((p) => p.life > 0))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }
      `}</style>

      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-full h-full rounded-full bg-galaxy-cyan shadow-lg"
          style={{
            boxShadow: `0 0 20px rgba(0, 217, 255, 0.8), inset 0 0 10px rgba(0, 217, 255, 0.4)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: "rgba(0, 217, 255, 0.2)",
            animationDuration: "1.5s",
          }}
        />
      </div>

      {/* Trailing particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 pointer-events-none z-[9998] rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: "translate(-50%, -50%)",
            background: `rgba(0, 217, 255, ${particle.life * 0.6})`,
            boxShadow: `0 0 ${8 * particle.life}px rgba(0, 217, 255, ${particle.life * 0.8})`,
            opacity: particle.life,
          }}
        />
      ))}
    </>
  )
}
