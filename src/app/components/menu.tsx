import { Box, Text, Link, Stack } from "@chakra-ui/react"
import { IoIosMenu,  } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { headerList, headerButton } from "@/utils/data";

//@ts-ignore
export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoClose color="#69C6FC" size="32px" /> : <IoIosMenu color="#69C6FC" size="32px" />}
    </Box>
  )
}

//@ts-ignore
export const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} color={{ base: "#000000", _dark: "#FFFFFF" }} fontSize="16px" fontWeight="500" mr="1.25rem">
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

//@ts-ignore
export const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        // spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {headerList.map((item) => {
          return (
            <MenuItem key={item.id} to={item.href}>{item.title}</MenuItem>
          )
        })}
        <Box>
          {/* #036096 */}
          <Link href={headerButton.link} bg={{base: "#036096", _dark: "#69C6FC"}} color={{base: "#FFFFFF", _dark: "#000000"}} px="1.25rem" py="0.625rem" borderRadius="0.313rem" fontSize="1rem" fontWeight="500">
            {headerButton.title}
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}
