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
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { coursesData } from "./coursesData"; // Import the new data file

const Courses = () => {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "white",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
            }}
        >
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
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        textAlign: "center",
                                        p: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                    >
                                        {course.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        - Self Craft Skills
                                    </Typography>
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
                                                    "linear-gradient(45deg, #FF8E53 30%, #FF4081 90%)",
                                                color: "white",
                                                boxShadow:
                                                    "0 4px 15px rgba(255, 100, 100, 0.4)",
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
