import { useEffect } from "react";

const SELECTOR = ".neo-card";
const STAGGER_MS = 110;
const MAX_STEPS = 6; // cap so large batches don't wait too long

/**
 * Reveals every `.neo-card` once, when it scrolls into view.
 * Cards that enter in the same observer batch are staggered (~110ms apart).
 * Uses one IntersectionObserver + a MutationObserver (for cards added later,
 * e.g. when the skills filter changes). No scroll listeners.
 */
export function useCardReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const ra = a.boundingClientRect;
            const rb = b.boundingClientRect;
            return Math.abs(ra.top - rb.top) > 20 ? ra.top - rb.top : ra.left - rb.left;
          });

        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.style.animationDelay = `${Math.min(i, MAX_STEPS) * STAGGER_MS}ms`;
          el.classList.add("is-in");
          el.addEventListener(
            "animationend",
            () => {
              el.style.animationDelay = "";
              el.classList.add("is-done");
            },
            { once: true }
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const watch = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (!el.classList.contains("is-in")) io.observe(el);
      });
    };
    watch(document);

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) {
            if (n.matches(SELECTOR)) io.observe(n);
            watch(n);
          }
        })
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
