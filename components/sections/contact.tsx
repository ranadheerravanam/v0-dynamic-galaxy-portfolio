"use client"

import type React from "react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>

        <p className="text-galaxy-light/80 text-center mb-12">
          Let's explore possibilities together. Reach out for collaborations or just a friendly hello.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <h3 className="text-galaxy-cyan font-orbitron font-semibold mb-2">Email</h3>
              <p className="text-galaxy-light/80 group-hover:text-galaxy-cyan transition-colors duration-300">
                ranadheerravanam@gmail.com
              </p>
            </div>
            <div className="group cursor-pointer">
              <h3 className="text-galaxy-cyan font-orbitron font-semibold mb-2">Phone</h3>
              <p className="text-galaxy-light/80 group-hover:text-galaxy-cyan transition-colors duration-300">
                +91 709527977
              </p>
            </div>
            <div>
              <h3 className="text-galaxy-cyan font-orbitron font-semibold mb-4">Social Links</h3>
              <div className="flex gap-4">
                {[
                  { icon: "𝕏", link: "#" },
                  { icon: "📱", link: "#" },
                  { icon: "💼", link: "#" },
                  { icon: "📘", link: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-12 h-12 rounded-full border border-galaxy-cyan/30 flex items-center justify-center hover:bg-galaxy-cyan/20 hover:border-galaxy-cyan transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-lg bg-galaxy-indigo border border-galaxy-cyan/30 text-galaxy-light placeholder-galaxy-light/40 focus:outline-none focus:border-galaxy-cyan transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-lg bg-galaxy-indigo border border-galaxy-cyan/30 text-galaxy-light placeholder-galaxy-light/40 focus:outline-none focus:border-galaxy-cyan transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-3 rounded-lg bg-galaxy-indigo border border-galaxy-cyan/30 text-galaxy-light placeholder-galaxy-light/40 focus:outline-none focus:border-galaxy-cyan transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker font-orbitron font-semibold rounded-lg hover:shadow-lg hover:shadow-galaxy-cyan/50 transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitted ? "✓ Message Sent" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-galaxy-cyan/20 pt-8">
          <p className="text-galaxy-light/60 text-sm">
            © 2025 Ranadheer Ravanam. Crafted with passion and powered by innovation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
