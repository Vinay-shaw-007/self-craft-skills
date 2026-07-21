// src/pages/FaqPage.tsx
import Faq from "../components/Faq";
import Seo from "../components/Seo";
import useScrollToHash from "../hooks/useScrollToHash.ts";

const FaqPage = () => {
    useScrollToHash();
    return (
        <main>
            <Seo
                title="FAQ — Membership, Courses & Billing | Self Craft Skills"
                description="Answers about the Self Craft Skills membership: how the subscription works, how courses are delivered, cancelling anytime, and our refund policy."
                canonicalPath="/faq"
            />
            <Faq />
        </main>
    );
};
export default FaqPage;
