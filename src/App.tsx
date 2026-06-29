import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"
import { useReveal } from "./hooks/useReveal"
import CtaFinal from "./sections/CtaFinal"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Metrics from "./sections/Metrics"
import Pricing from "./sections/Pricing"
import Process from "./sections/Process"
import Projects from "./sections/Projects"
import Services from "./sections/Services"
import Stack from "./sections/Stack"

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Process />
        <Stack />
        <Projects />
        <Pricing />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
