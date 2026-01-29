import { Box, Text, Flex, Button, Card, Image } from "@chakra-ui/react";
import { serviceCards } from "@/utils/data";
import NewsLetter from "./newsletter";

export default function Services() {
  return (
    <Box
      bg={{ base: "#F0F9FF", _dark: "#000D14" }}
      maxW="1266px"
      mx="auto"
      py="80px"
      pb={{ base: "0", md: "80px" }}
      id="courses"
    >
      <Flex gap="60px" flexDirection="column">
        <Flex
          flexDirection="column"
          gap="12px"
          maxW="819px"
          alignItems="center"
          mx="auto"
        >
          <Text
            maxW="299px"
            width="299px"
            lineHeight="48.34px"
            fontSize="45.63px"
            fontWeight="800"
            color={{ base: "#0D0D0D", _dark: "#FFFFFF" }}
            textAlign="center"
          >
            Our Services
          </Text>
          <Text
            textAlign="center"
            maxW="819px"
            fontWeight="300"
            fontSize="18.27px"
            lineHeight="30.1px"
          >
            Providing valuable solutions to your business needs, Our services
            are rapidly increasing and are divided into various categories.
          </Text>
        </Flex>
        <CardList />
        <Button
          variant="solid"
          bg="#69C6FC"
          width="234px"
          height="60px"
          borderRadius="7px"
          py="20px"
          px="18px"
          color={{ base: "#FFFFFF", _dark: "#000D14" }}
          lineHeight="20px"
          fontWeight="700"
          fontSize="17.36px"
          mx="auto"
        >
          Explore more courses
        </Button>
      </Flex>
      <NewsLetter />
    </Box>
  );
}

export const CardList = () => {
  return (
    <Flex
      wrap="wrap"
      gap={{ base: "1rem", lg: "29px" }}
      maxW="1264.63px"
      justifyContent="center"
    >
      {serviceCards.map((card) => {
        return (
          <CustomCard
            key={card.id}
            img={card.img}
            title={card.title}
            desc={card.desc}
            url={card.url}
            urlText={card.urlText}
          />
        );
      })}
    </Flex>
  );
};

const getCourseStatus = (title: string) => {
  const t = title.toLowerCase();
  if (
    t.includes("artificial intelligence") ||
    t.includes("qa") ||
    t.includes("software testing")
  ) {
    return "Free";
  }
  if (t.includes("data analytics") || t.includes("data")) {
    return "£130 - N250,000";
  }
  return "Upcoming";
};

export const CustomCard = ({
  img,
  title,
  desc,
  url,
  urlText,
}: {
  img: string;
  title: string;
  desc: string;
  url: string;
  urlText: string;
}) => {
  const status = getCourseStatus(title);
  // #000D14
  return (
    <Card.Root
      bg={{ base: "#FFFFFF", _dark: "#000A0F" }}
      gap="1"
      maxWidth="24.688rem"
      minH="502.04px"
      overflowY="hidden"
      height={{ base: "556px", md: "529.88px" }}
    >
      {/* borderRadius="10px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" */}
      <Box pt="1rem" position="relative">
        <Image
          src={img}
          alt={title}
          // width="356px"
          width="22.25rem"
          height="262px"
          borderTopLeftRadius="15px"
          borderTopRightRadius="15px"
          m="auto"
        />
        <Box
          position="absolute"
          bottom="10px"
          right="30px"
          fontSize="14px"
          fontFamily="Arial, sans-serif"
          color="#FFD700" // gold
          fontWeight="700"
          textShadow="0 0 2px rgba(0,0,0,0.6)"
        >
          {status}
        </Box>
      </Box>
      <Box
        minW={{ base: "auto", md: "344px" }}
        height={{ base: "auto", md: "254px" }}
      >
        <Card.Body gap="2" width="100%" height="auto">
          <Card.Title
            fontWeight="700"
            fontSize={{ base: "20.8px", md: "22.8px" }}
            lineHeight="42.18px"
            minH="38.03px"
            color={{ base: "#0D0D0D", _dark: "#FFFFFF" }}
          >
            {title}
          </Card.Title>
          <Card.Description
            fontWeight="300"
            fontSize="18.37px"
            lineHeight="30.03px"
            color={{ base: "#251F1F", _dark: "#ECE8E8" }}
            overflowY="scroll"
            className="scrollbar"
            height="119px"
          >
            {desc}
          </Card.Description>
        </Card.Body>
        <Card.Footer
          minW="83px"
          height="21px"
          fontWeight="600"
          fontSize="14.32px"
          lineHeight="21.48px"
          color={{ base: "#0D0D0D", _dark: "#ffffff" }}
        >
          <a href={url}>{urlText}</a>
          {/* <Button variant="solid">{urlText}</Button> */}
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
