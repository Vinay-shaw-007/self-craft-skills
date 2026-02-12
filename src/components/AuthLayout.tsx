// src/components/AuthLayout.tsx
import { Box, Grid, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  gradient?: string;
  backgroundImage?: string;
}

const AuthLayout = ({ 
  title, 
  subtitle, 
  children, 
  gradient, 
  backgroundImage 
}: AuthLayoutProps) => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Branding Panel */}
      <Grid
        size={{
          xs: false,
          sm: 5,
          md: 6
        }}
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          p: 6,
          position: "relative",
          overflow: "hidden",
          // Background image with overlay
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: backgroundImage || `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.4)",
            zIndex: 1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: gradient || "linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)",
            zIndex: 2,
          },
          color: "white",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 3 }}>
          {/* Logo or Icon */}
          <Box sx={{ mb: 4 }}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 3 }}>
            {subtitle}
          </Typography>
          
          {/* Additional branding elements */}
          <Box sx={{ mt: 4, display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                📚
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Multiple Courses
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🎓
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Expert Instructors
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                🌟
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Self-Paced Learning
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Right Form Panel */}
      <Grid
        size={{
          xs: 12,
          sm: 7,
          md: 6
        }}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 420,
            textAlign: "center",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;