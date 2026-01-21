"use client";

import { useMemo, useState } from "react";
import styles from "@/styles/marketing/contact/contact.module.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

type CityKey = "vestlandet" | "oslo" | "rogaland";

type CityContact = {
  key: CityKey;
  label: string;
  phoneLabel: string;
  phoneHref: string;
  emailLabel: string;
  emailHref: string;
  addressLabel?: string;
  addressHref?: string;
};

export default function Section1() {
  const cities = useMemo<CityContact[]>(
    () => [
      {
        key: "oslo",
        label: "Akershus/Oslo",
        phoneLabel: "+47 479 62 683",
        phoneHref: "tel:+4747962683",
        emailLabel: "celine@brobyggere.com",
        emailHref: "mailto:celine@brobyggere.com",
      },
      {
        key: "vestlandet",
        label: "Vestlandet",
        phoneLabel: "+47 479 68 163",
        phoneHref: "tel:+4747968163",
        emailLabel: "kontakt@brobyggere.com",
        emailHref: "mailto:kontakt@brobyggere.com",
        addressLabel: "Strandgaten 87, 5004 Bergen",
        addressHref:
          "https://maps.google.com/?q=Strandgaten%2087,%205004%20Bergen",
      },
      {
        key: "rogaland",
        label: "Rogaland",
        phoneLabel: "+47 972 78 547",
        phoneHref: "tel:+4797278547",
        emailLabel: "eline@brobyggere.com",
        emailHref: "mailto:eline@brobyggere.com",
      },
    ],
    [],
  );

  const [activeCity, setActiveCity] = useState<CityKey>("vestlandet");
  const active = cities.find((c) => c.key === activeCity)!;

  return (
    <>
      {/*=====CONTACT AREA START=======*/}
      <div
        className={`contact1-modified spcontact overflow-hidden ${styles.contactRoot}`}
        id="contact"
      >
        <div className="container">
          <div className="row align-items-stretch">
            {/* LEFT */}
            <div className="col-lg-6">
              <div className={`heading1-w-modified ${styles.leftTopAlign}`}>
                <h2 className="text-anime-style-3">Ta kontakt</h2>

                <div className="space16" />

                {/* Tabs */}
                <div className={styles.tabsWrap}>
                  <div
                    className={styles.tabs}
                    role="tablist"
                    aria-label="Velg avdeling"
                  >
                    {cities.map((c) => {
                      const isActive = c.key === activeCity;
                      return (
                        <button
                          key={c.key}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          className={`${styles.tab} ${
                            isActive ? styles.tabActive : ""
                          }`}
                          onClick={() => setActiveCity(c.key)}
                        >
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Animated content switch */}
                <div key={active.key} className={styles.fadeSlide}>
                  <div className="space16" />

                  {/* Phone */}
                  <div>
                    <div className="contact1-box">
                      <div className={`${styles.iconCircle} ${styles.primary}`}>
                        <FiPhone />
                      </div>
                      <div className="heading">
                        <p>Ring oss</p>
                        <a href={active.phoneHref}>{active.phoneLabel}</a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="contact1-box">
                      <div className={`${styles.iconCircle} ${styles.primary}`}>
                        <FiMail />
                      </div>
                      <div className="heading">
                        <p>Send oss e-post</p>
                        <a href={active.emailHref}>{active.emailLabel}</a>
                      </div>
                    </div>
                  </div>

                  {/* Address (ONLY Bergen) */}
                  {active.key === "vestlandet" &&
                    active.addressLabel &&
                    active.addressHref && (
                      <div>
                        <div className="contact1-box">
                          <div
                            className={`${styles.iconCircle} ${styles.primary}`}
                          >
                            <FiMapPin />
                          </div>
                          <div className="heading">
                            <p>Besøksadresse</p>
                            <a
                              href={active.addressHref}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {active.addressLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {/* end animated content */}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 d-flex">
              <div className="contact1-form w-100 d-flex flex-column">
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
                        <input
                          type="tel"
                          inputMode="tel"
                          placeholder="Telefon"
                        />
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
                        <button className="theme-btn1" type="button">
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

            {/* row end */}
          </div>
        </div>
      </div>
      {/*=====CONTACT AREA END=======*/}
    </>
  );
}
