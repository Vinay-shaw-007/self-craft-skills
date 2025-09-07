// src/components/coursesData.ts
import AiBanner from "../assets/ai-course-banner.jpg";
import ContentBanner from "../assets/content-course-banner.jpg";
import CommunicationBanner from "../assets/communication-course-banner.jpg";

// 1. This is the missing interface definition that was causing the error
interface CourseDetails {
    summary: string;
    duration?: string;
    classLength?: string;
    mode?: string;
    goal?: string;
    whoIsThisFor?: string;
    bonuses?: string[];
    syllabus?: {
        week: string;
        takeaway: string;
        topics: string[];
    }[];
}

export interface Course {
    id: string;
    image: any;
    title: string;
    titleSvg: any | null;
    status: "Open for Enrollment" | "Coming Soon";
    details: CourseDetails; // This now correctly references the interface above
}

// This constant now correctly uses the defined CourseDetails type
const aiCourseDetails = {
    summary:
        "A 6-week immersive course on mastering AI tools and ChatGPT for professional and personal growth.",
    duration: "6 Weeks (1-2 classes per week)",
    classLength: "60–90 mins each",
    mode: "Online (Zoom)",
    goal: "Build strong AI knowledge, practical hands-on skills, and awareness of today’s AI world.",
    whoIsThisFor:
        "Students, working professionals, content creators, and entrepreneurs looking to boost their productivity and future-proof their skills.",
    bonuses: ["Certificate of Completion", "Exclusive Prompt Book"],
    syllabus: [
        {
            week: "WEEK 1 – Foundations of AI",
            takeaway:
                "Understand how AI works in daily life + write your first prompts.",
            topics: [
                "Introduction to AI (History, myths, and today’s reality)",
                "AI vs Machine Learning vs Deep Learning – simplified",
                "Different types and versions of AI models.",
                "How AI is shaping daily lives",
                "Ethical considerations & limitations of AI",
                "Introduction to Large Language Models.",
                "Free vs Paid versions, pros & cons.",
                "Prompting 101: clarity, context, role-play.",
                "Use cases: Writing, Summarizing, Translation & Explanation.",
                "Hands-On: Summarizing + Writing tasks with ChatGPT.",
                "Mini Project: Spot 5 AI uses in your daily life & share with the class. Write 3–5 personal productivity Prompts",
            ],
        },
        {
            week: "WEEK 2: AI for Learning & Personal Growth",
            takeaway: "Use AI as a tutor, planner, and growth assistant.",
            topics: [
                "Explaining tough concepts in simple words & story mode",
                "Explain any topic in story mode",
                "Write educational prompt: Act as a teacher, friend, explainer, etc",
                "Learn structuring answers for exams",
                "Creating study guides, flashcards, and summaries",
                "AI for planning: study schedules, exam prep, & journaling",
                "Habit tracking & Building",
                "Fitness & Diet plans",
                "Making timetables, daily routines, and to-do lists",
                "Mini Project: Create your own AI-powered study guide.",
                "QnA session",
            ],
        },
        {
            week: "WEEK 3: Unlocking Creativity with AI",
            takeaway:
                "Use AI for storytelling, content creation & visual design.",
            topics: [
                "Image generation AI tools",
                "How text → image generation works",
                "Demo: Generate an image from a prompt",
                "AI in music, voice, and video",
                "Creative writing with AI",
                "Remixing styles & tone",
                "Responsible use of creative AI tools",
                "Hands-On: Create AI-generated image + creative content piece",
                "Mini Project: Produce a short AI-generated story + matching image",
            ],
        },
        {
            week: "WEEK 4: AI for Productivity & Work",
            takeaway: "Build career tools & productivity systems with AI.",
            topics: [
                "Resume, cover letters & email writing",
                "LinkedIn optimization",
                "Mock interview roleplays with AI",
                "AI for job/industry research",
                "Career counselling",
                "To-do list & note-taking",
                "Decision making, weekly planner",
                "AI in presentations",
                "Mini Project: Use AI to generate a resume + cover letter, then do a mock interview.",
                "QnA session",
            ],
        },
        {
            week: "WEEK 5: AI for Business & Branding",
            takeaway:
                "Learn how to use AI for business, brand building & content.",
            topics: [
                "Brainstorming business ideas with AI",
                "Market research & competitor analysis",
                "Case Studies of professionals using AI",
                "Content marketing with ChatGPT",
                "Essential AI tools: Canva (design), Grammarly (writing), GPT (content), & more",
                "AI in marketing",
                "How to combine tools for workflows",
                "Intro to Custom GPTs & AI Agents",
                "Mini Project: Draft a 1-page business plan + brand content strategy using AI.",
            ],
        },
        {
            week: "WEEK 6: The Future with AI",
            takeaway: "Stay future-ready with AI knowledge & tools.",
            topics: [
                "Generative AI evolution (text → image → video → agents)",
                "The rise of AI Agents & automation",
                "Future opportunities & risks",
                "How to keep upgrading AI skills",
                "Explore AI tools",
                "Mini Project: Share a personal AI roadmap for the next 6 months.",
                "Closing AMA",
            ],
        },
    ],
};

export const coursesData: Course[] = [
    {
        id: "ai-unlocked",
        image: AiBanner,
        title: "AI UNLOCKED: ZERO TO HERO",
        titleSvg: null,
        status: "Open for Enrollment",
        details: aiCourseDetails,
    },
    {
        id: "content-creation",
        image: ContentBanner,
        title: "CONTENT CREATION MASTERY",
        titleSvg: null,
        status: "Coming Soon",
        details: {
            summary:
                "Learn to create engaging content that builds an audience and grows your brand.",
        },
    },
    {
        id: "confident-communication",
        image: CommunicationBanner,
        title: "EFFECTIVE COMMUNICATION",
        titleSvg: null,
        status: "Coming Soon",
        details: {
            summary:
                "Develop the skills to communicate effectively in any setting.",
        },
    },
];
