"use client"

import { useState, useEffect } from "react"

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-galaxy-darker/80 backdrop-blur-lg border-b border-galaxy-cyan/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-orbitron text-2xl font-bold bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
          RR
        </div>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-galaxy-light hover:text-galaxy-cyan transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker font-semibold hover:shadow-lg hover:shadow-galaxy-cyan/50 transition-all duration-300 hidden md:block">
          Contact
        </button>
      </div>
    </nav>
  )
}

export default NavigationBar
