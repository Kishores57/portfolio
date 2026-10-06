import React from "react";
import { Github, Linkedin, Instagram, Mail, Download, ArrowUpRight, ChevronDown } from "lucide-react";
import { glass, WHITE } from "./constants";

const ROLES = ["Full-Stack Developer", "AI/ML Engineer", "Android Developer"];

const HeroSection = React.memo(function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        {/* ── Left: copy ── */}
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            Available for opportunities
          </div>

          <div className="hero-name">Kishor Surwade</div>

          <h1 className="hero-roles">
            {ROLES.map((role, i) => (
              <span key={role} className={`hero-role hero-role-${i}`}>{role}</span>
            ))}
          </h1>

          <p className="hero-tagline">
            Building ideas into reality — shipping thoughtful software at the intersection
            of machine learning and human experience.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-glass hero-btn hero-btn-primary">
              Explore My Work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-glass hero-btn hero-btn-ghost">Hire Me</a>
            <a href="#" className="btn-glass hero-btn hero-btn-ghost">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="hero-social">
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Mail, href: "mailto:kishor@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} title={label} aria-label={label}
                className="btn-glass social-icon-link hero-social-link"
                style={{ ...glass, color: "rgba(29,29,31,0.7)" }}>
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: portrait ── */}
        <div className="hero-visual">
          <div className="neo-card hero-photo-card">
            <img src="/profile.png" alt="Kishor Surwade — Full-Stack Developer and AI/ML Engineer" className="hero-photo" />
          </div>
          <div className="hero-photo-tag" style={{ color: WHITE }}>
            <span className="hero-photo-tag-k">Based in</span> India
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        Scroll
        <ChevronDown size={16} />
      </div>
    </section>
  );
});

export default HeroSection;
