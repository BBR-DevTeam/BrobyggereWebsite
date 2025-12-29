import Link from "next/link";
import styles from "../../../../styles/marketing/home/section5.module.css";

export default function Section5() {
  return (
    <>
      {/*=====WORK AREA START=======*/}
      <div className="work1 sp overflow-hidden" id="work">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE — Mockup with background */}
            <div className="col-lg-6">
              <div
                className={`work-img reveal overlay-anim ${styles.workImageWrapper}`}
              >
                <img
                  src="assets/img/work/work1-image.png"
                  alt="Brobyggere App"
                  className={styles.mockupImage}
                />

                <div className={styles.storeBadges}>
                  <a
                    href="https://apps.apple.com/no/app/brobyggere/id6670614303"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/img/store/appstore.png"
                      alt="Last ned på App Store"
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.brobyggere.Brobyggere"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/img/store/googleplay.png"
                      alt="Last ned på Google Play"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — Text */}
            <div className="col-lg-6">
              <div className="heading1 work1-heading">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration={700}
                >
                  Rekrutteringsteknologi
                </span>

                <h2 className="text-anime-style-3">
                  Vi forenkler bemanning med smart teknologi
                </h2>

                <div className="space16" />

                <p data-aos="fade-left" data-aos-duration={900}>
                  Med vår mobilapp kan barnehager og skoler bestille vikar,
                  følge oppdraget steg for steg og få full oversikt – når som
                  helst og hvor som helst.
                </p>

                <div className="space10" />

                {/* Feature 1 */}
                <div data-aos="fade-left" data-aos-duration={900}>
                  <div className="work1-box">
                    <div className="icon">
                      <img src="assets/img/icons/work1-icon1.png" alt="" />
                    </div>
                    <div className="heading1">
                      <h4>
                        <Link href="/service-details">
                          Bestill vikar på få minutter
                        </Link>
                      </h4>
                      <p>
                        Send bestillinger direkte i appen og få rask bekreftelse
                        på hvem som kommer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div data-aos="fade-left" data-aos-duration={700}>
                  <div className="work1-box">
                    <div className="icon">
                      <img src="assets/img/icons/work1-icon2.png" alt="" />
                    </div>
                    <div className="heading1">
                      <h4>
                        <Link href="/service-details">
                          Full oversikt over oppdrag
                        </Link>
                      </h4>
                      <p>
                        Følg alle bestillinger i sanntid – fra forespørsel til
                        fullført oppdrag.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div data-aos="fade-left" data-aos-duration={1100}>
                  <div className="work1-box">
                    <div className="icon">
                      <img src="assets/img/icons/work1-icon3.png" alt="" />
                    </div>
                    <div className="heading1">
                      <h4>
                        <Link href="/service-details">
                          Dialog og tilbakemeldinger
                        </Link>
                      </h4>
                      <p>
                        Chat direkte i appen og gi tilbakemeldinger etter hvert
                        oppdrag.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====WORK AREA END=======*/}
    </>
  );
}
