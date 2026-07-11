import React from "react";
import {
  Code2, Globe, Zap, Smartphone, Brain, Rocket, Star,
  Trophy, Award, Users, GitBranch, Terminal, Target,
  Lightbulb, Cpu, TrendingUp,
} from "lucide-react";

// ── Colors ────────────────────────────────────────────────────────────────────
export const BLUE = "#0A84FF";
export const PURPLE = "#BF5AF2";
export const WHITE = "#F5F5F7";
export const GREEN = "#30D158";

// ── Helpers ───────────────────────────────────────────────────────────────────
export function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.13)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)",
};

export const glassCard: React.CSSProperties = {
  ...glass,
  borderRadius: "1.75rem",
};

export function glassAccent(color: string): React.CSSProperties {
  return {
    background: `rgba(${hexToRgb(color)},0.12)`,
    backdropFilter: "blur(30px) saturate(160%)",
    WebkitBackdropFilter: "blur(30px) saturate(160%)",
    border: `1px solid rgba(${hexToRgb(color)},0.3)`,
    boxShadow: `0 4px 24px rgba(${hexToRgb(color)},0.18), inset 0 1px 0 rgba(255,255,255,0.08)`,
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
  { name: "C", cat: "Languages", color: "#64D2FF" },
  { name: "C++", cat: "Languages", color: "#0A84FF" },
  { name: "Java", cat: "Languages", color: "#FF9F0A" },
  { name: "Python", cat: "Languages", color: "#30D158" },
  { name: "React", cat: "Frontend", color: "#0A84FF" },
  { name: "Node.js", cat: "Backend", color: "#30D158" },
  { name: "Express", cat: "Backend", color: "#AEAEB2" },
  { name: "Flutter", cat: "Mobile", color: "#64D2FF" },
  { name: "MongoDB", cat: "Databases", color: "#30D158" },
  { name: "MySQL", cat: "Databases", color: "#FF9F0A" },
  { name: "Firebase", cat: "Databases", color: "#FF9F0A" },
  { name: "TensorFlow", cat: "AI/ML", color: "#FF6B35" },
  { name: "Git", cat: "Tools", color: "#FF453A" },
  { name: "GitHub", cat: "Tools", color: "#AEAEB2" },
  { name: "Blender", cat: "Tools", color: "#FF9F0A" },
  { name: "Figma", cat: "Tools", color: "#BF5AF2" },
];

export const SKILL_CATS = ["All", "Languages", "Frontend", "Backend", "Mobile", "Databases", "AI/ML", "Tools"];

export const PROJECTS = [
  {
    title: "Vanajeevan",
    desc: "AI-powered environmental conservation platform connecting communities with real-time nature monitoring and preservation initiatives.",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
    type: "Web App",
    accent: "#30D158",
  },
  {
    title: "Smart Waste Management Robot",
    desc: "Autonomous robot using computer vision to detect, classify, and sort waste materials for cleaner, smarter cities.",
    tech: ["Python", "TensorFlow", "Arduino", "Firebase"],
    type: "Robotics + AI",
    accent: "#0A84FF",
  },
  {
    title: "Renewable Energy Learning Kit",
    desc: "Interactive EdTech platform teaching renewable energy concepts through immersive simulations and gamified challenges.",
    tech: ["Flutter", "Firebase", "React", "Node.js"],
    type: "EdTech",
    accent: "#BF5AF2",
  },
  {
    title: "AI Tree Species Detection",
    desc: "Deep learning CNN model for real-time tree species identification from photographs — accuracy exceeds 94%.",
    tech: ["Python", "TensorFlow", "Flutter", "FastAPI"],
    type: "AI/ML",
    accent: "#FF9F0A",
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
  { title: "Smart India Hackathon", desc: "National Winner 2023 — AI for environmental conservation", Icon: Trophy, color: "#FFD60A" },
  { title: "IEEE Publication", desc: "Research paper on AI-based environmental monitoring systems", Icon: Award, color: "#0A84FF" },
  { title: "Android Developer", desc: "Google Associate Android Developer Certification", Icon: Star, color: "#30D158" },
  { title: "Tech Club President", desc: "Led a 200+ member college technology community 2023–24", Icon: Users, color: "#BF5AF2" },
  { title: "Open Source", desc: "500+ GitHub contributions across 15+ repositories", Icon: GitBranch, color: "#FF9F0A" },
  { title: "Best Project Award", desc: "College Annual Tech Fest 2023 — Smart Waste Management Robot", Icon: Zap, color: "#FF453A" },
];

export const WHY = [
  { title: "Problem Solver", desc: "I break complex challenges into elegant, scalable solutions — then actually ship them.", Icon: Target, color: "#0A84FF" },
  { title: "Fast Learner", desc: "Flutter, TensorFlow, cloud infra picked up in parallel. Learning velocity is my edge.", Icon: Zap, color: "#BF5AF2" },
  { title: "AI + Software", desc: "Rare combination: AI/ML research depth with practical full-stack engineering execution.", Icon: Brain, color: "#30D158" },
  { title: "Innovation First", desc: "I don't just build what's asked — I think deeply about what should be built and why.", Icon: Lightbulb, color: "#FFD60A" },
  { title: "Strong Foundation", desc: "From bare-metal C to neural networks — I understand the stack at every layer.", Icon: Cpu, color: "#FF9F0A" },
  { title: "Growth Mindset", desc: "Every project sharpens me. I seek feedback, iterate fast, and never plateau.", Icon: TrendingUp, color: "#FF453A" },
];

export const GITHUB_LANGS = [
  { lang: "Python", pct: 40, color: "#30D158" },
  { lang: "JavaScript", pct: 28, color: "#FFD60A" },
  { lang: "Dart", pct: 18, color: "#64D2FF" },
  { lang: "C++", pct: 14, color: "#0A84FF" },
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

export const liquidColors = ['#5227FF', '#FF9FFC', '#B497CF'];
