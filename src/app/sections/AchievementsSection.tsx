import React from "react";
import { hexToRgb, glassCard, glassAccent, sectionLabel, ACHIEVEMENTS } from "./constants";

const AchievementsSection = React.memo(function AchievementsSection() {
  return (
    <section id="achievements" className="animate-section" style={{ padding: "140px 2rem", position: "relative" }}>
      <div style={{ position: "absolute", top: "20%", left: "0%", width: "50vw", height: "50vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb("#888888")},0.05) 0%, transparent 70%)`, filter: "blur(100px)", pointerEvents: "none" }} />
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
              className="neo-card"
              style={{
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
              <div style={{ fontWeight: 800, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{title}</div>
              <p style={{ color: "rgba(29,29,31,0.6)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default AchievementsSection;
