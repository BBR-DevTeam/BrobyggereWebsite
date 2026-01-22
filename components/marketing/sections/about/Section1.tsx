import Link from "next/link";
import styles from "@/styles/marketing/about/aboutSection1.module.css";
import { FaViacoin } from "react-icons/fa";

export default function Section1() {
  return (
    <>
      {/*=====ABOUT AREA START=======*/}
      <div className={`about-page-sec1 spabout ${styles.root}`}>
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT (Images/Stats) - goes BELOW on mobile */}
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="about3-images">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image overlay-anim">
                      <img src="/assets/img/about/about3-img1.webp" alt="" />
                    </div>

                    <div className="conter-box conter-box1">
                      <h3>
                        <span className="counter">12 000</span>+
                      </h3>
                      <p>Utførte vakter</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="conter-box conter-box2">
                      <h3>
                        <span className="counter">600</span>+
                      </h3>
                      <p>Erfarne medarbeidere</p>
                    </div>

                    <div className="image overlay-anim">
                      <img src="/assets/img/about/about3-img2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT (Text) - goes TOP on mobile */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="heading1 about3-heading">
                <span className="span">Om oss</span>
                <h2>Hvem er vi?</h2>

                <div className="space16" />

                <p>
                  Vi jobber for å bygge bro mellom mennesker og muligheter og vi
                  leverer stabile og trygge vikarløsninger til flere sektorer.
                  Vi tilbyr kvalifiserte medarbeidere til barnehager, skoler,
                  renhold samt vikarer innen helse og omsorg.
                </p>

                {/* Icon box 1 */}
                <div className="about3-icon-box">
                  <div>
                    {/* ✅ replaced template "icon" class */}
                    <div className={styles.freeIcon}>
                      <img src="/assets/img/icons/about3-icon1.png" alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h5>
                      <Link href="#">Trygg bemanning - et felles mål</Link>
                    </h5>
                    <p>
                      Med bred erfaring fra flere bransjer jobber vi hver dag
                      for å levere kvalifiserte medarbeidere til både akutte
                      behov og langsiktige oppdrag. Vi legger stor vekt på
                      kvalitet i alle ledd, og våre ansatte bidrar til stabil
                      drift, kontinuitet og gode opplevelser for både brukere,
                      kunder og samarbeidspartnere.
                    </p>
                  </div>
                </div>

                {/* Icon box 2 */}
                <div className="about3-icon-box">
                  <div>
                    {/* ✅ replaced template "icon" class */}
                    <div className={styles.freeIcon}>
                      <img src="/assets/img/icons/about3-icon2.png" alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h5>
                      <Link href="#">Dedikert til kvalitet og utvikling</Link>
                    </h5>
                    <p>
                      Gjennom tydelige rutiner, tett oppfølging og kontinuerlig
                      forbedring jobber vi målrettet for å levere tjenester av
                      høy kvalitet på tvers av alle våre fagområder. Vi
                      investerer i utvikling av både våre medarbeidere og våre
                      arbeidsprosesser, slik at vi kan sikre høy standard,
                      effektiv drift og gode leveranser – uansett bransje og
                      oppdrag.
                    </p>
                  </div>
                </div>

                <div className="space30" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====ABOUT AREA END=======*/}
    </>
  );
}
