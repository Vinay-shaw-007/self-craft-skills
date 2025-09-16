// src/components/HowItWorks.tsx
import { Box, Container, Typography, Grid } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VideocamIcon from "@mui/icons-material/Videocam";
import PaymentIcon from "@mui/icons-material/Payment";
import FadeInOnScroll from "./FadeInOnScroll";

const steps = [
  {
    icon: <AdsClickIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "Find Us Online",
    description: "Discover our courses through Facebook & Instagram ads.",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "Register & Onboard",
    description: "Easily register and get all updates via WhatsApp.",
    gradient: "linear-gradient(135deg, #42e695 0%, #3bb2b8 100%)",
  },
  {
    icon: <VideocamIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "Live Learning",
    description: "Join interactive live sessions on Zoom or Google Meet.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 40, color: "white" }} />,
    title: "Simple Payments",
    description: "Pay securely using Google Forms with QR code integration.",
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 4 },
        borderRadius: "32px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 250,
          height: 250,
          background: "radial-gradient(circle, #ff9a9e33, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          right: -100,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #667eea33, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <Container>
        <FadeInOnScroll>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            How It Works
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#cbd5e1", mb: 6 }}
          >
            A simple process to get started with your learning journey 🚀
          </Typography>
        </FadeInOnScroll>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid size={{lg:3, md:6, xs:12}} key={index}>
              <FadeInOnScroll>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "24px",
                    textAlign: "center",
                    position: "relative",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.02)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  {/* Step Number in Background */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 20,
                      fontSize: "3rem",
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.05)",
                      zIndex: 0,
                    }}
                  >
                    {`0${index + 1}`}
                  </Typography>

                  {/* Icon in Gradient Circle */}
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: step.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                      zIndex: 1,
                    }}
                  >
                    {step.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 2, mb: 1, zIndex: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#e0e0e0", zIndex: 1, fontSize: "0.95rem" }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </FadeInOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
