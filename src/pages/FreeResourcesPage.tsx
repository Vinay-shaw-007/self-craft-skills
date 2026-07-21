import FreeResources from "../components/FreeResources";
import Seo from "../components/Seo";
import useScrollToHash from "../hooks/useScrollToHash";

const FreeResourcesPage = () => {
    useScrollToHash();
    return (
        <main>
            <Seo
                title="Free AI Tools & E-Books | Self Craft Skills"
                description="Free, no-signup AI tools and e-books from Self Craft Skills — prompt builders, an AI image prompt tool, a time-discipline coach, and a beginner AI e-book."
                canonicalPath="/free-resources"
            />
            <FreeResources />
        </main>
    );
};
export default FreeResourcesPage;
