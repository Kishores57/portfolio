import React from "react";
import {
  Github, Linkedin, Instagram, Mail, Download, ExternalLink, ChevronDown,
} from "lucide-react";
import { hexToRgb, glass, glassAccent, BLUE, PURPLE, GREEN, WHITE } from "./constants";

const HeroSection = React.memo(function HeroSection() {
  return (
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
          {(["Full Stack Developer", "AI/ML Enthusiast", "Android Developer"] as const).map((role, i) => (
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
            <a key={label} href={href} title={label} className="btn-glass social-icon-link" style={{
              width: "40px", height: "40px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "rgba(245,245,247,0.6)", textDecoration: "none",
              ...glassAccent(BLUE),
            }}>
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
  );
});

export default HeroSection;
