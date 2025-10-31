"use client"

import type React from "react"

import { useState } from "react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3 rounded-lg bg-galaxy-indigo/20 border-2 transition-all duration-300 focus:outline-none ${
      focusedField === fieldName ? "border-galaxy-cyan bg-galaxy-indigo/40" : "border-galaxy-indigo/50"
    } ${errors[fieldName as keyof FormErrors] ? "border-red-500/50" : ""} text-galaxy-light placeholder:text-galaxy-light/40`

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-galaxy-light/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          {[
            {
              icon: "✉️",
              title: "Email",
              value: "ranadheer@example.com",
              link: "mailto:ranadheer@example.com",
            },
            {
              icon: "📍",
              title: "Location",
              value: "Chennai, India",
              link: "#",
            },
            {
              icon: "💼",
              title: "Follow Me",
              value: "Social Media",
              link: "#",
            },
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="group p-6 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/10 to-galaxy-deep-indigo/10 hover:border-galaxy-cyan/50 transition-all duration-300 text-center hover:scale-105"
            >
              <div className="text-4xl mb-3">{contact.icon}</div>
              <h3 className="text-lg font-bold text-galaxy-light mb-2">{contact.title}</h3>
              <p className="text-galaxy-light/70 group-hover:text-galaxy-cyan transition-colors">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/20 to-galaxy-deep-indigo/20 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-galaxy-light mb-2 uppercase tracking-wider"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("name")}
                placeholder="John Doe"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-galaxy-light mb-2 uppercase tracking-wider"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("email")}
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-galaxy-light mb-2 uppercase tracking-wider"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("subject")}
                placeholder="Project Collaboration"
                disabled={isSubmitting}
              />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-galaxy-light mb-2 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses("message")} resize-none`}
                placeholder="Tell me about your project..."
                rows={5}
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 rounded-lg bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-galaxy-cyan/50"
              >
                <div className="absolute inset-0 bg-galaxy-cyan-glow opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative inline-flex items-center gap-2 justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.3"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 text-sm">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-galaxy-light/60 mb-6">Or connect with me on social media:</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: "💼", label: "LinkedIn", url: "#" },
              { icon: "🐙", label: "GitHub", url: "#" },
              { icon: "𝕏", label: "Twitter", url: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="w-12 h-12 rounded-full border-2 border-galaxy-indigo/50 hover:border-galaxy-cyan text-galaxy-light hover:text-galaxy-cyan flex items-center justify-center transition-all duration-300 text-xl hover:scale-110 hover:bg-galaxy-indigo/20"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
