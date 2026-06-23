import { useState, useEffect, useMemo } from "react";
import {
  Github, Linkedin, Instagram, Mail, Download, ExternalLink,
  Code2, Globe, Zap, Smartphone, Brain, Rocket, Star,
  Trophy, Award, Users, GitBranch, Terminal, Calendar,
  Target, Lightbulb, Cpu, TrendingUp, Heart,
  Menu, X, Send, ChevronDown,
} from "lucide-react";
import GradualBlur from "./GradualBlur";
import PillNav from "./PillNav";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
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

const SKILL_CATS = ["All", "Languages", "Frontend", "Backend", "Mobile", "Databases", "AI/ML", "Tools"];

const PROJECTS = [
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

const TIMELINE = [
  { year: "2020", title: "Hello, World!", desc: "Wrote my first C program. Stared at the screen for 20 minutes. Fell in love.", Icon: Code2 },
  { year: "2021", title: "Web Awakening", desc: "HTML → CSS → JavaScript. Built my first portfolio and never looked back.", Icon: Globe },
  { year: "2022", title: "First Hackathon", desc: "Competed in college hackathon and placed 2nd. The energy in that room was electric.", Icon: Zap },
  { year: "2022", title: "Mobile Dev", desc: "Learned Flutter and shipped my first Android app to the Play Store.", Icon: Smartphone },
  { year: "2023", title: "AI/ML Deep Dive", desc: "Discovered TensorFlow. Trained my first neural network. Mind thoroughly expanded.", Icon: Brain },
  { year: "2023", title: "National Stage", desc: "Won Smart India Hackathon — national recognition, real-world impact.", Icon: Trophy },
  { year: "2024", title: "Full Stack Launch", desc: "Production apps with React, Node.js, MongoDB. Shipping products that solve real problems.", Icon: Rocket },
  { year: "2025+", title: "The Horizon", desc: "Building AI-first products that redefine how humans interact with technology.", Icon: Star },
];

const ACHIEVEMENTS = [
  { title: "Smart India Hackathon", desc: "National Winner 2023 — AI for environmental conservation", Icon: Trophy, color: "#FFD60A" },
  { title: "IEEE Publication", desc: "Research paper on AI-based environmental monitoring systems", Icon: Award, color: "#0A84FF" },
  { title: "Android Developer", desc: "Google Associate Android Developer Certification", Icon: Star, color: "#30D158" },
  { title: "Tech Club President", desc: "Led a 200+ member college technology community 2023–24", Icon: Users, color: "#BF5AF2" },
  { title: "Open Source", desc: "500+ GitHub contributions across 15+ repositories", Icon: GitBranch, color: "#FF9F0A" },
  { title: "Best Project Award", desc: "College Annual Tech Fest 2023 — Smart Waste Management Robot", Icon: Zap, color: "#FF453A" },
];

const WHY = [
  { title: "Problem Solver", desc: "I break complex challenges into elegant, scalable solutions — then actually ship them.", Icon: Target, color: "#0A84FF" },
  { title: "Fast Learner", desc: "Flutter, TensorFlow, cloud infra picked up in parallel. Learning velocity is my edge.", Icon: Zap, color: "#BF5AF2" },
  { title: "AI + Software", desc: "Rare combination: AI/ML research depth with practical full-stack engineering execution.", Icon: Brain, color: "#30D158" },
  { title: "Innovation First", desc: "I don't just build what's asked — I think deeply about what should be built and why.", Icon: Lightbulb, color: "#FFD60A" },
  { title: "Strong Foundation", desc: "From bare-metal C to neural networks — I understand the stack at every layer.", Icon: Cpu, color: "#FF9F0A" },
  { title: "Growth Mindset", desc: "Every project sharpens me. I seek feedback, iterate fast, and never plateau.", Icon: TrendingUp, color: "#FF453A" },
];

const GITHUB_LANGS = [
  { lang: "Python", pct: 40, color: "#30D158" },
  { lang: "JavaScript", pct: 28, color: "#FFD60A" },
  { lang: "Dart", pct: 18, color: "#64D2FF" },
  { lang: "C++", pct: 14, color: "#0A84FF" },
];

// ── Style helpers ─────────────────────────────────────────────────────────────

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(40px) saturate(180%)",
  WebkitBackdropFilter: "blur(40px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.13)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)",
};

const glassCard: React.CSSProperties = {
  ...glass,
  borderRadius: "1.75rem",
};

function glassAccent(color: string): React.CSSProperties {
  return {
    background: `rgba(${hexToRgb(color)},0.12)`,
    backdropFilter: "blur(30px) saturate(160%)",
    WebkitBackdropFilter: "blur(30px) saturate(160%)",
    border: `1px solid rgba(${hexToRgb(color)},0.3)`,
    boxShadow: `0 4px 24px rgba(${hexToRgb(color)},0.18), inset 0 1px 0 rgba(255,255,255,0.08)`,
  };
}

// ── CSS Animations (injected via style tag) ───────────────────────────────────

const ANIMATIONS = `
  @keyframes page-blur-in {
    0%   { filter: blur(0px) brightness(1);   opacity: 1; }
    30%  { filter: blur(22px) brightness(0.6); opacity: 0.2; }
    70%  { filter: blur(22px) brightness(0.6); opacity: 0.2; }
    100% { filter: blur(0px) brightness(1);   opacity: 1; }
  }
  .page-transitioning {
    animation: page-blur-in 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  /* ── iPhone-style scatter → gather entrance ── */
  @keyframes scatter-gather {
    0% {
      transform: translate(var(--sx, -200px), var(--sy, -150px)) scale(0.25) rotate(var(--sr, -10deg));
      filter: blur(18px) brightness(0.4);
      opacity: 0;
    }
    40%  { filter: blur(6px);  opacity: 0.6; }
    80%  { filter: blur(1px);  opacity: 1; }
    100% {
      transform: translate(0, 0) scale(1) rotate(0deg);
      filter: blur(0px) brightness(1);
      opacity: 1;
    }
  }
  @keyframes section-title-in {
    0%   { opacity: 0; transform: translateY(-30px) scale(0.92); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0)     scale(1);    filter: blur(0px); }
  }
  .section-hidden { opacity: 0; }
  .section-hidden .scatter-card { opacity: 0; }
  .section-hidden .section-title { opacity: 0; }
  .section-visible .section-title {
    animation: section-title-in 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.05s both;
  }
  .section-visible .scatter-card {
    animation: scatter-gather 1.1s cubic-bezier(0.34, 1.15, 0.64, 1) both;
  }

  /* ── Card focus: move to screen centre + blur backdrop ── */
  .focus-overlay {
    position: fixed; inset: 0; z-index: 40;
    backdrop-filter: blur(10px) brightness(0.45) saturate(80%);
    -webkit-backdrop-filter: blur(10px) brightness(0.45) saturate(80%);
    background: rgba(0,0,0,0.4);
    opacity: 0; pointer-events: none;
    transition: opacity 0.55s cubic-bezier(0.4,0,0.2,1);
  }
  .focus-overlay.active { opacity: 1; pointer-events: all; }
  .scatter-card {
    position: relative; z-index: 1;
    transition:
      transform 0.9s cubic-bezier(0.34, 1.12, 0.64, 1),
      box-shadow 0.7s ease,
      filter 0.6s ease;
    will-change: transform;
  }
  .scatter-card.card-centered {
    z-index: 50;
    box-shadow: 0 50px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.14) !important;
    filter: brightness(1.05);
  }
  @keyframes aurora1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33% { transform: translate(60px,-40px) scale(1.15); }
    66% { transform: translate(-30px,25px) scale(0.9); }
  }
  @keyframes aurora2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40% { transform: translate(-50px,35px) scale(1.2); }
    70% { transform: translate(25px,-20px) scale(0.95); }
  }
  @keyframes aurora3 {
    0%,100% { transform: translate(0,0) scale(1); opacity:0.6; }
    50% { transform: translate(40px,50px) scale(1.25); opacity:0.9; }
  }
  @keyframes float {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-18px); }
  }
  @keyframes floatR {
    0%,100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-14px) rotate(6deg); }
  }
  @keyframes floatL {
    0%,100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-22px) rotate(-4deg); }
  }
  @keyframes pulse-ring {
    0% { box-shadow: 0 0 0 0 rgba(10,132,255,0.4); }
    70% { box-shadow: 0 0 0 20px rgba(10,132,255,0); }
    100% { box-shadow: 0 0 0 0 rgba(10,132,255,0); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes particle-rise {
    0% { transform: translateY(0) scale(0); opacity:0; }
    10% { opacity: 0.8; }
    90% { opacity: 0.4; }
    100% { transform: translateY(-80vh) scale(1.5); opacity:0; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes glow-pulse {
    0%,100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  html { scroll-behavior: smooth; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(10,132,255,0.25); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(10,132,255,0.45); }
  .glass-card-hover { transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s ease; }
  .glass-card-hover:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(10,132,255,0.2) !important; }
  .skill-orb { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: default; }
  .skill-orb:hover { transform: scale(1.12) translateY(-4px); }
  .nav-link { transition: color 0.2s, background 0.2s; }
  .nav-link:hover { color: #fff !important; background: rgba(255,255,255,0.08) !important; }
  .nav-link.active {
    color: #fff !important;
    background: rgba(10,132,255,0.25) !important;
    box-shadow: inset 0 0 0 1px rgba(10,132,255,0.4);
  }
  .btn-glass { transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s; }
  .btn-glass:hover { transform: translateY(-2px); opacity: 0.92; }
  .achievement-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .achievement-card:hover { transform: scale(1.04); box-shadow: 0 20px 60px rgba(0,0,0,0.5) !important; }
  .cat-pill { transition: all 0.25s cubic-bezier(.4,0,.2,1); cursor: pointer; }
  @media (max-width: 860px) {
    .mobile-menu-btn { display: flex !important; }
    .desktop-nav-links { display: none !important; }
    .hire-me-pill { display: none !important; }
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [focusActive, setFocusActive] = useState(false);

  const navItems = useMemo(() => NAV.map(n => ({
    ...n,
    onClick: (e: any) => handleNavClick(e, n.href)
  })), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveNav(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // iPhone-style scatter offsets — each card gets a unique starting position
  const SCATTER_OFFSETS = [
    { sx: '-320px', sy: '-220px', sr: '-12deg' },
    { sx:  '300px', sy: '-240px', sr:   '8deg' },
    { sx: '-260px', sy:  '240px', sr:  '14deg' },
    { sx:  '280px', sy:  '200px', sr:  '-7deg' },
    { sx: '-200px', sy: '-160px', sr:  '10deg' },
    { sx:  '240px', sy:  '260px', sr: '-11deg' },
    { sx: '-350px', sy:   '80px', sr:   '6deg' },
    { sx:  '180px', sy: '-300px', sr:  '-9deg' },
  ];

  // IntersectionObserver — assign scatter CSS variables, then trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Assign random scatter starting positions to each card
            const cards = entry.target.querySelectorAll('.scatter-card');
            cards.forEach((card, i) => {
              const s = SCATTER_OFFSETS[i % SCATTER_OFFSETS.length];
              const el = card as HTMLElement;
              el.style.setProperty('--sx', s.sx);
              el.style.setProperty('--sy', s.sy);
              el.style.setProperty('--sr', s.sr);
              el.style.animationDelay = `${i * 0.12}s`;
            });
            entry.target.classList.remove('section-hidden');
            entry.target.classList.add('section-visible');
          } else {
            entry.target.classList.remove('section-visible');
            entry.target.classList.add('section-hidden');
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.animate-section').forEach((el) => {
      el.classList.add('section-hidden');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCat === "All" ? SKILLS : SKILLS.filter(s => s.cat === activeCat);

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setTransitioning(true);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 550);
    setTimeout(() => setTransitioning(false), 1100);
  };

  // Card hover — smoothly translate card to viewport centre
  const handleCardEnter = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const dx = window.innerWidth  / 2 - rect.left - rect.width  / 2;
    const dy = window.innerHeight / 2 - rect.top  - rect.height / 2;
    el.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
    el.classList.add('card-centered');
    setFocusActive(true);
  };

  const handleCardLeave = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = '';
    el.classList.remove('card-centered');
    setFocusActive(false);
  };

  const BG = "#05050f";
  const BLUE = "#0A84FF";
  const PURPLE = "#BF5AF2";
  const WHITE = "#F5F5F7";
  const GREEN = "#30D158";

  const sectionLabel: React.CSSProperties = {
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

  return (
    <div
      style={{ background: BG, minHeight: "100vh", fontFamily: "'Urbanist', sans-serif", color: WHITE, overflowX: "hidden" }}
    >
      <style>{ANIMATIONS}</style>
      <GradualBlur preset="page-header" zIndex={-10} />
      <GradualBlur preset="page-footer" zIndex={-10} />
      
      {/* Global card-focus blur overlay */}
      <div className={`focus-overlay${focusActive ? " active" : ""}`} onClick={() => setFocusActive(false)} />

      {/* ── Navbar — PillNav ── */}
      <PillNav
        logo={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="900" font-size="16" fill="white">KS.</text></svg>`}
        logoAlt="KS Logo"
        items={navItems}
        activeHref={activeNav}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="rgba(10,10,25,0.55)"
        pillColor="#0A84FF"
        hoveredPillTextColor="#ffffff"
        pillTextColor="rgba(245,245,247,0.65)"
        onMobileMenuClick={() => setMobileOpen(!mobileOpen)}
        initialLoadAnimation={true}
      />

      <main className={transitioning ? "page-transitioning" : ""}>
      {/* ── HERO ── */}
      <section id="home" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {/* Aurora blobs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div style={{
            position: "absolute", top: "-15%", right: "5%",
            width: "55vw", height: "55vw", borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${hexToRgb(BLUE)},0.22) 0%, transparent 70%)`,
            filter: "blur(70px)", animation: "aurora1 11s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "-10%", left: "0%",
            width: "45vw", height: "45vw", borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${hexToRgb(PURPLE)},0.18) 0%, transparent 70%)`,
            filter: "blur(70px)", animation: "aurora2 13s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", top: "25%", left: "25%",
            width: "30vw", height: "30vw", borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${hexToRgb(GREEN)},0.08) 0%, transparent 70%)`,
            filter: "blur(90px)", animation: "aurora3 16s ease-in-out infinite",
          }} />
          {/* Grid overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        {/* Floating glass spheres */}
        <div style={{
          position: "absolute", top: "15%", right: "12%", zIndex: 1,
          width: "120px", height: "120px", borderRadius: "50%",
          ...glassAccent(BLUE),
          animation: "float 7s ease-in-out infinite",
          boxShadow: `0 0 40px rgba(${hexToRgb(BLUE)},0.3), inset 0 2px 0 rgba(255,255,255,0.15)`,
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "8%", zIndex: 1,
          width: "80px", height: "80px", borderRadius: "50%",
          ...glassAccent(PURPLE),
          animation: "floatR 9s ease-in-out infinite",
          boxShadow: `0 0 30px rgba(${hexToRgb(PURPLE)},0.3)`,
        }} />
        <div style={{
          position: "absolute", top: "55%", right: "20%", zIndex: 1,
          width: "50px", height: "50px", borderRadius: "50%",
          ...glassAccent(GREEN),
          animation: "floatL 6s ease-in-out infinite",
        }} />

        {/* Hero Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 1.5rem", maxWidth: "900px", width: "100%" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.5rem 1.25rem", borderRadius: "100px", marginBottom: "2rem",
            ...glass,
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em",
            color: "rgba(245,245,247,0.7)",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: GREEN, display: "inline-block", animation: "glow-pulse 2s ease-in-out infinite" }} />
            Available for opportunities
          </div>

          <h1 style={{
            fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 900,
            letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "1.25rem",
            background: `linear-gradient(135deg, ${WHITE} 0%, rgba(245,245,247,0.7) 50%, ${BLUE} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            KISHOR<br />SURWADE
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.375rem)", fontWeight: 400,
            color: "rgba(245,245,247,0.55)", marginBottom: "1.5rem", letterSpacing: "0.02em",
          }}>
            Building Ideas Into Reality
          </p>

          {/* Role pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem" }}>
            {["Full Stack Developer", "AI/ML Enthusiast", "Android Developer"].map((role, i) => (
              <span key={role} style={{
                padding: "0.5rem 1.25rem", borderRadius: "100px", fontSize: "0.875rem", fontWeight: 600,
                ...glassAccent([BLUE, PURPLE, GREEN][i]),
                color: [BLUE, PURPLE, GREEN][i],
              }}>{role}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <a href="#projects" className="btn-glass" style={{
              background: BLUE, color: "#fff", padding: "0.875rem 2rem",
              borderRadius: "100px", fontSize: "0.9375rem", fontWeight: 700,
              textDecoration: "none", boxShadow: `0 8px 30px rgba(${hexToRgb(BLUE)},0.4)`,
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
            }}>
              Explore My Work <ExternalLink size={16} />
            </a>
            <a href="#contact" className="btn-glass" style={{
              ...glassAccent(PURPLE), color: PURPLE,
              padding: "0.875rem 2rem", borderRadius: "100px",
              fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none",
            }}>
              Hire Me
            </a>
            <a href="#" className="btn-glass" style={{
              ...glass, color: "rgba(245,245,247,0.7)",
              padding: "0.875rem 2rem", borderRadius: "100px",
              fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
            }}>
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Social Dock */}
          <div style={{
            display: "inline-flex", gap: "0.75rem", padding: "0.75rem 1.5rem",
            borderRadius: "100px", ...glass,
          }}>
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Mail, href: "mailto:kishor@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} title={label} className="btn-glass" style={{
                width: "40px", height: "40px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(245,245,247,0.6)", textDecoration: "none",
                ...glassAccent(BLUE),
                transition: "color 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,247,0.6)")}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          color: "rgba(245,245,247,0.3)", fontSize: "0.75rem", fontWeight: 500,
          animation: "float 3s ease-in-out infinite",
        }}>
          Scroll
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="animate-section" style={{ padding: "140px 2rem", position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "35vw", height: "35vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(PURPLE)},0.08) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="section-title" style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={sectionLabel}>About Me</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            The Human Behind<br />the Code
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "start" }}>
          <div className="scatter-card"
            onMouseEnter={handleCardEnter}
            onMouseLeave={handleCardLeave}
            style={{
              gridColumn: "span 1",
              ...glassCard,
              padding: "2.5rem",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem",
            }}>
            <div style={{
              width: "160px", height: "160px", borderRadius: "50%",
              background: `linear-gradient(135deg, rgba(${hexToRgb(BLUE)},0.3), rgba(${hexToRgb(PURPLE)},0.3))`,
              border: `2px solid rgba(${hexToRgb(BLUE)},0.3)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "3.5rem", fontWeight: 900, color: WHITE,
              boxShadow: `0 0 50px rgba(${hexToRgb(BLUE)},0.2)`,
            }}>KS</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.25rem" }}>Kishor Surwade</div>
              <div style={{ color: "rgba(245,245,247,0.5)", fontSize: "0.875rem", fontFamily: "'JetBrains Mono', monospace" }}>@kishorsurwade</div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              {["Open to Work", "India"].map((tag, i) => (
                <span key={tag} style={{
                  padding: "0.25rem 0.75rem", borderRadius: "100px",
                  fontSize: "0.75rem", fontWeight: 600,
                  ...glassAccent([GREEN, BLUE][i]), color: [GREEN, BLUE][i],
                }}>{tag}</span>
              ))}
            </div>
            <div style={{ width: "100%", display: "flex", gap: "1rem", justifyContent: "center" }}>
              {[
                { label: "Projects", val: "10+" },
                { label: "Hackathons", val: "5+" },
                { label: "Stars", val: "89" },
              ].map(({ label, val }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: BLUE }}>{val}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(245,245,247,0.5)", fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info panels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { title: "Who I Am", color: BLUE, text: "I'm a passionate Full Stack Developer and AI/ML enthusiast from India, currently pursuing my engineering degree. I build things that matter — from autonomous robots to AI-powered conservation platforms." },
              { title: "My Mission", color: PURPLE, text: "To build technology that solves real environmental and social challenges. I believe software, when crafted with intention, can reshape how humanity relates to the world around it." },
              { title: "Why I Build", color: GREEN, text: "Because the gap between 'this should exist' and 'this exists' is filled by people who ship code. I build because problems deserve solutions — and solutions deserve to be beautiful." },
              { title: "Future Vision", color: "#FF9F0A", text: "Building AI-first products at the intersection of machine learning and human experience. I see a future where intelligent software doesn't just assist humans — it amplifies what we're capable of." },
            ].map(({ title, color, text }) => (
              <div key={title} className="scatter-card"
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                style={{
                  ...glassCard,
                  padding: "1.75rem 2rem",
                  borderLeft: `3px solid ${color}`,
                }}>
                <div style={{ fontWeight: 700, fontSize: "1.0625rem", color, marginBottom: "0.625rem" }}>{title}</div>
                <p style={{ color: "rgba(245,245,247,0.65)", fontSize: "0.9375rem", lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section id="journey" style={{ padding: "140px 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(BLUE)},0.05) 0%, transparent 70%)`, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={sectionLabel}>My Journey</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Floating Through<br />Memories
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px",
              background: `linear-gradient(to bottom, transparent, rgba(${hexToRgb(BLUE)},0.4), rgba(${hexToRgb(PURPLE)},0.4), transparent)`,
              transform: "translateX(-50%)",
            }} className="hidden md:block" />

            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {TIMELINE.map(({ year, title, desc, Icon }, i) => {
                const isRight = i % 2 === 0;
                const accent = i % 3 === 0 ? BLUE : i % 3 === 1 ? PURPLE : GREEN;
                return (
                  <div key={i} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }} className={`md:flex-row md:items-center ${isRight ? "" : "md:flex-row-reverse"}`}>
                    {/* Card */}
                    <div className="glass-card-hover" style={{
                      ...glassCard,
                      padding: "1.75rem",
                      flex: 1,
                      maxWidth: "380px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                        <div style={{
                          width: "36px", height: "36px", borderRadius: "10px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          ...glassAccent(accent),
                        }}>
                          <Icon size={18} color={accent} />
                        </div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: accent, fontWeight: 500 }}>{year}</span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{title}</div>
                      <p style={{ color: "rgba(245,245,247,0.6)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                    </div>

                    {/* Node */}
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      ...glassAccent(accent),
                      animation: "pulse-ring 3s ease-in-out infinite",
                      zIndex: 2,
                    }} className="hidden md:flex">
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: accent }} />
                    </div>

                    {/* Spacer */}
                    <div style={{ flex: 1 }} className="hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="animate-section" style={{ padding: "140px 2rem", position: "relative" }}>
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "40vw", height: "40vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(PURPLE)},0.07) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={sectionLabel}>Skills Universe</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Technologies I<br />Command
            </h2>
          </div>

          {/* Category filters */}
          <div className="section-title" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center", marginBottom: "3.5rem" }}>
            {SKILL_CATS.map(cat => (
              <button key={cat} className="cat-pill" onClick={() => setActiveCat(cat)}
                style={{
                  padding: "0.5rem 1.125rem", borderRadius: "100px",
                  fontSize: "0.8125rem", fontWeight: 600, border: "none", cursor: "pointer",
                  ...(activeCat === cat
                    ? { background: BLUE, color: "#fff", boxShadow: `0 4px 16px rgba(${hexToRgb(BLUE)},0.4)` }
                    : { ...glass, color: "rgba(245,245,247,0.6)" }),
                }}>{cat}</button>
            ))}
          </div>

          {/* Skill orbs — each orb is a scatter-card */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {filteredSkills.map(({ name, color }) => (
              <div key={name} className="scatter-card skill-orb"
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                style={{
                  padding: "0.875rem 1.5rem", borderRadius: "100px",
                  ...glassAccent(color),
                  display: "flex", alignItems: "center", gap: "0.5rem",
                }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color, boxShadow: `0 0 8px ${color}` }} />
                <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: WHITE }}>{name}</span>
                <span style={{ fontSize: "0.7rem", color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{activeCat === "All" ? SKILLS.find(s => s.name === name)?.cat : ""}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="animate-section" style={{ padding: "140px 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-title" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={sectionLabel}>Project Showcase</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What I&apos;ve Built
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {PROJECTS.map(({ title, desc, tech, type, accent }) => (
              <div key={title}
                className="scatter-card"
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                style={{
                  ...glassCard,
                  overflow: "hidden",
                  display: "flex", flexDirection: "column",
                }}>
                {/* Image placeholder */}
                <div style={{
                  height: "200px",
                  background: `linear-gradient(135deg, rgba(${hexToRgb(accent)},0.2), rgba(${hexToRgb(BG)},0.5))`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                  borderRadius: "1.5rem 1.5rem 0 0",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(${hexToRgb(accent)},0.3) 0%, transparent 60%)`,
                  }} />
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: `rgba(${hexToRgb(accent)},0.15)`,
                    border: `1px solid rgba(${hexToRgb(accent)},0.3)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}>
                    <Terminal size={32} color={accent} />
                  </div>
                  <span style={{
                    position: "absolute", top: "1rem", right: "1rem",
                    padding: "0.25rem 0.75rem", borderRadius: "100px",
                    fontSize: "0.7rem", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace",
                    background: `rgba(${hexToRgb(accent)},0.2)`,
                    border: `1px solid rgba(${hexToRgb(accent)},0.3)`,
                    color: accent,
                  }}>{type}</span>
                </div>

                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontWeight: 800, fontSize: "1.125rem", marginBottom: "0.75rem", color: WHITE }}>{title}</h3>
                  <p style={{ color: "rgba(245,245,247,0.6)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem", flex: 1 }}>{desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    {tech.map(t => (
                      <span key={t} style={{
                        padding: "0.25rem 0.625rem", borderRadius: "6px",
                        fontSize: "0.75rem", fontWeight: 600,
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(245,245,247,0.7)",
                      }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button className="btn-glass" style={{
                      flex: 1, padding: "0.625rem", borderRadius: "0.75rem",
                      ...glassAccent(accent), color: accent,
                      border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem",
                    }}>
                      <ExternalLink size={14} /> Live Demo
                    </button>
                    <button className="btn-glass" style={{
                      padding: "0.625rem 1rem", borderRadius: "0.75rem",
                      ...glass, color: "rgba(245,245,247,0.7)",
                      border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600,
                      display: "flex", alignItems: "center", gap: "0.375rem",
                    }}>
                      <Github size={14} /> Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="animate-section" style={{ padding: "140px 2rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "20%", left: "0%", width: "50vw", height: "50vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb("#FFD60A")},0.05) 0%, transparent 70%)`, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="section-title" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={sectionLabel}>Achievements</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Milestones &<br />Recognition
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem" }}>
            {ACHIEVEMENTS.map(({ title, desc, Icon, color }) => (
              <div key={title}
                className="scatter-card"
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
                style={{
                  ...glassCard,
                  padding: "2rem",
                  borderTop: `2px solid rgba(${hexToRgb(color)},0.4)`,
                  boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(${hexToRgb(color)},0.1)`,
                }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px", marginBottom: "1.25rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  ...glassAccent(color),
                  boxShadow: `0 0 20px rgba(${hexToRgb(color)},0.3)`,
                }}>
                  <Icon size={24} color={color} />
                </div>
                <div style={{ fontWeight: 800, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{title}</div>
                <p style={{ color: "rgba(245,245,247,0.6)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB COMMAND CENTER ── */}
      <section id="github" style={{ padding: "140px 2rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(GREEN)},0.06) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={sectionLabel}>GitHub Command Center</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Code Activity<br />Dashboard
            </h2>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {[
              { label: "Total Contributions", val: "847", Icon: GitBranch, color: GREEN },
              { label: "Public Repos", val: "23", Icon: Terminal, color: BLUE },
              { label: "Followers", val: "142", Icon: Users, color: PURPLE },
              { label: "Stars Earned", val: "89", Icon: Star, color: "#FFD60A" },
              { label: "Coding Streak", val: "47 days", Icon: Zap, color: "#FF9F0A" },
            ].map(({ label, val, Icon, color }) => (
              <div key={label} className="glass-card-hover" style={{
                ...glassCard,
                padding: "1.75rem",
                display: "flex", flexDirection: "column", gap: "0.75rem",
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  ...glassAccent(color),
                }}>
                  <Icon size={20} color={color} />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: WHITE, letterSpacing: "-0.03em" }}>{val}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,245,247,0.5)", fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="md:grid-cols-2">
            {/* Language breakdown */}
            <div style={{ ...glassCard, padding: "2rem" }}>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "rgba(245,245,247,0.8)" }}>Top Languages</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {GITHUB_LANGS.map(({ lang, pct, color }) => (
                  <div key={lang}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                      <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{lang}</span>
                      <span style={{ fontSize: "0.875rem", color: "rgba(245,245,247,0.5)", fontFamily: "'JetBrains Mono', monospace" }}>{pct}%</span>
                    </div>
                    <div style={{ height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                      <div style={{
                        height: "100%", borderRadius: "3px",
                        background: `linear-gradient(90deg, ${color}, rgba(${hexToRgb(color)},0.5))`,
                        width: `${pct}%`, boxShadow: `0 0 8px rgba(${hexToRgb(color)},0.5)`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution graph mock */}
            <div style={{ ...glassCard, padding: "2rem" }}>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "rgba(245,245,247,0.8)" }}>
                Contribution Graph — Last 52 Weeks
              </div>
              <div style={{ display: "flex", gap: "3px", flexWrap: "wrap" }}>
                {Array.from({ length: 364 }, (_, i) => {
                  const intensity = Math.random();
                  const alpha = intensity < 0.4 ? 0.06 : intensity < 0.6 ? 0.25 : intensity < 0.8 ? 0.55 : 1;
                  return (
                    <div key={i} style={{
                      width: "10px", height: "10px", borderRadius: "2px",
                      background: `rgba(${hexToRgb(GREEN)},${alpha})`,
                    }} />
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem" }}>
                <span style={{ fontSize: "0.75rem", color: "rgba(245,245,247,0.4)" }}>Less</span>
                {[0.06, 0.25, 0.55, 1].map(a => (
                  <div key={a} style={{ width: "10px", height: "10px", borderRadius: "2px", background: `rgba(${hexToRgb(GREEN)},${a})` }} />
                ))}
                <span style={{ fontSize: "0.75rem", color: "rgba(245,245,247,0.4)" }}>More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY HIRE ME ── */}
      <section id="hire" style={{ padding: "140px 2rem", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(BLUE)},0.05) 0%, transparent 70%)`, filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={sectionLabel}>Why Hire Me</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What Sets Me<br />Apart
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem" }}>
            {WHY.map(({ title, desc, Icon, color }) => (
              <div key={title} className="glass-card-hover" style={{
                ...glassCard,
                padding: "2rem",
              }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "14px", marginBottom: "1.25rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  ...glassAccent(color),
                }}>
                  <Icon size={24} color={color} />
                </div>
                <div style={{ fontWeight: 800, fontSize: "1.125rem", marginBottom: "0.625rem" }}>{title}</div>
                <p style={{ color: "rgba(245,245,247,0.6)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "140px 2rem", position: "relative" }}>
        <div style={{ position: "absolute", bottom: "0", right: "10%", width: "45vw", height: "45vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(PURPLE)},0.1) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div style={sectionLabel}>Contact Hub</div>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Let&apos;s Build<br />Something Great
            </h2>
            <p style={{ color: "rgba(245,245,247,0.5)", fontSize: "1.0625rem", marginTop: "1rem" }}>
              Open to collaborations, opportunities, and interesting conversations.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="md:grid-cols-2">
            {/* Contact options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { Icon: Mail, label: "Email", val: "kishor@example.com", color: BLUE, action: "Send Email" },
                { Icon: Linkedin, label: "LinkedIn", val: "linkedin.com/in/kishor", color: "#0077B5", action: "Connect" },
                { Icon: Github, label: "GitHub", val: "github.com/kishor", color: PURPLE, action: "Follow" },
                { Icon: Calendar, label: "Schedule", val: "Book a 30-min call", color: GREEN, action: "Schedule" },
              ].map(({ Icon, label, val, color, action }) => (
                <div key={label} className="glass-card-hover" style={{
                  ...glassCard, padding: "1.375rem 1.75rem",
                  display: "flex", alignItems: "center", gap: "1rem",
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...glassAccent(color),
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "rgba(245,245,247,0.9)" }}>{label}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "rgba(245,245,247,0.45)" }}>{val}</div>
                  </div>
                  <button className="btn-glass" style={{
                    ...glassAccent(color), color,
                    border: "none", cursor: "pointer", padding: "0.375rem 0.875rem",
                    borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700,
                  }}>{action}</button>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <form onSubmit={handleForm} style={{
              ...glassCard, padding: "2.5rem",
              display: "flex", flexDirection: "column", gap: "1.25rem",
            }}>
              {sent && (
                <div style={{
                  padding: "1rem", borderRadius: "0.75rem",
                  background: `rgba(${hexToRgb(GREEN)},0.15)`,
                  border: `1px solid rgba(${hexToRgb(GREEN)},0.3)`,
                  color: GREEN, fontSize: "0.875rem", fontWeight: 600, textAlign: "center",
                }}>
                  Message sent! I&apos;ll get back to you soon. ✓
                </div>
              )}
              {[
                { key: "name", placeholder: "Your Name", type: "text" },
                { key: "email", placeholder: "Your Email", type: "email" },
                { key: "subject", placeholder: "Subject", type: "text" },
              ].map(({ key, placeholder, type }) => (
                <input key={key} type={type} placeholder={placeholder} required
                  value={form[key as keyof typeof form]}
                  onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  style={{
                    padding: "0.875rem 1.25rem", borderRadius: "0.875rem",
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    color: WHITE, fontSize: "0.9375rem", outline: "none", fontFamily: "'Urbanist', sans-serif",
                  }}
                />
              ))}
              <textarea placeholder="Your Message" required rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{
                  padding: "0.875rem 1.25rem", borderRadius: "0.875rem",
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  color: WHITE, fontSize: "0.9375rem", outline: "none", resize: "none",
                  fontFamily: "'Urbanist', sans-serif",
                }}
              />
              <div style={{ display: "flex", gap: "0.875rem" }}>
                <button type="submit" className="btn-glass" style={{
                  flex: 1, padding: "0.875rem", borderRadius: "0.875rem",
                  background: BLUE, color: "#fff", border: "none", cursor: "pointer",
                  fontSize: "0.9375rem", fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  boxShadow: `0 8px 24px rgba(${hexToRgb(BLUE)},0.35)`,
                }}>
                  <Send size={16} /> Send Message
                </button>
                <button type="button" className="btn-glass" style={{
                  padding: "0.875rem 1.375rem", borderRadius: "0.875rem",
                  ...glassAccent(PURPLE), color: PURPLE,
                  border: "none", cursor: "pointer",
                  fontSize: "0.9375rem", fontWeight: 700,
                }}>
                  <Calendar size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "3rem 2rem 4rem", position: "relative" }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto",
          ...glass, borderRadius: "2rem", padding: "2.5rem 3rem",
          textAlign: "center",
        }}>
          <div style={{ fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
            KS<span style={{ color: BLUE }}>.</span>
          </div>
          <p style={{
            color: "rgba(245,245,247,0.4)", fontSize: "0.875rem",
            letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2rem",
            fontWeight: 600,
          }}>
            Code • Create • Innovate
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Mail, href: "mailto:kishor@example.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="btn-glass" style={{
                width: "44px", height: "44px", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                ...glass, color: "rgba(245,245,247,0.5)", textDecoration: "none",
                transition: "color 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,247,0.5)")}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {NAV.slice(0, 5).map(n => (
              <a key={n.href} href={n.href} style={{
                color: "rgba(245,245,247,0.4)", textDecoration: "none",
                fontSize: "0.8125rem", fontWeight: 500, transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = WHITE)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,247,0.4)")}
              >{n.label}</a>
            ))}
          </div>

          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            color: "rgba(245,245,247,0.3)", fontSize: "0.8rem",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem",
          }}>
            © 2025 Kishor Surwade. Crafted with <Heart size={12} fill="#FF453A" color="#FF453A" /> and a lot of coffee.
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}
