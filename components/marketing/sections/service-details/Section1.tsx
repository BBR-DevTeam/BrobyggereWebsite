// components/marketing/sections/service-details-right/Section1.tsx
import Link from "next/link";
import { services, type Service } from "@/utils/marketing/service";
import sidebarStyles from "@/styles/marketing/service-details/serviceDetailsSidebar.module.css";
import contentStyles from "@/styles/marketing/service-details/serviceDetailsContent.module.css";

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
      <div className="service-details-all spabout">
        <div className="container">
          <div className="row">
            {/* MAIN CONTENT */}
            <div className="col-lg-8">
              <div className="service-details-area right-padding">
                <article className={contentStyles.sheet}>
                  {/* Hero */}
                  <div className={contentStyles.hero}>
                    <img
                      src={heroImageSrc}
                      alt={service.detailTitle}
                      className={contentStyles.heroImg}
                    />
                  </div>

                  {/* Title */}
                  <h2 className={contentStyles.title}>{service.detailTitle}</h2>

                  {/* Intro */}
                  <p className={contentStyles.intro}>{service.detailIntro}</p>

                  {/* ✅ Dynamic sections: text OR list */}
                  {service.detailSections?.map((section, index) => (
                    <section key={index} className={contentStyles.section}>
                      <h3 className={contentStyles.sectionTitle}>
                        {section.title}
                      </h3>

                      {section.type === "text" ? (
                        <div className={contentStyles.paragraphs}>
                          {section.paragraphs.map((para, pIndex) => (
                            <p key={pIndex} className={contentStyles.text}>
                              {para}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <ul className={contentStyles.list}>
                          {section.items.map((item, i) => (
                            <li key={i} className={contentStyles.listItem}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </article>

                <div className="space20" />

                {/* FAQ / Accordion (Norwegian) */}
                <div className="faq-all-area">
                  <div
                    className="accordion accordion1 accordion-flush"
                    id="accordionFlushExample"
                  >
                    {/* 1 */}
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
                          Når kan jeg nå dere – og hvor raskt svarer dere?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Vi er tilgjengelige fra kl. 06.00–22.00 og er rigget
                          for rask respons når behov oppstår. Ved akutt fravær
                          hjelper vi dere med å finne en god løsning så fort som
                          mulig. Dere kan kontakte oss for både akutte
                          situasjoner og planlagte oppdrag.
                        </div>
                      </div>
                    </div>

                    {/* 2 */}
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
                          Hvordan jobber dere med tilbakemeldinger og kvalitet?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Vi ønsker en sterk tilbakemeldingskultur og bruker
                          innspill til å forbedre tjenestene våre kontinuerlig.
                          Dere kan gi tilbakemelding via telefon, SMS eller
                          enkelt i appen. Alle tilbakemeldinger dokumenteres, og
                          avvik håndteres strukturert i tråd med ISO 9001:2015.
                        </div>
                      </div>
                    </div>

                    {/* 3 */}
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
                          Hvordan sikrer dere god match og relasjoner i
                          barnehagen?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Vi blir kjent med barnehagen deres for å forstå behov,
                          kultur og forventninger. Vi velger ut vikarer som er
                          både faglig kvalifiserte og personlig egnet. Med god
                          kjennskap til vikarene og barnehagens behov finner vi
                          riktig medarbeider som skaper trygghet og stabilitet.
                        </div>
                      </div>
                    </div>

                    {/* 4 (made up) */}
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
                          Hva trenger dere fra oss for å komme i gang?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Det holder ofte med en kort prat om behovet, tidspunkt
                          og ønsket kompetanse. Deretter foreslår vi en løsning
                          og følger opp hele veien, fra bestilling til oppstart.
                          Jo tydeligere dere beskriver hverdagen og avdelingen,
                          jo bedre kan vi treffe på match.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR (your existing modern module) */}
            <div className="col-lg-4">
              <aside className={sidebarStyles.sidebar}>
                {/* Services */}
                <div className={sidebarStyles.card}>
                  <div className={sidebarStyles.cardTop}>
                    <h3 className={sidebarStyles.cardTitle}>Våre tjenester</h3>
                    <p className={sidebarStyles.cardLead}>
                      Utforsk tjenestene våre – raskt og enkelt.
                    </p>
                  </div>

                  <ul className={sidebarStyles.serviceList}>
                    {services.map((s) => {
                      const isActive = s.slug === service.slug;

                      return (
                        <li key={s.id} className={sidebarStyles.serviceItem}>
                          <Link
                            href={`/service-details/${s.slug}`}
                            className={`${sidebarStyles.serviceLink} ${
                              isActive ? sidebarStyles.serviceLinkActive : ""
                            }`}
                          >
                            <span className={sidebarStyles.serviceName}>
                              {s.subtitle}
                            </span>
                            <span className={sidebarStyles.serviceMeta}>
                              Les mer{" "}
                              <span className={sidebarStyles.chev}>›</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Help */}
                <div
                  className={`${sidebarStyles.card} ${sidebarStyles.helpCard}`}
                >
                  <div className={sidebarStyles.helpTop}>
                    <p className={sidebarStyles.helpEyebrow}>
                      Har du spørsmål?
                    </p>
                    <h3 className={sidebarStyles.helpTitle}>
                      Vi hjelper deg – raskt
                    </h3>

                    <p className={sidebarStyles.helpText}>
                      Vi er tilgjengelig på:{" "}
                      <Link
                        href="tel:+4747968163"
                        className={sidebarStyles.helpPhone}
                      >
                        479 68 163
                      </Link>
                      <br />
                      <span className={sidebarStyles.helpHours}>
                        Kl. 06.00 - 22.00
                      </span>
                    </p>
                  </div>

                  <div className={sidebarStyles.helpActions}>
                    <Link href="/order" className={sidebarStyles.primaryBtn}>
                      Bestill Vikar
                    </Link>
                    <Link
                      href="/contact"
                      className={sidebarStyles.secondaryBtn}
                    >
                      Kontakt oss
                    </Link>
                  </div>
                </div>

                {/* Social */}
                <div className={sidebarStyles.card}>
                  <div className={sidebarStyles.cardTopTight}>
                    <h3 className={sidebarStyles.cardTitle}>Følg oss</h3>
                    <p className={sidebarStyles.cardLead}>
                      Nyheter og oppdateringer.
                    </p>
                  </div>

                  <div className={sidebarStyles.socialIcons}>
                    <Link
                      href="https://www.linkedin.com/company/brobyggere-vikarbyr-as/"
                      aria-label="LinkedIn"
                    >
                      <img
                        src="/assets/img/social/linkedin.png"
                        alt="LinkedIn"
                      />
                    </Link>

                    <Link
                      href="https://www.facebook.com/BrobyggereNorge"
                      aria-label="Facebook"
                    >
                      <img
                        src="/assets/img/social/facebook.png"
                        alt="Facebook"
                      />
                    </Link>

                    <Link
                      href="https://www.tiktok.com/@brobyggere"
                      aria-label="TikTok"
                    >
                      <img src="/assets/img/social/tik-tok.png" alt="TikTok" />
                    </Link>

                    <Link
                      href="https://www.instagram.com/brobyggere/"
                      aria-label="Instagram"
                    >
                      <img
                        src="/assets/img/social/instagram.png"
                        alt="Instagram"
                      />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
            {/* END SIDEBAR */}
          </div>
        </div>
      </div>
      {/*=====SERVICE DETAILS END=======*/}
    </>
  );
}
