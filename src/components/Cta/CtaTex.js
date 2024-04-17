import { TypewriterEffectSmooth } from "../Cta/Cta";
import { Box } from "@mui/material";

export function CtaTex() {
  const words = [
    { text: "Build" },
    { text: "awesome" },
    { text: "apps" },
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
        style={{ padding: "20px", maxWidth: "70%" }}
      >
        <TypewriterEffectSmooth words={words} />
        <p
          className="text-neutral-600 dark:text-black-500 text-xs sm:text-base pb-12"
          style={{ width: "100%" }}
        >
          "The journey to freedom begins here, a pivotal moment that sets the
          stage for profound change. With each step forward, possibilities
          unfold, offering glimpses of liberation and self-realization. Embrace
          this journey with courage and openness, knowing that every stride
          brings you closer to a life of authenticity and fulfillment."
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-[50px] bg-customBlue border dark:border-white border-transparent text-white text-sm font-bold">
            Join us
          </button>
          <button className="w-40 h-10 rounded-[50px] bg-white text-customBlue border border-customBlue text-sm font-bold">
            Book a Call
          </button>
        </div>
      </div>
    </Box>
  );
}
