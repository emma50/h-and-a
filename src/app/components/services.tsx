import { Box, Text, Flex, Button, Card, Image, Link, Input } from "@chakra-ui/react"
import { serviceCards } from "@/utils/data"

export default function Services() {
  return (
    <Box bg={{base: "#F0F9FF", _dark: "#000D14"}} maxW="1266px" mx="auto" py="80px">
      <Flex gap="60px" flexDirection="column">
        <Flex flexDirection="column" gap="12px" maxW="819px" alignItems="center" mx="auto">
          <Text maxW="299px" width="299px" lineHeight="48.34px" fontSize="45.63px" fontWeight="800" color={{base: "#0D0D0D", _dark: "#FFFFFF"}} textAlign="center">Our Services</Text>
          <Text textAlign="center" maxW="819px" fontWeight="300" fontSize="18.27px" lineHeight="30.1px">Providing valuable solutions to your business needs, Our services are rapidly increasing and are divided into various categories.</Text>
        </Flex>
        <CardList />
        <Button variant="solid" bg="#69C6FC" width="234px" height="60px" borderRadius="7px" py="20px" px="18px" color={{base: "#FFFFFF", _dark: "#000D14"}} lineHeight="20px" fontWeight="700" fontSize="17.36px" mx="auto">Explore more courses</Button>
      </Flex>
      <NewsLetter	/>
    </Box>
  )
}

export const NewsLetter = () => {
  return (
    <Flex flexDir={{base: "column", lg: "row"}} bg={{base: "#F0FAFF", _dark: "#000D14"}} maxW="1354px" mx="auto" py="80px" height="275px" borderTopRightRadius="40pc" borderBottomRightRadius="40px">
      <Text maxW="744px" height="136px" fontWeight="800" fontSize="36px" lineHeight="68px" color={{base: "#000000", _dark: "#ffffff"}} bg={{base: "", _dark: ""}}>Find out About The Latest Courses With The <Text as="span" color={{base: "#036096", _dark: "#69C6FC"}}>Academy</Text> Newsletter</Text>
      <Flex maxW="486px" height="64px" borderRadius="12px" border={{base: "1px solid #0D0D0D", _dark: "1px solid #F1F1F1"}} gap="1rem" py="8px" pr="20px" pl="16px" boxShadow="0px 8px 64px 0px #0000001A" alignItems="center" my="auto" bg={{base: "#EBF7FF", _dark: "#FFFFFF"}}>
        <Input variant="flushed" placeholder="Enter Address..." borderRadius="7px" color={{base: "#08080840", _dark: "#08080840"}} maxHeight="20px" maxW="335px" fontWeight="500" fontSize="13px" lineHeight="19.5px" />
        <Button variant="solid" bg={{base: "#036096", _dark: "#69C6FC"}} width="99px" height="40px" borderRadius="10px" py="10px" px="24px" color={{base: "#FFFFFF", _dark: "#000D14"}} lineHeight="20px" fontWeight="700" fontSize="17.36px">Submit</Button>
      </Flex>
    </Flex>
  )
}

export const CardList = () => {
  return (
    <Flex wrap="wrap" gap={{base: "1rem", lg: "29px"}} maxW="1264.63px" justifyContent="center">
      {serviceCards.map((card) => {
        return (
          <CustomCard key={card.id} img={card.img} title={card.title} desc={card.desc} url={card.url} urlText={card.urlText} />
        )
      })}
    </Flex>
  )
}

//@ts-ignore
export const CustomCard = ({ img, title, desc, url, urlText }) => {
// #000D14
  return (
    <Card.Root bg={{base: "#FFFFFF", _dark: "#000A0F"}} gap="4" width="24.688rem" minH="502.04px">
      {/* borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" */}
      <Box>
        <Image
          src={img}
          alt="#"
          // width="356px"
          width="22.25rem"
          height="262px"
          borderTopLeftRadius="15px"
          borderTopRightRadius="15px"
          m="auto"
          // pt="1rem"
        />
      </Box>
      <Box minW="344px" height="194px">
        <Card.Body gap="2">
          <Card.Title fontWeight="700" fontSize="28.12px" lineHeight="42.18px" height="38.03px" color={{base: "#0D0D0D", _dark: "#FFFFFF"}}>{title}</Card.Title>
          <Card.Description fontWeight="300" fontSize="18.37px" lineHeight="30.03px" color={{base: "#251F1F", _dark: "#ECE8E8"}}>{desc.length < 103 ? desc : `${desc.substr(0, 103)}...`}</Card.Description>
        </Card.Body>
        <Card.Footer minW="83px" height="21px" fontWeight="600" fontSize="14.32px" lineHeight="21.48px" color={{base: "#0D0D0D", _dark: "#ffffff"}}>
          <Link href={url}>{urlText}</Link>
          {/* <Button variant="solid">{urlText}</Button> */}
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}

