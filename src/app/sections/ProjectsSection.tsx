import React, { useEffect, useRef, useState, useCallback } from "react";
import { Github, ExternalLink, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { sectionLabel, glassCard, glassAccent, PROJECTS } from "./constants";

const STEP_MS = 3500; // ~0.6s move + ~2.9s comfortable reading time
const VISIBLE_BEHIND = 3;

const ProjectsSection = React.memo(function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const total = PROJECTS.length;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % total), STEP_MS);
    return () => window.clearTimeout(id);
  }, [inView, paused, active, total]);

  const go = useCallback((i: number) => setActive((i + total) % total), [total]);

  return (
    <section id="projects" style={{ padding: "140px 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-title" style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div style={sectionLabel}>Project Showcase</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            What I&apos;ve Built
          </h2>
        </div>

        <div ref={rootRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="project-stage" aria-live="polite">
            {PROJECTS.map(({ title, desc, tech, type, accent, image }, i) => {
              const d = i - active;
              let transform: string;
              let opacity: number;
              let blur: number;
              if (d < 0) {
                transform = "translate3d(-160px, 0, 0) scale(0.92)";
                opacity = 0; blur = 10;
              } else if (d > VISIBLE_BEHIND) {
                transform = `translate3d(${(VISIBLE_BEHIND + 1) * 52}px, 0, 0) scale(${1 - (VISIBLE_BEHIND + 1) * 0.05})`;
                opacity = 0; blur = 12;
              } else {
                transform = `translate3d(${d * 52}px, 0, 0) scale(${1 - d * 0.05})`;
                opacity = d === 0 ? 1 : Math.max(0.15, 0.75 - d * 0.22);
                blur = d * 4;
              }
              return (
                <article
                  key={title}
                  className="project-card"
                  aria-hidden={d !== 0}
                  style={{
                    ...glassCard,
                    transform, opacity,
                    filter: blur ? `blur(${blur}px)` : "none",
                    zIndex: 100 - Math.abs(d),
                    pointerEvents: d === 0 ? "auto" : "none",
                  }}
                >
                  {/* Photo area — set `image` in constants.ts to show a real photo */}
                  <div className="project-media" style={image ? undefined : glassAccent(accent)}>
                    {image ? (
                      <img src={image} alt={`${title} screenshot`} />
                    ) : (
                      <div className="project-placeholder">
                        <ImageIcon size={34} color={accent} />
                        <span>Project photo</span>
                      </div>
                    )}
                    <span className="project-index">{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="project-info">
                    <span className="project-type" style={{ color: accent }}>{type}</span>
                    <h3 className="project-title">{title}</h3>
                    <p className="project-desc">{desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      {tech.slice(0, 6).map((t) => (
                        <span key={t} style={{
                          padding: "0.25rem 0.625rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600,
                          fontFamily: "'JetBrains Mono', monospace", background: "#f3f4f7", color: "rgba(29,29,31,0.7)",
                        }}>{t}</span>
                      ))}
                      {tech.length > 6 && (
                        <span style={{
                          padding: "0.25rem 0.625rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700,
                          fontFamily: "'JetBrains Mono', monospace", background: "#111", color: "#fff",
                        }}>+{tech.length - 6}</span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <button className="btn-glass" style={{
                        padding: "0.7rem 1.25rem", borderRadius: "100px", border: "none", cursor: "pointer",
                        background: "#111", color: "#fff", fontSize: "0.85rem", fontWeight: 700,
                        display: "flex", alignItems: "center", gap: "0.4rem",
                      }}><ExternalLink size={14} /> Live Demo</button>
                      <button className="btn-glass" style={{
                        padding: "0.7rem 1.25rem", borderRadius: "100px", border: "none", cursor: "pointer",
                        background: "#fff", color: "#1d1d1f", fontSize: "0.85rem", fontWeight: 700,
                        boxShadow: "6px 6px 14px #d6d6d6, -6px -6px 14px #fff",
                        display: "flex", alignItems: "center", gap: "0.4rem",
                      }}><Github size={14} /> Code</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="journey-controls">
            <button className="journey-arrow" aria-label="Previous project" onClick={() => go(active - 1)}>
              <ChevronLeft size={18} />
            </button>
            <div className="journey-dots">
              {PROJECTS.map((p, i) => (
                <button key={p.title} aria-label={`Go to project ${i + 1}`} onClick={() => go(i)}
                  className={`journey-dot${i === active ? " is-active" : ""}${i < active ? " is-past" : ""}`} />
              ))}
            </div>
            <button className="journey-arrow" aria-label="Next project" onClick={() => go(active + 1)}>
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="journey-count">
            {String(active + 1).padStart(2, "0")} <span>/ {String(total).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
