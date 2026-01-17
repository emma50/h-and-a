import { Text, Box, Flex, Image, Button } from "@chakra-ui/react"
import { LiaLightbulbSolid } from "react-icons/lia";

export default function Hero() {
  return (
    <>
      <Flex gap="64px" align="center" justify="space-between" flexDirection={{ base: "column", lg: "row" }} maxH={{base: "auto", lg: "467px"}} py="80px" pb={{base: "0", md: "80px"}} mx="auto" maxW="1232px" maxHeight={{ base: "auto", lg: "467px" }}>
        <Left />
        <Right />
      </Flex>
      <Box>
        <Image src="/images/hero-group-below.png" alt="hero-group" display={{ base: "none", lg: "block" }} maxH="257.88px"/>
      </Box>
    </>
  )
}

export const Left = () => {
  const handleCoursesClick = () => {
    const target = document.getElementById("courses");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex height={{ base: "auto", lg: "467px" }} maxW="522px" flexDir="column" justify="center">
      <Flex gap=".2rem" align="center" mx={{base: "auto", md: "0", lg: "0"}}>
        {/* Changed */}
        <Box alignSelf="center"><LiaLightbulbSolid /></Box>
        <Text color={{base: "#000000", _dark: "#ffffff"}} fontWeight="400" fontSize="17.55px" lineHeight="23.94px">Start to success</Text>
      </Flex>
      <Flex flexDirection="column" gapY="1rem" mx={{base: "auto", md: "0", lg: "0"}}> 
        <Flex flexDirection="column" gapY="1rem" px={{base: "2rem", md: "0"}}>
          <Text fontSize="53.34px" fontWeight="800" lineHeight="65.5px" color={{ base: "#036096", _dark: "#69C6FC" }} maxW="513px" textAlign={{base: "center", md: "start"}}>
            {/* 3.334rem fontSize="53.34px"*/}
            Launch <Text as="span" color={{ base: "#000000", _dark: "#ffffff" }}>your future career into tech</Text>
          </Text>
          <Text maxW="457px" textAlign={{base: "center", md: "start"}} color={{base: "#000000", _dark: "#ffffff"}} fontWeight="400" fontSize="20px" lineHeight="33px">Our robust curriculum and immersive classes at <Text as="span" color={{ base: "#036096", _dark: "#69C6FC" }}>H&A infotech</Text> helps equip students with the relevant skills needed to launch a successful career</Text>
        </Flex>

        {/* Buttons */}
        <Flex gap="1rem" flexDirection={{base: "column", md: "row"}}>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleCoursesClick}  bg={{base: "#F0F9FF", _dark: "#000D14"}} color={{base: "#036096", _dark: "#69C6FC"}} px="1.25rem" py="0.625rem" borderRadius="0.313rem" fontSize="1rem" fontWeight="600" width="204px" height="60px" rounded="7px" border={{base: "1px solid #036096", _dark: "1px solid #69C6FC"}} display="flex" justifyContent="center" textDecoration="none">
              Explore courses
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const Right = () => {
  return (
    <Box maxW="650px" height="383px">
      <Image src="/images/hero-group.png" alt="hero-group" />
    </Box>
  )
}
