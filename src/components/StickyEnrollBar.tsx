// src/components/StickyEnrollBar.tsx
import { Box, Typography, Button, Container } from '@mui/material';
import type { Course } from './coursesData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from '../assets/logo.svg'; // Import your logo

interface StickyEnrollBarProps {
    course: Course | undefined;
}

const StickyEnrollBar = ({ course }: StickyEnrollBarProps) => {
    // Removed the scroll trigger to make the bar always visible
    if (!course || course.status !== 'Open for Enrollment') {
        return null; // Don't show the bar if the course is not open
    }

    return (

        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: '50%',
                py: 2,
                width: {xs: '95%', md: '70%'},
                borderRadius: "16px 16px 0 0",
                // It layers a subtle pattern on top of your premium blue gradient
                backgroundColor: '#0a192f', // Fallback color
                backgroundImage: `
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                    linear-gradient(45deg, #0a192f 30%, #1a237e 90%)
                `,
                color: 'white',
                boxShadow: '0 -5px 20px rgba(0,0,0,0.25)',
                zIndex: 1000,
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                // --- 2. Animated Entrance ---
                transform: 'translateX(-50%)',
                animation: 'slideUp 0.5s ease-out forwards',
                '@keyframes slideUp': {
                    'from': { transform: 'translateY(100%) translateX(-50%)' },
                    'to': { transform: 'translateY(0) translateX(-50%)' },
                }
            }}
        >

            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                    {/* Left Side: Brand and Course Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, overflow: 'hidden', flexShrink: 1 }}>
                        <Box component="img" src={Logo} alt="Logo" sx={{ height: '40px', display: { xs: 'none', md: 'block' } }} />
                        <Box>
                            <Typography fontWeight="bold">{course.title}</Typography>
                            <Typography variant="caption" sx={{ color: '#bdbdbd' }}>Start your learning journey today.</Typography>
                        </Box>
                    </Box>
                    
                    {/* Right Side: Price and Button */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, ml: 'auto' }}>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography
                                variant="body1"
                                sx={{ textDecoration: 'line-through', color: '#9ca3af', lineHeight: 1 }}
                            >
                                ₹1999
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{ color: '#ffffffff' }}>
                                ₹999
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            href="https://forms.gle/HnFrNt84kW8cibSZ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                borderRadius: '50px',
                                px: { xs: 3, md: 4 },
                                py: 1.5,
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                background: 'linear-gradient(45deg, #D32F2F 30%, #E57373 90%)',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(211, 47, 47, 0.4)',
                                transition: 'transform 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
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