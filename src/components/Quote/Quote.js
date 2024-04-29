import React from "react";
import { Typography, Grid } from "@mui/material";
import { TextGenerateEffect } from "../TextEffect/TextEffect"; // Import the TextGenerateEffect component

const Quote = () => {
  const words = `At ORZA, we believe in the convergence of human talent and technological innovation. Drawing from my experiences on the tennis court, I've learned that each small victory is a step toward larger success. We apply this principle to our work, striving for excellence in every project and every solution we develop. We are not just automating processes; we are enhancing them with high-quality, AI-driven modular solutions, closely integrated with our clients’ production systems. This approach ensures that our clients are not only competitors but leaders in their industries. Our commitment to high-quality innovation is unwavering because we know that our clients' success is our success. At ORZA, we make it our mission to empower businesses, helping them grow sustainably and effectively. By making each client a winner, we create an environment where our own team members flourish. Together, we are redefining the future of industrial automation, making the once inconceivable a tangible reality.`;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingRight: { xs: 5, sm: 15, md: 25 },
        paddingLeft: { xs: 5, sm: 15, md: 25 },
        paddingTop: { xs: 2, sm: 5, md: 10 },
        paddingBottom: { xs: 2, sm: 5, md: 10 },
        position: "relative",
      }}
    >

      <Grid item xs={12} md={2}>
        <Typography
          id="home"
          variant="h6"
          component="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "30px" },
            wordWrap: "break-word",
            color: "#1B44F1"
          }}
        >
          Andrés Islas
          <Typography sx={{ fontSize: "15px", opacity: 0.5 }}>
            CEO & Founder
          </Typography>
          <Typography sx={{ fontSize: "15px", opacity: 0.5 }}>
            ORZA Tech
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} md={10} >
        <TextGenerateEffect words={words} />
      </Grid>
    </Grid>
  );
};

export default Quote;
