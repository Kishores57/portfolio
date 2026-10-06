import React, { useState, useCallback } from "react";
import { Mail, Linkedin, Github, Calendar, Send } from "lucide-react";
import { hexToRgb, glass, glassCard, glassAccent, sectionLabel, BLUE, PURPLE, GREEN, WHITE } from "./constants";

const ContactSection = React.memo(function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }, []);

  return (
    <section id="contact" style={{ padding: "140px 2rem", position: "relative" }}>
      <div style={{ position: "absolute", bottom: "0", right: "10%", width: "45vw", height: "45vw", borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(PURPLE)},0.1) 0%, transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={sectionLabel}>Contact Hub</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Let&apos;s Build<br />Something Great
          </h2>
          <p style={{ color: "rgba(29,29,31,0.5)", fontSize: "1.0625rem", marginTop: "1rem" }}>
            Open to collaborations, opportunities, and interesting conversations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="md:grid-cols-2">
          {/* Contact options */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { Icon: Mail, label: "Email", val: "kishor@example.com", color: BLUE, action: "Send Email" },
              { Icon: Linkedin, label: "LinkedIn", val: "linkedin.com/in/kishor", color: "#222222", action: "Connect" },
              { Icon: Github, label: "GitHub", val: "github.com/kishor", color: PURPLE, action: "Follow" },
              { Icon: Calendar, label: "Schedule", val: "Book a 30-min call", color: GREEN, action: "Schedule" },
            ].map(({ Icon, label, val, color, action }) => (
              <div key={label} className="neo-card" style={{
                ...glassCard, padding: "1.375rem 1.75rem",
                display: "flex", alignItems: "center", gap: "1rem",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  ...glassAccent(color),
                }}>
                  <Icon size={20} color={color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "rgba(29,29,31,0.9)" }}>{label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "rgba(29,29,31,0.45)" }}>{val}</div>
                </div>
                <button className="btn-glass" style={{
                  ...glassAccent(color), color,
                  border: "none", cursor: "pointer", padding: "0.375rem 0.875rem",
                  borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700,
                }}>{action}</button>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleForm} className="neo-card" style={{
            ...glassCard, padding: "2.5rem",
            display: "flex", flexDirection: "column", gap: "1.25rem",
          }}>
            {sent && (
              <div style={{
                padding: "1rem", borderRadius: "0.75rem",
                background: `rgba(${hexToRgb(GREEN)},0.15)`,
                border: `1px solid rgba(${hexToRgb(GREEN)},0.3)`,
                color: GREEN, fontSize: "0.875rem", fontWeight: 600, textAlign: "center",
              }}>
                Message sent! I&apos;ll get back to you soon. ✓
              </div>
            )}
            {[
              { key: "name", placeholder: "Your Name", type: "text" },
              { key: "email", placeholder: "Your Email", type: "email" },
              { key: "subject", placeholder: "Subject", type: "text" },
            ].map(({ key, placeholder, type }) => (
              <input key={key} type={type} placeholder={placeholder} required
                value={form[key as keyof typeof form]}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                style={{
                  padding: "0.875rem 1.25rem", borderRadius: "0.875rem",
                  background: "#f3f4f7", border: "none", boxShadow: "inset 3px 3px 6px #e0e2e7, inset -3px -3px 6px #ffffff",
                  color: WHITE, fontSize: "0.9375rem", outline: "none", fontFamily: "'Urbanist', sans-serif",
                }}
              />
            ))}
            <textarea placeholder="Your Message" required rows={4}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{
                padding: "0.875rem 1.25rem", borderRadius: "0.875rem",
                background: "#f3f4f7", border: "none", boxShadow: "inset 3px 3px 6px #e0e2e7, inset -3px -3px 6px #ffffff",
                color: WHITE, fontSize: "0.9375rem", outline: "none", resize: "none",
                fontFamily: "'Urbanist', sans-serif",
              }}
            />
            <div style={{ display: "flex", gap: "0.875rem" }}>
              <button type="submit" className="btn-glass" style={{
                flex: 1, padding: "0.875rem", borderRadius: "0.875rem",
                background: BLUE, color: "#fff", border: "none", cursor: "pointer",
                fontSize: "0.9375rem", fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                boxShadow: `0 8px 24px rgba(${hexToRgb(BLUE)},0.35)`,
              }}>
                <Send size={16} /> Send Message
              </button>
              <button type="button" className="btn-glass" style={{
                padding: "0.875rem 1.375rem", borderRadius: "0.875rem",
                ...glassAccent(PURPLE), color: PURPLE,
                border: "none", cursor: "pointer",
                fontSize: "0.9375rem", fontWeight: 700,
              }}>
                <Calendar size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
