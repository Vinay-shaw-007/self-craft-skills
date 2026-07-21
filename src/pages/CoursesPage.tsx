import Courses from "../components/Courses";
import Seo from "../components/Seo";
import useScrollToHash from "../hooks/useScrollToHash";

const CoursesPage = () => {
    useScrollToHash();
    return (
        <main>
            <Seo
                title="Courses — Learn AI, Content & Communication | Self Craft Skills"
                description="Explore every course included in your Self Craft Skills membership — beginner-friendly, on-demand video courses in AI, content creation, and communication."
                canonicalPath="/courses"
            />
            <Courses />
        </main>
    );
};
export default CoursesPage;
