import { Box } from "@chakra-ui/react"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import MissonAndVision from "../components/misson-and-vision"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import Faq from "../components/faq"

export default function LandingPage() {
  return (
    <Box>
      <Header />
      {/* This is the landing page */}
      <Hero />
      <MissonAndVision />
      <Services />
      <Testimonials />
      <Faq />
      <Footer />
    </Box>
  )
}
