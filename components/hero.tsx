"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    const words = ["Hi, I'm Ranadheer Ravanam", "App Developer", "AI Engineer", "Tech Explorer"]
    let wordIndex = 0
    let charIndex = 0

    const typeWord = () => {
      if (wordIndex < words.length) {
        const currentWord = words[wordIndex]

        if (charIndex < currentWord.length) {
          text.textContent = currentWord.slice(0, charIndex + 1)
          charIndex++
          setTimeout(typeWord, 50)
        } else {
          wordIndex++
          charIndex = 0
          setTimeout(() => {
            text.textContent = ""
            typeWord()
          }, 2000)
        }
      }
    }

    typeWord()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = window.innerHeight
      setScrollProgress(Math.min(scrolled / maxScroll, 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-galaxy-cyan/20 to-transparent blur-3xl"
          style={{
            transform: `translateY(${scrollProgress * 50}px)`,
          }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-galaxy-violet-glow/20 to-transparent blur-3xl"
          style={{
            transform: `translateY(${-scrollProgress * 50}px)`,
          }}
        />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-8 inline-block">
          <div
            className="w-24 h-24 mx-auto rounded-full border-2 border-galaxy-cyan/50 p-0.5 relative"
            style={{
              animation: "spin 8s linear infinite",
              boxShadow: "0 0 30px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.1)",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-galaxy-indigo to-galaxy-violet" />
          </div>
        </div>

        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold mb-6 h-auto font-orbitron tracking-wider min-h-20 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #00d9ff 0%, #c000ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: `drop-shadow(0 0 20px rgba(0, 217, 255, 0.3))`,
          }}
        ></h1>

        <p className="text-lg md:text-xl text-galaxy-light/80 mb-12 max-w-2xl mx-auto leading-relaxed font-poppins">
          Computer Science student at <span className="text-galaxy-cyan">VIT Chennai</span>, passionate about building
          innovative apps and exploring AI engineering. Turning ideas into{" "}
          <span className="text-galaxy-violet-glow">interactive experiences</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-galaxy-cyan/50"
          >
            <div className="absolute inset-0 bg-galaxy-cyan-glow opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative inline-flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full border-2 border-galaxy-violet-glow text-galaxy-violet-glow font-bold uppercase tracking-wider hover:bg-galaxy-violet-glow/10 transition-all duration-300 hover:shadow-lg hover:shadow-galaxy-violet-glow/50"
          >
            <span className="relative inline-flex items-center gap-2">
              Get in Touch
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-galaxy-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
