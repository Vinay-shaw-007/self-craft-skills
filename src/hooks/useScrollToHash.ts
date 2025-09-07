// src/hooks/useScrollToHash.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            window.scrollTo(0, 0); // Scroll to top if no hash
        }
    }, [location]); // Rerun effect when location changes
};

export default useScrollToHash;
