import { Box } from "@mui/material";
import About from "../components/About";
import Courses from "../components/Courses";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import UrgencyCta from "../components/UrgencyCta";
import PromiseSection from "../components/PromiseSection";
import PricingTeaser from "../components/PricingTeaser";
import CategoriesSection from "../components/CategoriesSection";
import MeetMentorSection from "../components/MeetMentorSection";
import StickyConversionBar from "../components/StickyConversionBar";
import Seo from "../components/Seo";
import useScrollToHash from "../hooks/useScrollToHash";
import { useSubscription } from "../hooks/useSubscription";

const HomePage = () => {
    useScrollToHash();
    const { isSubscribed } = useSubscription();

    return (
        <main>
            <Seo
                title="Self Craft Skills — One Membership, Every Course"
                description="One simple monthly membership unlocks every course on Self Craft Skills — beginner-friendly, on-demand courses in AI, content creation, and communication. Cancel anytime."
                canonicalPath="/"
            />
            <Box id="hero">
                <Hero />
            </Box>
            <Box id="about">
                <About />
            </Box>
            {/* Conversion sections — only for visitors who haven't subscribed yet. */}
            {!isSubscribed && <UrgencyCta />}
            <Box id="courses">
                <Courses />
            </Box>
            {!isSubscribed && <PromiseSection />}
            {!isSubscribed && <PricingTeaser />}
            {!isSubscribed && <CategoriesSection />}
            <MeetMentorSection />
            <Box id="faq">
                <Faq />
            </Box>
            <StickyConversionBar />
        </main>
    );
};

export default HomePage;
