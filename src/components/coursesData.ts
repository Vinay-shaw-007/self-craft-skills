// src/components/coursesData.ts
import AiBanner from "../assets/ai-course-banner.jpg";
import ContentBanner from "../assets/content-course-banner.jpg";
import CommunicationBanner from "../assets/communication-course-banner.jpg";

interface CourseDetails {
    summary: string;
    duration?: string;
    classLength?: string;
    mode?: string;
    goal?: string;
    whoIsThisFor?: string;
    bonuses?: string[];
    keyFeatures?: string[];
    syllabus?: {
        week: string;
        takeaway: string;
        topics: string[];
    }[];
    finalCapstoneHeading?: string;
    certificateHeading?: string;
}

export interface Course {
    id: string;
    image: string;
    title: string;
    titleSvg: string | null;
    status: "Open for Enrollment" | "Coming Soon";
    details: CourseDetails;
}

const aiCourseDetails: CourseDetails = {
    summary:
        "A 4-week immersive course on mastering AI tools and ChatGPT for professional and personal growth.",
    duration: "4 Weeks (2-3 classes per week)",
    classLength: "60-90 mins each",
    mode: "Online (Zoom)",
    goal: "Build strong AI knowledge, practical hands-on skills, and awareness of today's AI world.",
    whoIsThisFor:
        "Students, working professionals, content creators, and entrepreneurs looking to boost their productivity and future-proof their skills.",
    bonuses: ["Certificate of Completion", "Exclusive Prompt Book"],
    keyFeatures: [
        "Weekly Live Classes",
        "Beginner-Friendly",
        "LIVE Q&A session",
        "No prior experience required",
        "Certificate of completion",
        "Bonus: worth Rs.4999",
    ],
    syllabus: [
        {
            week: "WEEK 1 - AI Foundations + Smart Prompting",
            takeaway:
                "Remove fear, build real understanding, and master prompting.",
            topics: [
                "Class 1 - Understanding AI in 2026",
                "Class 2 - How Large Language Models Work",
                "Class 3 - Prompt Engineering Mastery (Level 1)",
            ],
        },
        {
            week: "WEEK 2 - AI for Study, Creativity & Multimodal Tools",
            takeaway:
                "Make AI deeply useful and introduce creative and multimodal AI.",
            topics: [
                "Class 4 - AI as Study & Thinking Assistant",
                "Class 5 - Multimodal AI (Text + Image + Voice + Video)",
                "Class 6 - AI Workflows & Automation Thinking",
            ],
        },
        {
            week: "WEEK 3 - Building with AI (Creator -> Builder Mode)",
            takeaway: "Students shift from users to creators.",
            topics: [
                "Class 7 - Logic, Problem Solving & AI Thinking",
                "Class 8 - AI + Beginner Coding (Fear-Free)",
                "Class 9 - Build a Guided AI Mini Project",
            ],
        },
        {
            week: "WEEK 4 - AI Career, Business & Future Systems",
            takeaway:
                "Real-world clarity, earning pathways, and future readiness.",
            topics: [
                "Class 10 - AI Careers & Earning Opportunities (2026-2035)",
                "Class 11 - AI for Business & Personal Brand",
                "Class 12 - Final Capstone Presentation + Feedback",
            ],
        },
    ],
    finalCapstoneHeading: "FINAL CAPSTONE PROJECT",
    certificateHeading: "CERTIFICATE",
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
