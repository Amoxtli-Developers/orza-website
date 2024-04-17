import React from "react";
import { Typography, Grid } from "@mui/material";
import { TextGenerateEffect } from "../TextEffect/TextEffect"; // Import the TextGenerateEffect component

const Quote = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows.`;

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
