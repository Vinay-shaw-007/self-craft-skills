// src/pages/DashboardPage.tsx
// The member "Courses" catalog — the landing page after login. LMS-style:
// heading, search, filter pills, and a grid of course cards.
import { useMemo, useState } from "react";
import { Box, Button, Container, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
import { Link as RouterLink } from "react-router-dom";
import { coursesData } from "../components/coursesData";
import { getCourseContent, getCourseStats, getAllLessons } from "../data/courseContent";
import { useProgress } from "../hooks/useProgress";
import { colors } from "../theme/colors";

type Filter = "all" | "in_progress" | "completed";

const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "in_progress", label: "In Progress" },
    { key: "completed", label: "Completed" },
];

const DashboardPage = () => {
    const { completedCount } = useProgress();
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState<Filter>("all");

    // Only courses that actually have content are "learnable".
    const learnable = useMemo(
        () => coursesData.filter((c) => getCourseContent(c.id)),
        [],
    );

    const cards = useMemo(() => {
        const q = query.trim().toLowerCase();
        return learnable.filter((course) => {
            if (q && !`${course.title} ${course.details.summary}`.toLowerCase().includes(q)) return false;

            const total = getAllLessons(course.id).length;
            const done = completedCount(course.id);
            if (filter === "in_progress") return done > 0 && done < total;
            if (filter === "completed") return total > 0 && done >= total;
            return true;
        });
    }, [learnable, query, filter, completedCount]);

    return (
        <Box sx={{ py: { xs: 4, md: 5 }, minHeight: "70vh" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: colors.ink, mb: 3 }}>
                    Courses
                </Typography>

                {/* Search */}
                <TextField
                    fullWidth
                    placeholder="Search by course title or description"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon sx={{ color: colors.slate }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "14px", background: "#fff" } }}
                />

                {/* Filter pills */}
                <Stack direction="row" spacing={1} sx={{ mt: 2.5, mb: 4, flexWrap: "wrap", gap: 1 }}>
                    {filters.map((f) => {
                        const active = filter === f.key;
                        return (
                            <Box
                                key={f.key}
                                onClick={() => setFilter(f.key)}
                                sx={{
                                    px: 2.2, py: 0.8,
                                    borderRadius: "999px",
                                    cursor: "pointer",
                                    fontSize: "0.86rem", fontWeight: 600,
                                    color: active ? colors.indigo : colors.slate,
                                    background: active ? colors.lavenderSoft : "#fff",
                                    border: `1px solid ${active ? `rgba(${colors.indigoRgb},0.3)` : "rgba(18,19,43,0.1)"}`,
                                }}
                            >
                                {f.label}
                            </Box>
                        );
                    })}
                </Stack>

                {cards.length === 0 ? (
                    <Typography sx={{ color: colors.slate, py: 6, textAlign: "center" }}>
                        No courses match this filter yet.
                    </Typography>
                ) : (
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                        gap: 3,
                    }}>
                        {cards.map((course) => {
                            const content = getCourseContent(course.id)!;
                            const stats = getCourseStats(course.id);
                            const total = stats.lessonCount;
                            const done = completedCount(course.id);
                            const started = done > 0;
                            const finished = total > 0 && done >= total;

                            return (
                                <Box key={course.id} sx={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    background: "#fff",
                                    border: "1px solid rgba(18,19,43,0.08)",
                                    display: "flex", flexDirection: "column",
                                    transition: "all 0.25s ease",
                                    "&:hover": { boxShadow: `0 16px 40px rgba(${colors.indigoRgb},0.12)`, transform: "translateY(-4px)" },
                                }}>
                                    {/* Banner */}
                                    <Box sx={{ position: "relative" }}>
                                        <Box component="img" src={course.image} alt={course.title}
                                            sx={{ width: "100%", height: 180, objectFit: "cover", display: "block" }} />
                                        <Box sx={{
                                            position: "absolute", top: 12, right: 12,
                                            px: 1.2, py: 0.3, borderRadius: "999px",
                                            background: colors.indigo, color: "#fff",
                                            fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.05em",
                                        }}>
                                            NEW
                                        </Box>
                                    </Box>

                                    {/* Body */}
                                    <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                        <Box sx={{
                                            alignSelf: "flex-start",
                                            px: 1.2, py: 0.4, mb: 1.2,
                                            borderRadius: "999px",
                                            background: colors.lavenderSoft, color: colors.indigo,
                                            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.04em",
                                            textTransform: "uppercase",
                                        }}>
                                            {content.category}
                                        </Box>

                                        <Typography sx={{
                                            fontFamily: '"Space Grotesk"', fontWeight: 700,
                                            fontSize: "1.1rem", color: colors.ink, lineHeight: 1.25,
                                        }}>
                                            {course.title}
                                        </Typography>
                                        <Typography sx={{ mt: 0.5, color: colors.slate, fontSize: "0.85rem", fontWeight: 600 }}>
                                            {content.instructor}
                                        </Typography>
                                        <Typography sx={{ mt: 0.5, color: "#999", fontSize: "0.8rem" }}>
                                            {stats.sectionCount} sections · {stats.lessonCount} lectures · {stats.durationLabel}
                                        </Typography>

                                        {/* Progress bar (only once started) */}
                                        {started && (
                                            <Box sx={{ mt: 1.5 }}>
                                                <Box sx={{ height: 6, borderRadius: 99, background: colors.lavenderSoft, overflow: "hidden" }}>
                                                    <Box sx={{ height: "100%", width: `${Math.round((done / total) * 100)}%`, background: colors.indigo }} />
                                                </Box>
                                                <Typography sx={{ mt: 0.5, fontSize: "0.74rem", color: colors.slate }}>
                                                    {done} of {total} complete
                                                </Typography>
                                            </Box>
                                        )}

                                        <Button
                                            component={RouterLink}
                                            to={`/learn/${course.id}`}
                                            fullWidth
                                            sx={{
                                                mt: 2,
                                                py: 1.2,
                                                borderRadius: "12px",
                                                background: colors.ink, color: "#fff",
                                                fontWeight: 700, fontSize: "0.9rem",
                                                "&:hover": { background: colors.indigoDeep },
                                            }}
                                        >
                                            {finished ? "Review course" : started ? "Continue learning" : "Start learning"}
                                        </Button>
                                    </Box>

                                    {/* Footer */}
                                    <Box sx={{
                                        px: 2.5, py: 1.5,
                                        borderTop: "1px solid rgba(18,19,43,0.06)",
                                        display: "flex", alignItems: "center", gap: 1,
                                    }}>
                                        <FiberNewRoundedIcon sx={{ color: "#c0492f", fontSize: 20 }} />
                                        <Typography sx={{ fontSize: "0.8rem", color: colors.slate }}>
                                            <strong style={{ color: colors.ink }}>{content.newChapters} new chapters</strong> recently added
                                        </Typography>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default DashboardPage;
