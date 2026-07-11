import React from "react";
import { hexToRgb, glassCard, glassAccent, sectionLabel, BLUE, PURPLE, GREEN, WHITE } from "./constants";

const AboutSection = React.memo(function AboutSection() {
  return (
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
            {[{ tag: "Open to Work", color: GREEN }, { tag: "India", color: BLUE }].map(({ tag, color }) => (
              <span key={tag} style={{
                padding: "0.25rem 0.75rem", borderRadius: "100px",
                fontSize: "0.75rem", fontWeight: 600,
                ...glassAccent(color), color,
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
  );
});

export default AboutSection;
