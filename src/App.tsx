import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import TitleSection from "./components/title-section";
import AboutMeSection from "./components/about-me-section";
import ResumeSection from "./components/resume-section";
import ProjectSection from "./components/projects-section";
import OpenSourceContributionSection from "./components/open-source-contribution-section";
import BlogsSection from "./components/blogs-section";
import ContactMe from "./components/contact-me";

export const App = () => (
  <ChakraProvider>
    <Box height="100vh" width="100vw" overflowY="scroll">
      <TitleSection />
      <AboutMeSection />
      <ResumeSection />
      <ProjectSection />
      <OpenSourceContributionSection />
      <BlogsSection />
      <ContactMe />
    </Box>
  </ChakraProvider>
);
