import { Box, Flex, Image, Text, Link } from "@chakra-ui/react"
import { infoLinks, quickLinks, ourPrograms, contacts } from "@/utils/data"
import { RiFacebookBoxLine } from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <Box color="#000A0F" maxW="1440px" maxH={{base: "auto", lg: "40.375rem"}} margin="auto" marginTop="0" >  {/* marginTop="367.618rem" */}
    {/* bg={{ base: "#fcfcfc", _dark: "#000A0F"}} */}
      <Flex flexDirection={{base: "column", lg: "row"}} gap="7.938rem" p="4rem">
        <Flex flexDirection="column" maxWidth="324px" height={{base: "auto", md: "306.76px"}} gap="24px" color={{ base: "#383838", _dark: "#C7C7C7"}} mx={{base: "auto", lg: "0"}}>
          <Flex flexDirection="column" gap="24px" height={{base: "auto", md: "223px"}} textAlign={{base: "center", lg: "left"}} width="auto">
            <a href="/">
              <Image src="/images/product.png" alt="Logo" height="2.438rem" width="6.344rem"/>
            </a>
            <Text fontWeight="400" fontSize="14.48px" lineHeight="20.83px" width="auto">{infoLinks.desc}</Text>
          </Flex>
          <Box width="142px" mx={{base: "auto", lg: "0"}}>
            <Box fontWeight="600" fontSize="17.42px" lineHeight="26.14px">{infoLinks.connect}</Box>
            {/* For social networks */}
            <Flex gap="4px" justifyContent={{base: "center", lg: "start"}} alignItems={{base: "center", lg: "start"}}>
              {socialLinks.map((item) => {
                return (
                  <Box key={item.id}>
                    <Link href={item.href}>
                      {item.icon}
                    </Link>
                  </Box>
                )
              })}
            </Flex>
          </Box>
        </Flex>
        <Flex flexDirection={{base: "column", lg: "row"}} gap="60px" maxW="46.875rem" height={{base: "auto", lg: "auto"}} flexWrap={{base: "wrap", lg: "nowrap"}} justifyContent={{base: "center", lg: "start"}} alignItems={{base: "center", lg: "start"}}>
          <Flex gap="21px" flexDirection="column" width="152px">
            <Box fontWeight="700" fontSize="19.37px" color={{ base: "#000000", _dark: "#ffffff"}}>Quick Links</Box>
            {quickLinks.map((item) => {
              return (
                <Box key={item.id}>
                  <Link href={item.href} color={{ base: "#383838", _dark: "#C7C7C7"}} fontWeight="300" fontSize="14.83px">
                    {item.name}
                  </Link>
                </Box>
              )
            })}
          </Flex>
          <Flex gap="21px" flexDirection="column" width="152px">
            <Box fontWeight="700" fontSize="19.37px" color={{ base: "#000000", _dark: "#ffffff"}}>Our programs</Box>
            {ourPrograms.map((item) => {
              return (
                <Box key={item.id} color={{ base: "#383838", _dark: "#C7C7C7"}} fontWeight="300" fontSize="14.83px">{item.name}</Box>
              )
            })}
          </Flex>
          <Flex gap="21px" flexDirection="column" width="152px">
            <Box fontWeight="700" fontSize="19.37px" color={{ base: "#000000", _dark: "#ffffff"}}>Contact</Box>
            {contacts.map((item) => {
              return (
                <Box key={item.id} color={{ base: "#383838", _dark: "#C7C7C7"}} fontWeight="300" fontSize="14.83px">{item.name}</Box>
              )
            })}
          </Flex>
        </Flex>
      </Flex>
      <Box divideX="1px" bg={{ base: "#000A0F", _dark: "#383838"}}>
        <Box width="1px" height="1px"></Box>
      </Box>
      <Box p="4rem">
        <Flex lineHeight="25px" fontSize="16.32px" fontWeight="300" color={{ base: "#383838", _dark: "#C7C7C7"}}>Copyright ©2024 H&A Infotech. All Rights Reserved. </Flex>
      </Box>
    </Box>
  )
}

const socialLinks = [
  {
    id: 1,
    name: "Facebook",
    icon: <RiFacebookBoxLine width="22.122px" height="22.12px" />,
    href: "https://www.facebook.com/hainfotech",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <PiLinkedinLogoBold width="22.122px" height="22.12px" />,
    href: "#",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FiTwitter width="22.122px" height="22.12px" />,
    href: "https://twitter.com/hainfotech",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <FiInstagram width="22.122px" height="22.12px" />,
    href: "https://www.instagram.com/hainfotech",
  },
]