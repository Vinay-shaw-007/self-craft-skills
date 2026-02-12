// src/hooks/useScrollToHash.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                // Keep anchor content visible below the sticky header.
                const headerOffset = 84;
                const elementTop =
                    element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: Math.max(elementTop - headerOffset, 0),
                    behavior: "smooth",
                });
            }
        } else {
            window.scrollTo(0, 0); // Scroll to top if no hash
        }
    }, [location]); // Rerun effect when location changes
};

export default useScrollToHash;
