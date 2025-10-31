"use client"

import { useState } from "react"
import { Tilt } from "react-tilt"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "4-Way Motor Control System",
      description: "DSD Project - Advanced motor control using IC integrated circuits with real-time feedback",
      tech: ["Digital Logic", "Hardware Design", "IC Circuits"],
      image: "/motor-control-circuit.jpg",
    },
    {
      title: "App Development Portfolio",
      description: "Building innovative mobile and web applications with focus on user experience",
      tech: ["React", "React Native", "Firebase"],
      image: "/app-development.png",
    },
    {
      title: "AI Engineering Projects",
      description: "Exploring machine learning models and AI applications for real-world problems",
      tech: ["Python", "TensorFlow", "Machine Learning"],
      image: "/artificial-intelligence-network.png",
    },
  ]

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const defaultOptions = {
    max: 25,
    scale: 1.05,
    speed: 450,
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt key={index} options={defaultOptions}>
              <div
                className="h-full p-6 rounded-2xl bg-gradient-to-br from-galaxy-indigo to-galaxy-deep-indigo border border-galaxy-cyan/20 hover:border-galaxy-cyan/50 cursor-pointer transition-all duration-300 group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image placeholder */}
                <div className="mb-6 h-48 rounded-lg overflow-hidden bg-galaxy-darker/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-galaxy-cyan/20 to-galaxy-violet-glow/20" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <h3 className="text-xl font-orbitron font-bold text-galaxy-cyan mb-3">{project.title}</h3>
                <p className="text-galaxy-light/80 mb-4 text-sm">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-galaxy-cyan/20 text-galaxy-cyan border border-galaxy-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-galaxy-cyan font-semibold">Learn More →</span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-galaxy-darker border border-galaxy-cyan/20 rounded-2xl max-w-2xl w-full p-8 max-h-96 overflow-y-auto">
            <h3 className="text-3xl font-orbitron font-bold text-galaxy-cyan mb-4">{selectedProject.title}</h3>
            <p className="text-galaxy-light/90 mb-6">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-galaxy-cyan/20 text-galaxy-cyan rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="px-6 py-2 bg-galaxy-cyan text-galaxy-darker font-semibold rounded-full hover:shadow-lg hover:shadow-galaxy-cyan/50 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
