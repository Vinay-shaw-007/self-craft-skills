// src/hooks/useProgress.tsx
// Tracks which lessons a member has completed, so the player can show a
// completion indicator and the catalog can show In Progress / Completed.
//
// Persisted in localStorage for now (keyed globally). When a real backend
// `lesson_progress` table lands, swap the internals here — the same way
// useSubscription is structured — and no consumer needs to change.
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

type CompletedMap = Record<string, string[]>; // courseId -> completed lesson ids

interface ProgressContextValue {
    isCompleted: (courseId: string, lessonId: string) => boolean;
    completedCount: (courseId: string) => number;
    toggleLesson: (courseId: string, lessonId: string) => void;
    markComplete: (courseId: string, lessonId: string) => void;
}

const STORAGE_KEY = "scs_lesson_progress";

const readInitial = (): CompletedMap => {
    if (typeof window === "undefined") return {};
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as CompletedMap) : {};
    } catch {
        return {};
    }
};

const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
    const [map, setMap] = useState<CompletedMap>(readInitial);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    }, [map]);

    const isCompleted = useCallback(
        (courseId: string, lessonId: string) => (map[courseId] ?? []).includes(lessonId),
        [map],
    );

    const completedCount = useCallback(
        (courseId: string) => (map[courseId] ?? []).length,
        [map],
    );

    const toggleLesson = useCallback((courseId: string, lessonId: string) => {
        setMap((prev) => {
            const current = prev[courseId] ?? [];
            const next = current.includes(lessonId)
                ? current.filter((id) => id !== lessonId)
                : [...current, lessonId];
            return { ...prev, [courseId]: next };
        });
    }, []);

    const markComplete = useCallback((courseId: string, lessonId: string) => {
        setMap((prev) => {
            const current = prev[courseId] ?? [];
            if (current.includes(lessonId)) return prev;
            return { ...prev, [courseId]: [...current, lessonId] };
        });
    }, []);

    const value = useMemo<ProgressContextValue>(
        () => ({ isCompleted, completedCount, toggleLesson, markComplete }),
        [isCompleted, completedCount, toggleLesson, markComplete],
    );

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components -- provider + hook stay in one file on purpose
export const useProgress = (): ProgressContextValue => {
    const ctx = useContext(ProgressContext);
    if (!ctx) throw new Error("useProgress must be used within a ProgressProvider");
    return ctx;
};
