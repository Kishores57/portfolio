import React from "react";
import { hexToRgb, glassCard, glassAccent, sectionLabel, WHY, BLUE } from "./constants";

const WhyHireSection = React.memo(function WhyHireSection() {
  return (
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
  );
});

export default WhyHireSection;
