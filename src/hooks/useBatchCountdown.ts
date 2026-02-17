import { useEffect, useMemo, useState } from "react";

const BATCH_START_ISO = "2026-03-12T00:00:00+05:30";

const getCountdown = () => {
    const target = new Date(BATCH_START_ISO).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
        days,
        hours,
        minutes,
        seconds,
        isLive: diff === 0,
    };
};

const useBatchCountdown = () => {
    const [countdown, setCountdown] = useState(getCountdown);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCountdown(getCountdown());
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    return useMemo(() => countdown, [countdown]);
};

export default useBatchCountdown;
