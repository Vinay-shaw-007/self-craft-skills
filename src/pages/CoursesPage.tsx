// src/pages/CoursesPage.tsx
import Courses from "../components/Courses";
import useScrollToHash from "../hooks/useScrollToHash";

const CoursesPage = () => {
    useScrollToHash();
    return (
        <main>
            <Courses />
        </main>
    );
};
export default CoursesPage;
