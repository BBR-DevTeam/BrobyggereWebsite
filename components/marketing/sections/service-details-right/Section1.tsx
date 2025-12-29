// components/marketing/sections/service-details-right/Section1.tsx
import Link from "next/link";
import { services, type Service } from "@/utils/marketing/service";

interface ServiceDetailsSection1Props {
  service: Service;
}

export default function Section1({ service }: ServiceDetailsSection1Props) {
  const heroImageSrc = service.detailHeroImage.startsWith("/")
    ? service.detailHeroImage
    : `/${service.detailHeroImage}`;

  return (
    <>
      {/*=====SERVICE DETAILS START=======*/}
      <div className="service-details-all sp">
        <div className="container">
          <div className="row">
            {/* MAIN CONTENT */}
            <div className="col-lg-8">
              <div className="service-details-area right-padding">
                <article>
                  <div className="heading1">
                    {/* Hero image */}
                    <div className="image service-hero-image">
                      <img src={heroImageSrc} alt={service.detailTitle} />
                    </div>

                    <div className="space30" />

                    {/* Title */}
                    <h2>{service.detailTitle}</h2>

                    <div className="space16" />

                    {/* Intro */}
                    <p>{service.detailIntro}</p>

                    {/* Dynamic detail sections */}
                    {service.detailSections?.map((section, index) => (
                      <div key={index}>
                        <div className="space30" />
                        <h3>{section.title}</h3>
                        <div className="space16" />

                        {section.paragraphs.map((para, pIndex) => (
                          <div key={pIndex}>
                            <p>{para}</p>
                            {pIndex < section.paragraphs.length - 1 && (
                              <div className="space16" />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </article>

                <div className="space20" />

                {/* FAQ / Accordion (same idea as service-details-left, but Norwegian text) */}
                <div className="faq-all-area">
                  <div
                    className="accordion accordion1 accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item active">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="true"
                          aria-controls="flush-collapseOne"
                        >
                          Trenger dere rask bemanning til faste stillinger?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Vi hjelper dere med å finne riktig kandidat til
                          stillingen – både faglig og menneskelig. Med god
                          kjennskap til bransjen kan vi effektivt presentere
                          kvalifiserte kandidater som passer deres behov og
                          arbeidsmiljø.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Har dere perioder med ekstra trykk eller fravær?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Ved sykefravær, sesongtopper eller ekstra behov kan vi
                          stille med fleksible vikarer som avlaster deres faste
                          ansatte. Målet er at dere skal kunne opprettholde
                          kvaliteten i tilbudet, selv når hverdagen er
                          uforutsigbar.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Er dere opptatt av god match og kulturtilpasning?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          En vellykket bemanningsløsning handler ikke bare om
                          kompetanse, men også om kjemi og verdier. Vi blir
                          kjent med både arbeidsplassen og kandidatene, slik at
                          vi kan finne folk som fungerer godt i deres miljø på
                          sikt.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          Usikre på hvilken løsning som passer dere best?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Vi rådgir dere gjerne om ulike bemanningsløsninger –
                          enten dere ønsker kortvarige vikariater, lengre
                          engasjementer eller mer faste ordninger. Sammen finner
                          vi en modell som gir dere både fleksibilitet og
                          forutsigbarhet.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <div className="details-sidebar">
                <div className="details-box3">
                  <h3>Våre tjenester</h3>
                  <div className="space10" />

                  {/* Dynamic sidebar list */}
                  <ul className="service-list">
                    {services.map((s) => (
                      <li
                        key={s.id}
                        className={s.slug === service.slug ? "active" : ""}
                      >
                        <Link href={`/service-details/${s.slug}`}>
                          {s.subtitle}
                          <span>
                            <i className="fa-regular fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="details-box-call">
                  <h3>Trenger du hjelp?</h3>
                  <div className="space10" />
                  <Link href="tel:+917052101786" className="call-btn">
                    <img src="/assets/img/icons/details-call.png" alt="" /> +91
                    705 2101 786
                  </Link>
                </div>

                <div className="details-box2">
                  <h3>Følg oss</h3>
                  <div className="space10" />
                  <ul className="icons">
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-x-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END SIDEBAR */}
          </div>
        </div>
      </div>
      {/*=====SERVICE DETAILS END=======*/}
    </>
  );
}
