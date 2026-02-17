// src/components/CtaBanner.tsx
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";
import GroupsIcon from "@mui/icons-material/Groups"; 
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"; 
import useBatchCountdown from "../hooks/useBatchCountdown";

const CtaBanner = () => {
  const { days, hours, minutes, seconds, isLive } = useBatchCountdown();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
    <Container maxWidth="md" sx={{ my: { xs: 6, md: 10 } }}>
      <FadeInOnScroll>
        <Paper
          elevation={6}
          sx={{
            borderRadius: "24px",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            background: "linear-gradient(135deg, #0a192f 30%, #1a237e 90%)",
            
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background decoration */}
          <RocketLaunchIcon
            sx={{
              position: "absolute",
              top: -40,
              right: -40,
              fontSize: "220px",
              color: "rgba(255,255,255,0.06)",
              transform: "rotate(-20deg)",
            }}
          />

          {/* Heading */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 2,
            }}
          >
            The Future Will Not Wait. Why Should You?
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#e0e0e0",
              maxWidth: "700px",
              mx: "auto",
              mb: 4,
            }}
          >
            Upgrade your career and personal growth with <b>Self-Craft Skills</b> live programs.
          </Typography>

          {/* Urgency Card inside */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: "16px",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(6px)",
              maxWidth: "500px",
              mx: "auto",
              mb: 3,
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
              <GroupsIcon sx={{ color: "#FFD700" }} />
              <Typography
                fontWeight="bold"
                variant="h6"
                sx={{
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                }}
              >
                Only 30 Seats are Available
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#bdbdbd", mt: 1 }}>
              First Batch Starts March 12, 2026
            </Typography>
            <Typography variant="body2" sx={{ color: "#bdbdbd", mt: 0.5 }}>
              {isLive ? "Batch is live now." : "Enroll now to secure your seat."}
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(64px, 1fr))",
                gap: 1,
              }}
            >
              {[
                { label: "D", value: days },
                { label: "H", value: hours },
                { label: "M", value: minutes },
                { label: "S", value: seconds },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    borderRadius: 2,
                    p: 1,
                    backgroundColor: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Typography sx={{ fontWeight: 800, lineHeight: 1 }}>
                    {String(item.value).padStart(2, "0")}
                  </Typography>
                  <Typography sx={{ fontSize: "0.7rem", color: "#d7d7d7" }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* CTA Button */}
          <Button
            component={RouterLink}
            to="/courses"
            variant="contained"
            size="large"
            sx={{
              borderRadius: "50px",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
              background: "linear-gradient(45deg, #D32F2F, #E57373)",
              boxShadow: "0 6px 20px rgba(211, 47, 47, 0.5)",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 8px 25px rgba(211, 47, 47, 0.6)",
              },
            }}
          >
            Get Started Today
          </Button>
        </Paper>
      </FadeInOnScroll>
    </Container>
    </Box>
  );
};

export default CtaBanner;
