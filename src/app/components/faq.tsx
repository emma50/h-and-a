import { Box, Text, Flex, Image, AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot, } from "@chakra-ui/react"

export default function Faq() {
  return (
    <Box maxH={{base: "auto", md: "1037px"}} maxW="1440px" py="80px" id="faqs">
      <Box>
        <Image />
      </Box>
      <Flex flexDir="column" maxW="697px" maxH={{base: "auto", md: "142px"}} gap="4px" alignItems="center" mb={{base: "4rem", lg: "1rem"}} justifyContent="center" mx="auto">
        <Text maxW="697px" maxH={{base: "auto", md: "142px"}} fontWeight="800" fontSize="44.56px" lineHeight="79.5px" textAlign="center" color={{base: "#000000", _dark: "#ffffff"}} mb={{base: "2rem", lg: "1rem"}}>Frequently Asked Questions</Text>
        <Text maxW="382px" maxH={{base: "auto", md: "38px"}} fontWeight="400" fontSize="20.89px" lineHeight="32.84px" textAlign="center" color={{base: "#000000", _dark: "#ffffff"}}>Know more <Text as="span" color={{base: "#000000", _dark: "#ffffff"}}>about our programs</Text></Text>
      </Flex>
      {/* Custom Accordion */}  
      <Box mt="20px">
        <CustomAccordion />
      </Box>
    </Box>
  )
}

export const CustomAccordion = () => {
  return (
    <AccordionRoot collapsible defaultValue={["a"]}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value} >
          <AccordionItemTrigger fontWeight="500" fontSize="18px" color={{ base: "#000000", _dark: "#ffffff" }} lineHeight="32px" textAlign="start">{item.title}</AccordionItemTrigger>
          <AccordionItemContent textAlign="start" color={{ base: "#000000", _dark: "#ffffff" }} lineHeight="30px">{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}

const items = [
  { value: "a", title: "What type of courses do you offer?", text: "We offer Data Analytics, Quality Assurance, Agile Project Management, Foreign languages like French, German and more" },
  { value: "b", title: "What is the duration of your courses?", text: "Our courses vary in duration, but most are between 1-6 months" },
  { value: "c", title: "Are the classes virtual or in person?", text: "The classes are virtual, powered by Microsoft teams" },
  { value: "d", title: "I don't have experience in tech. Can I apply?", text: "Our courses are designed to cater for both experienced and non-experienced students" },
  { value: "e", title: "Can I pay in installments?", text: "Yes you can make payment in 3 installments" },
  { value: "f", title: "How do i enroll in a course?", text: "" },
  { value: "g", title: "What is the deadline for enrollment?", text: "Our enrollment deadline vary by course. But it is advised to enroll at least 1 week before the course start date" },
  { value: "h", title: "Will I receive a certificate upon completion of the course?", text: "Yes, upon completion of the course, you will receive a certificate of completion" },
  { value: "i", title: "Do you offer career support and job placement services?", text: "Yes, we offer career support and job placement services to help our students find employment in their field" },
  { value: "j", title: "Do you have partnerships with employers?", text: "We are building and working on several fronts to help our students with placements." },
]
