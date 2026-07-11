import React from "react";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";
import { glass, NAV, BLUE, WHITE } from "./constants";

const FooterSection = React.memo(function FooterSection() {
  return (
    <footer style={{ padding: "3rem 2rem 4rem", position: "relative" }}>
      <div style={{
        maxWidth: "900px", margin: "0 auto",
        ...glass, borderRadius: "2rem", padding: "2.5rem 3rem",
        textAlign: "center",
      }}>
        <div style={{ fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          KS<span style={{ color: BLUE }}>.</span>
        </div>
        <p style={{
          color: "rgba(245,245,247,0.4)", fontSize: "0.875rem",
          letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2rem",
          fontWeight: 600,
        }}>
          Code • Create • Innovate
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {[
            { Icon: Github, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Mail, href: "mailto:kishor@example.com" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} className="btn-glass social-icon-link" style={{
              width: "44px", height: "44px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              ...glass, color: "rgba(245,245,247,0.5)", textDecoration: "none",
            }}>
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {NAV.slice(0, 5).map(n => (
            <a key={n.href} href={n.href} className="footer-nav-link" style={{
              color: "rgba(245,245,247,0.4)", textDecoration: "none",
              fontSize: "0.8125rem", fontWeight: 500,
            }}>{n.label}</a>
          ))}
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "1.5rem",
          color: "rgba(245,245,247,0.3)", fontSize: "0.8rem",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem",
        }}>
          © 2025 Kishor Surwade. Crafted with <Heart size={12} fill="#FF453A" color="#FF453A" /> and a lot of coffee.
        </div>
      </div>
    </footer>
  );
});

export default FooterSection;
