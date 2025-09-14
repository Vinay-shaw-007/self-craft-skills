// src/components/StatsBanner.tsx
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import FadeInOnScroll from "./FadeInOnScroll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import BoltIcon from "@mui/icons-material/Bolt";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const stats = [
  { metric: "6 Weeks", label: "Course Duration", icon: <AccessTimeIcon sx={{ fontSize: 40, color: "#f59e0b" }} /> },
  { metric: "30 Seats", label: "Per Cohort", icon: <PeopleIcon sx={{ fontSize: 40, color: "#10b981" }} /> },
  { metric: "1000+", label: "Bonus Prompts", icon: <BoltIcon sx={{ fontSize: 40, color: "#3b82f6" }} /> },
  { metric: "Live", label: "Q&A Sessions", icon: <LiveTvIcon sx={{ fontSize: 40, color: "#ef4444" }} /> },
];

const StatsBanner = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(90deg, #fef08a, #facc15)",
      }}
    >
      <Container>
        <FadeInOnScroll>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{xs:12, sm:6, md:3}} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box mb={2}>{stat.icon}</Box>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: "text.primary" }}
                  >
                    {stat.metric}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </FadeInOnScroll>
      </Container>
    </Box>
  );
};

export default StatsBanner;
