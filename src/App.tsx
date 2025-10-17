import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/landing";
// import BlockchainTechPage from "./app/pages/blockchain-tech";
// import DataAnalyticsPage from "./app/pages/data-analytics";
// import SoftwareAutomationPage from "./app/pages/software-automation";
// import CyberSecurityPage from "./app/pages/cyber-security";
// import FrontendDevelopmentPage from "./app/pages/frontend-development";
// import ProjectManagementPage from "./app/pages/project-management";
// import GraphicDesignPage from "./app/pages/graphic-design";
// import ContentCreationPage from "./app/pages/content-creation";
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
      {/* <Route path="/blockchain-tech" element={<BlockchainTechPage />} />
      <Route path="/data-analytics" element={<DataAnalyticsPage />} />
      <Route path="/software-automation" element={<SoftwareAutomationPage />} />
      <Route path="/cyber-security" element={<CyberSecurityPage />} />
      <Route path="/frontend-development" element={<FrontendDevelopmentPage />} />
      <Route path="/project-management" element={<ProjectManagementPage />} />
      <Route path="/graphic-design" element={<GraphicDesignPage />} />
      <Route path="/content-creation" element={<ContentCreationPage />} /> */}

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
