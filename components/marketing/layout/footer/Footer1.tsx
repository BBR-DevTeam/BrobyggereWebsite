import Link from "next/link";
import styles from "../../../../styles/marketing/footer/footer.module.css";

export default function Footer() {
  return (
    <>
      {/*===== FOOTER AREA START =======*/}
      <div className="footer1 _relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-footer-items footer-logo-area">
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
                      Brobyggere Bemannings- og Rekruitteringstjeneste
                    </p>
                  </div>
                </div>
                <div className="space20" />
                <div className="heading1-w-modified">
                  <p>
                    Vi forenkler komplekse prosesser og gir deg tryggheten til å
                    ta riktige valg.
                  </p>
                </div>
                <ul className="social-icon">
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-x-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Quick Links</h3>
                <ul className="menu-list">
                  <li>
                    <Link href="#">Staff Management</Link>
                  </li>
                  <li>
                    <Link href="#">Leadership Training</Link>
                  </li>
                  <li>
                    <Link href="#">Corporate Program&nbsp;</Link>
                  </li>
                  <li>
                    <Link href="#">Staffing Solutions</Link>
                  </li>
                  <li>
                    <Link href="#">Blog Standard</Link>
                  </li>
                </ul>
              </div>
            </div>

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
                    <Link href="/jobs">Ledige stillinger</Link>
                  </li>
                  <li>
                    <Link href="/contact">Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer-items">
                <h3>Kontakt Oss</h3>

                <div className="contact-box">
                  <div className="icon">
                    {/* ✅ absolute paths for icons */}
                    <img src="/assets/img/icons/footer-icon1.png" alt="" />
                  </div>
                  <div className="pera">
                    <Link href="tel:+4747968163">+47 479 68 163</Link>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="/assets/img/icons/footer-icon2.png" alt="" />
                  </div>
                  <div className="pera">
                    <Link href="mailto:kontakt@brobyggere.com">
                      kontakt@brobyggere.com
                    </Link>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="icon">
                    <img src="/assets/img/icons/footer-icon3.png" alt="" />
                  </div>
                  <div className="pera">
                    <Link href="tel:+4747968163">
                      Strandgaten 87, 5004 Bergen
                    </Link>
                  </div>
                </div>
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
                  <p>© Copyright 2025 -Recrute. All Right Reserved</p>
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
