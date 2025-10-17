import { Avatar, Card } from "@chakra-ui/react"

const CustomCard = ({src, title, desc}: {src: string; title: string; desc: string}) => {
  return (
    <Card.Root maxWidth="255px" bg={{base: "#FFFFFF", _dark: "#0D0D0D"}} boxShadow="md" borderRadius="8px" padding="2">
      <Card.Body gap=".5rem">
        <Avatar.Root size="lg" bg="inherit">
          <Avatar.Image src={src} />
        </Avatar.Root>
        <Card.Title 
          // mt="2" 
          color={{base: "#292D33", _dark: "#CCD0D6"}}
          fontWeight="700"
          fontSize="20px"
          lineHeight="30px"
          maxWidth="205px"
        >
          {title}
        </Card.Title>
        <Card.Description
          color="#9497A1"
          fontWeight="400"
          fontSize="14px"
          lineHeight="24px"
          maxWidth="205px"
        >
          {desc}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

export default CustomCard
