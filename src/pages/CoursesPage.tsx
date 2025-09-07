// src/pages/CoursesPage.tsx
import { Box } from "@mui/material";
import Courses from "../components/Courses";
import HowItWorks from "../components/HowItWorks";
import useScrollToHash from "../hooks/useScrollToHash";

const CoursesPage = () => {
    useScrollToHash();
    return (
        <main>
            <Courses />
            {/* 2. This is the new container for the HowItWorks section */}
            {/* It creates the white space and textured background */}
            <Box
                id="how-it-works"
                sx={{
                    backgroundColor: "white",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23dbe9f6' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
                    py: { xs: 6, md: 10 },
                    px: { xs: 2, md: 4 },
                }}
            >
                <HowItWorks />
            </Box>
        </main>
    );
};
export default CoursesPage;
