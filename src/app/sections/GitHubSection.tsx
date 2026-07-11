import React from "react";
import { GitBranch, Terminal, Users, Star, Zap } from "lucide-react";
import { hexToRgb, glassCard, glassAccent, sectionLabel, GITHUB_LANGS, CONTRIBUTION_DATA, BLUE, PURPLE, GREEN, WHITE } from "./constants";

const GitHubSection = React.memo(function GitHubSection() {
  return (
    <section id="github" style={{ padding: "140px 2rem", position: "relative" }}>
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(GREEN)},0.06) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={sectionLabel}>GitHub Command Center</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Code Activity<br />Dashboard
          </h2>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
          {[
            { label: "Total Contributions", val: "847", Icon: GitBranch, color: GREEN },
            { label: "Public Repos", val: "23", Icon: Terminal, color: BLUE },
            { label: "Followers", val: "142", Icon: Users, color: PURPLE },
            { label: "Stars Earned", val: "89", Icon: Star, color: "#FFD60A" },
            { label: "Coding Streak", val: "47 days", Icon: Zap, color: "#FF9F0A" },
          ].map(({ label, val, Icon, color }) => (
            <div key={label} className="glass-card-hover" style={{
              ...glassCard,
              padding: "1.75rem",
              display: "flex", flexDirection: "column", gap: "0.75rem",
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                ...glassAccent(color),
              }}>
                <Icon size={20} color={color} />
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: WHITE, letterSpacing: "-0.03em" }}>{val}</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(245,245,247,0.5)", fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="md:grid-cols-2">
          {/* Language breakdown */}
          <div style={{ ...glassCard, padding: "2rem" }}>
            <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "rgba(245,245,247,0.8)" }}>Top Languages</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {GITHUB_LANGS.map(({ lang, pct, color }) => (
                <div key={lang}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{lang}</span>
                    <span style={{ fontSize: "0.875rem", color: "rgba(245,245,247,0.5)", fontFamily: "'JetBrains Mono', monospace" }}>{pct}%</span>
                  </div>
                  <div style={{ height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: "3px",
                      background: `linear-gradient(90deg, ${color}, rgba(${hexToRgb(color)},0.5))`,
                      width: `${pct}%`, boxShadow: `0 0 8px rgba(${hexToRgb(color)},0.5)`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution graph — using pre-computed stable data */}
          <div style={{ ...glassCard, padding: "2rem" }}>
            <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "rgba(245,245,247,0.8)" }}>
              Contribution Graph — Last 52 Weeks
            </div>
            <div style={{ display: "flex", gap: "3px", flexWrap: "wrap" }}>
              {CONTRIBUTION_DATA.map((alpha, i) => (
                <div key={i} style={{
                  width: "10px", height: "10px", borderRadius: "2px",
                  background: `rgba(${hexToRgb(GREEN)},${alpha})`,
                }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem" }}>
              <span style={{ fontSize: "0.75rem", color: "rgba(245,245,247,0.4)" }}>Less</span>
              {[0.06, 0.25, 0.55, 1].map(a => (
                <div key={a} style={{ width: "10px", height: "10px", borderRadius: "2px", background: `rgba(${hexToRgb(GREEN)},${a})` }} />
              ))}
              <span style={{ fontSize: "0.75rem", color: "rgba(245,245,247,0.4)" }}>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default GitHubSection;
