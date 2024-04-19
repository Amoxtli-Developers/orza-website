// TalkToUs.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TalkToUs = ({ title, description, buttonText, href }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingRight: { xs: 5, sm: 15, md: 10 },
        paddingLeft: { xs: 5, sm: 15, md: 10 },
        paddingTop: { xs: 2, sm: 5, md: 10 },
        paddingBottom: { xs: 2, sm: 5, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: "60px", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, fontSize: "20px" }}>
        {description}
      </Typography>
      <a href={href} target="_blank" rel="noreferrer">
        <Button
          sx={{
            mt: 2,
            width: 160, // w-40 -> 40 x 4 = 160px
            height: 40, // h-10 -> 10 x 4 = 40px
            borderRadius: "50px", // rounded-[50px]
            backgroundColor: "#1c44f1", // bg-customBlue -> Define customBlue in your theme
            border: 1,
            borderColor: "transparent", // border-transparent
            color: "white", // text-white
            fontSize: "0.875rem", // text-sm -> Tailwind's sm corresponds to ~14px
            fontWeight: "bold", // font-bold
            textTransform: "none", // uppercase
            "&:hover": {
              boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.2)", // Add glow effect on hover
              backgroundColor: "#1c44f1", // Hover background color
            },
          }}
        >
          {buttonText}
        </Button>
      </a>
    </Box>
  );
};

export default TalkToUs;
