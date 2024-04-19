import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

const OrzaClientForm = () => {
  const imageUrl = "https://via.placeholder.com/500";
  return (
    <Box
      sx={{
        mx: "auto",
        paddingRight: { xs: 5, sm: 15, md: 25 },
        paddingLeft: { xs: 5, sm: 15, md: 25 },
        paddingTop: { xs: 2, sm: 5, md: 10 },
        paddingBottom: { xs: 2, sm: 5, md: 5 },
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "16px" }}>
            <CardMedia
              component="img" // Change to 'img'
              image={imageUrl} // Use the image URL
              alt="Partner Image"
              sx={{
                width: "100%",
                height: "100%", // Adjust the height as necessary
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Become a commercial partner with ORZA
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Name"
            fullWidth
            sx={{
              mb: 2,
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
            placeholder="Email"
            fullWidth
            sx={{
              mb: 2,
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
            placeholder="Company"
            fullWidth
            sx={{
              mb: 2,
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
            placeholder="Message"
            fullWidth
            multiline
            rows={4}
            sx={{
              mb: 2,
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
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrzaClientForm;
