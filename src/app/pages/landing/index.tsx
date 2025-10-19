import { Box } from "@chakra-ui/react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "../../components/hero"
import MissonAndVision from "../../components/misson-and-vision"
import Services from "../../components/services"
import Testimonials from "../../components/testimonials"
import Faq from "../../components/faq"
import AutoDialog from "@/app/components/dialog"
import { VStack, Text, Button } from "@chakra-ui/react"

export default function LandingPage() {
  return (
    <Box bg={{ base: "#F0F9FF", _dark: "#000D14" }} maxWidth="1440px" margin="0 auto" px="2rem" textAlign="center">
      <Header />
      {/* This is the landing page */}
      <Hero />
      <MissonAndVision />
      <Services />
      <Testimonials />
      <Faq />
      <Footer />
      {/* Auto Popup Dialog */}
      <AutoDialog title="Don't Miss Out!" delay={0}>
        <VStack>
          <Text color={{base: "#000000", _dark: "#ffffff"}}>
            Free Tech Masterclass
            <br />
            <b>This Saturday, October 25th at 11 AM</b>
            <br />
            Limited spots available.
          </Text>

          <Button
            bg={{ base: "#036096", _dark: "#69C6FC" }}
            borderRadius="full"
            onClick={() => window.open("", "_blank")}
            fontWeight="bold"
          >
            Register Now &amp; Secure My Place
          </Button>
        </VStack>
      </AutoDialog>
    </Box>
  )
}
