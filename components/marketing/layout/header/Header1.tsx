import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import styles from "../../../../styles/marketing/header/header.module.css";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}: any) {
  return (
    <>
      <header className={styles.headerRoot}>
        {/* =========================
            FULL DESKTOP (>= 1200px)
           ========================= */}
        <div
          className={`${
            styles.desktopOnly
          } header-area header-area1 header-area-all ${scroll ? "sticky" : ""}`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={`header-elements ${styles.headerElements}`}>
                  <div className={`site-logo ${styles.siteLogo}`}>
                    <Link href="/" className={styles.logoLink}>
                      <img
                        src="/assets/img/logo/header-logo1.png"
                        alt="Brobyggere"
                        className={styles.logoImg}
                      />
                    </Link>
                  </div>

                  <div
                    className={`main-menu-ex main-menu-ex1 ${styles.menuWrap}`}
                  >
                    <MainMenu />
                  </div>

                  <div className={`header2-buttons ${styles.ctaWrap}`}>
                    <div className={styles.ctaRow}>
                      <Link
                        className={`theme-btn2 ${styles.ctaBtn}`}
                        href="/vacancies"
                      >
                        Bli vikar
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>

                      <Link
                        className={`theme-btn1 ${styles.ctaBtn}`}
                        href="/order"
                      >
                        Bestill vikar
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /header-elements */}
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            COMPACT DESKTOP (992px–1199px)
           ========================================== */}
        <div
          className={`${
            styles.compactOnly
          } header-area header-area1 header-area-all ${scroll ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.compactBar}>
                  <Link href="/" className={styles.logoLink}>
                    <img
                      src="/assets/img/logo/header-logo1.png"
                      alt="Brobyggere"
                      className={styles.compactLogoImg}
                    />
                  </Link>

                  <div className={styles.compactActions}>
                    <Link
                      className={`theme-btn2 ${styles.compactBtn}`}
                      href="/vacancies"
                    >
                      Bli vikar
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>

                    <Link
                      className={`theme-btn1 ${styles.compactBtn}`}
                      href="/order"
                    >
                      Bestill vikar
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>

                    <button
                      type="button"
                      className={styles.compactBurger}
                      onClick={handleMobileMenu}
                      aria-label="Åpne meny"
                    >
                      <i className="fa-duotone fa-bars-staggered" />
                    </button>
                  </div>
                </div>
                {/* /compactBar */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile sidebar (used by compact + mobile) */}
        <MobileMenu
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />

        {/* ✅ MOBILE TOP BAR is now INSIDE headerRoot */}
        <div className={`${styles.mobileOnly} ${styles.mobileTopbar}`}>
          <div className="container-fluid">
            <div className={styles.mobileHeaderElements}>
              <Link href="/" className={styles.logoLink}>
                <img
                  src="/assets/img/logo/header-logo1.png"
                  alt="Brobyggere"
                  className={styles.mobileLogoImg}
                />
              </Link>

              <button
                type="button"
                className={styles.mobileBurger}
                onClick={handleMobileMenu}
                aria-label="Åpne meny"
              >
                <i className="fa-duotone fa-bars-staggered" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
