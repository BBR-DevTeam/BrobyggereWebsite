"use client";

import { useEffect, useState, type FC } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import AOS from "aos";
import "aos/dist/aos.css";
import "wowjs/css/libs/animate.css";

import { DataBg } from "@/utils/marketing/data-bg";
import { useOffcanvasMenu } from "@/utils/marketing/offcanvasMenu";
import { useAccordion } from "@/utils/marketing/useAccordion";
import { useCircleText } from "@/utils/marketing/useCircleText";
import { useOdometerCounter } from "@/utils/marketing/useOdometerCounter";
import { useParallaxEffect } from "@/utils/marketing/useParallaxEffect";
import useTextAnimation2 from "@/utils/marketing/useTextAnimation2";
import useTextAnimation3 from "@/utils/marketing/useTextAnimation3";
import { useRevealAnimation } from "@/utils/marketing/useRevealAnimation";

import ScrollToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";

interface LayoutProps {
  headerStyle?: Number;
  mainMenuStyle?: string;
  footerStyle?: Number;
  children?: React.ReactNode;
  bodyName?: string;
}

interface BootstrapComponentsProps {}
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
  () => import("@/utils/marketing/useBootstrap"),
  { ssr: false },
) as FC<BootstrapComponentsProps>;

export default function Layout({
  mainMenuStyle,
  children,
  bodyName,
}: LayoutProps) {
  const pathname = usePathname();

  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = (): void => {
    setMobileMenu((prev) => {
      const next = !prev;
      if (next) document.body.classList.add("mobile-menu-active");
      else document.body.classList.remove("mobile-menu-active");
      return next;
    });
  };

  // ✅ scroll listener once
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ init AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // ✅ refresh AOS on route change
  useEffect(() => {
    const t = setTimeout(() => {
      AOS.refreshHard();
    }, 50);

    return () => clearTimeout(t);
  }, [pathname]);

  // init theme JS / effects
  DataBg();
  useTextAnimation2();
  useTextAnimation3();
  useOffcanvasMenu();
  useAccordion();
  useCircleText();
  useOdometerCounter();
  useParallaxEffect();

  // ✅ reveal hook will now rerun because it uses pathname internally
  useRevealAnimation();

  return (
    <div className={`body ${bodyName ? bodyName : ""}`}>
      <div id="top" />
      <BootstrapComponents />

      <Header1
        mainMenuStyle={mainMenuStyle}
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main>{children}</main>

      <Footer1 />
      <ScrollToTop />
    </div>
  );
}
