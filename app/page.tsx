import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import StarsBackground from "@/components/stars-background"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <StarsBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
