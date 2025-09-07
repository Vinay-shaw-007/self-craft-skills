// src/pages/FaqPage.tsx
import Faq from "../components/Faq";
import useScrollToHash from "../hooks/useScrollToHash.ts";

const FaqPage = () => {
    useScrollToHash();
    return (
        <main>
            <Faq />
        </main>
    );
};
export default FaqPage;
