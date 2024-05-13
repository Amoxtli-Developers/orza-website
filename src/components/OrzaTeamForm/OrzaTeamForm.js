/* global Email */
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  Snackbar,
  Alert,
  InputLabel,
} from "@mui/material";
import Title from "../Title/Title";

const OrzaTeamForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Define the total number of steps in the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    professionalSummary: "",
    resume: null,
    education: "",
    workExperience: "",
    technicalSkills: "",
    softSkills: "",
    portfolio: "",
    references: "",
    coverLetter: null,
    diversity: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (loadEvent) => {
      const base64 = loadEvent.target.result;
      setFormData({
        ...formData,
        [event.target.name]: {
          base64: base64.split(",")[1], // Remove the base64 header
          name: file.name,
        },
      });
    };

    reader.readAsDataURL(file);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.professionalSummary)
      newErrors.professionalSummary = "Professional summary is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.education) newErrors.education = "Education is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.workExperience)
      newErrors.workExperience = "Work experience is required";
    if (!formData.technicalSkills)
      newErrors.technicalSkills = "Technical skills are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep5 = () => {
    const newErrors = {};
    if (!formData.softSkills) newErrors.softSkills = "Soft skills are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep6 = () => {
    const newErrors = {};
    if (!formData.references) newErrors.references = "References are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    setCurrentStep(currentStep < totalSteps ? currentStep + 1 : currentStep);
  };

  const prevStep = () => {
    setCurrentStep(currentStep > 1 ? currentStep - 1 : currentStep);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all validations pass based on the current step
    const validations = [
      validateStep1,
      validateStep2,
      validateStep3,
      validateStep4,
      validateStep5,
      validateStep6,
    ];
    const validateCurrentStep = validations[currentStep - 1];

    // If current step validation fails, stop further processing
    if (!validateCurrentStep()) {
      console.error("Validation failed for step " + currentStep);
      return;
    }

    // Build the email body
    const emailBody = `
      <div style="text-align: center;">
        <img src="https://orzatech.com/static/media/orza-logo.e9d27f41481829f03db2.png" alt="Orza logo" style="width: 50%; margin-bottom: 10px;" />
        <h3>New Application from ${formData.name}</h3>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Professional Summary:</strong> ${
          formData.professionalSummary
        }</p>
        <p><strong>Education:</strong> ${formData.education}</p>
        <p><strong>Work Experience:</strong> ${formData.workExperience}</p>
        <p><strong>Technical Skills:</strong> ${formData.technicalSkills}</p>
        <p><strong>Soft Skills:</strong> ${formData.softSkills}</p>
        <p><strong>Portfolio Link:</strong> ${formData.portfolio}</p>
        <p><strong>References:</strong> ${formData.references}</p>
        <p><strong>Cover Letter Provided:</strong> ${
          formData.coverLetter ? "Yes" : "No"
        }</p>
        <p><strong>Diversity Information:</strong> ${formData.diversity}</p>
      </div>
    `;

    // Attachment handling (resume and cover letter)
    let attachments = [];
    if (formData.resume && formData.resume.base64) {
      attachments.push({
        name: formData.resume.name,
        data: formData.resume.base64
      });
    }

    if (formData.coverLetter && formData.coverLetter.base64) {
      attachments.push({
        name: formData.coverLetter.name,
        data: formData.coverLetter.base64
      });
    }


    console.log("Attachments Prepared: ", attachments); // Debugging line

    try {
      const result = await Email.send({
        SecureToken: "0f0ecf8b-8735-47e9-99d8-fac0323d1bfa",
        To: "jointheteam@orzatech.com ",
        From: "amoxtlidev@gmail.com",
        Subject: "Contact from ORZA Tech TEAM Form",
        Body: emailBody,
        Attachments: attachments,
      });

      console.log("Email sent successfully:", result);
      setOpenSnackbar(true);

      // Reset the form state to clear the fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        professionalSummary: "",
        resume: null,
        education: "",
        workExperience: "",
        technicalSkills: "",
        softSkills: "",
        portfolio: "",
        references: "",
        coverLetter: null,
        diversity: "",
      });
    } catch (error) {
      console.error("Failed to send email", error);
      // Optionally update state to show an error message
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              placeholder="Please provide your legal name."
              fullWidth
              onChange={handleChange}
              value={formData.name}
              error={!!errors.name}
              helperText={errors.name}
              required
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
              name="email"
              label="Email"
              variant="outlined"
              placeholder="This will be our primary means of communication."
              fullWidth
              onChange={handleChange}
              value={formData.email}
              error={!!errors.email}
              helperText={errors.email}
              required
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
              name="phone"
              label="Phone"
              variant="outlined"
              placeholder="Include your country code if applying from outside Mexico."
              fullWidth
              onChange={handleChange}
              value={formData.phone}
              error={!!errors.phone}
              helperText={errors.phone}
              required
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
          </>
        );
      case 2:
        return (
          <>
            <TextField
              name="location"
              label="Current Location"
              variant="outlined"
              placeholder="Helps us understand your geographical location."
              fullWidth
              onChange={handleChange}
              value={formData.location}
              error={!!errors.location}
              helperText={errors.location}
              required
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
              name="professionalSummary"
              label="Professional Summary"
              variant="outlined"
              placeholder="Summarize your professional background and key skills."
              fullWidth
              multiline
              rows={4}
              onChange={handleChange}
              value={formData.professionalSummary}
              error={!!errors.professionalSummary}
              helperText={errors.professionalSummary}
              required
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
          </>
        );
      case 3:
        return (
          <>
            <InputLabel htmlFor="resume">Upload Your Resume/CV</InputLabel>
            <TextField
              type="file"
              name="resume"
              variant="outlined"
              fullWidth
              onChange={handleFileChange}
              error={!!errors.resume}
              helperText={errors.resume}
              required
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
              name="education"
              label="Educational Background"
              variant="outlined"
              placeholder="List your degrees and any relevant certifications."
              fullWidth
              multiline
              rows={4}
              onChange={handleChange}
              value={formData.education}
              error={!!errors.education}
              helperText={errors.education}
              required
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
          </>
        );
      case 4:
        return (
          <>
            <TextField
              name="workExperience"
              label="Work Experience"
              variant="outlined"
              placeholder="Describe Your Work Experience, include your roles, responsibilities, and achievements."
              fullWidth
              multiline
              rows={4}
              onChange={handleChange}
              value={formData.workExperience}
              error={!!errors.workExperience}
              helperText={errors.workExperience}
              required
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
              name="technicalSkills"
              label="Technical Skills"
              variant="outlined"
              placeholder="Specify technical skills relevant to the job you're applying for."
              fullWidth
              onChange={handleChange}
              value={formData.technicalSkills}
              error={!!errors.technicalSkills}
              helperText={errors.technicalSkills}
              required
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
          </>
        );
      case 5:
        return (
          <>
            <TextField
              name="softSkills"
              label="Soft Skills"
              variant="outlined"
              placeholder="Mention skills like teamwork, communication, leadership."
              fullWidth
              onChange={handleChange}
              value={formData.softSkills}
              error={!!errors.softSkills}
              helperText={errors.softSkills}
              required
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
              name="portfolio"
              label="Portfolio"
              variant="outlined"
              placeholder="Share links to your work or projects (for design or engineering roles)."
              fullWidth
              onChange={handleChange}
              value={formData.portfolio}
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
          </>
        );

      case 6:
        return (
          <>
            <TextField
              name="references"
              label="Professional References"
              variant="outlined"
              placeholder="Include names and contact information for references."
              fullWidth
              onChange={handleChange}
              value={formData.references}
              error={!!errors.references}
              helperText={errors.references}
              required
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
            <InputLabel htmlFor="resume">Upload Your Cover Letter</InputLabel>
            <TextField
              type="file"
              name="coverLetter"
              variant="outlined"
              fullWidth
              onChange={handleFileChange}
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
              name="diversity"
              label="Diversity Information"
              variant="outlined"
              placeholder="Share any demographic information voluntarily."
              fullWidth
              onChange={handleChange}
              value={formData.diversity}
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
          </>
        );
      default:
        return null;
    }
  };

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
        Build the future with us! We’re looking for innovative minds eager to
        push the boundaries of automation and technology.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} mb={2}>
          {renderStepContent(currentStep)}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {currentStep > 1 && (
            <Button
              onClick={prevStep}
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
              Back
            </Button>
          )}
          {currentStep < totalSteps ? (
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
              onClick={nextStep}
            >
              Next
            </Button>
          ) : (
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
              type="submit"
            >
              Submit
            </Button>
          )}
        </Box>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your application has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default OrzaTeamForm;
