import LandingPage from './app/landing'
import { Box } from '@chakra-ui/react'
//@ts-ignore
import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/poppins/400.css"; // Specify weight
// import "@fontsource/poppins/400-italic.css";
import "@fontsource-variable/raleway/index.css" // Specify weight and style

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.main.css';
// import 'swiper/modules/navigation/navigation.main.css';
//@ts-ignore
import 'swiper/css';
//@ts-ignore
import 'swiper/css/pagination';
//@ts-ignore
import 'swiper/css/navigation';

import './App.css'

function App() {
  return (
    <Box bg={{ base: "#F0F9FF", _dark: "#000D14" }} maxWidth="1440px" margin="0 auto" px="2rem" textAlign="center">
      <LandingPage />
    </Box>
  )
}

export default App
