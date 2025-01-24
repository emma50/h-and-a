"use client"

import { 
  ChakraProvider, 
  // defaultSystem,
  defaultConfig, 
  createSystem,
} from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
// import theme from "@/theme"

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        // heading: { value: "Bricolage Grotesque Variable" },
        // body: { value: "Bricolage Grotesque Variable" },
        // Poppins
        heading: { value: "Poppins" },
        body: { value: "Poppins" },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
