// src/components/Courses.tsx
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { coursesData } from "./coursesData"; // Import the new data file
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import useBatchCountdown from "../hooks/useBatchCountdown";

// Helper to get an icon for each feature
const getFeatureIcon = (featureText: string) => {
    if (featureText.includes('Live Classes')) return <LiveTvIcon color="warning" fontSize="inherit" />;
    if (featureText.includes('Beginner-Friendly')) return <PersonOutlineIcon color="warning" fontSize="inherit" />;
    if (featureText.includes('Q&A')) return <QuestionAnswerIcon color="warning" fontSize="inherit" />;
    if (featureText.includes('experience')) return <SchoolIcon color="warning" fontSize="inherit" />;
    if (featureText.includes('Certificate')) return <WorkspacePremiumIcon color="warning" fontSize="inherit" />;
    if (featureText.includes('Bonus')) return <CardGiftcardIcon color="warning" fontSize="inherit" />;
    return null;
}

const Courses = () => {
    const { days, hours, minutes, seconds, isLive } = useBatchCountdown();

    return (
        <Box
            sx={{
                // py: { xs: 6, md: 10 },
                // backgroundColor: "white",
                // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
                // backgroundRepeat: "repeat",
            }}
        >
            {/* Top-left pink circle */}
<Box
    sx={{
        position: "absolute",
        top: { xs: -30, md: -50 },
        left: { xs: -30, md: -50 },
        width: { xs: 150, md: 300 },
        height: { xs: 150, md: 300 },
        background: "linear-gradient(135deg, #FF9A8B, #FF6A88)",
        borderRadius: "50%",
        opacity: { xs: 0.1, md: 0.2 },
        zIndex: 0,
    }}
/>

{/* Bottom-right yellow-orange circle */}
<Box
    sx={{
        position: "absolute",
        bottom: { xs: -20, md: -60 },
        right: { xs: -20, md: -40 },
        width: { xs: 100, md: 200 },
        height: { xs: 100, md: 200 },
        background: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
        borderRadius: "50%",
        opacity: { xs: 0.1, md: 0.2 },
        zIndex: 0,
    }}
/>

            <Container>
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    fontWeight="bold"
                >
                    Our Courses
                </Typography>
                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{ mt: 1, mb: 4 }}
                >
                    Choose your path to growth with our programs.
                </Typography>
                <Box
                    sx={{
                        mb: 4,
                        p: { xs: 2.25, md: 3 },
                        borderRadius: 4,
                        textAlign: "center",
                        background:
                            "radial-gradient(circle at 85% 0%, rgba(255,110,110,0.24), transparent 40%), radial-gradient(circle at 0% 100%, rgba(255,145,77,0.2), transparent 35%), linear-gradient(135deg, #090c16 0%, #141b2d 55%, #1f2438 100%)",
                        border: "1px solid rgba(255,255,255,0.16)",
                        boxShadow: "0 18px 38px rgba(7, 10, 20, 0.48)",
                        maxWidth: 760,
                        mx: "auto",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01) 55%)",
                            pointerEvents: "none",
                        }}
                    />
                    <Typography
                        sx={{
                            position: "relative",
                            color: "#ffd8bf",
                            fontWeight: 800,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            fontSize: { xs: "0.78rem", md: "0.88rem" },
                        }}
                    >
                        First Batch Starts March 12, 2026
                    </Typography>
                    <Typography
                        sx={{
                            position: "relative",
                            mt: 0.75,
                            color: "rgba(255,255,255,0.95)",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                        }}
                    >
                        {isLive ? "Batch is live now" : "Enroll now to secure your seat"}
                    </Typography>
                    <Box
                        sx={{
                            mt: 1.5,
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(4, minmax(68px, 1fr))",
                            gap: 1,
                            maxWidth: 420,
                            mx: "auto",
                            position: "relative",
                        }}
                    >
                        {[
                            { label: "Days", value: days },
                            { label: "Hours", value: hours },
                            { label: "Minutes", value: minutes },
                            { label: "Seconds", value: seconds },
                        ].map((item) => (
                            <Box
                                key={item.label}
                                sx={{
                                    borderRadius: 2.5,
                                    p: 1,
                                    textAlign: "center",
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(5px)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        color: "#ffcfb8",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {String(item.value).padStart(2, "0")}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "0.72rem",
                                        color: "rgba(255,255,255,0.78)",
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Grid container spacing={4} justifyContent="center">
                    {coursesData.map((course) => (
                        <Grid key={course.id} size={{ lg: 4, md: 4, xs: 12 }}>
                            <Card
                                sx={{
                                    textDecoration: "none",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: "16px",
                                    backgroundColor: "white",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                                    transition:
                                        "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow:
                                            "0 12px 30px rgba(0,0,0,0.10)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={course.image}
                                    alt={course.title}
                                    sx={{
                                        height: 200,
                                        borderTopLeftRadius: "16px",
                                        borderTopRightRadius: "16px",
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {course.title}
                  </Typography>

                  {/* --- THIS IS THE UPDATED LOGIC --- */}
                  {/* It checks if the course is active. If so, it shows the features list. */}
                  {/* If not, it shows the simple summary. */}
                  {course.status === 'Open for Enrollment' && course.details.keyFeatures ? (
                    <List dense sx={{ mt: 2 }}>
                      {course.details.keyFeatures.map(feature => (
                        <ListItem key={feature} disablePadding>
                          <ListItemIcon sx={{ minWidth: '32px', color: 'primary.main' }}>
                            {getFeatureIcon(feature)}
                          </ListItemIcon>
                          <ListItemText primary={feature} primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {course.details.summary}
                    </Typography>
                  )}
                </CardContent>
                                <Box sx={{ p: 3, pt: 0 }}>
                                    {course.status === "Open for Enrollment" ? (
                                        // 2. Button text changed to "Details" and it now handles the navigation
                                        <Button
                                            component={RouterLink}
                                            to={`/courses/${course.id}`}
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                borderRadius: "50px",
                                                py: 1.5,
                                                fontWeight: "bold",
                                                background:
                                                    "linear-gradient(45deg, #e44242ff 30%, #ff0357ff 90%)",
                                                color: "white",
                                                boxShadow:
                                                    "0 4px 15px rgba(114, 45, 45, 0.4)",
                                            }}
                                        >
                                            More Details
                                        </Button>
                                    ) : (
                                        <Button
                                            fullWidth
                                            disabled
                                            variant="contained"
                                            sx={{
                                                borderRadius: "50px",
                                                py: 1.5,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Coming Soon!
                                        </Button>
                                    )}
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Courses;
