import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import PillNav from "./PillNav";
import LiquidEther from "./LiquidEther";
import "./App.css";

// ── Section Components (memoized, isolated state) ─────────────────────────────
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import JourneySection from "./sections/JourneySection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import GitHubSection from "./sections/GitHubSection";
import WhyHireSection from "./sections/WhyHireSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import { NAV, SCATTER_OFFSETS, liquidColors, WHITE } from "./sections/constants";

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // RAF-throttled scroll handler — coalesces state updates
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "achievements", "contact"];

    const onScroll = () => {
      if (rafRef.current) return; // already scheduled
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const y = window.scrollY;
        setScrolled(y > 60);
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && y >= el.offsetTop - 120) {
            setActiveNav(`#${sections[i]}`);
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // IntersectionObserver — fire once per section (no re-animation on scroll back)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
            // Once animated, stop observing (animate once)
            observer.unobserve(entry.target);
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

  // Stable nav click handler
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setTransitioning(true);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 550);
    setTimeout(() => setTransitioning(false), 1100);
  }, []);

  // navItems depends on handleNavClick (which is now stable via useCallback)
  const navItems = useMemo(() => NAV.map(n => ({
    ...n,
    onClick: (e: any) => handleNavClick(e, n.href)
  })), [handleNavClick]);

  const toggleMobile = useCallback(() => setMobileOpen(o => !o), []);

  return (
    <>
      {/* ── Background Liquid Fluid ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -999, pointerEvents: 'none' }}>
        <LiquidEther
          colors={liquidColors}
          mouseForce={20}
          cursorSize={140}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        {/* Dark overlay to ensure text remains readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 15, 0.55)', zIndex: 1 }} />
      </div>

      <div style={{ background: "transparent", minHeight: "100vh", fontFamily: "'Urbanist', sans-serif", color: WHITE, overflowX: "hidden" }}>

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
          onMobileMenuClick={toggleMobile}
          initialLoadAnimation={true}
        />

        <main className={transitioning ? "page-transitioning" : ""}>
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <GitHubSection />
          <WhyHireSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
