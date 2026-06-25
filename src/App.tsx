import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Metrics from './sections/Metrics'
import Services from './sections/Services'
import Process from './sections/Process'
import Stack from './sections/Stack'
import Pricing from './sections/Pricing'
import CtaFinal from './sections/CtaFinal'
import Footer from './sections/Footer'
import { useReveal } from './hooks/useReveal'

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
        <Pricing />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
