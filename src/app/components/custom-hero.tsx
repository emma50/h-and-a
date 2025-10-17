import { Flex, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"

export default function CustomHero({
  onClick, 
  title, 
  desc, 
  btnText
}: {
  onClick: () => void
  title: string
  desc: string
  btnText: string
}) {
  return (
    <Flex 
      maxWidth="1440px" 
      direction="column"
      alignItems="center" 
      justifyContent="center"
      // margin="0 auto" 
      my="4rem" 
      bg={{base: "#F0F9FFE5", _dark: "#000D14E5"}}
      gap="1rem"
      p="2rem"
    >
      <Flex
        maxWidth="804px"
        direction="column"
        alignItems="center" 
        justifyContent="center"
        gap="1rem"
      >
        <Text fontWeight="800" color={{ base: "#036096", _dark: "#69C6FC" }} fontSize="53.34px">{title}</Text>
        <Text lineHeight="33px" color={{base: "#000000", _dark: "#ffffff"}} >{desc}</Text>
        <Button 
          bg={{ base: "#036096", _dark: "#69C6FC" }}
          onClick={onClick}
        >
          {btnText}
        </Button>
      </Flex>
    </Flex>
  )
}