// src/pages/SignUpPage.tsx
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

const SignUpPage = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Sign Up Submitted!");
  };

  return (
    <AuthLayout
      title="Start Your Journey 🚀"
      subtitle="Create your account to enroll in courses, track your progress, and join our community."
      backgroundImage="url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200')"
      gradient="linear-gradient(135deg, rgba(255, 154, 158, 0.85) 0%, rgba(250, 208, 196, 0.85) 100%)"
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Sign Up
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField fullWidth margin="normal" label="Full Name" required />
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
            background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
          }}
        >
          Sign Up
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>OR</Divider>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          onClick={() => console.log("Google sign up")}
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
          onClick={() => console.log("LinkedIn sign up")}
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
          onClick={() => console.log("GitHub sign up")}
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
        Already have an account?{" "}
        <MuiLink component={RouterLink} to="/login" underline="hover" fontWeight="bold">
          Log In
        </MuiLink>
      </Typography>
    </AuthLayout>
  );
};

export default SignUpPage;