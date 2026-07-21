// src/data/courseContent.ts
// Structured course content for the member learning app (catalog + player).
// Shape: course → sections → lessons. This is the single source the
// Dashboard catalog and the CoursePlayer both read. When real videos land,
// add a `playbackRef` to each lesson and swap the placeholder player for the
// real stream — the structure here won't need to change.

export interface Lesson {
    id: string;
    title: string;
    durationMin: number;
    isNew?: boolean;
    description?: string;
}

export interface Section {
    id: string;
    title: string;
    lessons: Lesson[];
}

export interface CourseContent {
    instructor: string;
    category: string;
    /** How many lessons were added recently — shown as a "N new chapters" badge. */
    newChapters: number;
    sections: Section[];
}

export const courseContent: Record<string, CourseContent> = {
    "ai-unlocked": {
        instructor: "Navin Shaw",
        category: "AI & Digital",
        newChapters: 12,
        sections: [
            {
                id: "s1",
                title: "AI Foundations + Smart Prompting",
                lessons: [
                    { id: "l1", title: "Understanding AI in 2026", durationMin: 58, isNew: true, description: "What AI actually is in 2026, why it matters for you, and how to think about it without the hype." },
                    { id: "l2", title: "How Large Language Models Work", durationMin: 64, isNew: true, description: "A fear-free look under the hood of models like ChatGPT and Claude — just enough to use them well." },
                    { id: "l3", title: "Prompt Engineering Mastery (Level 1)", durationMin: 71, isNew: true, description: "The core prompting patterns that get consistently better results from any AI tool." },
                ],
            },
            {
                id: "s2",
                title: "AI for Study, Creativity & Multimodal Tools",
                lessons: [
                    { id: "l4", title: "AI as a Study & Thinking Assistant", durationMin: 60, description: "Turn AI into a tutor, research partner, and thinking aid for studies and work." },
                    { id: "l5", title: "Multimodal AI (Text + Image + Voice + Video)", durationMin: 66, description: "Work across text, images, voice and video with today's multimodal AI tools." },
                    { id: "l6", title: "AI Workflows & Automation Thinking", durationMin: 62, description: "Chain tasks together and start thinking in repeatable AI workflows." },
                ],
            },
            {
                id: "s3",
                title: "Building with AI",
                lessons: [
                    { id: "l7", title: "Logic, Problem Solving & AI Thinking", durationMin: 59, description: "Build the problem-solving mindset that makes you effective with AI." },
                    { id: "l8", title: "AI + Beginner Coding (Fear-Free)", durationMin: 75, description: "Use AI to write and understand code, even with zero programming background." },
                    { id: "l9", title: "Build a Guided AI Mini Project", durationMin: 80, description: "Put it together into a small, real project — step by step." },
                ],
            },
            {
                id: "s4",
                title: "AI Career, Business & Future",
                lessons: [
                    { id: "l10", title: "AI Careers & Earning Opportunities", durationMin: 63, description: "Where the real AI opportunities are for the next decade, and how to position yourself." },
                    { id: "l11", title: "AI for Business & Personal Brand", durationMin: 61, description: "Use AI to grow a business or a personal brand from scratch." },
                    { id: "l12", title: "Final Capstone Presentation + Feedback", durationMin: 85, description: "Bring everything together in your capstone and get feedback." },
                ],
            },
        ],
    },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

export const getCourseContent = (courseId: string): CourseContent | undefined =>
    courseContent[courseId];

export const getAllLessons = (courseId: string): Lesson[] =>
    (courseContent[courseId]?.sections ?? []).flatMap((s) => s.lessons);

export interface CourseStats {
    sectionCount: number;
    lessonCount: number;
    durationLabel: string;
}

export const getCourseStats = (courseId: string): CourseStats => {
    const content = courseContent[courseId];
    if (!content) return { sectionCount: 0, lessonCount: 0, durationLabel: "" };

    const lessons = getAllLessons(courseId);
    const totalMin = lessons.reduce((sum, l) => sum + l.durationMin, 0);
    const hrs = Math.floor(totalMin / 60);
    const mins = totalMin % 60;
    const durationLabel = hrs > 0 ? `${hrs} hr ${mins} min` : `${mins} min`;

    return {
        sectionCount: content.sections.length,
        lessonCount: lessons.length,
        durationLabel,
    };
};
