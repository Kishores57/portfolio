import React from "react";
import { hexToRgb, glassCard, glassAccent, sectionLabel, BLUE, PURPLE, GREEN, TIMELINE } from "./constants";

const JourneySection = React.memo(function JourneySection() {
  return (
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

                  {/* Node — using CSS pseudo-element for pulse instead of box-shadow animation */}
                  <div className="pulse-ring-container hidden md:flex" style={{
                    width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...glassAccent(accent),
                    zIndex: 2,
                  }}>
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
  );
});

export default JourneySection;
