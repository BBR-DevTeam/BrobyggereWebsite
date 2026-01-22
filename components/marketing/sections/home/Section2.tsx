import Link from "next/link";
import styles from "@/styles/marketing/home/section2.module.css";

export default function Section2() {
  return (
    <>
      {/*=====ABOUT AREA START=======*/}
      <div className="chosse1 sp overflow-hidden" id="choose">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="" data-aos="zoom-in-up" data-aos-duration={700}>
                <div className="icon-box">
                  <div className="icon">
                    <img src="/assets/img/icons/choose1-icon1.png" alt="" />
                  </div>
                  <div className="heading1">
                    <h3>
                      <span className="counter">249+</span>
                    </h3>
                    <div className="space10" />
                    <p>Fornøyde Kunder</p>
                  </div>
                </div>
              </div>

              <div className="" data-aos="zoom-in-up" data-aos-duration={900}>
                <div className="icon-box">
                  <div className="icon">
                    <img src="/assets/img/icons/choose1-icon2.png" alt="" />
                  </div>
                  <div className="heading1">
                    <h3>
                      <span className="counter">600+</span>
                    </h3>
                    <div className="space10" />
                    <p>Erfarne Vikarer</p>
                  </div>
                </div>
              </div>

              <div className="" data-aos="zoom-in-up" data-aos-duration={1200}>
                <div className="icon-box icon-box2">
                  <div className="icon">
                    <img src="/assets/img/icons/choose1-icon3.png" alt="" />
                  </div>
                  <div className="heading1">
                    <h3>
                      <span className="counter">12 000+</span>
                    </h3>
                    <div className="space10" />
                    <p>Utførte Vakter</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className={`image reveal overlay-anim ${styles.chooseImageWrapper}`}
              >
                <img src="/assets/img/others/choose1-img.webp" alt="" />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="heading1 choose1-heading">
                <h2 className={`text-anime-style-3 ${styles.sectionTitle}`}>
                  <span className={styles.titleMain}>TRYGG BEMANNING</span>
                  <span className={styles.titleSub}>
                    Når Dere Trenger Det Som Mest
                  </span>
                </h2>

                <div className="space16" />

                <p data-aos="fade-left" data-aos-duration={900}>
                  Vi kjenner behovene i barnehager og skoler, og leverer
                  kvalifiserte vikarer som skaper trygghet, kontinuitet og
                  kvalitet i hverdagen.
                </p>

                <div className="space10" />

                <div
                  className="row"
                  data-aos="fade-left"
                  data-aos-duration={800}
                >
                  <div className="col-lg-6">
                    <ul className="icon-list">
                      <li>
                        <span>
                          <i className="fa-solid fa-check" />
                        </span>
                        Fleksible løsninger
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className="icon-list">
                      <li>
                        <span>
                          <i className="fa-solid fa-check" />
                        </span>
                        Kvalitetssikrede vikarer
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className="icon-list">
                      <li>
                        <span>
                          <i className="fa-solid fa-check" />
                        </span>
                        Brukervennlig funksjoner
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className="icon-list">
                      <li>
                        <span>
                          <i className="fa-solid fa-check" />
                        </span>
                        Tilbakemeldingskultur
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space30" />

                <div className="" data-aos="fade-left" data-aos-duration={1100}>
                  <Link className="theme-btn1" href="/about">
                    Om Oss
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====ABOUT AREA END=======*/}
    </>
  );
}
