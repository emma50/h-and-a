import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/landing";
import { pageData } from "./app/data/pageData";
import ProgramPage from "./app/pages/program-pages";

// import { Box } from '@chakra-ui/react'
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
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Dynamically map all programs */}
      {Object.entries(pageData).map(([key, data]) => {
        console.log(key, data);
        return (
          <Route 
            key={key}
            path={`/${key}`} 
            element={<ProgramPage data={data} />} 
          />
        )
      })}

      {/* Optional 404 */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App
