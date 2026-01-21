"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../../../styles/marketing/header/mobileMenu.module.css";
import { NAV_ITEMS } from "@/utils/marketing/navItems";

interface MobileMenuProps {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
}

export default function MobileMenu({
  isMobileMenu,
  handleMobileMenu,
}: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    if (isMobileMenu) handleMobileMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${
          isMobileMenu ? styles.overlayShow : ""
        }`}
        onClick={handleMobileMenu}
        aria-hidden={!isMobileMenu}
      />

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          isMobileMenu ? styles.sidebarOpen : ""
        }`}
        aria-hidden={!isMobileMenu}
      >
        <div className={styles.top}>
          <Link href="/" onClick={handleMobileMenu} className={styles.logoLink}>
            <img
              src="/assets/img/logo/header-logo1.png"
              alt="Brobyggere"
              className={styles.logoImg}
            />
          </Link>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleMobileMenu}
            aria-label="Lukk meny"
          >
            <span aria-hidden>×</span>
          </button>
        </div>

        <nav className={styles.nav} aria-label="Hovedmeny">
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={styles.item}>
                <Link
                  href={item.href}
                  onClick={handleMobileMenu}
                  className={styles.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Link
            href="/vacancies"
            onClick={handleMobileMenu}
            className={`theme-btn2 ${styles.ctaBtn}`}
          >
            Bli vikar
            <span>
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>

          <Link
            href="/order"
            onClick={handleMobileMenu}
            className={`theme-btn1 ${styles.ctaBtn}`}
          >
            Bestill vikar
            <span>
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}
