import React from "react";
import { Typography, TextField, Button, Box, Stack } from "@mui/material";
import Title from "../Title/Title";

const OrzaTeamForm = () => {
  return (
    <Box
      sx={{
        paddingRight: { xs: 5, sm: 15, md: 30 },
        paddingLeft: { xs: 5, sm: 15, md: 30 },
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Title name={"Be part of our TEAM"} />
      <Typography variant="body1" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </Typography>
      <Stack direction="column" spacing={2} mb={2}>
        <TextField
          variant="outlined"
          placeholder="Your Name"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&:hover fieldset": {
                borderColor: "#1c44f1", // border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1c44f1", // border color on focus
              },
            },
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Your Email"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&:hover fieldset": {
                borderColor: "#1c44f1", // border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1c44f1", // border color on focus
              },
            },
          }}
        />
        <TextField
          variant="outlined"
          placeholder="Your Message"
          fullWidth
          multiline
          rows={4}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&:hover fieldset": {
                borderColor: "#1c44f1", // border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1c44f1", // border color on focus
              },
            },
          }}
        />
      </Stack>
      <Box sx={{ textAlign: "end" }}>
        <Button
          sx={{
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
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default OrzaTeamForm;
