"use client"

import { useEffect, useState } from "react"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Ranadheer Ravanam"
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [displayText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Radial gradient orb */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #00d9ff, #c000ff)",
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "float 15s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main heading with typewriter effect */}
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
          {displayText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-galaxy-cyan mb-8 animate-fade-in">App Developer | AI Engineer</p>

        {/* Description */}
        <p className="text-galaxy-light/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring infinite possibilities in technology. Building innovative applications and AI solutions that push
          the boundaries of what's possible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker font-semibold rounded-full hover:shadow-lg hover:shadow-galaxy-cyan/50 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-galaxy-cyan text-galaxy-cyan font-semibold rounded-full hover:bg-galaxy-cyan/10 transition-all duration-300">
            Get in Touch
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 animate-bounce text-galaxy-cyan">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
