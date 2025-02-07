import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { MenuToggle, MenuLinks } from './menu'
import Logo from './logo'
import { ColorModeButton } from '@/components/ui/color-mode'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer>
      <Flex>
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
        <ColorModeButton />
      </Flex>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

//@ts-ignore
const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      bg={{ base: "#FAFDFF", _dark: "#000305" }}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Header
