// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Import the font
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

// Create a custom theme to match the brand colors
const theme = createTheme({
    palette: {
        primary: {
            main: "#D32F2F", // A shade of red from the logo
        },
        secondary: {
            main: "#1976D2", // A shade of blue from the logo
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
