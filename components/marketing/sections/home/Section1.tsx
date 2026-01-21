import Link from "next/link";
import styles from "@/styles/marketing/home/section1.module.css";

export default function Section1() {
  return (
    <div className={styles.heroWrapper}>
      {/*=====HERO AREA START =======*/}
      <div className="hero-area1 sphome">
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
                  Brobyggere bemannings- og rekrutteringstjeneste
                </span>

                <h1 className={`text-anime-style-3 ${styles.heroTitle}`}>
                  <span className={styles.heroTitleMain}>
                    VIKARER MED KVALITET
                  </span>
                  <span className={styles.heroTitleSub}>
                    Skaper trygghet og stabilitet for alle
                  </span>
                </h1>

                <div className="space16" />

                <p data-aos="fade-right" data-aos-duration={1000}>
                  Vi leverer fleksible bemanningsløsninger og hjelper dere å
                  finne rett kompetanse - akkurat når behovet oppstår.
                </p>

                <div className="space30" />

                <div
                  className={`hero1-buttons ${styles.heroButtons}`}
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
    </div>
  );
}
