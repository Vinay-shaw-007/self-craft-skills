import FreeResources from "../components/FreeResources";
import useScrollToHash from "../hooks/useScrollToHash";

const FreeResourcesPage = () => {
    useScrollToHash();
    return (
        <main>
            <FreeResources />
        </main>
    );
};
export default FreeResourcesPage;
