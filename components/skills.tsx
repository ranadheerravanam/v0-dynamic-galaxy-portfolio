"use client"

import { useState } from "react"

interface Skill {
  name: string
  category: string
  level: number
  icon: string
}

const skillsData: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", level: 90, icon: "🐍" },
  { name: "JavaScript", category: "Languages", level: 85, icon: "✨" },
  { name: "TypeScript", category: "Languages", level: 80, icon: "📘" },
  { name: "Java", category: "Languages", level: 75, icon: "☕" },
  { name: "C++", category: "Languages", level: 70, icon: "⚙️" },

  // Frontend
  { name: "React", category: "Frontend", level: 90, icon: "⚛️" },
  { name: "Next.js", category: "Frontend", level: 88, icon: "▲" },
  { name: "Tailwind CSS", category: "Frontend", level: 92, icon: "🎨" },
  { name: "HTML/CSS", category: "Frontend", level: 95, icon: "🌐" },

  // Backend & Database
  { name: "Node.js", category: "Backend", level: 85, icon: "🟢" },
  { name: "PostgreSQL", category: "Backend", level: 80, icon: "🐘" },
  { name: "MongoDB", category: "Backend", level: 78, icon: "🍃" },
  { name: "REST APIs", category: "Backend", level: 88, icon: "🔌" },

  // AI & ML
  { name: "Machine Learning", category: "AI & ML", level: 82, icon: "🤖" },
  { name: "TensorFlow", category: "AI & ML", level: 75, icon: "🧠" },
  { name: "OpenAI APIs", category: "AI & ML", level: 80, icon: "🤯" },
  { name: "Data Analysis", category: "AI & ML", level: 85, icon: "📊" },

  // Tools & DevOps
  { name: "Git", category: "Tools", level: 88, icon: "🔧" },
  { name: "Docker", category: "Tools", level: 75, icon: "🐳" },
  { name: "AWS", category: "Tools", level: 72, icon: "☁️" },
  { name: "Vercel", category: "Tools", level: 85, icon: "▲" },
]

const categories = ["All", ...new Set(skillsData.map((skill) => skill.category))]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills =
    activeCategory === "All" ? skillsData : skillsData.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
              Skills & Tech Stack
            </span>
          </h2>
          <p className="text-galaxy-light/70 text-lg max-w-2xl mx-auto">
            Expertise across multiple domains and technologies for building cutting-edge applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 text-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-galaxy-cyan to-galaxy-blue text-galaxy-darker shadow-lg shadow-galaxy-cyan/50"
                  : "border-2 border-galaxy-indigo text-galaxy-light hover:border-galaxy-cyan hover:text-galaxy-cyan"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative p-6 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/10 to-galaxy-deep-indigo/10 hover:border-galaxy-cyan/50 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                boxShadow:
                  hoveredSkill === skill.name
                    ? "0 0 30px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05)"
                    : "none",
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-galaxy-cyan/5 to-galaxy-violet-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-galaxy-light mb-1">{skill.name}</h3>
                    <p className="text-sm text-galaxy-light/50 uppercase tracking-wide">{skill.category}</p>
                  </div>
                  <span className="text-3xl">{skill.icon}</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-galaxy-cyan uppercase">Proficiency</span>
                    <span className="text-sm font-bold text-galaxy-violet-glow">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-galaxy-indigo/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-galaxy-cyan to-galaxy-blue rounded-full transition-all duration-500"
                      style={{
                        width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Skill Badge */}
                <div className="inline-block mt-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-galaxy-cyan/10 text-galaxy-cyan border border-galaxy-cyan/30">
                    {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                  </span>
                </div>
              </div>

              {/* Animated border effect on hover */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background:
                    hoveredSkill === skill.name
                      ? "linear-gradient(135deg, rgba(0, 217, 255, 0.3), rgba(192, 0, 255, 0.3))"
                      : "none",
                  padding: "1px",
                  opacity: 0.3,
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Languages", value: "5+" },
            { label: "Technologies", value: "20+" },
            { label: "Expertise Areas", value: "5" },
            { label: "Years Experience", value: "3+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg border border-galaxy-indigo/30 bg-gradient-to-br from-galaxy-indigo/10 to-transparent text-center hover:border-galaxy-violet-glow/50 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-galaxy-cyan mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider text-galaxy-light/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
