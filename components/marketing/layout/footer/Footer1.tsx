import Link from "next/link";
import styles from "../../../../styles/marketing/footer/footer.module.css";
import { FiClock } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      {/*===== FOOTER AREA START =======*/}
      <div className="footer1 _relative">
        <div className="container">
          <div className="row">
            {/* BRAND / LOGO */}
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className={`single-footer-items footer-logo-area ${styles.brandCol}`}
              >
                <div className="footer-logo">
                  <div className={styles.brand}>
                    <Link href="/" className={styles.logoLink}>
                      <img
                        src="/assets/img/logo/footer-logo1.png"
                        alt="Firmanavn"
                        className={styles.logoImg}
                      />
                    </Link>

                    <p
                      className={`${styles.companyName} ${styles.companyNameGlow}`}
                    >
                      Brobyggere bemannings- og rekrutteringstjeneste
                    </p>
                  </div>
                </div>

                <div className="space20" />
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Quick Links</h3>
                <ul className="menu-list">
                  <li>
                    <Link href="/order">Bestill Vikar</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Personvernseklæring</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy-app">
                      Personvernseklæring - App
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details/1">Sertifiseringer</Link>
                  </li>
                  <li>
                    <Link href="/blog">Nyheter</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* MENU */}
            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items pl-5">
                <h3>Meny</h3>
                <ul className="menu-list">
                  <li>
                    <Link href="/">Hjem</Link>
                  </li>
                  <li>
                    <Link href="/about">Om oss</Link>
                  </li>
                  <li>
                    <Link href="/service">Tjenester</Link>
                  </li>
                  <li>
                    <Link href="/vacancies">Ledige stillinger</Link>
                  </li>
                  <li>
                    <Link href="/contact">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT + SOCIAL */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className={`single-footer-items ${styles.contactCol}`}>
                <h3>Kontakt Oss</h3>

                <div className="contact-box">
                  <div className="icon">
                    <img src="/assets/img/icons/footer-icon1.png" alt="" />
                  </div>
                  <div className="pera">
                    <a href="tel:+4747968163">+47 479 68 163</a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="/assets/img/icons/footer-icon2.png" alt="" />
                  </div>
                  <div className="pera">
                    <a href="mailto:kontakt@brobyggere.com">
                      kontakt@brobyggere.com
                    </a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="/assets/img/icons/footer-icon3.png" alt="" />
                  </div>
                  <div className="pera">
                    <a
                      href="https://www.google.com/maps?q=Strandgaten+87,+5004+Bergen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Strandgaten 87, 5004 Bergen
                    </a>
                  </div>
                </div>

                <div className="contact-box">
                  <div className={`icon ${styles.reactIconWrapper}`}>
                    <FiClock className={styles.reactIcon} />
                  </div>
                  <div className="pera">
                    <a href="/contact">Åpningstider: 06:00 – 22:00</a>
                  </div>
                </div>

                {/* Social icons */}
                <ul className={`social-icon ${styles.socialInContact}`}>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/brobyggere-vikarbyr-as/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/social/linkedin.png"
                        alt="LinkedIn"
                        className={styles.footerSocialIcon}
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/BrobyggereNorge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/social/facebook.png"
                        alt="Facebook"
                        className={styles.footerSocialIcon}
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.tiktok.com/@brobyggere"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/social/tik-tok.png"
                        alt="TikTok"
                        className={styles.footerSocialIcon}
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/brobyggere/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/social/instagram.png"
                        alt="Instagram"
                        className={styles.footerSocialIcon}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space70" />
        </div>

        <div className="copyright-area _relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="coppyright">
                  <p>
                    © 2026 - Brobyggere Bemannings- og Rekruitteringstjeneste
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== FOOTER AREA END =======*/}
    </>
  );
}
