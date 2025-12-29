import Link from "next/link";

export default function Section9() {
  return (
    <>
      {/*=====BLOG AREA START=======*/}
      <div className="blog1 sp overflow-hidden" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <span
                  className="span"
                  data-aos="zoom-in-left"
                  data-aos-duration={800}
                >
                  Nyheter
                </span>
                <h2 className="text-anime-style-3">
                  Oppdatert innsikt innen bemanning og rekruttering
                </h2>
                <div className="space16" />
                <p data-aos="fade-up" data-aos-duration={800}>
                  I bloggen deler vi nyttig innhold for både arbeidsgivere og
                  jobbsøkere, med artikler om bemanning i barnehage og skole,
                  bransjetrender og faglige tips.
                </p>
              </div>
            </div>
          </div>

          <div className="space30" />

          <div className="row">
            {/* Blog card 1 */}
            <div className="col-lg-6">
              <div
                className="blog1-box overlay-anim"
                data-aos="zoom-in-up"
                data-aos-duration={800}
              >
                <div className="image">
                  <img src="assets/img/blog/blog1-img1.png" alt="" />
                </div>
                <div className="heading-area">
                  <div className="tags">
                    <Link href="/blog-details/1">
                      <img src="assets/img/icons/date.png" alt="" /> Apl 25,2025
                    </Link>
                    <Link href="/blog-details/1">
                      <img src="assets/img/icons/user.png" alt="" /> Celine
                      April Rosnes Ramberg
                    </Link>
                  </div>
                  <div className="heading1">
                    <h4>
                      <Link href="/blog-details/1">
                        Brobyggere er nå sertifisert for kvalitet, trygghet og
                        miljø
                      </Link>
                    </h4>
                    <div className="space16" />
                    <p>
                      En internasjonal standard som dokumenterer at vi jobber
                      systematisk med kvalitet i alle ledd.
                    </p>
                    <div className="blog1-border" />
                    <Link href="/blog-details/1" className="learn">
                      Les mer
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog card 2 */}
            <div className="col-lg-6">
              <div
                className="blog1-box overlay-anim"
                data-aos="zoom-in-up"
                data-aos-duration={900}
              >
                <div className="image">
                  <img src="assets/img/blog/blog1-img2.png" alt="" />
                </div>
                <div className="heading-area">
                  <div className="tags">
                    <Link href="/blog-details/4">
                      <img src="assets/img/icons/date.png" alt="" /> Apl 25,2025
                    </Link>
                    <Link href="/blog-details/4">
                      <img src="assets/img/icons/user.png" alt="" /> Eline Håstø
                      Borgenvik
                    </Link>
                  </div>
                  <div className="heading1">
                    <h4>
                      <Link href="/blog-details/4">
                        Karrieredagen 2025 bød på inspirerende studentmøter
                      </Link>
                    </h4>
                    <div className="space16" />
                    <p>
                      Vi var så heldige at vi fikk holde stand på Høyskolen
                      Kristiania i forbindelse med deres Karrieredag!
                    </p>
                    <div className="blog1-border" />
                    <Link href="/blog-details/4" className="learn">
                      Les mer
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== View more news button ===== */}
          <div className="space40" />

          <div className="row justify-content-center">
            <div
              className="col-lg-4 text-center"
              data-aos="fade-up"
              data-aos-duration={1100}
            >
              <Link href="/blog" className="theme-btn1">
                Se flere nyheter
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*=====BLOG AREA END=======*/}
    </>
  );
}
