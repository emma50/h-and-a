import { defineConfig, createSystem } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      // margin: 0,
      // padding: 0,
      fontFamily: "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif",
      // maxWidth: "1440px",
      // margin: "0 auto",
      // padding: "2rem",
      // textAlign: "center",
    },
  },
})

export default createSystem(config)