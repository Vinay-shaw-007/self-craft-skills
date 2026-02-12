// src/components/StickyEnrollBar.tsx
import { Box, Typography, Button, Container } from "@mui/material";
import type { Course } from "./coursesData";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../assets/logo.svg";

interface StickyEnrollBarProps {
    course: Course | undefined;
}

const StickyEnrollBar = ({ course }: StickyEnrollBarProps) => {
    if (!course || course.status !== "Open for Enrollment") {
        return null;
    }

    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 0,
                left: "50%",
                py: { xs: 1.4, md: 1.8 },
                width: { xs: "95%", md: "70%" },
                borderRadius: "16px 16px 0 0",
                backgroundColor: "#0a192f",
                backgroundImage: {
                    xs: "linear-gradient(45deg, #0a192f 30%, #1a237e 90%)",
                    md: `
                        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                        linear-gradient(45deg, #0a192f 30%, #1a237e 90%)
                    `,
                },
                color: "white",
                boxShadow: "0 -8px 24px rgba(15, 23, 42, 0.28)",
                zIndex: 1000,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                transform: "translateX(-50%)",
                animation: "slideUp 0.5s ease-out forwards",
                "@keyframes slideUp": {
                    from: { transform: "translateY(100%) translateX(-50%)" },
                    to: { transform: "translateY(0) translateX(-50%)" },
                },
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { xs: 1.2, md: 2 },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            overflow: "hidden",
                            flexShrink: 1,
                            pr: { xs: 1, md: 2.5 },
                            mr: { xs: 0.5, md: 1.5 },
                            borderRight: "1px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        <Box
                            component="img"
                            src={Logo}
                            alt="Logo"
                            sx={{
                                height: "40px",
                                display: { xs: "none", md: "block" },
                            }}
                        />
                        <Box>
                            <Typography
                                fontWeight={700}
                                sx={{
                                    fontSize: { xs: "0.92rem", md: "1.02rem" },
                                    lineHeight: 1.2,
                                }}
                            >
                                {course.title}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: "#bdbdbd",
                                    display: { xs: "none", sm: "block" },
                                }}
                            >
                                Start your learning journey today.
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 2, md: 3 },
                            ml: "auto",
                            flexShrink: 0,
                        }}
                    >
                        <Box sx={{ textAlign: "right" }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    textDecoration: "line-through",
                                    color: "#9ca3af",
                                    lineHeight: 1,
                                }}
                            >
                                {"\u20B91999"}
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{ color: "#fff" }}>
                                {"\u20B9999"}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            href="https://forms.gle/HnFrNt84kW8cibSZ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderRadius: "50px",
                                px: { xs: 2.2, md: 3.6 },
                                py: { xs: 0.45, md: 1.3 },
                                fontWeight: "bold",
                                fontSize: { xs: "0.8rem", md: "0.98rem" },
                                minWidth: { xs: "136px", md: "170px" },
                                background:
                                    "linear-gradient(45deg, #D32F2F 30%, #E57373 90%)",
                                color: "white",
                                boxShadow: "0 8px 20px rgba(211, 47, 47, 0.35)",
                                transition: "transform 0.2s ease",
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            Enroll Now
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default StickyEnrollBar;
