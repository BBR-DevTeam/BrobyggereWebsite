"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/marketing/home/section7.module.css";
import { useFormspark } from "@formspark/use-formspark";

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

export default function Section7() {
  // Formspark: use the SAME form id as the contact page
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_CONTACT_FORM_ID;
  if (!formId) {
    throw new Error(
      "Missing NEXT_PUBLIC_FORMSPARK_CONTACT_FORM_ID in .env.local",
    );
  }
  const [submit, submitting] = useFormspark({ formId });

  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "",
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

    const payload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      region: "Home", // so admins know it came from home page
      regionLabel: "Home",
      page: "Hjem",
    };

    try {
      await submit(payload);

      setStatus("success");
      setStatusMessage(
        "Takk! Meldingen din er sendt. Vi svarer så snart vi kan.",
      );

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
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  return (
    <>
      {/*=====CONTACT AREA START=======*/}
      <div
        className={`contact1 sp overflow-hidden ${styles.section7Wrapper}`}
        id="contact"
      >
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
                  dine behov. Trenger du kvalifiserte vikarer, ta kontakt!
                </p>

                <div className="" data-aos="fade-right" data-aos-duration={800}>
                  <div className="contact1-box">
                    <div className="icon">
                      <img src="/assets/img/icons/contact-icon1.png" alt="" />
                    </div>
                    <div className="heading">
                      <p>Ring oss</p>
                      <Link href="tel:+47 479 68 163">+47 479 68 163</Link>
                    </div>
                  </div>
                </div>

                <div
                  className={styles.contactEmailBox}
                  data-aos="fade-right"
                  data-aos-duration={1100}
                >
                  <div className="contact1-box">
                    <div className="icon">
                      <img src="/assets/img/icons/contact-icon2.png" alt="" />
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
          </div>
        </div>
      </div>
      {/*=====CONTACT AREA END=======*/}
    </>
  );
}
