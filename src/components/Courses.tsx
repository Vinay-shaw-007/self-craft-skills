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
