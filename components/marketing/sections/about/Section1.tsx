import Link from "next/link";

export default function Section1() {
  return (
    <>
      {/*=====ABOUT AREA START=======*/}
      <div className="about-page-sec1 spabout">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about3-images">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image overlay-anim">
                      <img src="assets/img/about/about3-img1.png" alt="" />
                    </div>
                    <div className="conter-box conter-box1">
                      <h3>
                        <span className="counter">10 000</span>+
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
                      <img src="assets/img/about/about3-img2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6">
              <div className="heading1 about3-heading">
                <span className="span">Om oss</span>

                <h2>Hvem vi er</h2>

                <div className="space16" />

                <p>
                  Brobyggere sørger for trygg og stabil bemanning til skoler og
                  barnehager. Vi forstår behovene i sektoren og jobber hver dag
                  for å levere kvalifiserte vikarer som skaper kontinuitet,
                  støtte og gode opplevelser for barn og elever.
                </p>

                {/* Icon box 1 */}
                <div className="about3-icon-box">
                  <div>
                    <div className="icon">
                      <img src="assets/img/icons/about3-icon1.png" alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h5>
                      <Link href="#">Trygg bemanning når det gjelder</Link>
                    </h5>
                    <p>
                      Vi matcher skoler og barnehager med vikarer som har riktig
                      kompetanse og gode menneskelige egenskaper – raskt og
                      forutsigbart.
                    </p>
                  </div>
                </div>

                {/* Icon box 2 */}
                <div className="about3-icon-box">
                  <div>
                    <div className="icon">
                      <img src="assets/img/icons/about3-icon2.png" alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h5>
                      <Link href="#">Dedikert til kvalitet og utvikling</Link>
                    </h5>
                    <p>
                      Gjennom gode rutiner, tett oppfølging og fokus på kvalitet
                      bidrar vi til å styrke hverdagen i både undervisning og
                      omsorg.
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
