import Link from "next/link";
import styles from "../../../../styles/marketing/home/section1.module.css";

export default function Section1() {
  return (
    <>
      {/*=====HERO AREA START =======*/}
      <div className="hero-area1">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE TEXT */}
            <div className="col-lg-6">
              <div className="main-heading">
                <span
                  className="span"
                  data-aos="fade-right"
                  data-aos-duration={800}
                >
                  Brobyggere Bemannings- og Rekruitteringstjeneste
                </span>

                <h1 className="text-anime-style-3">
                  Vikarer med kvalitet – Vi skaper trygghet og stabilitet for
                  alle
                </h1>

                <div className="space16" />

                <p data-aos="fade-right" data-aos-duration={1000}>
                  Vi leverer fleksible bemanningsløsninger til barnehager og
                  skoler, <br />
                  og hjelper dere å finne rett kompetanse – akkurat når behovet
                  oppstår.
                </p>

                <div className="space30" />

                <div
                  className="hero1-buttons"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <Link className="theme-btn1" href="/order">
                    Bestill vikar
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                  <Link className="theme-btn2" href="/service">
                    Våre Tjenester
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – MODERN HERO IMAGE CARD */}
            <div className={`col-lg-6 ${styles.heroRightCol}`}>
              <div
                className={styles.heroImageShell}
                data-aos="zoom-in-up"
                data-aos-duration={700}
              >
                {/* Gradient background “blob” */}
                <div className={styles.heroGradientBg} />

                {/* Main image */}
                <img
                  src="assets/img/hero/brobyggere-hero.JPG"
                  alt="Brobyggere vikar til barnehage og skole"
                  className={styles.heroMainImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====HERO AREA END=======*/}
    </>
  );
}
