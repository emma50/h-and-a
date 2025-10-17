import { Box, Image } from "@chakra-ui/react"

// @ts-nocheck
export default function Logo(props: any) {
  return (
    <Box as="a" href="/" {...props}>
      <Image src="/images/product.png" alt="Logo" height="2.438rem" width="6.344rem"/>
    </Box>
  )
}