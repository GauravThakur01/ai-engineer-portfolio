import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Innovation from '@/components/sections/Innovation'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ui/ParticleBackground'
import ConsoleLogger from '@/components/ConsoleLogger'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Innovation />
      <Contact />
      <Footer />
      <ConsoleLogger />
    </main>
  )
}
