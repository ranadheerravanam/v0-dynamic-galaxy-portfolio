"use client"

import { useState } from "react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  link: string
  image: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Email Assistant",
    description:
      "Intelligent email composition and response suggestion system powered by advanced language models. Streamlines communication with AI-driven insights.",
    tags: ["AI", "Python", "OpenAI"],
    category: "AI & ML",
    link: "#",
    image: "/ai-email-assistant-dashboard-with-neural-network-v.jpg",
  },
  {
    id: 2,
    title: "Task Management Platform",
    description:
      "Full-stack web application for collaborative task management with real-time updates, drag-and-drop interface, and team collaboration features.",
    tags: ["React", "Next.js", "TypeScript", "Database"],
    category: "Web App",
    link: "#",
    image: "/modern-task-management-app-interface-with-kanban-b.jpg",
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description:
      "Interactive data visualization platform with real-time metrics, charts, and comprehensive analytics for business intelligence and decision-making.",
    tags: ["React", "D3.js", "Node.js", "Analytics"],
    category: "Analytics",
    link: "#",
    image: "/data-analytics-dashboard-with-colorful-charts-and-.jpg",
  },
  {
    id: 4,
    title: "Machine Learning Model",
    description:
      "Advanced ML model for predictive analysis with 92% accuracy. Implemented using TensorFlow with comprehensive model optimization and deployment.",
    tags: ["TensorFlow", "Python", "ML", "Data Science"],
    category: "AI & ML",
    link: "#",
    image: "/machine-learning-model-visualization-with-neural-n.jpg",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description:
      "Complete e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "Web App",
    link: "#",
    image: "/e-commerce-website-with-product-showcase-and-shopp.jpg",
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description:
      "Feature-rich chat application with real-time messaging, user presence, typing indicators, and end-to-end encryption for secure communication.",
    tags: ["WebSocket", "React", "Node.js", "MongoDB"],
    category: "Web App",
    link: "#",
    image: "/real-time-chat-application-interface-with-messagin.jpg",
  },
]

const categories = ["All", ...new Set(projectsData.map((p) => p.category))]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-galaxy-light/70 text-lg max-w-2xl mx-auto">
            Explore a showcase of my innovative projects spanning AI, web development, and data science
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-xl overflow-hidden border border-galaxy-indigo/30 hover:border-galaxy-cyan/50 transition-all duration-300 cursor-pointer"
              style={{
                boxShadow:
                  hoveredId === project.id
                    ? "0 0 40px rgba(0, 217, 255, 0.25), 0 0 80px rgba(192, 0, 255, 0.1)"
                    : "0 0 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-galaxy-indigo to-galaxy-deep-indigo">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-galaxy-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-6 bg-gradient-to-br from-galaxy-indigo/20 to-galaxy-deep-indigo/20 backdrop-blur-sm relative z-10">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-galaxy-cyan/10 text-galaxy-cyan border border-galaxy-cyan/30 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-galaxy-light mb-2 group-hover:text-galaxy-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-galaxy-light/70 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-galaxy-violet-glow/10 text-galaxy-violet-glow border border-galaxy-violet-glow/30 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-galaxy-cyan font-bold uppercase tracking-wider text-sm hover:text-galaxy-cyan-glow transition-colors group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.1), transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="group relative px-10 py-4 rounded-full border-2 border-galaxy-cyan text-galaxy-cyan font-bold uppercase tracking-wider hover:bg-galaxy-cyan hover:text-galaxy-darker transition-all duration-300"
          >
            <span className="relative inline-flex items-center gap-2">
              View All Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
