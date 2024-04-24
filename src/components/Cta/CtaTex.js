import { TypewriterEffectSmooth } from "../Cta/Cta";
import { Box, Button, Typography } from "@mui/material";

export function CtaTex() {
  const words = [
    { text: "Create" },
    { text: "technology" },
    { text: "with" },
    { text: "ORZA Tech.", className: "text-customBlue dark:text-customBlue" },
  ];

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        paddingTop: 0,
        paddingBottom: { xs: 2, sm: 5, md: 10 },
      }}
    >
      <div
        className="flex flex-col items-center pb-20 pt-20"
        style={{ padding: "20px", maxWidth: "90%" }}
      >
        <TypewriterEffectSmooth words={words} />
        <Typography
          variant="body1"
          sx={{ width: "100%", fontSize: { xs: "16px", sm: "20px" }, pb: 7 }}
        >
          The journey to freedom begins here, a pivotal moment that sets the
          stage for profound change. With each step forward, possibilities
          unfold, offering glimpses of liberation and self-realization. Embrace
          this journey with courage and openness, knowing that every stride
          brings you closer to a life of authenticity and fulfillment.
        </Typography>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <a href="/joinus">
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
              Join us
            </Button>
          </a>
          <a
            href="https://calendly.com/aibravo-orzatech/talkwithorza"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              sx={{
                width: 160, // w-40 -> 40 x 4 = 160px
                height: 40, // h-10 -> 10 x 4 = 40px
                borderRadius: "50px", // rounded-[50px]
                bgcolor: "white", // bg-white
                color: "#1c44f1", // text-customBlue -> Define customBlue in your theme
                border: 1,
                borderColor: "#1c44f1", // border-customBlue
                fontSize: "0.875rem", // text-sm
                fontWeight: "bold", // font-bold
                textTransform: "none", // uppercase
                "&:hover": {
                  bgcolor: "#1c44f1", // Hover background color
                  color: "white", // Hover text color
                },
              }}
            >
              Book a Call
            </Button>
          </a>
        </div>
      </div>
    </Box>
  );
}
