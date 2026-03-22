// src/components/FadeInOnScroll.tsx
// import { ReactNode } from 'react';
import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    children: ReactNode;
    style?: React.CSSProperties;
}

const FadeInOnScroll = ({ children, style }: Props) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <Box
            ref={ref}
            style={style}
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
