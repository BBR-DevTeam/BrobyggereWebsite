import Link from "next/link";

export default function Section7() {
  return (
    <>
      {/*=====CONTACT AREA START=======*/}
      <div className="contact1 sp overflow-hidden" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading1-w">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration={700}
                >
                  Kontakt oss
                </span>
                <h2 className="text-anime-style-3">
                  Ta kontakt – la oss starte dialogen
                </h2>
                <div className="space16" />
                <p data-aos="fade-right" data-aos-duration={900}>
                  Vi hjelper deg med å finne riktige bemanningsløsninger for
                  dine behov. Enten du er en barnehage eller skole som trenger
                  kvalifiserte vikarer, eller en jobbsøker på jakt etter nye
                  muligheter.
                </p>
                <div className="" data-aos="fade-right" data-aos-duration={800}>
                  <div className="contact1-box">
                    <div className="icon">
                      <img src="assets/img/icons/contact-icon1.png" alt="" />
                    </div>
                    <div className="heading">
                      <p>Ring oss</p>
                      <Link href="tel:+47 479 68 163">+47 479 68 163</Link>
                    </div>
                  </div>
                </div>
                <div
                  className=""
                  data-aos="fade-right"
                  data-aos-duration={1100}
                >
                  <div className="contact1-box">
                    <div className="icon">
                      <img src="assets/img/icons/contact-icon2.png" alt="" />
                    </div>
                    <div className="heading">
                      <p>Send oss e-post</p>
                      <Link href="mailto:kontakt@brobyggere.com">
                        kontakt@brobyggere.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact1-form"
                data-aos="zoom-out"
                data-aos-duration={900}
              >
                <div className="heading1">
                  <h3>Send oss en melding</h3>
                  <div className="space16" />
                  <p>
                    Ta gjerne kontakt med oss dersom du har spørsmål,
                    forespørsler eller behov for bemanning. Vi svarer deg så
                    raskt som mulig.
                  </p>
                </div>
                <div className="space10" />
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" placeholder="Fornavn" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="text" placeholder="Etternavn" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="email" placeholder="E-post" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input">
                        <input type="number" placeholder="Telefon" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input">
                        <input type="text" placeholder="Emne" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input">
                        <textarea
                          rows={4}
                          placeholder="Melding"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="button">
                        <button className="theme-btn1">
                          Send melding
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====CONTACT AREA END=======*/}
    </>
  );
}
