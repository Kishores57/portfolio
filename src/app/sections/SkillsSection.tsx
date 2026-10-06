import React, { useState, useMemo } from "react";
import { glass, glassCard, sectionLabel, SKILLS, SKILL_CATS, BLUE, PURPLE, WHITE } from "./constants";
import { hexToRgb } from "./constants";

const SkillsSection = React.memo(function SkillsSection() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredSkills = useMemo(
    () => activeCat === "All" ? SKILLS : SKILLS.filter(s => s.cat === activeCat),
    [activeCat]
  );

  return (
    <section id="skills" className="animate-section" style={{ padding: "140px 2rem", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "40vw", height: "40vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(PURPLE)},0.07) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-title" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={sectionLabel}>Skills Universe</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Technologies I<br />Command
          </h2>
        </div>

        {/* Category filters */}
        <div className="section-title" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center", marginBottom: "3.5rem" }}>
          {SKILL_CATS.map(cat => (
            <button key={cat} className="cat-pill" onClick={() => setActiveCat(cat)}
              style={{
                padding: "0.5rem 1.125rem", borderRadius: "100px",
                fontSize: "0.8125rem", fontWeight: 600, border: "none", cursor: "pointer",
                ...(activeCat === cat
                  ? { background: BLUE, color: "#fff", boxShadow: "0 4px 12px rgba(17,17,17,0.3)" }
                  : { ...glass, color: "rgba(29,29,31,0.6)" }),
              }}>{cat}</button>
          ))}
        </div>

        {/* Skill orbs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {filteredSkills.map(({ name, color }) => (
            <div key={name} className="neo-card skill-orb"
              style={{
                padding: "0.875rem 1.5rem",
                ...glassCard, borderRadius: "30px",
                boxShadow: "8px 8px 18px #d6d6d6, -8px -8px 18px #ffffff",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: color }} />
              <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: WHITE }}>{name}</span>
              <span style={{ fontSize: "0.7rem", color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{activeCat === "All" ? SKILLS.find(s => s.name === name)?.cat : ""}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
