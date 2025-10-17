import { Flex, Text, Input, Button } from "@chakra-ui/react"

export default function NewsLetter() {
  return (
    <Flex flexDir={{base: "column", lg: "row"}} bg={{base: "#F0FAFF", _dark: "#000D14"}} maxW="1354px" mx="auto" py="80px" height={{base: "auto", md: "275px"}} borderTopRightRadius="40pc" borderBottomRightRadius="40px">
      <Text maxW="744px" height={{base: "auto", md: "136px"}} fontWeight="800" fontSize="36px" lineHeight="68px" color={{base: "#000000", _dark: "#ffffff"}} bg={{base: "", _dark: ""}}>Find out About The Latest Courses With The <Text as="span" color={{base: "#036096", _dark: "#69C6FC"}}>Academy</Text> Newsletter</Text>
      <Flex maxW="486px" height="64px" borderRadius="12px" border={{base: "1px solid #0D0D0D", _dark: "1px solid #F1F1F1"}} gap="1rem" py="8px" pr="20px" pl="16px" boxShadow="0px 8px 64px 0px #0000001A" alignItems="center" my="auto" bg={{base: "#EBF7FF", _dark: "#FFFFFF"}}>
        <Input variant="flushed" placeholder="Enter Address..." borderRadius="7px" color={{base: "#08080840", _dark: "#08080840"}} maxHeight="20px" maxW="335px" fontWeight="500" fontSize="13px" lineHeight="19.5px" />
        <Button variant="solid" bg={{base: "#036096", _dark: "#69C6FC"}} width="99px" height="40px" borderRadius="10px" py="10px" px="24px" color={{base: "#FFFFFF", _dark: "#000D14"}} lineHeight="20px" fontWeight="700" fontSize="17.36px">Submit</Button>
      </Flex>
    </Flex>
  )
}