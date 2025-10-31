"use client"

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-galaxy-cyan to-galaxy-violet-glow bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <p className="text-galaxy-light/90 leading-relaxed text-lg">
              I'm a Computer Science Engineering student at VIT Chennai, passionate about building innovative
              applications and exploring the frontiers of AI engineering.
            </p>
            <p className="text-galaxy-light/90 leading-relaxed text-lg">
              With expertise in multiple programming languages and a keen interest in app development, I'm dedicated to
              creating solutions that matter.
            </p>

            <div className="pt-6">
              <h3 className="text-galaxy-cyan font-orbitron font-semibold mb-4">Key Info</h3>
              <ul className="space-y-2 text-galaxy-light/80">
                <li>
                  <span className="text-galaxy-cyan">🎓</span> B.Tech CSE - VIT Chennai
                </li>
                <li>
                  <span className="text-galaxy-cyan">📍</span> Amalapuram, Andhra Pradesh
                </li>
                <li>
                  <span className="text-galaxy-cyan">💡</span> Focus: App Dev & AI Engineering
                </li>
              </ul>
            </div>
          </div>

          {/* Right - animated card */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-galaxy-indigo to-galaxy-deep-indigo border border-galaxy-cyan/20 glow-pulse">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-galaxy-cyan/10 to-galaxy-violet-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-orbitron font-bold text-galaxy-cyan mb-4">Journey</h3>
                <p className="text-galaxy-light/80 leading-relaxed">
                  From exploring web technologies to diving deep into AI and app development, every project has been a
                  stepping stone toward building impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
