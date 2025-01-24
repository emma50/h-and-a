import { Box, Text, Flex } from "@chakra-ui/react"

export default function MissonAndVision() {
  return (
    <Box bg={{base: "#FAFDFF", _dark: "#000A0F"}} color={{ base: "#000A0F", _dark: "#ffffff"}} p="4rem" maxH={{base: "auto", lg: "860px"}} mx="auto" py={{base: "80px", lg: "80px"}} px={{base: "10px", lg: "10px"}}>
      <Flex flexDirection="column" gap="10px">
        <Flex w="100%" justifyContent="center">
          <Text textAlign="center" fontFamily="Raleway" fontWeight="700" fontSize="44px" lineHeight="46px" color={{ base: "#000000", _dark: "#ffffff" }} height="46px">Mission & <Text as="span" color={{ base: "#036096", _dark: "#69C6FC" }}>Vision</Text></Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" gap="16px">
          <Text textAlign="center" color={{ base: "#036096", _dark: "#69C6FC" }} fontFamily="Raleway" fontWeight="600" fontSize="30px" lineHeight="36px" height="36px">Mission Statement</Text>
          <Text textAlign="center" color={{base: "#000000", _dark: "#ffffff"}} fontWeight="400" fontSize="20px" lineHeight="33px" opacity="70%" width={{base:"auto", lg: "1067px"}}>"At H&A Infotech, we are dedicated to empowering global talent through cutting-edge tech training, personalized career guidance, and expert consulting. Our mission is to break down barriers by providing accessible, top-tier resources that enable individuals and businesses to excel in the fast-paced tech landscape, turning potential into measurable success."</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" gap="16px">
          <Text textAlign="center" color={{ base: "#036096", _dark: "#69C6FC" }} fontFamily="Raleway" fontWeight="600" fontSize="30px" lineHeight="36px">Vision Statement</Text>
          <Text textAlign="center" color={{base: "#000000", _dark: "#ffffff"}} fontWeight="400" fontSize="20px" lineHeight="33px" opacity="70%" width={{base:"auto", lg: "1067px"}}>To bridge the gap between ambition and achievement, empowering minds globally to succeed in the dynamic world of technology</Text>
        </Flex>
      </Flex>
    </Box>
  )
}
