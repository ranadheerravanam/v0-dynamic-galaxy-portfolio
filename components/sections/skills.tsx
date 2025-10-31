"use client"

import type React from "react"

interface Skill {
  name: string
  description: string
}

const SkillsPlanet: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const angle = (index * 360) / 6
  const colors = [
    "from-blue-400 to-cyan-400",
    "from-purple-400 to-pink-400",
    "from-cyan-400 to-blue-400",
    "from-indigo-400 to-purple-400",
    "from-pink-400 to-red-400",
    "from-green-400 to-cyan-400",
  ]

  return (
    <div
      className="absolute w-20 h-20 flex items-center justify-center"
      style={{
        transform: `rotate(${angle}deg) translateX(100px)`,
        animation: "orbit 20s linear infinite",
        animationDelay: `${-index * 3}s`,
      }}
    >
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors[index]} shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center group`}
        style={{
          boxShadow: `0 0 20px rgba(0, 217, 255, 0.5)`,
        }}
      >
        <div className="text-center text-xs font-semibold text-white text-opacity-0 group-hover:text-opacity-100 transition-all duration-300">
          <p>{skill.name}</p>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "Java", description: "Object-oriented programming" },
    { name: "Python", description: "AI & Machine Learning" },
    { name: "React", description: "Frontend Development" },
    { name: "C++", description: "Systems Programming" },
    { name: "AI/ML", description: "Neural Networks" },
    { name: "MATLAB", description: "Data Analysis" },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        {/* Orbital system */}
        <div className="flex justify-center items-center">
          <div className="relative w-96 h-96">
            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-galaxy-cyan to-galaxy-blue flex items-center justify-center glow-pulse"
                style={{
                  boxShadow: `0 0 40px rgba(0, 217, 255, 0.8), inset 0 0 20px rgba(0, 217, 255, 0.4)`,
                }}
              >
                <span className="text-xs font-orbitron font-bold text-galaxy-darker">TECH</span>
              </div>
            </div>

            {/* Orbital paths */}
            {[1, 2].map((ring) => (
              <div
                key={ring}
                className="absolute inset-0 rounded-full border border-galaxy-cyan/20"
                style={{
                  transform: `scale(${0.5 + ring * 0.25})`,
                }}
              />
            ))}

            {/* Skills planets */}
            {skills.map((skill, index) => (
              <SkillsPlanet key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Languages", items: ["Java", "C", "C++", "Python", "MATLAB"] },
            { title: "Web Dev", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
            { title: "AI/ML", items: ["Machine Learning", "Neural Networks", "Data Analysis", "TensorFlow"] },
          ].map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-galaxy-indigo to-galaxy-deep-indigo border border-galaxy-cyan/20 hover:border-galaxy-cyan/50 transition-all duration-300"
            >
              <h3 className="text-xl font-orbitron font-bold text-galaxy-cyan mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-galaxy-light/80 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-galaxy-cyan mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
