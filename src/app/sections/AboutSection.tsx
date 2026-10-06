import React from "react";
import { glassCard, glassAccent, sectionLabel, BLUE, PURPLE, GREEN } from "./constants";

const FACTS = {
  left: [
    { n: "01", title: "Who I Am", text: "A passionate Full Stack Developer and AI/ML enthusiast from India, currently pursuing my engineering degree. I build things that matter — from autonomous robots to AI-powered conservation platforms." },
    { n: "02", title: "My Mission", text: "To build technology that solves real environmental and social challenges. Software, crafted with intention, can reshape how humanity relates to the world around it." },
  ],
  right: [
    { n: "03", title: "Why I Build", text: "The gap between 'this should exist' and 'this exists' is filled by people who ship code. Problems deserve solutions — and solutions deserve to be beautiful." },
    { n: "04", title: "Future Vision", text: "Building AI-first products at the intersection of machine learning and human experience — software that doesn't just assist humans, but amplifies what we're capable of." },
  ],
};

const STATS = [
  { label: "Projects", val: "10+" },
  { label: "Hackathons", val: "5+" },
  { label: "Stars", val: "89" },
];

function FactCard({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="neo-card about-fact" style={{ ...glassCard, padding: "1.75rem 1.75rem 1.9rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.9rem" }}>
        <div style={{ fontWeight: 800, fontSize: "1.0625rem", color: "#111" }}>{title}</div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(29,29,31,0.35)", fontWeight: 500 }}>{n}</span>
      </div>
      <div style={{ width: "28px", height: "2px", background: "#111", marginBottom: "0.9rem" }} />
      <p style={{ color: "rgba(29,29,31,0.62)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  );
}

const AboutSection = React.memo(function AboutSection() {
  return (
    <section id="about" style={{ padding: "140px 2rem", position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
      <div className="section-title" style={{ textAlign: "center", marginBottom: "5rem" }}>
        <div style={sectionLabel}>About Me</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          The Human Behind<br />the Code
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-col">
          {FACTS.left.map((f) => <FactCard key={f.n} {...f} />)}
        </div>

        {/* Centre profile card */}
        <div className="neo-card about-centre" style={{ ...glassCard, padding: "2.5rem 2rem" }}>
          <div className="about-avatar">
            <img src="/profile.png" alt="Kishor Surwade" />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", color: "#111", marginBottom: "0.3rem" }}>Kishor Surwade</div>
            <div style={{ color: "rgba(29,29,31,0.5)", fontSize: "0.85rem", fontFamily: "'JetBrains Mono', monospace" }}>@kishorsurwade</div>
          </div>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ tag: "Open to Work", color: GREEN }, { tag: "India", color: BLUE }].map(({ tag, color }) => (
              <span key={tag} style={{
                padding: "0.3rem 0.85rem", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 600,
                ...glassAccent(color), color,
              }}>{tag}</span>
            ))}
          </div>
          <div className="about-stats">
            {STATS.map(({ label, val }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: PURPLE === "" ? "" : "#111", letterSpacing: "-0.02em" }}>{val}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(29,29,31,0.5)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-col">
          {FACTS.right.map((f) => <FactCard key={f.n} {...f} />)}
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
