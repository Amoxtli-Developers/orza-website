// Solutions.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Solutions = ({ imageUrl, title, description }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100vh",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": {
          opacity: 0.9, // Example: Reduce opacity on hover
        },
      }}
    >
      <CardContent
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom sx={{fontWeight: "bold", fontSize: "80px", color: "#1c44f1"}}>
          {title}
        </Typography>
        <Typography variant="body2" component="p" sx={{fontSize: "25px"}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Solutions;
