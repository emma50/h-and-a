import { Box } from "@chakra-ui/react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import MissonAndVision from "../../components/misson-and-vision"
import Services from "../../components/services"
import Testimonials from "../../components/testimonials"
import Faq from "../../components/faq"
import PopupDialog from "@/app/components/dialog"

export default function LandingPage() {
  return (
    <Box bg={{ base: "#F0F9FF", _dark: "#000D14" }} maxWidth="1440px" margin="0 auto" px="2rem" textAlign="center">
      <PopupDialog />
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
