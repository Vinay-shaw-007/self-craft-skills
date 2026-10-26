// src/pages/FaqPage.tsx
import Faq from "../components/Faq";
import Seo from "../components/Seo";
import useScrollToHash from "../hooks/useScrollToHash.ts";

const FaqPage = () => {
    useScrollToHash();
    return (
        <main>
            <Seo
                title="FAQ — Membership, Courses & YGM Services | Self Craft Skills"
                description="Answers about the Self Craft Skills membership and YGM services: how the subscription works, course delivery, cancelling, refunds, and hiring us to run your channel."
                canonicalPath="/faq"
            />
            <Faq />
        </main>
    );
};
export default FaqPage;
