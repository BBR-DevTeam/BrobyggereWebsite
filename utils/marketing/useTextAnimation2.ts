"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let SplitText: any;

type AnimEl = HTMLElement & {
  __originalHTML?: string;
  __tween?: gsap.core.Tween;
  __trigger?: ScrollTrigger;
};

export default function useTextAnimation2() {
  const pathname = usePathname();
  const elsRef = useRef<AnimEl[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const setup = async () => {
      // Dynamic import SplitText (if available)
      try {
        const gsapAll = await import("gsap/all");
        SplitText = gsapAll.SplitText;
        if (SplitText) gsap.registerPlugin(SplitText);
      } catch {
        // silent – fallback will be used
      }

      elsRef.current = Array.from(
        document.querySelectorAll(
          ".text-anime-style-2",
        ) as NodeListOf<HTMLElement>,
      ) as AnimEl[];

      elsRef.current.forEach((el, idx) => {
        // restore original HTML if needed
        if (!el.__originalHTML) el.__originalHTML = el.innerHTML;
        else el.innerHTML = el.__originalHTML;

        // kill only our tween/trigger
        el.__tween?.kill();
        el.__trigger?.kill();

        let chars: HTMLElement[] = [];

        if (SplitText) {
          const split = new SplitText(el, {
            type: "chars",
            charsClass: "split-char",
          });
          chars = split.chars;
        } else {
          const text = el.textContent || "";
          el.innerHTML = text
            .split("")
            .map(
              (c) =>
                `<span class="split-char">${c === " " ? "&nbsp;" : c}</span>`,
            )
            .join("");
          chars = Array.from(el.querySelectorAll(".split-char"));
        }

        gsap.set(el, { perspective: 400 });
        gsap.set(chars, { opacity: 0, x: 50 });

        const tween = gsap.to(chars, {
          scrollTrigger: {
            id: `text2-${pathname}-${idx}`,
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          stagger: 0.02,
          onComplete: () => {
            gsap.set(chars, { opacity: 1, x: 0, clearProps: "transform" });
          },
        });

        el.__tween = tween;
        el.__trigger = tween.scrollTrigger as ScrollTrigger;
      });

      ScrollTrigger.refresh();
    };

    setup();

    return () => {
      elsRef.current.forEach((el) => {
        el.__tween?.kill();
        el.__trigger?.kill();

        if (el.__originalHTML) el.innerHTML = el.__originalHTML;

        gsap.set(el, { clearProps: "opacity,transform" });

        delete el.__tween;
        delete el.__trigger;
      });
    };
  }, [pathname]);

  return null;
}
