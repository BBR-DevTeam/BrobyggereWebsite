"use client";

import { useMemo, useState } from "react";
import styles from "@/styles/marketing/contact/contact.module.css";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { useFormspark } from "@formspark/use-formspark";

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

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  // Honeypot (anti-spam). Humans won't fill this.
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

function isValidEmail(email: string) {
  // Simple, reliable enough for frontend validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  // Allows +, spaces, hyphens; requires at least 7 digits
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

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

  // 1) Formspark hook
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_CONTACT_FORM_ID;
  if (!formId) {
    // Fail fast: if env var missing, we want it obvious in dev.
    throw new Error(
      "Missing NEXT_PUBLIC_FORMSPARK_CONTACT_FORM_ID in .env.local",
    );
  }

  const [submit, submitting] = useFormspark({ formId });

  // 2) Form state
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function validate(v: FormValues): FormErrors {
    const next: FormErrors = {};

    const first = v.firstName.trim();
    const last = v.lastName.trim();
    const email = v.email.trim();
    const phone = v.phone.trim();
    const subject = v.subject.trim();
    const message = v.message.trim();

    // Honeypot: if filled, it's likely a bot
    if (v.website.trim()) {
      next.website = "Ugyldig innsending.";
      return next;
    }

    // firstName: required, 2–50
    if (!first) next.firstName = "Fornavn er påkrevd.";
    else if (first.length < 2) next.firstName = "Fornavn må være minst 2 tegn.";
    else if (first.length > 50)
      next.firstName = "Fornavn kan maks være 50 tegn.";

    // lastName: required, 2–50
    if (!last) next.lastName = "Etternavn er påkrevd.";
    else if (last.length < 2) next.lastName = "Etternavn må være minst 2 tegn.";
    else if (last.length > 50)
      next.lastName = "Etternavn kan maks være 50 tegn.";

    // email: required + valid
    if (!email) next.email = "E-post er påkrevd.";
    else if (!isValidEmail(email)) next.email = "Skriv inn en gyldig e-post.";

    // phone: optional, but if present must be 7–15 digits
    if (phone && !isValidPhone(phone)) {
      next.phone = "Skriv inn et gyldig telefonnummer.";
    }

    // subject: required, 3–120
    if (!subject) next.subject = "Emne er påkrevd.";
    else if (subject.length < 3) next.subject = "Emne må være minst 3 tegn.";
    else if (subject.length > 120)
      next.subject = "Emne kan maks være 120 tegn.";

    // message: required, 10–2000
    if (!message) next.message = "Melding er påkrevd.";
    else if (message.length < 10)
      next.message = "Meldingen må være minst 10 tegn.";
    else if (message.length > 2000)
      next.message = "Meldingen kan maks være 2000 tegn.";

    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Extra safety: prevent double-submits
    if (submitting) return;

    setStatus("idle");
    setStatusMessage("");

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Sjekk feltene markert i skjemaet.");
      return;
    }

    // Normalize values before sending
    const payload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      region: activeCity, // vestlandet / oslo / rogaland
      regionLabel: active.label, // Vestlandet / Akershus/Oslo / Rogaland
      page: "Kontakt",
    };

    try {
      await submit(payload);

      setStatus("success");
      setStatusMessage(
        "Takk! Meldingen din er sendt. Vi svarer så snart vi kan.",
      );

      // Optional: clear the form
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        website: "",
      });
      setErrors({});
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Noe gikk galt ved sending. Prøv igjen, eller send oss en e-post.",
      );
    }
  }

  function setField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Optional: remove error as user edits
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

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

                  {/* ✅ Opening hours (ALL cities) */}
                  <div>
                    <div className="contact1-box">
                      <div className={`${styles.iconCircle} ${styles.primary}`}>
                        <FiClock />
                      </div>

                      <div className="heading">
                        <p>Åpningstider</p>

                        {/* Use <a> so it gets EXACT same template styling as phone/email */}
                        <a
                          href="#"
                          className={styles.staticValue}
                          onClick={(e) => e.preventDefault()}
                          aria-label="Åpningstider"
                        >
                          06:00 – 22:00
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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

                {/* ✅ Connected form */}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    {/* Honeypot field (hidden) */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        top: "auto",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                      aria-hidden="true"
                    >
                      <label>
                        Website
                        <input
                          type="text"
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                          value={values.website}
                          onChange={(e) => setField("website", e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input
                          name="firstName"
                          type="text"
                          placeholder="Fornavn *"
                          value={values.firstName}
                          onChange={(e) =>
                            setField("firstName", e.target.value)
                          }
                          aria-invalid={!!errors.firstName}
                          maxLength={50}
                          autoComplete="given-name"
                        />
                        {errors.firstName && (
                          <small style={{ display: "block" }}>
                            {errors.firstName}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input
                          name="lastName"
                          type="text"
                          placeholder="Etternavn *"
                          value={values.lastName}
                          onChange={(e) => setField("lastName", e.target.value)}
                          aria-invalid={!!errors.lastName}
                          maxLength={50}
                          autoComplete="family-name"
                        />
                        {errors.lastName && (
                          <small style={{ display: "block" }}>
                            {errors.lastName}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input
                          name="email"
                          type="email"
                          placeholder="E-post *"
                          value={values.email}
                          onChange={(e) => setField("email", e.target.value)}
                          aria-invalid={!!errors.email}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <small style={{ display: "block" }}>
                            {errors.email}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="single-input">
                        <input
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          placeholder="Telefon"
                          value={values.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          aria-invalid={!!errors.phone}
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <small style={{ display: "block" }}>
                            {errors.phone}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-input">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Emne *"
                          value={values.subject}
                          onChange={(e) => setField("subject", e.target.value)}
                          aria-invalid={!!errors.subject}
                          maxLength={120}
                        />
                        {errors.subject && (
                          <small style={{ display: "block" }}>
                            {errors.subject}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="single-input">
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Melding *"
                          value={values.message}
                          onChange={(e) => setField("message", e.target.value)}
                          aria-invalid={!!errors.message}
                          maxLength={2000}
                        />
                        {errors.message && (
                          <small style={{ display: "block" }}>
                            {errors.message}
                          </small>
                        )}
                        <small style={{ display: "block", marginTop: 4 }}>
                          {values.message.trim().length}/2000
                        </small>
                      </div>
                    </div>

                    {/* Status message */}
                    {status !== "idle" && (
                      <div className="col-md-12">
                        <div style={{ marginTop: 8 }}>
                          <small style={{ display: "block" }}>
                            {statusMessage}
                          </small>
                        </div>
                      </div>
                    )}

                    <div className="col-md-12">
                      <div className="button">
                        <button
                          className="theme-btn1"
                          type="submit"
                          disabled={submitting}
                        >
                          {submitting ? "Sender..." : "Send melding"}
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* end form */}
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
