import Link from "next/link";
import styles from "@/styles/marketing/about/aboutSection2.module.css";

export default function Section2() {
  return (
    <>
      {/*=====OUR MISSION AREA START=======*/}
      <div className={`mission sp ${styles.root}`}>
        <div className="container">
          {/* Top heading */}
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <div className="heading1">
                <h2>Våre verdier</h2>
                <div className="space16" />
                <p>
                  Vi jobber for å bygge bro mellom mennesker og muligheter. Ved
                  å styrke skoler og barnehager med riktig kompetanse, skaper vi
                  trygghet, utvikling og gode hverdager.
                </p>
              </div>
            </div>
          </div>

          <div className="space30" />

          <div className="row">
            {/* 1 */}
            <div className="col-lg-4 col-md-6">
              <div className={`mission-box ${styles.missionBox}`}>
                <div className={styles.iconWrap}>
                  <img
                    src="/assets/img/icons/mission-icon1.png"
                    alt="Kvalitet"
                  />
                </div>

                <div className="heading1">
                  <h5 className={styles.cardTitle}>
                    <Link href="#" className={styles.titleLink}>
                      Kvalitet
                    </Link>
                  </h5>

                  <div className="space16" />

                  <p className={styles.cardText}>
                    Brobyggere er dedikert til kvalitet og utvikling. Gjennom
                    etablerte rutiner og tett oppfølging av både vikarer og
                    kunder, jobber vi kontinuerlig med kvalitet og utvikling av
                    våre tjenester.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="col-lg-4 col-md-6">
              <div className={`mission-box ${styles.missionBox}`}>
                <div className={styles.iconWrap}>
                  <img
                    src="/assets/img/icons/mission-icon2.png"
                    alt="Pålitelighet"
                  />
                </div>

                <div className="heading1">
                  <h5 className={styles.cardTitle}>
                    <Link href="#" className={styles.titleLink}>
                      Pålitelighet
                    </Link>
                  </h5>

                  <div className="space16" />

                  <p className={styles.cardText}>
                    Brobyggere er en pålitelig aktør med tillitsfulle vikarer.
                    Alle vikarer forstår hva jobben innebærer og har gjennomført
                    kurs og opplæring før oppstart.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="col-lg-4 col-md-6">
              <div className={`mission-box ${styles.missionBox}`}>
                <div className={styles.iconWrap}>
                  <img
                    src="/assets/img/icons/mission-icon3.png"
                    alt="Fleksibilitet"
                  />
                </div>

                <div className="heading1">
                  <h5 className={styles.cardTitle}>
                    <Link href="#" className={styles.titleLink}>
                      Fleksibilitet
                    </Link>
                  </h5>

                  <div className="space16" />

                  <p className={styles.cardText}>
                    Vi er fleksible i samarbeidet i forhold til å matche
                    vikaroppdrag etter behov og ønske. Vi tilbyr vikarer med
                    riktig kompetanse og gode menneskelige egenskaper – raskt og
                    forutsigbart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====OUR MISSION AREA END=======*/}
    </>
  );
}
