import React from "react";
import { Github, ExternalLink, Terminal } from "lucide-react";
import { hexToRgb, glass, glassCard, glassAccent, sectionLabel, PROJECTS, BLUE, WHITE } from "./constants";

const ProjectsSection = React.memo(function ProjectsSection() {
  return (
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
              style={{
                ...glassCard,
                overflow: "hidden",
                display: "flex", flexDirection: "column",
              }}>
              {/* Image placeholder */}
              <div style={{
                height: "200px",
                background: `linear-gradient(135deg, rgba(${hexToRgb(accent)},0.2), rgba(0,0,0,0.5))`,
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
  );
});

export default ProjectsSection;
