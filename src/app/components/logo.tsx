import { Box, Image } from "@chakra-ui/react"

//@ts-ignore
export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src="/images/product.png" alt="Logo" height="2.438rem" width="6.344rem"/>
    </Box>
  )
}