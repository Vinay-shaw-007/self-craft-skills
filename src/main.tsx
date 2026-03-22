// src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: { main: "#6C5CE7", light: "#a29bfe", dark: "#5A4BD1" },
        secondary: { main: "#FD79A8", light: "#fab1d0" },
        info: { main: "#0984E3" },
        success: { main: "#00B894" },
        warning: { main: "#FDCB6E" },
        error: { main: "#E17055" },
        background: { default: "#FAFAFA", paper: "#FFFFFF" },
        text: { primary: "#111111", secondary: "#666666" },
    },
    shape: { borderRadius: 16 },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        h1: {
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
        },
        h2: {
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
        },
        h3: {
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
        },
        h4: {
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            fontWeight: 600,
            letterSpacing: "-0.02em",
        },
        h5: {
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            fontWeight: 600,
        },
        h6: {
            fontFamily: '"Space Grotesk", "Inter", sans-serif',
            fontWeight: 600,
        },
        button: { textTransform: "none", fontWeight: 600, letterSpacing: "-0.01em" },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: { body: { background: "#fafafa" } },
        },
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 600,
                    padding: "10px 24px",
                },
            },
        },
        MuiPaper: {
            styleOverrides: { root: { backgroundImage: "none" } },
        },
        MuiChip: {
            styleOverrides: { root: { fontWeight: 500, borderRadius: 8 } },
        },
    },
});

const router = createBrowserRouter([{ path: "/*", element: <App /> }]);
const root = createRoot(document.getElementById("root")!);

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
);
