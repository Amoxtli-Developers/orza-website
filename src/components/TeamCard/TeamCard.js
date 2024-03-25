import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function TeamCard({ image, title, description }) {
  return (
    <Card 
      sx={{
        maxWidth: { xs: 300, sm: 350, md: 450 }, // Responsive max width
        borderRadius: "20px",
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", // Optional: Adds a subtle shadow to make the cards pop a bit
        transition: "transform 0.2s", // Smooth transition for hover effects
        '&:hover': {
          transform: "scale(1.05)" // Slightly enlarge the card on hover for attention
        }
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
        sx={{
          // Adjustments for the image, if necessary
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
