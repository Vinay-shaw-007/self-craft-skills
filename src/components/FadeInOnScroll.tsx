// src/components/FadeInOnScroll.tsx
// import { ReactNode } from 'react';
import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    children: ReactNode;
}

const FadeInOnScroll = ({ children }: Props) => {
    const { ref, inView } = useInView({
        // triggerOnce: true, // Only trigger the animation once
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    return (
        <Box
            ref={ref}
            sx={{
                transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
        >
            {children}
        </Box>
    );
};

export default FadeInOnScroll;
