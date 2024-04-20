import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Solutions = ({ imageUrl, title, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        width: "100%",
        height: isMobile ? "80vh" : "100vh", // Reduced height on mobile
        borderRadius: "20px", // Smaller border radius for a subtler look
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          maxWidth: "90%", // Ensures text does not touch the edges
          zIndex: 1, // Ensure text is above the overlay
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "30px" : "80px", // Responsive font size
            color: "white",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontSize: isMobile ? "10px" : "25px", // Smaller font on mobile
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Solutions;
