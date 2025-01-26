import { Box, Text, Image, Card, HStack, Stack } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
// import { LuCheck, LuX } from "react-icons/lu"
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { swiperCards } from "@/utils/data";

export default function Testimonials() {
  return (
    <Box bg={{base: "#FAFDFF", _dark: "#000A0F"}} maxW="1440px" minH="666px">
      {/* bg={{base: "#FAFDFF", _dark: "#000A0F"}} */}
      <Box minH="559.77px">
      {/* top="88px" left="49px" */}
        <Box maxWidth="755px" maxH={{base: "auto", md: "172.77px"}} mb="5rem">
          {/* left="51px" width="400px"*/}
          <Image src="/images/double-quotes.png" alt="#" width="153px" height="118.15px" opacity="20%"/>
          <Text maxW="715px" height={{base: "auto", md: "108.77px"}} fontWeight="700" fontSize="40px" lineHeight="60px" color={{base: "#000000", _dark: "#ffffff"}} textAlign="start" mt="-60px" ml="16px">Hear from Our Students About <Text as="span" color={{ base: "#036096", _dark: "#69C6FC" }}>Their Experience With Us.</Text></Text>
        </Box>
        <CustomSlider/> 
      </Box>
    </Box>
  )
}

export function CustomSlider() {
  return (
    <Box maxW="1342px" height={{base: "auto", md: "345px" }}>
      {/* gap="36px" */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        // spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 320px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 700px
          1000: {
            slidesPerView: 3,
          },
        }}
        // freeMode={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        // className="mySwiper"
        className="swiper"
      >
        {swiperCards.map((card) => {
          const {id, img, name, position, desc} = card;
          return (
            <SwiperSlide>
              <SwiperCard key={id} img={img} name={name} position={position} desc={desc} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}

//@ts-ignore
export const SwiperCard = ({img, name, position, desc}) => {
  return (
    <Card.Root maxWidth="400px" height={{base: "auto", md: "307px"}} bg={{base: "#EBF7FF", _dark: "#000D14"}}>
      {/* width="320px" height="307px */}
      <Card.Body>
        <HStack mb="6" gap="11px" width="196px" height="58px">
          <Avatar
            src={img}
            name={name}
            width="58px"
            height="58px"
            borderRadius="42px"
          />
          <Stack gap="0">
            <Text fontWeight="600" color={{base: "#036096", _dark: "#69C6FC"}} fontSize="18px" lineHeight="32.4px" minW="97px" height="32px">{name}</Text>
            <Text textStyle="sm" width="130px" height="25px" fontWeight="400" fontSize="14px" lineHeight="25.2px" color={{base: "#4F4C67", _dark: "#9B98B3"}}>{position}</Text>
          </Stack>
        </HStack>
        <Card.Description color={{base: "#4F4C67", _dark: "#9B98B3"}} fontWeight="500" fontSize="16px" lineHeight="28.16px" maxWidth="352px" height="168px">{desc}</Card.Description>
        {/*width="352px"  */}
      </Card.Body>
    </Card.Root>
  )
}


