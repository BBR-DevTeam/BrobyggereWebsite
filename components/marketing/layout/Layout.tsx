"use client";
import { DataBg } from "@/utils/marketing/data-bg";
import { useOffcanvasMenu } from "@/utils/marketing/offcanvasMenu";
import { useAccordion } from "@/utils/marketing/useAccordion";
import { useCircleText } from "@/utils/marketing/useCircleText";
import { useOdometerCounter } from "@/utils/marketing/useOdometerCounter";
import { useParallaxEffect } from "@/utils/marketing/useParallaxEffect";
import useTextAnimation2 from "@/utils/marketing/useTextAnimation2";
import useTextAnimation3 from "@/utils/marketing/useTextAnimation3";
import { useRevealAnimation } from "@/utils/marketing/useRevealAnimation";

import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";

import ScrollToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import "wowjs/css/libs/animate.css";

// same props type – headerStyle/footerStyle are kept but no longer used
interface LayoutProps {
  headerStyle?: Number;
  mainMenuStyle?: string;
  footerStyle?: Number;
  children?: React.ReactNode;
  bodyName?: string;
}

// dynamic bootstrap init
interface BootstrapComponentsProps {}
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
  () => import("@/utils/marketing/useBootstrap"),
  { ssr: false }
) as FC<BootstrapComponentsProps>;

export default function Layout({
  headerStyle,
  mainMenuStyle,
  footerStyle,
  children,
  bodyName,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });

      const handleScroll = (): void => {
        const scrollCheck: boolean = window.scrollY > 100;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scroll]);

  // init theme JS / effects
  DataBg();
  useTextAnimation2();
  useTextAnimation3();
  useOffcanvasMenu();
  useAccordion();
  useCircleText();
  useOdometerCounter();
  useParallaxEffect();
  useRevealAnimation();

  return (
    <div className={`body ${bodyName ? bodyName : ""}`}>
      <div id="top" />
      <BootstrapComponents />

      {/* Always use Header1 */}
      <Header1
        mainMenuStyle={mainMenuStyle}
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main>{children}</main>

      {/* Always use Footer1 */}
      <Footer1 />

      <ScrollToTop />
    </div>
  );
}
