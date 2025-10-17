import { Image } from "@chakra-ui/react"

export default function Img({src, alt}: {src: string, alt: string}) {
  return (
    <Image 
      src={src} 
      alt={alt}
      height={{
        base: "200px",
        md: "auto"
      }}
      minHeight="400px"
      width={{
        base: "100%",
        md: "40%"
      }}  
    />
  )
}
