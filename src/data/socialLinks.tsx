// src/data/socialLinks.tsx
// Site-wide social profiles, shared by the main footer and the YGM footer
// on the services page. Single source of truth — update handles here.
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { WA_GENERAL } from "./contact";

export const socialLinks = [
    { href: "https://www.facebook.com/share/1Ccous7Nsr/", icon: <FacebookIcon sx={{ fontSize: 18 }} />, label: "Facebook" },
    { href: "https://www.instagram.com/selfcraftskills?igsh=MTRmMTJqanU0NXp0YQ==", icon: <InstagramIcon sx={{ fontSize: 18 }} />, label: "Instagram" },
    { href: WA_GENERAL, icon: <WhatsAppIcon sx={{ fontSize: 18 }} />, label: "WhatsApp" },
    { href: "https://linkedin.com/company/selfcraftskills", icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: "LinkedIn" },
    { href: "https://www.youtube.com/@SelfCraftSkills/", icon: <YouTubeIcon sx={{ fontSize: 18 }} />, label: "YouTube" },
];
