import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { glassCard, sectionLabel, TIMELINE } from "./constants";

const STEP_MS = 1000; // ~0.6s move + ~0.4s hold before the next card arrives
const VISIBLE_BEHIND = 3;

const JourneySection = React.memo(function JourneySection() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const total = TIMELINE.length;

  // Start the sequence only once the section is on screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance: each card lands, holds ~1s, next one slides in. Loops at the end.
  useEffect(() => {
    if (!inView || paused) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % total), STEP_MS);
    return () => window.clearTimeout(id);
  }, [inView, paused, active, total]);

  const go = useCallback((i: number) => setActive((i + total) % total), [total]);

  return (
    <section id="journey" style={{ padding: "140px 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div style={sectionLabel}>My Journey</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Floating Through<br />Memories
          </h2>
        </div>

        <div
          ref={rootRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Stack stage */}
          <div className="journey-stage" aria-live="polite">
            {TIMELINE.map(({ year, title, desc, Icon }, i) => {
              const d = i - active;
              let transform: string;
              let opacity: number;
              let blur: number;
              if (d < 0) {
                // already shown → slides away to the left
                transform = "translate3d(-140px, 0, 0) scale(0.9)";
                opacity = 0; blur = 10;
              } else if (d > VISIBLE_BEHIND) {
                transform = `translate3d(${(VISIBLE_BEHIND + 1) * 46}px, 0, 0) scale(${1 - (VISIBLE_BEHIND + 1) * 0.06})`;
                opacity = 0; blur = 12;
              } else {
                transform = `translate3d(${d * 46}px, 0, 0) scale(${1 - d * 0.06})`;
                opacity = d === 0 ? 1 : Math.max(0.15, 0.75 - d * 0.22);
                blur = d * 4;
              }
              return (
                <article
                  key={i}
                  className="journey-card"
                  aria-hidden={d !== 0}
                  style={{
                    ...glassCard,
                    transform,
                    opacity,
                    filter: blur ? `blur(${blur}px)` : "none",
                    zIndex: 100 - Math.abs(d),
                    pointerEvents: d === 0 ? "auto" : "none",
                  }}
                >
                  <div className="journey-year">{year}</div>
                  <div className="journey-divider" />
                  <div className="journey-body">
                    <div className="journey-icon"><Icon size={20} color="#111" /></div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.375rem", letterSpacing: "-0.02em", margin: "0 0 0.6rem", color: "#111" }}>{title}</h3>
                    <p style={{ color: "rgba(29,29,31,0.62)", fontSize: "0.975rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Controls */}
          <div className="journey-controls">
            <button className="journey-arrow" aria-label="Previous memory" onClick={() => go(active - 1)}>
              <ChevronLeft size={18} />
            </button>
            <div className="journey-dots">
              {TIMELINE.map((_, i) => (
                <button key={i} aria-label={`Go to memory ${i + 1}`} onClick={() => go(i)}
                  className={`journey-dot${i === active ? " is-active" : ""}${i < active ? " is-past" : ""}`} />
              ))}
            </div>
            <button className="journey-arrow" aria-label="Next memory" onClick={() => go(active + 1)}>
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

export default JourneySection;
