// VacancyDetailsSection.tsx (FULL UPDATED) — fixes 400 by ensuring token is sent,
// blocks submit if token missing, and shows exact server error (so you can debug fast)

"use client";

import React, { FormEvent, useMemo, useState } from "react";
import styles from "@/styles/marketing/vacancies/vacancyDetails.module.css";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiPaperclip,
  FiArrowRight,
  FiMapPin as FiMapPinSmall,
} from "react-icons/fi";
import {
  vacanciesData,
  regionLabel,
  areaLabel,
} from "@/utils/marketing/vacanciesData";
import { useFormspark } from "@formspark/use-formspark";
import { Turnstile } from "@marsidev/react-turnstile";

type Props = {
  slug: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cvFile: File | null;
  otherFiles: File[];
  website: string; // honeypot
  turnstileToken: string; // ✅ Turnstile token
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

// Must match your API route limits (app/api/vacancy-upload/route.ts)
const MAX_CV_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_OTHER_BYTES = 10 * 1024 * 1024; // 10MB each
const MAX_OTHER_FILES = 5;

const CV_ALLOWED = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const OTHER_ALLOWED = new Set([...CV_ALLOWED, "image/jpeg", "image/png"]);

function fileTypeOk(file: File, allowed: Set<string>) {
  return allowed.has(file.type);
}

export default function VacancyDetailsSection({ slug }: Props) {
  const vacancy = useMemo(
    () => vacanciesData.find((v) => v.slug === slug),
    [slug],
  );

  const formId = process.env.NEXT_PUBLIC_FORMSPARK_VACANCY_FORM_ID;
  if (!formId) {
    throw new Error(
      "Missing NEXT_PUBLIC_FORMSPARK_VACANCY_FORM_ID in .env.local",
    );
  }

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!turnstileSiteKey) {
    throw new Error("Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local");
  }

  const [submitToFormspark, submittingToFormspark] = useFormspark({ formId });

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    cvFile: null,
    otherFiles: [],
    website: "",
    turnstileToken: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  const busy = uploading || submittingToFormspark;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, cvFile: file }));
    setErrors((prev) => ({ ...prev, cvFile: undefined }));
  };

  const handleOtherDocsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setFormData((prev) => ({ ...prev, otherFiles: files.slice(0, 5) }));
    setErrors((prev) => ({ ...prev, otherFiles: undefined }));
  };

  function validate(v: FormState): FormErrors {
    const next: FormErrors = {};

    // Honeypot: if filled, likely bot
    if (v.website.trim()) {
      next.website = "Ugyldig innsending.";
      return next;
    }

    // ✅ Must have a captcha token
    if (!v.turnstileToken.trim()) {
      next.turnstileToken = "Bekreft at du ikke er en robot.";
    }

    const name = v.name.trim();
    const email = v.email.trim();
    const phone = v.phone.trim();
    const address = v.address.trim();

    // name: required, 2–80
    if (!name) next.name = "Navn er påkrevd.";
    else if (name.length < 2) next.name = "Navn må være minst 2 tegn.";
    else if (name.length > 80) next.name = "Navn kan maks være 80 tegn.";

    // email: required + valid
    if (!email) next.email = "E-post er påkrevd.";
    else if (!isValidEmail(email)) next.email = "Skriv inn en gyldig e-post.";

    // phone: required + valid
    if (!phone) next.phone = "Telefon er påkrevd.";
    else if (!isValidPhone(phone))
      next.phone = "Skriv inn et gyldig telefonnummer.";

    // address: required, 5–120
    if (!address) next.address = "Adresse er påkrevd.";
    else if (address.length < 5) next.address = "Adresse må være minst 5 tegn.";
    else if (address.length > 120)
      next.address = "Adresse kan maks være 120 tegn.";

    // cvFile: required + type + size
    if (!v.cvFile) next.cvFile = "CV er påkrevd.";
    else {
      if (!fileTypeOk(v.cvFile, CV_ALLOWED)) {
        next.cvFile = "CV må være PDF eller DOC/DOCX.";
      } else if (v.cvFile.size > MAX_CV_BYTES) {
        next.cvFile = "CV er for stor (maks 10MB).";
      }
    }

    // otherFiles: optional, max 5, allowed types + size
    if (v.otherFiles.length > MAX_OTHER_FILES) {
      next.otherFiles = "For mange vedlegg (maks 5).";
    } else {
      for (const f of v.otherFiles) {
        if (!fileTypeOk(f, OTHER_ALLOWED)) {
          next.otherFiles = "Vedlegg må være PDF/DOC eller bilder (JPG/PNG).";
          break;
        }
        if (f.size > MAX_OTHER_BYTES) {
          next.otherFiles = "Et vedlegg er for stort (maks 10MB per fil).";
          break;
        }
      }
    }

    return next;
  }

  async function uploadFiles() {
    if (!formData.cvFile) throw new Error("Missing CV");

    // Extra guard (prevents pointless 400s)
    if (!formData.turnstileToken.trim()) {
      throw new Error("Bekreft at du ikke er en robot.");
    }

    const fd = new FormData();
    fd.append("slug", slug);
    fd.append("turnstileToken", formData.turnstileToken); // ✅ IMPORTANT
    fd.append("cv", formData.cvFile);

    for (const f of formData.otherFiles) {
      fd.append("others", f);
    }

    const res = await fetch("/api/vacancy-upload", {
      method: "POST",
      body: fd,
    });

    const json = await res.json().catch(() => null);

    // ✅ Show real backend error (instead of generic "Upload failed")
    if (!res.ok || !json?.ok) {
      throw new Error(json?.error || `Upload failed (${res.status})`);
    }

    const cvUrl = json.cv?.downloadUrl;
    const otherUrls = json.others?.map((x: any) => x.downloadUrl);

    if (!cvUrl) throw new Error("Upload failed: missing CV URL");
    return { cvUrl, otherUrls };
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;

    setStatus("idle");
    setStatusMessage("");

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Sjekk feltene markert i skjemaet.");
      return;
    }

    if (!vacancy) {
      setStatus("error");
      setStatusMessage("Stilling ikke funnet.");
      return;
    }

    try {
      setUploading(true);

      // Upload to Firebase Storage via server route
      const { cvUrl, otherUrls } = await uploadFiles();

      // Vacancy metadata for admins
      const region = regionLabel[vacancy.region];
      const areas = vacancy.areas.map((a) => areaLabel[a]);

      await submitToFormspark({
        // Applicant
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),

        // Files
        cvUrl,
        otherUrls,

        // Context
        page: "Vacancy",
        source: "VacancyDetails",
        vacancySlug: vacancy.slug,
        vacancyTitle: vacancy.title,
        vacancyRegion: region,
        vacancyAreas: areas.join(", "),
      });

      setStatus("success");
      setStatusMessage(
        "Takk! Søknaden er sendt. Vi tar kontakt så snart vi kan.",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        cvFile: null,
        otherFiles: [],
        website: "",
        turnstileToken: "", // ✅ reset token
      });
      setErrors({});
    } catch (err) {
      console.error(err);

      const msg = err instanceof Error ? err.message : "";

      // If captcha failed/expired, reset token so user must solve again
      if (msg.toLowerCase().includes("captcha")) {
        setFormData((prev) => ({ ...prev, turnstileToken: "" }));
      }

      setStatus("error");
      setStatusMessage(
        msg ||
          "Noe gikk galt ved sending. Prøv igjen om litt, eller kontakt oss direkte.",
      );
    } finally {
      setUploading(false);
    }
  };

  if (!vacancy) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className={styles.notFoundCard}>
            <h2 className={styles.notFoundTitle}>Stilling ikke funnet</h2>
            <p className={styles.notFoundText}>
              Vi fant dessverre ingen stilling med denne lenken.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const region = regionLabel[vacancy.region];
  const areas = vacancy.areas.map((a) => areaLabel[a]);

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.leftSheet}>
              <div className={styles.hero}>
                <img
                  src={vacancy.image}
                  alt={vacancy.title}
                  className={styles.heroImg}
                />
              </div>

              <div className={styles.header}>
                <p className={styles.breadcrumb}>Ledige stillinger</p>
                <h1 className={styles.title}>{vacancy.title}</h1>

                <div className={styles.metaBar}>
                  <span className={styles.metaPill}>
                    <FiMapPinSmall />
                    {region}
                  </span>

                  {areas.map((a) => (
                    <span
                      key={a}
                      className={`${styles.metaPill} ${styles.metaPillSoft}`}
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <p className={styles.subTitle}>{vacancy.shortDescription}</p>

                <div className={styles.openPositionsLine}>
                  {vacancy.openPositions} ledige stillinger
                </div>
              </div>

              {vacancy.details.map((section, idx) => (
                <div key={idx} className={styles.section}>
                  {section.title?.trim() ? (
                    <h3 className={styles.sectionTitle}>{section.title}</h3>
                  ) : null}

                  {section.type === "text" ? (
                    <div className={styles.paragraphs}>
                      {section.paragraphs
                        .filter((p) => p.trim().length > 0)
                        .map((p, i) => (
                          <p key={i} className={styles.text}>
                            {p}
                          </p>
                        ))}
                    </div>
                  ) : (
                    <ul className={styles.list}>
                      {section.items
                        .filter((item) => item.trim().length > 0)
                        .map((item, i) => (
                          <li key={i} className={styles.listItem}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Søk på stillingen</h3>
                <p className={styles.formSub}>
                  Fyll inn kontaktinfo og last opp CV. Andre dokumenter er
                  valgfritt.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <FiUser />
                  </span>
                  <input
                    className={styles.input}
                    name="name"
                    placeholder="Navn *"
                    value={formData.name}
                    onChange={handleChange}
                    aria-label="Navn"
                    aria-invalid={!!errors.name}
                    maxLength={80}
                    autoComplete="name"
                  />
                </div>
                {errors.name && (
                  <small style={{ display: "block" }}>{errors.name}</small>
                )}

                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <FiMail />
                  </span>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="E-post *"
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="E-post"
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <small style={{ display: "block" }}>{errors.email}</small>
                )}

                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <FiPhone />
                  </span>
                  <input
                    className={styles.input}
                    name="phone"
                    placeholder="Telefon *"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    aria-label="Telefon"
                    aria-invalid={!!errors.phone}
                    autoComplete="tel"
                  />
                </div>
                {errors.phone && (
                  <small style={{ display: "block" }}>{errors.phone}</small>
                )}

                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <FiMapPin />
                  </span>
                  <input
                    className={styles.input}
                    name="address"
                    placeholder="Adresse * (gate, postnr, sted)"
                    value={formData.address}
                    onChange={handleChange}
                    aria-label="Adresse"
                    aria-invalid={!!errors.address}
                    maxLength={120}
                    autoComplete="street-address"
                  />
                </div>
                {errors.address && (
                  <small style={{ display: "block" }}>{errors.address}</small>
                )}

                {/* CV */}
                <div className={styles.fileGroup}>
                  <div className={styles.fileRow}>
                    <span className={styles.fieldIcon}>
                      <FiFileText />
                    </span>

                    <input
                      id="cvUpload"
                      className={styles.hiddenFileInput}
                      type="file"
                      onChange={handleCvChange}
                      accept=".pdf,.doc,.docx"
                    />

                    <label htmlFor="cvUpload" className={styles.fileButton}>
                      Last opp
                    </label>

                    <div className={styles.fileName}>
                      {formData.cvFile ? formData.cvFile.name : "CV*"}
                    </div>
                  </div>

                  <div className={styles.fileMeta}>
                    <div className={styles.fileHint}>PDF / DOC / DOCX</div>
                    <div className={styles.fileSubHint}>Obligatorisk</div>
                  </div>

                  {errors.cvFile && (
                    <small style={{ display: "block" }}>{errors.cvFile}</small>
                  )}
                </div>

                {/* Other docs */}
                <div className={styles.fileGroup}>
                  <div className={styles.fileRow}>
                    <span className={styles.fieldIcon}>
                      <FiPaperclip />
                    </span>

                    <input
                      id="otherUpload"
                      className={styles.hiddenFileInput}
                      type="file"
                      multiple
                      onChange={handleOtherDocsChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />

                    <label htmlFor="otherUpload" className={styles.fileButton}>
                      Last opp
                    </label>

                    <div className={styles.fileName}>
                      {formData.otherFiles.length > 0
                        ? `${formData.otherFiles.length} fil(er) valgt`
                        : "Andre dokumenter (maks 5)"}
                    </div>
                  </div>

                  <div className={styles.fileMeta}>
                    <div className={styles.fileHint}>PDF / DOC / bilder</div>
                    <div className={styles.fileSubHint}>Valgfritt</div>
                  </div>

                  {formData.otherFiles.length > 0 && (
                    <div className={styles.fileList}>
                      {formData.otherFiles.slice(0, 5).map((f) => (
                        <div
                          key={`${f.name}-${f.lastModified}`}
                          className={styles.filePill}
                          title={f.name}
                        >
                          {f.name}
                        </div>
                      ))}
                    </div>
                  )}

                  {errors.otherFiles && (
                    <small style={{ display: "block" }}>
                      {errors.otherFiles}
                    </small>
                  )}
                </div>

                {/* ✅ Turnstile */}
                <div style={{ marginTop: 10 }}>
                  <Turnstile
                    siteKey={turnstileSiteKey}
                    onSuccess={(token: string) =>
                      setFormData((prev) => ({
                        ...prev,
                        turnstileToken: token,
                      }))
                    }
                    onExpire={() =>
                      setFormData((prev) => ({ ...prev, turnstileToken: "" }))
                    }
                    onError={() =>
                      setFormData((prev) => ({ ...prev, turnstileToken: "" }))
                    }
                  />

                  {errors.turnstileToken && (
                    <small style={{ display: "block" }}>
                      {errors.turnstileToken}
                    </small>
                  )}
                </div>

                {/* Status */}
                {status !== "idle" && (
                  <div style={{ marginTop: 8 }}>
                    <small style={{ display: "block" }}>{statusMessage}</small>
                  </div>
                )}

                <button
                  type="submit"
                  className={`theme-btn1 ${styles.themeBtnFix} ${styles.full}`}
                  disabled={busy}
                >
                  {busy ? "Sender..." : "Send søknad"}
                  <span>
                    <FiArrowRight />
                  </span>
                </button>

                <div className={styles.smallNote}>
                  Ved å sende inn samtykker du til at vi kan kontakte deg om
                  søknaden.
                </div>
              </form>
            </div>

            {/* Contact person card */}
            <div className={styles.contactCard}>
              <div className={styles.contactTitle}>Kontaktperson</div>

              <div className={styles.contactRow}>
                <img
                  src={vacancy.contactPerson.image}
                  alt={vacancy.contactPerson.name}
                  className={styles.contactAvatar}
                />

                <div className={styles.contactInfo}>
                  <div className={styles.contactName}>
                    {vacancy.contactPerson.name}
                  </div>
                  <div className={styles.contactRole}>
                    {vacancy.contactPerson.title}
                  </div>

                  <div className={styles.contactLinks}>
                    <a
                      className={styles.contactLink}
                      href={`tel:${vacancy.contactPerson.phone.replace(
                        /\s+/g,
                        "",
                      )}`}
                    >
                      <FiPhone />
                      <span>{vacancy.contactPerson.phone}</span>
                    </a>

                    <a
                      className={styles.contactLink}
                      href={`mailto:${vacancy.contactPerson.email}`}
                    >
                      <FiMail />
                      <span>{vacancy.contactPerson.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
