import Link from "next/link";
import styles from "../../../../styles/marketing/home/section3.module.css";

export default function Section3() {
  return (
    <div
      className={`${styles.section} service-section sp overflow-hidden`}
      id="service"
    >
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className={styles.serviceHeading}>
              <h2 className="text-anime-style-3">Våre tjenester</h2>

              <div className="space16" />

              <p data-aos="fade-left" data-aos-duration={800}>
                Vi leverer kvalifiserte vikarer til barnehager og skoler i våre
                tre avdelinger: <strong>Vestland</strong>,{" "}
                <strong>Rogaland</strong> og <strong>Oslo/Akershus</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="space30" />

        {/* Service Cards */}
        <div className="row g-4">
          {/* Barnehage */}
          <div className="col-lg-6 col-md-6">
            <div
              className={`${styles.card} card`}
              data-aos="zoom-in-up"
              data-aos-duration={700}
            >
              <div className={styles.cardImage}>
                <img
                  src="assets/img/service/service1-img1.jpg"
                  alt="Vikarer til barnehage"
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>
                    <i className="fa-solid fa-children" />
                  </span>
                </div>

                <h4 className={styles.title}>
                  <Link href="/tjenester/barnehage">Vikarer til barnehage</Link>
                </h4>

                <p className={styles.text}>
                  Vi tilbyr <strong>barnehageassistenter</strong> og{" "}
                  <strong>barnehagelærere</strong> som raskt kan dekke behov ved
                  fravær.
                </p>

                <ul className={styles.list}>
                  <li>Erfarne og pålitelige vikarer</li>
                  <li>Korte og lange oppdrag</li>
                  <li>Trygg og stabil bemanning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skole */}
          <div className="col-lg-6 col-md-6">
            <div
              className={`${styles.card} card`}
              data-aos="zoom-in-up"
              data-aos-duration={900}
            >
              <div className={styles.cardImage}>
                <img
                  src="assets/img/service/service1-img2.jpg"
                  alt="Vikarer til skole"
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>
                    <i className="fa-solid fa-school" />
                  </span>
                </div>

                <h4 className={styles.title}>
                  <Link href="/tjenester/skole">Vikarer til skole</Link>
                </h4>

                <p className={styles.text}>
                  Vi bemanner med <strong>skoleassistenter</strong>,{" "}
                  <strong>lærervikarer</strong>,{" "}
                  <strong>SFO-assistenter</strong> og{" "}
                  <strong>miljøarbeidere</strong>.
                </p>

                <ul className={styles.list}>
                  <li>Rask og fleksibel bemanning</li>
                  <li>Kompetanse tilpasset behov</li>
                  <li>Støtte i både undervisning og SFO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New Button */}
        <div className="space40" />

        <div className="row justify-content-center">
          <div
            className="col-lg-4 text-center"
            data-aos="fade-up"
            data-aos-duration={1100}
          >
            <Link href="/service" className="theme-btn1">
              Se alle tjenester
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
