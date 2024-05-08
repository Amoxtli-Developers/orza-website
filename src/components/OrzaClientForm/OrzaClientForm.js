/* global Email */
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CardMedia,
  Snackbar,
} from "@mui/material";
import orzalogo from "../../assets/images/logo/orza-logo.png";

const OrzaClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    industry: "",
    companySize: "",
    role: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      companyName,
      industry,
      companySize,
      role,
      message,
    } = formData;

    const emailBody = `
      <div style="text-align: center;">
        <img src="https://orzatech.com/static/media/orza-logo.e9d27f41481829f03db2.png" alt="Orza logo" style="width: 50%; margin-bottom: 10px;" />
        <h3>New client contact from ${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Company Name: ${companyName}</p>
        <p>Industry: ${industry}</p>
        <p>Company Size: ${companySize}</p>
        <p>Role/Position: ${role}</p>
        <p>Message: ${message}</p>
      </div>
    `;

    try {
      const result = await Email.send({
        SecureToken: "0f0ecf8b-8735-47e9-99d8-fac0323d1bfa",
        To: "sales@orzatech.com ",
        From: "amoxtlidev@gmail.com",
        Subject: "Contact from ORZA Tech Client Form",
        Body: emailBody,
      });
      console.log(result);
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        companyName: "",
        phone: "",
        industry: "",
        companySize: "",
        role: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
          <CardMedia component="img" image={orzalogo} alt="Partner Image" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            Become a project client with ORZA Tech
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Elevate your operations with ORZA Tech. Discover custom automation
            solutions that drive efficiency and scalability.
          </Typography>
          <TextField
            name="name"
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
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
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
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="companyName"
            variant="outlined"
            placeholder="Company name"
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
            value={formData.companyName}
            onChange={handleChange}
          />
          <TextField
            name="phone"
            variant="outlined"
            placeholder="Phone number"
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
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            name="industry"
            variant="outlined"
            placeholder="Industry"
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
            value={formData.industry}
            onChange={handleChange}
          />
          <TextField
            name="companySize"
            variant="outlined"
            placeholder="Company size"
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
            value={formData.companySize}
            onChange={handleChange}
          />
          <TextField
            name="role"
            variant="outlined"
            placeholder="Role/Position"
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
            value={formData.role}
            onChange={handleChange}
          />
          <TextField
            name="message"
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
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{
              mt: 2,
              width: 160,
              height: 40,
              borderRadius: "50px",
              backgroundColor: "#1c44f1",
              border: 1,
              borderColor: "transparent",
              color: "white",
              fontSize: "0.875rem",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#1c44f1",
              },
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Message sent successfully!"
      />
    </Box>
  );
};

export default OrzaClientForm;
