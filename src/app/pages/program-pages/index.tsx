import Footer from "@/app/components/footer"
import Header from "@/app/components/header"
import NewsLetter from "@/app/components/newsletter"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import CustomHero from "@/app/components/custom-hero"
import Img from "@/app/components/image"
import CustomCard from "@/app/components/custom-card"

export default function ProgramPage({data}: {data: any;}) {
  // @ts-ignore
  const {hero, learning, why} = data;

  const clickHandler = () => {
    window.open(data.regLink, "_blank");
  }

  return (
    <Box bg={{ base: "#F0F9FF", _dark: "#000D14" }} maxWidth="1440px" margin="0 auto" textAlign="center">
      <Header />
      <CustomHero 
        onClick={clickHandler} 
        title={hero.title} 
        desc={hero.desc}
        btnText={hero.actionBtn}
      />

      {/* What you will learn */}
      <Flex
        direction={{
          base: "column",
          md: "row"
        }}
        width="100%"
      >
        <Img src={learning.img} alt="HA Infotech" />
        <Flex
          direction="column"
          gap="2rem"
          pr="1rem"
          pl="2rem"
          py="2rem"
          justifyContent="center"
          bg={{base: "#F4F7FA", _dark: "#000D14"}}
          width={{
            base: "100%",
            md: "60%"
          }}
        >
          <Flex
            direction="column"
            gap="1rem"
            maxWidth="655px"
            textAlign="left"
          >
            <Text
              fontFamily="Raleway"
              color={{base: "#000000", _dark: "#ffffff"}}
              fontWeight="600"
              fontSize="40px"
              lineHeight="53px"
            >
             {learning.title}
            </Text>
            <Text
              color={{base: "#161C2D", _dark: "#D2D8E9"}}
              fontWeight="400"
              fontSize="19px"
              lineHeight="32px"
            >
              {learning.desc}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      
      {/* Why choose */}
      <Flex
        direction={{
          base: "column",
          md: "row"
        }}
        width="100%"
      >
        <Flex
          direction="column"
          gap="2rem"
          pr="1rem"
          pl="3rem"
          py="2rem"
          justifyContent="center"
          bg={{base: "#F4F7FA", _dark: "#000D14"}}
          width={{
            base: "100%",
            md: "60%"
          }}
        >
          <Flex
            direction="column"
            gap="1rem"
            maxWidth="655px"
            textAlign="left"
          >
            <Text
              fontFamily="Raleway"
              color={{base: "#000000", _dark: "#ffffff"}}
              fontWeight="600"
              fontSize="40px"
              lineHeight="53px"
            >
              {why.title}
            </Text>
            <Text
              color={{base: "#161C2D", _dark: "#D2D8E9"}}
              fontWeight="400"
              fontSize="19px"
              lineHeight="32px"
            >
             {why.desc}
            </Text>
          </Flex>
          <Flex 
            direction="column"
            textAlign="left"
            gap="1rem"
          >
            {why.list.map((item: any) => {
              return (
                <Flex
                  direction="column"
                  key={item.id}
                >
                  <Text
                    fontWeight="600"
                    fontSize="19px"
                    lineHeight="32px"
                    color={{base: "#0D0D0D", _dark: "#FFFFFF"}}
                  >
                    {item.id}. {item.title}
                  </Text>
                  <Text
                    color={{base: "#0D0D0D", _dark: "#F4F7FA"}}
                    fontSize="19px"
                    lineHeight="32px"
                  >
                    {item.desc}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
          <Button
            bg={{ base: "#036096", _dark: "#69C6FC" }}
            maxWidth="197px"
            onClick={clickHandler}
          >
            {why.actionBtn}
          </Button>
        </Flex>
        <Img src={why.img} alt="HA Infotech" />
      </Flex>

      {/* Benefits */}
      <Flex
        direction={{
          base: "column",
          md: "row"
        }}
        gap="2rem"
        px="2rem"
        pt={{
          base:"4rem",
          md: "2rem"
        }}
      >
        <Flex
         direction="column"
         gap="1rem"
         justifyContent="center"
         textAlign="left"
         py="1rem"
         px=".5rem"
        >
          <Text
            color={{base: "#292D33", _dark: "#CCD0D6"}}
            fontWeight="700"
            fontSize="38px"
            lineHeight="56px"
            maxWidth="663px"
          >
           {why.benefits.title}
          </Text>
          <Text
            color={{base: "#9497A1", _dark: "#9497A1"}}
            fontWeight="400"
            fontSize="20px"
            lineHeight="33px"
            maxWidth="540px"
          >
            {why.benefits.desc}
          </Text>
        </Flex>
        <Flex 
          gap="2rem"
          py="1rem"
          px=".5rem"
          direction={{
            base: "column",
            md: "row"
          }}
          justifyContent={{
            base: "center",
            md: "start"
          }}
          alignItems={{
            base: "center",
            md: "start"
          }}
        >
          <Flex
            direction="column"
            gap="1rem"
            py={{base: "0", md: "2rem"}}
          >
            {why.benefits.cardOne.map((item: any) => {
              return (
                <CustomCard 
                  key={item.id}
                  src={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              )
            })}
          </Flex>
          <Flex
            direction="column"
            gap="1rem"
            py={{base: "0", md: "4rem"}}
          >
            {why.benefits.cardTwo.map((item: any) => {
              return (
                <CustomCard 
                  key={item.id}
                  src={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              )
            })}
          </Flex>
        </Flex>
      </Flex>
      <NewsLetter />
      <Footer />
    </Box>
  )
}