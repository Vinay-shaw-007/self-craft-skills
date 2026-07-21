// src/pages/CoursePlayerPage.tsx
// The lesson player — the "inside a course" experience. Left: video +
// description tabs. Right: collapsible content outline with per-lesson
// completion indicators. Its own slim top bar (no marketing/app tabs).
import { useMemo, useState } from "react";
import {
    Avatar, Box, Container, IconButton, Stack, Tab, Tabs, Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { coursesData } from "../components/coursesData";
import { getCourseContent, getAllLessons, type Lesson } from "../data/courseContent";
import { useProgress } from "../hooks/useProgress";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../theme/colors";
import Logo from "../assets/logo.png";

const CoursePlayerPage = () => {
    const { courseId = "" } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { isCompleted, completedCount, toggleLesson, markComplete } = useProgress();

    const course = coursesData.find((c) => c.id === courseId);
    const content = getCourseContent(courseId);
    const allLessons = useMemo(() => getAllLessons(courseId), [courseId]);

    const [activeLessonId, setActiveLessonId] = useState(allLessons[0]?.id ?? "");
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
        () => (content ? { [content.sections[0]?.id]: true } : {}),
    );
    const [tab, setTab] = useState(0);

    if (!course || !content) {
        return (
            <Box sx={{ py: 10, textAlign: "center" }}>
                <Typography variant="h5" sx={{ color: colors.ink, mb: 2 }}>Course not found</Typography>
                <Typography component={RouterLink} to="/dashboard" sx={{ color: colors.indigo }}>
                    Back to courses
                </Typography>
            </Box>
        );
    }

    const total = allLessons.length;
    const done = completedCount(courseId);
    const activeLesson: Lesson | undefined = allLessons.find((l) => l.id === activeLessonId);
    const initial = ((user?.user_metadata?.full_name as string | undefined) ?? "M").charAt(0).toUpperCase();

    const toggleSection = (id: string) =>
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

    const selectLesson = (id: string) => {
        setActiveLessonId(id);
        markComplete(courseId, id); // opening a lesson marks it started/complete
        setTab(0);
    };

    return (
        <Box sx={{ background: "#fff", minHeight: "100vh" }}>
            {/* Top bar */}
            <Box sx={{
                position: "sticky", top: 0, zIndex: 10,
                background: "#fff",
                borderBottom: "1px solid rgba(18,19,43,0.07)",
                px: { xs: 1.5, md: 3 }, py: 1,
                display: "flex", alignItems: "center", gap: 1.5,
            }}>
                <IconButton onClick={() => navigate("/dashboard")} sx={{
                    bgcolor: "rgba(18,19,43,0.05)", "&:hover": { bgcolor: "rgba(18,19,43,0.1)" },
                }}>
                    <ArrowBackRoundedIcon />
                </IconButton>
                <Box component="img" src={Logo} alt="" sx={{ width: 30, height: 30, display: { xs: "none", sm: "block" } }} />
                <Typography sx={{
                    flexGrow: 1, fontWeight: 700, color: colors.ink,
                    fontSize: { xs: "0.9rem", md: "1.05rem" },
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                    {course.title}
                </Typography>
                <Stack direction="row" spacing={0.7} alignItems="center" sx={{
                    px: 1.6, py: 0.7, borderRadius: "999px", background: colors.lavenderSoft, flexShrink: 0,
                }}>
                    <PlayArrowRoundedIcon sx={{ fontSize: 18, color: colors.indigo }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: colors.indigo }}>
                        {done} of {total} complete
                    </Typography>
                </Stack>
                <Avatar sx={{ width: 34, height: 34, bgcolor: colors.indigo, fontWeight: 700, fontSize: "0.9rem", display: { xs: "none", sm: "flex" } }}>
                    {initial}
                </Avatar>
            </Box>

            <Container maxWidth="xl" sx={{ py: { xs: 2, md: 3 } }}>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 380px" },
                    gap: { xs: 2, md: 3 },
                    alignItems: "start",
                }}>
                    {/* Left: video + description */}
                    <Box>
                        {/* Video placeholder */}
                        <Box sx={{
                            position: "relative",
                            aspectRatio: "16 / 9",
                            borderRadius: "16px",
                            overflow: "hidden",
                            background: `linear-gradient(150deg, ${colors.indigoDeep}, ${colors.indigo})`,
                            display: "grid", placeItems: "center",
                        }}>
                            <Stack alignItems="center" spacing={1.5}>
                                <Box sx={{
                                    width: 72, height: 72, borderRadius: "50%",
                                    background: "rgba(255,255,255,0.15)",
                                    display: "grid", placeItems: "center",
                                    border: "2px solid rgba(255,255,255,0.4)",
                                }}>
                                    <PlayArrowRoundedIcon sx={{ fontSize: 40, color: "#fff" }} />
                                </Box>
                                <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", textAlign: "center", px: 3 }}>
                                    Video will stream here once video hosting is connected.
                                </Typography>
                            </Stack>
                        </Box>

                        {/* Lesson title + tabs */}
                        <Typography variant="h5" sx={{ mt: 2.5, fontWeight: 700, color: colors.ink, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
                            {activeLesson?.title ?? "Select a lesson"}
                        </Typography>

                        <Tabs value={tab} onChange={(_e, v) => setTab(v)} sx={{
                            mt: 1, borderBottom: "1px solid rgba(18,19,43,0.08)",
                            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minWidth: 0, mr: 3, px: 0 },
                            "& .Mui-selected": { color: `${colors.indigo} !important` },
                            "& .MuiTabs-indicator": { backgroundColor: colors.indigo },
                        }}>
                            <Tab label="Description" />
                            <Tab label="Resources" />
                            <Tab label="Q&A" />
                        </Tabs>

                        <Box sx={{ py: 3, color: colors.slate, fontSize: "0.92rem", lineHeight: 1.7, minHeight: 80 }}>
                            {tab === 0 && (activeLesson?.description ?? "No description available for this lesson.")}
                            {tab === 1 && "Downloadable resources for this lesson will appear here."}
                            {tab === 2 && "Questions & answers for this lesson will appear here."}
                        </Box>
                    </Box>

                    {/* Right: content outline */}
                    <Box sx={{
                        borderRadius: "16px",
                        border: "1px solid rgba(18,19,43,0.08)",
                        overflow: "hidden",
                        position: { md: "sticky" }, top: { md: 84 },
                    }}>
                        <Box sx={{ px: 2.5, py: 2, borderBottom: "1px solid rgba(18,19,43,0.06)" }}>
                            <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", color: colors.ink }}>Content</Typography>
                        </Box>

                        <Box sx={{ maxHeight: { md: "calc(100vh - 200px)" }, overflowY: "auto" }}>
                            {content.sections.map((section) => {
                                const isOpen = openSections[section.id] ?? false;
                                const secDone = section.lessons.filter((l) => isCompleted(courseId, l.id)).length;
                                return (
                                    <Box key={section.id} sx={{ borderBottom: "1px solid rgba(18,19,43,0.06)" }}>
                                        {/* Section header */}
                                        <Box
                                            onClick={() => toggleSection(section.id)}
                                            sx={{
                                                px: 2.5, py: 1.8, cursor: "pointer",
                                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                                "&:hover": { background: "#fafafa" },
                                            }}
                                        >
                                            <Box>
                                                <Typography sx={{ fontWeight: 700, color: colors.ink, fontSize: "0.95rem" }}>
                                                    {section.title}
                                                </Typography>
                                                <Typography sx={{ fontSize: "0.78rem", color: colors.slate, mt: 0.2 }}>
                                                    {secDone} of {section.lessons.length}
                                                </Typography>
                                            </Box>
                                            <ExpandMoreRoundedIcon sx={{
                                                color: colors.slate,
                                                transform: isOpen ? "rotate(180deg)" : "none",
                                                transition: "transform 0.2s ease",
                                            }} />
                                        </Box>

                                        {/* Lessons */}
                                        {isOpen && section.lessons.map((lesson, idx) => {
                                            const complete = isCompleted(courseId, lesson.id);
                                            const active = lesson.id === activeLessonId;
                                            return (
                                                <Box
                                                    key={lesson.id}
                                                    onClick={() => selectLesson(lesson.id)}
                                                    sx={{
                                                        px: 2.5, py: 1.5,
                                                        display: "flex", alignItems: "flex-start", gap: 1.2,
                                                        cursor: "pointer",
                                                        background: active ? colors.lavenderSoft : "transparent",
                                                        borderLeft: active ? `3px solid ${colors.indigo}` : "3px solid transparent",
                                                        "&:hover": { background: active ? colors.lavenderSoft : "#fafafa" },
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: "0.8rem", color: colors.slate, fontWeight: 700, mt: "1px", minWidth: 20 }}>
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </Typography>
                                                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                                                        <Typography sx={{
                                                            fontSize: "0.86rem", fontWeight: 600, lineHeight: 1.35,
                                                            color: active ? colors.indigo : colors.ink,
                                                        }}>
                                                            {lesson.title}
                                                        </Typography>
                                                        <Stack direction="row" spacing={0.6} alignItems="center" sx={{ mt: 0.4 }}>
                                                            <VideocamOutlinedIcon sx={{ fontSize: 14, color: colors.slate }} />
                                                            <Typography sx={{ fontSize: "0.74rem", color: colors.slate }}>
                                                                {lesson.durationMin} min
                                                            </Typography>
                                                            {lesson.isNew && !complete && (
                                                                <Box sx={{
                                                                    ml: 0.5, px: 0.8, py: 0.1, borderRadius: "999px",
                                                                    background: "#fdecea", color: "#c0492f",
                                                                    fontSize: "0.62rem", fontWeight: 800,
                                                                }}>
                                                                    NEW
                                                                </Box>
                                                            )}
                                                        </Stack>
                                                    </Box>
                                                    {/* Completion indicator (click to toggle) */}
                                                    <IconButton
                                                        size="small"
                                                        onClick={(e) => { e.stopPropagation(); toggleLesson(courseId, lesson.id); }}
                                                        sx={{ p: 0.2, mt: "-2px" }}
                                                    >
                                                        {complete
                                                            ? <CheckCircleRoundedIcon sx={{ fontSize: 22, color: colors.indigo }} />
                                                            : <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 22, color: "rgba(18,19,43,0.25)" }} />}
                                                    </IconButton>
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CoursePlayerPage;
