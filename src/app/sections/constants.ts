import React from "react";
import {
  Code2, Globe, Zap, Smartphone, Brain, Rocket, Star,
  Trophy, Award, Users, GitBranch, Terminal, Target,
  Lightbulb, Cpu, TrendingUp,
} from "lucide-react";

// ── Colors ────────────────────────────────────────────────────────────────────
export const BLUE = "#111111";
export const PURPLE = "#555555";
export const WHITE = "#1d1d1f"; // primary text colour (name kept for existing imports)
export const GREEN = "#333333";

// ── Helpers ───────────────────────────────────────────────────────────────────
export function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

// Small solid surface (buttons, badges, docks) — soft neumorphic, no glass.
export const glass: React.CSSProperties = {
  background: "#ffffff",
  border: "none",
  boxShadow: "6px 6px 14px #d6d6d6, -6px -6px 14px #ffffff",
};

// Card — Uiverse-inspired solid white neumorphic card.
export const glassCard: React.CSSProperties = {
  background: "#ffffff",
  border: "none",
  borderRadius: "30px",
  boxShadow: "15px 15px 30px #d6d6d6, -15px -15px 30px #ffffff",
};

// Solid pale tint of an accent colour (icon tiles, chips). No blur/transparency.
export function glassAccent(color: string): React.CSSProperties {
  return {
    background: `color-mix(in srgb, ${color} 12%, #ffffff)`,
    border: "none",
    boxShadow: "none",
  };
}

export const sectionLabel: React.CSSProperties = {
  display: "inline-block",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: BLUE,
  marginBottom: "1rem",
  padding: "0.375rem 1rem",
  borderRadius: "100px",
  ...glassAccent(BLUE),
};

// ── Data ──────────────────────────────────────────────────────────────────────
export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "C", cat: "Languages", color: "#777777" },
  { name: "C++", cat: "Languages", color: "#111111" },
  { name: "Java", cat: "Languages", color: "#666666" },
  { name: "Python", cat: "Languages", color: "#333333" },
  { name: "React", cat: "Frontend", color: "#111111" },
  { name: "Node.js", cat: "Backend", color: "#333333" },
  { name: "Express", cat: "Backend", color: "#8a8a8a" },
  { name: "Flutter", cat: "Mobile", color: "#777777" },
  { name: "MongoDB", cat: "Databases", color: "#333333" },
  { name: "MySQL", cat: "Databases", color: "#666666" },
  { name: "Firebase", cat: "Databases", color: "#666666" },
  { name: "TensorFlow", cat: "AI/ML", color: "#555555" },
  { name: "Git", cat: "Tools", color: "#444444" },
  { name: "GitHub", cat: "Tools", color: "#8a8a8a" },
  { name: "Blender", cat: "Tools", color: "#666666" },
  { name: "Figma", cat: "Tools", color: "#555555" },
];

export const SKILL_CATS = ["All", "Languages", "Frontend", "Backend", "Mobile", "Databases", "AI/ML", "Tools"];

const PHOTO_HINT = ""; // add a photo path per project, e.g. "/projects/vanajeevan.png" (files go in /public/projects)

export const PROJECTS = [
  {
    title: "AI-GIS Tree Monitoring & Climate Impact System",
    desc: "AI + GIS platform that identifies tree species, estimates tree age from bark images, maps trees geographically, evaluates climate impact and recommends suitable areas for plantation. Backed by published research.",
    tech: ["Python", "PyTorch", "OpenCV", "GIS", "Remote Sensing", "ResNet50", "EfficientNet-B0", "VGG16", "SVM", "NumPy", "Pandas", "Matplotlib"],
    type: "AI/ML + GIS · Research",
    accent: "#111111",
    image: PHOTO_HINT,
  },
  {
    title: "Autonomous AI Trash-Collecting Robot",
    desc: "Robot that detects garbage with a camera, navigates to it, picks it up with a robotic arm and drops it into an onboard bin. Winner at the West Zone PJMT National Green Earth Challenge.",
    tech: ["Python", "YOLOv5", "OpenCV", "Raspberry Pi 5", "Arduino", "Camera Module", "Ultrasonic Sensors", "Servo Motors", "Robotic Arm", "Motor Driver", "GPS NEO-6M"],
    type: "Robotics + Computer Vision",
    accent: "#333333",
    image: PHOTO_HINT,
  },
  {
    title: "CICIDS2017 Network Attack Classification",
    desc: "ML system built for the Avengers: Doomsday Kaggle competition that classifies network traffic and attacks using engineered features and stratified cross-validation (internal CV F1 ≈ 0.9963).",
    tech: ["Python", "LightGBM", "Pandas", "NumPy", "Scikit-learn", "StratifiedKFold", "Feature Engineering"],
    type: "Cybersecurity + ML",
    accent: "#444444",
    image: PHOTO_HINT,
  },
  {
    title: "MERN Blood Test Booking Platform",
    desc: "Full-stack healthcare platform for booking blood and lab tests online, managing appointments and connecting users with laboratory services through one centralized interface.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML", "CSS"],
    type: "Full Stack",
    accent: "#555555",
    image: PHOTO_HINT,
  },
  {
    title: "Renewable Energy Educational Kit",
    desc: "Interactive kit for students that demonstrates solar, wind and hydro energy through physical models, experiments, DIY guides, AR-based learning and interactive challenges.",
    tech: ["ESP32", "Arduino", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AR", "IoT"],
    type: "IoT + EdTech",
    accent: "#666666",
    image: PHOTO_HINT,
  },
  {
    title: "Harmful Link / URL Detection System",
    desc: "ML system that analyzes URL characteristics and classifies potentially malicious links, helping identify suspicious URLs automatically.",
    tech: ["Python", "Machine Learning", "URL Feature Engineering", "Classification Models", "NumPy", "Pandas", "Scikit-learn"],
    type: "AI + Cybersecurity",
    accent: "#777777",
    image: PHOTO_HINT,
  },
  {
    title: "Embedded Intelligent Microscopy System",
    desc: "Portable embedded microscope that captures samples through a camera and assists with identifying and counting microscopic marine organisms.",
    tech: ["Embedded Systems", "Camera Module", "Image Processing", "Microcontroller", "Computer Vision"],
    type: "Embedded + Vision",
    accent: "#888888",
    image: PHOTO_HINT,
  },
  {
    title: "Retractable Cable Management Device",
    desc: "Compact device that organizes and retracts earphone and charging cables, making them easy to carry and tangle-free. Includes a belt-attached portable design.",
    tech: ["Blender", "3D Modeling", "Fusion 360", "Mechanical Design", "Prototyping"],
    type: "Product Design",
    accent: "#999999",
    image: PHOTO_HINT,
  },
];

export const TIMELINE = [
  { year: "2020", title: "Hello, World!", desc: "Wrote my first C program. Stared at the screen for 20 minutes. Fell in love.", Icon: Code2 },
  { year: "2021", title: "Web Awakening", desc: "HTML → CSS → JavaScript. Built my first portfolio and never looked back.", Icon: Globe },
  { year: "2022", title: "First Hackathon", desc: "Competed in college hackathon and placed 2nd. The energy in that room was electric.", Icon: Zap },
  { year: "2022", title: "Mobile Dev", desc: "Learned Flutter and shipped my first Android app to the Play Store.", Icon: Smartphone },
  { year: "2023", title: "AI/ML Deep Dive", desc: "Discovered TensorFlow. Trained my first neural network. Mind thoroughly expanded.", Icon: Brain },
  { year: "2023", title: "National Stage", desc: "Won Smart India Hackathon — national recognition, real-world impact.", Icon: Trophy },
  { year: "2024", title: "Full Stack Launch", desc: "Production apps with React, Node.js, MongoDB. Shipping products that solve real problems.", Icon: Rocket },
  { year: "2025+", title: "The Horizon", desc: "Building AI-first products that redefine how humans interact with technology.", Icon: Star },
];

export const ACHIEVEMENTS = [
  { title: "Smart India Hackathon", desc: "National Winner 2023 — AI for environmental conservation", Icon: Trophy, color: "#888888" },
  { title: "IEEE Publication", desc: "Research paper on AI-based environmental monitoring systems", Icon: Award, color: "#111111" },
  { title: "Android Developer", desc: "Google Associate Android Developer Certification", Icon: Star, color: "#333333" },
  { title: "Tech Club President", desc: "Led a 200+ member college technology community 2023–24", Icon: Users, color: "#555555" },
  { title: "Open Source", desc: "500+ GitHub contributions across 15+ repositories", Icon: GitBranch, color: "#666666" },
  { title: "Best Project Award", desc: "College Annual Tech Fest 2023 — Smart Waste Management Robot", Icon: Zap, color: "#444444" },
];

export const WHY = [
  { title: "Problem Solver", desc: "I break complex challenges into elegant, scalable solutions — then actually ship them.", Icon: Target, color: "#111111" },
  { title: "Fast Learner", desc: "Flutter, TensorFlow, cloud infra picked up in parallel. Learning velocity is my edge.", Icon: Zap, color: "#555555" },
  { title: "AI + Software", desc: "Rare combination: AI/ML research depth with practical full-stack engineering execution.", Icon: Brain, color: "#333333" },
  { title: "Innovation First", desc: "I don't just build what's asked — I think deeply about what should be built and why.", Icon: Lightbulb, color: "#888888" },
  { title: "Strong Foundation", desc: "From bare-metal C to neural networks — I understand the stack at every layer.", Icon: Cpu, color: "#666666" },
  { title: "Growth Mindset", desc: "Every project sharpens me. I seek feedback, iterate fast, and never plateau.", Icon: TrendingUp, color: "#444444" },
];

export const GITHUB_LANGS = [
  { lang: "Python", pct: 40, color: "#333333" },
  { lang: "JavaScript", pct: 28, color: "#888888" },
  { lang: "Dart", pct: 18, color: "#777777" },
  { lang: "C++", pct: 14, color: "#111111" },
];

export const SCATTER_OFFSETS = [
  { sx: '-320px', sy: '-220px', sr: '-12deg' },
  { sx:  '300px', sy: '-240px', sr:   '8deg' },
  { sx: '-260px', sy:  '240px', sr:  '14deg' },
  { sx:  '280px', sy:  '200px', sr:  '-7deg' },
  { sx: '-200px', sy: '-160px', sr:  '10deg' },
  { sx:  '240px', sy:  '260px', sr: '-11deg' },
  { sx: '-350px', sy:   '80px', sr:   '6deg' },
  { sx:  '180px', sy: '-300px', sr:  '-9deg' },
];

// Pre-computed contribution graph data (generated once, never changes)
export const CONTRIBUTION_DATA: number[] = Array.from({ length: 364 }, () => {
  const intensity = Math.random();
  return intensity < 0.4 ? 0.06 : intensity < 0.6 ? 0.25 : intensity < 0.8 ? 0.55 : 1;
});

export const liquidColors = ['#222222', '#888888', '#aaaaaa'];
