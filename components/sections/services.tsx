"use client"

interface Service {
  icon: string
  title: string
  description: string
}

const Services = () => {
  const services: Service[] = [
    {
      icon: "⚡",
      title: "App Development",
      description: "Building scalable and user-centric applications for web and mobile platforms",
    },
    {
      icon: "🧠",
      title: "AI Engineering",
      description: "Developing intelligent systems and machine learning solutions for complex problems",
    },
    {
      icon: "🔧",
      title: "Technical Consulting",
      description: "Providing expert guidance on technology architecture and implementation strategies",
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-galaxy-indigo to-galaxy-deep-indigo border border-galaxy-cyan/20 hover:border-galaxy-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-galaxy-cyan/20 hover:-translate-y-2"
              style={{
                animation: `float 4s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-orbitron font-bold text-galaxy-cyan mb-4">{service.title}</h3>
              <p className="text-galaxy-light/80 leading-relaxed">{service.description}</p>

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(0, 217, 255, 0.1), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
