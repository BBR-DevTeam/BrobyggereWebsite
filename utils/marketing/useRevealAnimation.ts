"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useRevealAnimation = (): void => {
  const pathname = usePathname();

  // Keep refs to only the triggers/timelines we create
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const timelinesRef = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // ✅ cleanup ONLY our stuff from previous route
    timelinesRef.current.forEach((tl) => tl.kill());
    timelinesRef.current = [];

    triggersRef.current.forEach((t) => t.kill());
    triggersRef.current = [];

    const revealContainers = document.querySelectorAll<HTMLElement>(".reveal");

    revealContainers.forEach((container, idx) => {
      const image = container.querySelector<HTMLElement>("img");
      if (!image) return;

      // Clear old props so it can't get stuck off-screen
      gsap.set([container, image], {
        clearProps: "transform,opacity,visibility",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          id: `reveal-${pathname}-${idx}`,
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 1 })
        .from(container, {
          xPercent: -100,
          duration: 1.3,
          ease: "power2.out",
        })
        .from(
          image,
          {
            xPercent: 100,
            scale: 1.3,
            duration: 1.3,
            ease: "power2.out",
          },
          "<",
        );

      timelinesRef.current.push(tl);
      if (tl.scrollTrigger) triggersRef.current.push(tl.scrollTrigger);
    });

    ScrollTrigger.refresh();

    return () => {
      // ✅ cleanup ONLY our stuff
      timelinesRef.current.forEach((tl) => tl.kill());
      timelinesRef.current = [];

      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [pathname]);
};
