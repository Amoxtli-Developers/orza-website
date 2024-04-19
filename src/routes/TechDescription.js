import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import ProjectOverview from "../components/ProjectOverview/ProjectOverview";
import Approach from "../components/Approach/Approach";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import OurSolution from "../components/OurSolution/OurSolution";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import { motion } from "framer-motion";
import A11 from "../assets/images/A11.webp";

const techDescriptions = [
  {
    title: "Technology 1",
    body: "Description for Technology 1...",
    tags: ["Tech 1 Tag 1", "Tech 1 Tag 2"],
    imageUrl: A11,
    steps: [
      {
        title: "Step 1",
        description: "Description for step 1 of Technology 1...",
      },
      {
        title: "Step 2",
        description: "Description for step 1 of Technology 2 xx...",
      },
      {
        title: "Step 3",
        description: "Description for step 1 of Technology 3...",
      },
      {
        title: "Step 4",
        description: "Description for step 1 of Technology 4...",
      },
    ],
    images: [
      {
        id: 1,
        className: "md:col-span-2",
        thumbnail:
          "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        className: "md:col-span-1",
        thumbnail:
          "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        className: "md:col-span-1",
        thumbnail:
          "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        className: "md:col-span-2",
        thumbnail:
          "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    solutions: {
      sections: [
        { title: "Title 1", description: "Description for solution part 1." },
        { title: "Title 2", description: "Description for solution part 2." },
        { title: "Title 3", description: "Description for solution part 3." },
        { title: "Title 4", description: "Description for solution part 4." },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Technology 2",
    body: "Description for Technology 2...",
    tags: ["Tech 2 Tag 1", "Tech 2 Tag 2"],
    imageUrl: "path_to_image_for_technology_2.jpg",
    steps: [
      {
        title: "Step 1",
        description: "Description for step 1 of Technology 1...",
      },
      {
        title: "Step 2",
        description: "Description for step 1 of Technology 2 ...",
      },
      {
        title: "Step 3",
        description: "Description for step 1 of Technology 3...",
      },
      {
        title: "Step 4",
        description: "Description for step 1 of Technology 4...",
      },
    ],
  },
  // ... other technology descriptions with their steps
];

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
  },
});

const itemVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const TechDescription = () => {
  const { index } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const validIndex = parseInt(index, 10);
  const techData = techDescriptions[validIndex] || {
    title: "Not Found",
    body: "The requested technology was not found.",
    tags: [],
    imageUrl: "path_to_default_image.jpg",
    steps: [],
    solutions: {
      sections: [],
      imageUrl: "",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#1c44f1" }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Box
        sx={{
          p: { xs: 2, sm: 5, md: 5 },
          width: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
          borderRadius: "20px",
        }}
      >
        <motion.img
          src={techData.imageUrl}
          alt={techData.title}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={itemVariants}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            display: "block",
            maxHeight: "600px",
            borderRadius: "20px",
          }}
        />
      </Box>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={itemVariants}
      >
        <ProjectOverview
          title={techData.title}
          body={techData.body}
          tags={techData.tags}
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={itemVariants}
      >
        <Approach steps={techData.steps} />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={itemVariants}
      >
        <ImageGrid images={techData.images} />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={itemVariants}
      >
        <OurSolution
          sections={techData.solutions.sections}
          imageUrl={techData.solutions.imageUrl}
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={itemVariants}
      >
        <TalkToUs
          title="Do you have a project?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Talk to us"
          href="https://your-contact-url.com"
        />
      </motion.div>
      <Footer visionText="Vision" visionHref="/vision" />
    </ThemeProvider>
  );
};

export default TechDescription;
