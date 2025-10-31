"use client"

import { useEffect, useRef } from "react"

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Star {
      x: number
      y: number
      z: number
      radius: number
      opacity: number
      twinkleDuration: number
      time: number
      color: string
    }

    interface MilkyWay {
      x: number
      y: number
      width: number
      height: number
      rotation: number
      color: string
      opacity: number
    }

    const stars: Star[] = []
    const milkyWays: MilkyWay[] = []

    // Create realistic multi-colored milky ways with better positioning
    const milkyWayConfigs = [
      { color: "rgba(150, 80, 255, 0.25)", x: 0.3, y: 0.2 }, // Violet
      { color: "rgba(0, 200, 255, 0.2)", x: 0.7, y: 0.5 }, // Cyan
      { color: "rgba(100, 150, 255, 0.18)", x: 0.5, y: 0.8 }, // Blue
      { color: "rgba(200, 100, 255, 0.22)", x: 0.2, y: 0.6 }, // Purple
      { color: "rgba(0, 180, 200, 0.15)", x: 0.8, y: 0.3 }, // Teal
    ]

    milkyWayConfigs.forEach((config) => {
      milkyWays.push({
        x: canvas.width * config.x,
        y: canvas.height * config.y,
        width: canvas.width * (1.5 + Math.random() * 0.8),
        height: Math.random() * 250 + 150,
        rotation: Math.random() * Math.PI * 2,
        color: config.color,
        opacity: 0.35 + Math.random() * 0.25,
      })
    })

    for (let i = 0; i < 500; i++) {
      const z = Math.random() * 100
      const starSize = (z / 100) * 2.5

      const colorOptions = [
        "rgba(224, 231, 255, ", // White
        "rgba(0, 217, 255, ", // Cyan
        "rgba(192, 100, 255, ", // Violet
        "rgba(100, 200, 255, ", // Light blue
        "rgba(255, 180, 120, ", // Warm white
        "rgba(150, 200, 255, ", // Sky blue
        "rgba(200, 150, 255, ", // Light purple
      ]

      const selectedColor = colorOptions[Math.floor(Math.random() * colorOptions.length)]

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: z,
        radius: starSize * (Math.random() * 1.8 + 0.3),
        opacity: Math.random() * 0.7 + 0.3,
        twinkleDuration: Math.random() * 5000 + 3000,
        time: Math.random() * 5000,
        color: selectedColor,
      })
    }

    let animationId: number

    const animate = () => {
      // Deep black background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      milkyWays.forEach((mw) => {
        ctx.save()
        ctx.globalAlpha = mw.opacity

        // Create elongated elliptical gradient for realistic milky way
        const gradient = ctx.createRadialGradient(mw.x, mw.y, 0, mw.x, mw.y, mw.width / 2)
        gradient.addColorStop(0, mw.color)
        gradient.addColorStop(0.4, mw.color.replace(/[\d.]+\)/, "0.08)"))
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.translate(mw.x, mw.y)
        ctx.rotate(mw.rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, mw.width / 2, mw.height / 2, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      const time = Date.now()

      stars.sort((a, b) => a.z - b.z)

      // Draw realistic stars with 3D depth
      stars.forEach((star) => {
        const progress = ((time + star.time) % star.twinkleDuration) / star.twinkleDuration
        const twinkle = Math.sin(progress * Math.PI * 2) * 0.4 + 0.6
        const opacity = star.opacity * twinkle

        const depthFactor = 0.2 + (star.z / 100) * 0.8
        ctx.fillStyle = `${star.color}${opacity * depthFactor})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        if (star.z > 60 && opacity > 0.6) {
          const glowColor = star.color.includes("224, 231") ? "rgba(200, 210, 255, " : `${star.color}`
          ctx.strokeStyle = `${glowColor}${opacity * 0.4})`
          ctx.lineWidth = star.radius * 0.4
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius + 1.5, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10" />
}
