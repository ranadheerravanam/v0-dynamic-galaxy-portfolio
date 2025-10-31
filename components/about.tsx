"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: string
  location?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2022",
    title: "Computer Science Journey Begins",
    description: "Started pursuing Computer Science at VIT Chennai with focus on app development and AI",
    icon: "🎓",
    location: "VIT Chennai",
  },
  {
    year: "2023",
    title: "First App Launch",
    description: "Developed and launched my first mobile application, gaining hands-on experience in React Native",
    icon: "🚀",
    location: "India",
  },
  {
    year: "2024",
    title: "AI Engineering Focus",
    description: "Specialized in AI and machine learning, completed multiple ML projects and certifications",
    icon: "🤖",
    location: "Online",
  },
  {
    year: "2025",
    title: "Full-Stack Developer",
    description: "Mastered full-stack development with Next.js, building production-grade applications",
    icon: "⚙️",
    location: "VIT Chennai",
  },
]

export default function About() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleEvents((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.5 },
    )

    const timelineItems = document.querySelectorAll("[data-timeline-item]")
    timelineItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-galaxy-light/70 text-lg max-w-2xl mx-auto">
            My journey through technology, innovation, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* About Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-galaxy-light/80 text-lg leading-relaxed">
                I'm a passionate computer science student at VIT Chennai, deeply invested in creating innovative
                applications and exploring the frontiers of artificial intelligence. My journey in tech has been driven
                by curiosity and a desire to solve real-world problems through elegant code.
              </p>

              <p className="text-galaxy-light/80 text-lg leading-relaxed">
                With expertise spanning full-stack development, machine learning, and AI engineering, I've built diverse
                projects from mobile apps to complex web platforms. I'm constantly learning new technologies and
                methodologies to stay at the cutting edge of the industry.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Technologies", value: "20+" },
                  { label: "Certifications", value: "8+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/10 to-transparent text-center"
                  >
                    <p className="text-2xl font-bold text-galaxy-cyan mb-1">{item.value}</p>
                    <p className="text-xs uppercase tracking-wider text-galaxy-light/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Highlight */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/20 to-galaxy-deep-indigo/20 backdrop-blur-sm sticky top-20">
              <h3 className="text-xl font-bold text-galaxy-light mb-6 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Expertise
              </h3>

              <div className="space-y-4">
                {[
                  { title: "App Development", icon: "📱" },
                  { title: "Full-Stack Web", icon: "🌐" },
                  { title: "Machine Learning", icon: "🧠" },
                  { title: "Cloud & DevOps", icon: "☁️" },
                  { title: "Data Science", icon: "📊" },
                  { title: "UI/UX Design", icon: "🎨" },
                ].map((skill) => (
                  <div key={skill.title} className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-galaxy-light/80">{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold font-orbitron text-center mb-12 tracking-wider">
            <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
              My Journey
            </span>
          </h3>

          <div ref={containerRef} className="space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} data-timeline-item data-index={index} className="relative">
                {/* Timeline Line */}
                {index < timelineEvents.length - 1 && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-galaxy-cyan to-transparent"
                    style={{
                      height: "120px",
                      top: "80px",
                      opacity: visibleEvents.includes(index) ? 1 : 0.3,
                      transition: "opacity 0.6s ease-out",
                    }}
                  />
                )}

                {/* Timeline Event */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 items-center">
                  {/* Left side for even indices, right side for odd */}
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div
                      className="p-6 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/20 to-galaxy-deep-indigo/20 backdrop-blur-sm hover:border-galaxy-cyan/50 transition-all duration-300"
                      style={{
                        opacity: visibleEvents.includes(index) ? 1 : 0,
                        transform: visibleEvents.includes(index)
                          ? "translateX(0)"
                          : index % 2 === 0
                            ? "translateX(-30px)"
                            : "translateX(30px)",
                        transition: "all 0.6s ease-out 0.1s",
                      }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-3xl">{event.icon}</span>
                        <div>
                          <p className="text-2xl font-bold text-galaxy-cyan">{event.year}</p>
                          <h4 className="text-xl font-bold text-galaxy-light">{event.title}</h4>
                          {event.location && <p className="text-sm text-galaxy-light/60 mt-1">{event.location}</p>}
                        </div>
                      </div>
                      <p className="text-galaxy-light/80">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="md:block hidden">
                    <div
                      className="w-8 h-8 rounded-full border-4 border-galaxy-cyan bg-galaxy-dark mx-auto relative z-10"
                      style={{
                        boxShadow: visibleEvents.includes(index)
                          ? "0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4)"
                          : "0 0 10px rgba(0, 217, 255, 0.3)",
                        transition: "all 0.6s ease-out",
                      }}
                    />
                  </div>

                  {/* Empty space for proper layout */}
                  <div className={index % 2 === 0 ? "md:order-3" : "md:order-1"} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-galaxy-light/70 mb-6">Want to work together?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-galaxy-cyan/50 transition-all duration-300"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
