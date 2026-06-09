import { Navbar } from '@/components/nav/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { GitHub } from '@/components/sections/GitHub'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Experience />
      <GitHub />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
