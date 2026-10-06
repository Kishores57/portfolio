import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import PillNav from "./PillNav";
import "./App.css";

// ── Section Components (memoized, isolated state) ─────────────────────────────
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import JourneySection from "./sections/JourneySection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import WhyHireSection from "./sections/WhyHireSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import { useCardReveal } from "./useCardReveal";
import { NAV, WHITE } from "./sections/constants";

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

  // Scroll-reveal for every .neo-card (single IntersectionObserver, staggered)
  useCardReveal();

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
      {/* ── Clean light background ── */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -999, pointerEvents: 'none', background: '#eceef1' }} />

      <div style={{ background: "transparent", minHeight: "100vh", fontFamily: "'Urbanist', sans-serif", color: WHITE, overflowX: "hidden" }}>

        {/* ── Navbar — PillNav ── */}
        <PillNav
          logo={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-weight="900" font-size="16" fill="white">KS.</text></svg>`}
          logoAlt="KS Logo"
          items={navItems}
          activeHref={activeNav}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#1d1d1f"
          pillColor="#ffffff"
          hoveredPillTextColor="#111111"
          pillTextColor="rgba(245,245,247,0.8)"
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
          <WhyHireSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
}
