"use client";

import Link from "next/link";
import styles from "../../../../styles/marketing/contact/contactSection2.module.css";

export default function Section2() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          {/* LEFT: Map */}
          <div className="col-lg-6">
            <div className={styles.mapWrap}>
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.0926108704184!2d5.320122!3d60.394512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfb2c1c1c1c1c%3A0x1111111111111111!2sStrandgaten%2087%2C%205004%20Bergen!5e0!3m2!1sen!2sno!4v0000000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kart"
              />
            </div>
          </div>

          {/* RIGHT: Social card */}
          <div className="col-lg-6">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>Følg oss</h3>
                <p className={styles.subtitle}>
                  Nyheter, ledige stillinger og glimt fra hverdagen.
                </p>
              </div>

              <div className={styles.grid}>
                <Link
                  href="https://www.instagram.com/brobyggere/"
                  className={styles.socialBtn}
                >
                  <span className={styles.icon}>
                    {/* Replace src with your logo path */}
                    <img
                      src="/assets/img/social/instagram.png"
                      alt="Instagram"
                      className={styles.logoImg}
                    />
                  </span>
                  <span className={styles.socialText}>
                    <span className={styles.socialName}>Instagram</span>
                    <span className={styles.socialHint}>@brobyggere</span>
                  </span>
                  <span className={styles.arrow}>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>

                <Link
                  href="https://www.facebook.com/BrobyggereNorge"
                  className={styles.socialBtn}
                >
                  <span className={styles.icon}>
                    <img
                      src="/assets/img/social/facebook.png"
                      alt="Facebook"
                      className={styles.logoImg}
                    />
                  </span>
                  <span className={styles.socialText}>
                    <span className={styles.socialName}>Facebook</span>
                    <span className={styles.socialHint}>/BrobyggereNorge</span>
                  </span>
                  <span className={styles.arrow}>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>

                <Link
                  href="https://www.tiktok.com/@brobyggere"
                  className={styles.socialBtn}
                >
                  <span className={styles.icon}>
                    <img
                      src="/assets/img/social/tik-tok.png"
                      alt="TikTok"
                      className={styles.logoImg}
                    />
                  </span>
                  <span className={styles.socialText}>
                    <span className={styles.socialName}>TikTok</span>
                    <span className={styles.socialHint}>@brobyggere</span>
                  </span>
                  <span className={styles.arrow}>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/brobyggere-vikarbyr-as/"
                  className={styles.socialBtn}
                >
                  <span className={styles.icon}>
                    <img
                      src="/assets/img/social/linkedin.png"
                      alt="LinkedIn"
                      className={styles.logoImg}
                    />
                  </span>
                  <span className={styles.socialText}>
                    <span className={styles.socialName}>LinkedIn</span>
                    <span className={styles.socialHint}>
                      /company/brobyggere-vikarbyr-as/
                    </span>
                  </span>
                  <span className={styles.arrow}>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>

              <div className={styles.footerNote}>
                Tips: Legg gjerne igjen en melding via skjemaet over — så tar vi
                kontakt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
