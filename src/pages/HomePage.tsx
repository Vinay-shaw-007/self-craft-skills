import { Box } from "@mui/material";
import About from "../components/About";
import Courses from "../components/Courses";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import UrgencyCta from "../components/UrgencyCta";
import useScrollToHash from "../hooks/useScrollToHash";

const HomePage = () => {
    useScrollToHash();

    return (
        <main>
            <Box id="hero">
                <Hero />
            </Box>
            <Box id="about">
                <About />
            </Box>
            <Box id="courses">
                <Courses />
            </Box>
            <UrgencyCta />
            <Box id="faq">
                <Faq />
            </Box>
        </main>
    );
};

export default HomePage;
