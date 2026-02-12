// src/pages/LoginPage.tsx
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Stack,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

import GoogleLogo from "../assets/google-logo.svg";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import GitHubLogo from "../assets/github-logo.svg";

const LoginPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Login Submitted!");
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Log in to access your courses and continue your learning journey."
      backgroundImage="url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200')"
      gradient="linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%)"
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Log In
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField fullWidth margin="normal" label="Email Address" type="email" required />
        <TextField fullWidth margin="normal" label="Password" type="password" required />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
          }}
        >
          Log In
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>OR</Divider>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          onClick={() => console.log("Google login")}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "50%",
            p: 1.5,
            "&:hover": {
              backgroundColor: "#f5f5f5",
              borderColor: "#ccc",
            },
          }}
        >
          <img src={GoogleLogo} alt="Google" style={{ height: 24, width: 24 }} />
        </IconButton>
        
        <IconButton
          onClick={() => console.log("LinkedIn login")}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "50%",
            p: 1.5,
            "&:hover": {
              backgroundColor: "#f5f5f5",
              borderColor: "#ccc",
            },
          }}
        >
          <img src={LinkedInLogo} alt="LinkedIn" style={{ height: 24, width: 24 }} />
        </IconButton>
        
        <IconButton
          onClick={() => console.log("GitHub login")}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "50%",
            p: 1.5,
            backgroundColor: "#000",
            "&:hover": {
              backgroundColor: "#333",
              borderColor: "#000",
            },
          }}
        >
          <img src={GitHubLogo} alt="GitHub" style={{ height: 24, width: 24, filter: "invert(1)" }} />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ mt: 3 }}>
        Don't have an account?{" "}
        <MuiLink component={RouterLink} to="/signup" underline="hover" fontWeight="bold">
          Sign Up
        </MuiLink>
      </Typography>
    </AuthLayout>
  );
};

export default LoginPage;