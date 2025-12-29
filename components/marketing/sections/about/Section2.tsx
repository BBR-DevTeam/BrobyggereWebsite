import Link from "next/link";

export default function Section2() {
  return (
    <>
      {/*=====OUR MISSION AREA START=======*/}
      <div className="mission sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-center">
              <div className="heading1">
                <span className="span">Vårt oppdrag</span>
                <h2>Trygg bemanning – vårt felles mål</h2>
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
            <div className="col-lg-4 col-md-6">
              <div className="mission-box">
                <div className="icon">
                  <img src="assets/img/icons/mission-icon1.png" alt="" />
                </div>
                <div className="heading1">
                  <h5>
                    <Link href="#">Å koble mennesker og muligheter</Link>
                  </h5>
                  <div className="space16" />
                  <p>
                    Vi matcher behov med riktig kompetanse – raskt, trygt og med
                    omtanke for både ansatte og institusjoner.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mission-box">
                <div className="icon">
                  <img src="assets/img/icons/mission-icon2.png" alt="" />
                </div>
                <div className="heading1">
                  <h5>
                    <Link href="#">Å støtte læring og utvikling</Link>
                  </h5>
                  <div className="space16" />
                  <p>
                    Våre vikarer bidrar til læring, omsorg og stabilitet – slik
                    at barn og elever får den støtten de trenger.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="mission-box">
                <div className="icon">
                  <img src="assets/img/icons/mission-icon1.png" alt="" />
                </div>
                <div className="heading1">
                  <h5>
                    <Link href="#">Å skape utvikling gjennom samarbeid</Link>
                  </h5>
                  <div className="space16" />
                  <p>
                    Sammen med våre partnere bygger vi løsninger som gir varig
                    verdi – for ansatte, barn, elever og lokalsamfunn.
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
