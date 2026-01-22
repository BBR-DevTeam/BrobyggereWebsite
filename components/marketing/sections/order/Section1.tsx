"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import styles from "@/styles/marketing/order/order.module.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiBriefcase,
  FiCalendar,
  FiClock,
  FiMessageSquare,
  FiArrowRight,
  FiHome,
  FiChevronDown,
} from "react-icons/fi";
import { useFormspark } from "@formspark/use-formspark";

type Place = "vestlandet" | "oslo" | "rogaland";

type JobType =
  | "barnehageassistent"
  | "skoleassistent"
  | "vikarlaerer"
  | "sfo_assistent"
  | "miljoarbeider"
  | "renholder"
  | "sykepleier"
  | "vernepleier"
  | "helsefagarbeider"
  | "annet";

type FormState = {
  orgName: string;
  contactName: string;
  phone: string;
  email: string;
  place: Place;
  jobType: JobType;

  // ✅ Store dates as Norwegian display format (DD.MM.YYYY)
  // We convert to ISO (YYYY-MM-DD) for validation comparisons + submission.
  startDate: string;
  endDate: string;

  startTime: string; // HH:MM
  endTime: string; // HH:MM
  comment: string;

  website: string; // honeypot
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function isValidTimeHHMM(t: string) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(t);
}

/** Normalize to "DD.MM.YYYY" while typing (accepts digits, "." or "/") */
function normalizeNorDateInput(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 8); // DDMMYYYY
  const dd = digits.slice(0, 2);
  const mm = digits.slice(2, 4);
  const yyyy = digits.slice(4, 8);

  if (digits.length <= 2) return dd;
  if (digits.length <= 4) return `${dd}.${mm}`;
  return `${dd}.${mm}.${yyyy}`;
}

/** Convert "DD.MM.YYYY" (or "DD/MM/YYYY") -> "YYYY-MM-DD" if valid, else "" */
function norDateToISO(nor: string) {
  const m = /^(\d{2})[./](\d{2})[./](\d{4})$/.exec(nor.trim());
  if (!m) return "";

  const d = Number(m[1]);
  const mo = Number(m[2]);
  const y = Number(m[3]);

  if (y < 1900 || y > 2100) return "";
  if (mo < 1 || mo > 12) return "";
  if (d < 1 || d > 31) return "";

  // Validate actual calendar date (timezone-safe check using UTC)
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (
    dt.getUTCFullYear() !== y ||
    dt.getUTCMonth() !== mo - 1 ||
    dt.getUTCDate() !== d
  ) {
    return "";
  }

  const mm = String(mo).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

function toDateNumberFromISO(iso: string) {
  // "YYYY-MM-DD" -> yyyymmdd as number
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return NaN;
  const [, y, mo, d] = m;
  return Number(`${y}${mo}${d}`);
}

function isEndAfterStartSameDay(startTime: string, endTime: string) {
  if (!isValidTimeHHMM(startTime) || !isValidTimeHHMM(endTime)) return false;
  const [sh, sm] = startTime.split(":").map(Number);
  const [eh, em] = endTime.split(":").map(Number);
  return eh * 60 + em > sh * 60 + sm;
}

function formatTimeInput(raw: string) {
  let v = raw.replace(/[^\d:]/g, "").slice(0, 5);
  const digits = v.replace(/:/g, "");
  if (digits.length >= 3 && !v.includes(":")) {
    v = `${digits.slice(0, 2)}:${digits.slice(2, 4)}`.slice(0, 5);
  }
  return v;
}

function buildTimeOptions(stepMinutes: number) {
  const out: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      out.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return out;
}

type TimeFieldProps = {
  id: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  ariaInvalid?: boolean;
  error?: string;
  label: string;
};

function TimeField({
  id,
  name,
  value,
  onChange,
  required,
  ariaInvalid,
  error,
  label,
}: TimeFieldProps) {
  const options = useMemo(() => buildTimeOptions(15), []);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  return (
    <div className="col-md-6">
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <div className={styles.field} ref={wrapRef}>
        <span className={styles.fieldIcon}>
          <FiClock />
        </span>

        <input
          id={id}
          className={`${styles.input} ${styles.timeInput}`}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(formatTimeInput(e.target.value))}
          placeholder="HH:MM"
          inputMode="numeric"
          autoComplete="off"
          aria-invalid={!!ariaInvalid}
          required={required}
        />

        <button
          type="button"
          className={styles.rightButton}
          aria-label="Velg tid"
          onClick={() => setOpen((s) => !s)}
        >
          <FiChevronDown />
        </button>

        {open && (
          <div className={styles.timeDropdown} role="listbox" aria-label="Tid">
            {options.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.timeOption} ${
                  value === t ? styles.timeOptionActive : ""
                }`}
                onClick={() => {
                  onChange(t);
                  setOpen(false);
                }}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <small style={{ display: "block" }}>{error}</small>}
    </div>
  );
}

type DateFieldProps = {
  id: string;
  name: string;
  value: string; // DD.MM.YYYY (display)
  onChange: (v: string) => void;
  required?: boolean;
  ariaInvalid?: boolean;
  error?: string;
  label: string;
};

function DateField({
  id,
  name,
  value,
  onChange,
  required,
  ariaInvalid,
  error,
  label,
}: DateFieldProps) {
  return (
    <div className="col-md-6">
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.field}>
        <span className={styles.fieldIcon}>
          <FiCalendar />
        </span>
        <input
          id={id}
          className={styles.input}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(normalizeNorDateInput(e.target.value))}
          placeholder="DD.MM.ÅÅÅÅ"
          inputMode="numeric"
          autoComplete="off"
          aria-invalid={!!ariaInvalid}
          required={required}
        />
      </div>
      {error && <small style={{ display: "block" }}>{error}</small>}
    </div>
  );
}

export default function Section1() {
  const jobOptions = useMemo(
    () => [
      { value: "barnehageassistent", label: "Barnehageassistent" },
      { value: "skoleassistent", label: "Skoleassistent" },
      { value: "vikarlaerer", label: "Vikarlærer" },
      { value: "sfo_assistent", label: "SFO-assistent" },
      { value: "miljoarbeider", label: "Miljøarbeider" },
      { value: "renholder", label: "Renholder" },
      { value: "sykepleier", label: "Sykepleier" },
      { value: "vernepleier", label: "Vernepleier" },
      { value: "helsefagarbeider", label: "Helsefagarbeider" },
      { value: "annet", label: "Annet" },
    ],
    [],
  );

  const formId = process.env.NEXT_PUBLIC_FORMSPARK_ORDER_FORM_ID;
  if (!formId) {
    throw new Error(
      "Missing NEXT_PUBLIC_FORMSPARK_ORDER_FORM_ID in .env.local",
    );
  }
  const [submit, submitting] = useFormspark({ formId });

  const [formData, setFormData] = useState<FormState>({
    orgName: "",
    contactName: "",
    phone: "",
    email: "",
    place: "vestlandet",
    jobType: "barnehageassistent",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    comment: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  function validate(v: FormState): FormErrors {
    const next: FormErrors = {};

    const org = v.orgName.trim();
    const contact = v.contactName.trim();
    const phone = v.phone.trim();
    const email = v.email.trim();

    const startDateNor = v.startDate.trim();
    const endDateNor = v.endDate.trim();
    const startTime = v.startTime.trim();
    const endTime = v.endTime.trim();
    const comment = v.comment.trim();

    if (v.website.trim()) {
      next.website = "Ugyldig innsending.";
      return next;
    }

    if (!org) next.orgName = "Skole / barnehage / bedrift er påkrevd.";
    else if (org.length < 2) next.orgName = "Navn må være minst 2 tegn.";
    else if (org.length > 120) next.orgName = "Kan maks være 120 tegn.";

    if (!contact) next.contactName = "Kontaktperson er påkrevd.";
    else if (contact.length < 2)
      next.contactName = "Kontaktperson må være minst 2 tegn.";
    else if (contact.length > 80)
      next.contactName = "Kontaktperson kan maks være 80 tegn.";

    if (!phone) next.phone = "Telefonnummer er påkrevd.";
    else if (!isValidPhone(phone))
      next.phone = "Skriv inn et gyldig telefonnummer.";

    if (!email) next.email = "E-post er påkrevd.";
    else if (!isValidEmail(email)) next.email = "Skriv inn en gyldig e-post.";

    if (!v.place) next.place = "Sted er påkrevd.";
    if (!v.jobType) next.jobType = "Oppdragstype er påkrevd.";

    // ✅ Dates in Norwegian format: DD.MM.YYYY
    if (!startDateNor) next.startDate = "Startdato er påkrevd.";
    const startISO = startDateNor ? norDateToISO(startDateNor) : "";
    if (startDateNor && !startISO)
      next.startDate = "Ugyldig startdato. Bruk DD.MM.ÅÅÅÅ";

    if (!endDateNor) next.endDate = "Sluttdato er påkrevd.";
    const endISO = endDateNor ? norDateToISO(endDateNor) : "";
    if (endDateNor && !endISO)
      next.endDate = "Ugyldig sluttdato. Bruk DD.MM.ÅÅÅÅ";

    if (!startTime) next.startTime = "Starttid er påkrevd.";
    else if (!isValidTimeHHMM(startTime)) next.startTime = "Ugyldig starttid.";

    if (!endTime) next.endTime = "Sluttid er påkrevd.";
    else if (!isValidTimeHHMM(endTime)) next.endTime = "Ugyldig sluttid.";

    // ✅ Date logic (compare ISO values)
    if (!next.startDate && !next.endDate && startISO && endISO) {
      const s = toDateNumberFromISO(startISO);
      const e = toDateNumberFromISO(endISO);

      if (!Number.isNaN(s) && !Number.isNaN(e) && e < s) {
        next.endDate = "Sluttdato kan ikke være før startdato.";
      }

      if (e === s && !next.startTime && !next.endTime) {
        if (!isEndAfterStartSameDay(startTime, endTime)) {
          next.endTime = "Sluttid må være etter starttid.";
        }
      }
    }

    if (comment.length > 2000)
      next.comment = "Kommentar kan maks være 2000 tegn.";

    return next;
  }

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setStatus("idle");
    setStatusMessage("");

    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Sjekk feltene markert i skjemaet.");
      return;
    }

    // ✅ Convert Norwegian display date -> ISO before submission
    const startDateISO = norDateToISO(formData.startDate.trim());
    const endDateISO = norDateToISO(formData.endDate.trim());

    const payload = {
      orgName: formData.orgName.trim(),
      contactName: formData.contactName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim().toLowerCase(),
      place: formData.place,
      jobType: formData.jobType,

      // send stable ISO to Formspark/back-end
      startDate: startDateISO,
      endDate: endDateISO,

      startTime: formData.startTime,
      endTime: formData.endTime,
      comment: formData.comment.trim(),
      page: "Bestill vikar",
    };

    try {
      await submit(payload);

      setStatus("success");
      setStatusMessage("Takk! Bestillingen er sendt. Vi tar kontakt snart.");

      setFormData({
        orgName: "",
        contactName: "",
        phone: "",
        email: "",
        place: "vestlandet",
        jobType: "barnehageassistent",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        comment: "",
        website: "",
      });
      setErrors({});
    } catch {
      setStatus("error");
      setStatusMessage(
        "Noe gikk galt ved sending. Prøv igjen, eller kontakt oss direkte.",
      );
    }
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`d-block d-lg-none ${styles.mobileHeader}`}>
          <h2 className={styles.title}>Bestill vikar</h2>
          <p className={styles.subtitle}>
            Fyll ut skjemaet, så tar vi kontakt så raskt som mulig. Du kan også
            bestille via telefon eller e-post.
          </p>
        </div>

        <div className="row align-items-stretch">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className={styles.left}>
              <div className="d-none d-lg-block">
                <h2 className={styles.title}>Bestill vikar</h2>
                <p className={styles.subtitle}>
                  Fyll ut skjemaet, så tar vi kontakt så raskt som mulig. Du kan
                  også bestille via telefon eller e-post.
                </p>
              </div>

              <Link
                href="/contact"
                className={`theme-btn1 ${styles.themeBtnFix}`}
              >
                Gå til kontaktsiden
                <span>
                  <FiArrowRight />
                </span>
              </Link>

              <div className={styles.serviceBlock}>
                <p className={styles.serviceText}>
                  På servicesiden vår finner du en oversikt over oppdragstyper
                  og hva det er lurt å oppgi i bestillingen for raskere match.
                </p>

                <Link
                  href="/service"
                  className={`theme-btn1 ${styles.themeBtnFix}`}
                >
                  Se våre tjenester
                  <span>
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-7 d-flex order-1 order-lg-2">
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Bestillingsskjema</h3>
                <p className={styles.formSub}>
                  Legg inn detaljer om behovet – jo mer info, jo raskere match.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className="row">
                  {/* Honeypot */}
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
                        onChange={(e) => setField("website", e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="col-md-6">
                    <label className={styles.srOnly} htmlFor="orgName">
                      Skole / barnehage / bedrift
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiHome />
                      </span>
                      <input
                        id="orgName"
                        className={styles.input}
                        name="orgName"
                        placeholder="Skole / barnehage / bedrift *"
                        value={formData.orgName}
                        onChange={(e) => setField("orgName", e.target.value)}
                        aria-invalid={!!errors.orgName}
                        maxLength={120}
                        required
                      />
                    </div>
                    {errors.orgName && (
                      <small style={{ display: "block" }}>
                        {errors.orgName}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className={styles.srOnly} htmlFor="contactName">
                      Kontaktperson
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiUser />
                      </span>
                      <input
                        id="contactName"
                        className={styles.input}
                        name="contactName"
                        placeholder="Kontaktperson *"
                        value={formData.contactName}
                        onChange={(e) =>
                          setField("contactName", e.target.value)
                        }
                        aria-invalid={!!errors.contactName}
                        maxLength={80}
                        required
                      />
                    </div>
                    {errors.contactName && (
                      <small style={{ display: "block" }}>
                        {errors.contactName}
                      </small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className={styles.srOnly} htmlFor="phone">
                      Telefonnummer
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiPhone />
                      </span>
                      <input
                        id="phone"
                        className={styles.input}
                        name="phone"
                        placeholder="Telefonnummer (+47 ...) *"
                        value={formData.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        type="tel"
                        inputMode="tel"
                        aria-invalid={!!errors.phone}
                        maxLength={30}
                        required
                      />
                    </div>
                    {errors.phone && (
                      <small style={{ display: "block" }}>{errors.phone}</small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className={styles.srOnly} htmlFor="email">
                      E-post
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiMail />
                      </span>
                      <input
                        id="email"
                        className={styles.input}
                        name="email"
                        type="email"
                        placeholder="E-post (navn@firma.no) *"
                        value={formData.email}
                        onChange={(e) => setField("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        maxLength={120}
                        required
                      />
                    </div>
                    {errors.email && (
                      <small style={{ display: "block" }}>{errors.email}</small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className={styles.label} htmlFor="place">
                      Sted
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiMapPin />
                      </span>

                      <select
                        id="place"
                        className={styles.select}
                        name="place"
                        value={formData.place}
                        onChange={(e) =>
                          setField("place", e.target.value as Place)
                        }
                        aria-invalid={!!errors.place}
                        required
                      >
                        <option value="vestlandet">Vestlandet</option>
                        <option value="oslo">Akershus/Oslo</option>
                        <option value="rogaland">Rogaland</option>
                      </select>

                      <span className={styles.selectCaret} aria-hidden="true">
                        <FiChevronDown />
                      </span>
                    </div>
                    {errors.place && (
                      <small style={{ display: "block" }}>{errors.place}</small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className={styles.label} htmlFor="jobType">
                      Oppdragstype
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiBriefcase />
                      </span>

                      <select
                        id="jobType"
                        className={styles.select}
                        name="jobType"
                        value={formData.jobType}
                        onChange={(e) =>
                          setField("jobType", e.target.value as JobType)
                        }
                        aria-invalid={!!errors.jobType}
                        required
                      >
                        {jobOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>

                      <span className={styles.selectCaret} aria-hidden="true">
                        <FiChevronDown />
                      </span>
                    </div>
                    {errors.jobType && (
                      <small style={{ display: "block" }}>
                        {errors.jobType}
                      </small>
                    )}
                  </div>

                  {/* ✅ Norwegian date format: DD.MM.YYYY */}
                  <DateField
                    id="startDate"
                    name="startDate"
                    label="Startdato"
                    value={formData.startDate}
                    onChange={(v) => setField("startDate", v)}
                    ariaInvalid={!!errors.startDate}
                    error={errors.startDate}
                    required
                  />

                  <DateField
                    id="endDate"
                    name="endDate"
                    label="Sluttdato"
                    value={formData.endDate}
                    onChange={(v) => setField("endDate", v)}
                    ariaInvalid={!!errors.endDate}
                    error={errors.endDate}
                    required
                  />

                  <TimeField
                    id="startTime"
                    name="startTime"
                    label="Starttid"
                    value={formData.startTime}
                    onChange={(v) => setField("startTime", v)}
                    ariaInvalid={!!errors.startTime}
                    error={errors.startTime}
                    required
                  />

                  <TimeField
                    id="endTime"
                    name="endTime"
                    label="Sluttid"
                    value={formData.endTime}
                    onChange={(v) => setField("endTime", v)}
                    ariaInvalid={!!errors.endTime}
                    error={errors.endTime}
                    required
                  />

                  <div className="col-md-12">
                    <label className={styles.srOnly} htmlFor="comment">
                      Kommentar
                    </label>
                    <div className={styles.fieldTextarea}>
                      <span className={styles.fieldIconTextarea}>
                        <FiMessageSquare />
                      </span>
                      <textarea
                        id="comment"
                        className={styles.textarea}
                        name="comment"
                        placeholder="Kommentar (valgfritt) – f.eks. antall personer, erfaring, språk, behov for politiattest, osv."
                        value={formData.comment}
                        onChange={(e) => setField("comment", e.target.value)}
                        rows={4}
                        aria-invalid={!!errors.comment}
                        maxLength={2000}
                      />
                    </div>
                    {errors.comment && (
                      <small style={{ display: "block" }}>
                        {errors.comment}
                      </small>
                    )}
                  </div>

                  {status !== "idle" && (
                    <div className="col-md-12">
                      <div style={{ marginTop: 6 }}>
                        <small style={{ display: "block" }}>
                          {statusMessage}
                        </small>
                      </div>
                    </div>
                  )}

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className={`theme-btn1 ${styles.themeBtnFix} ${styles.full}`}
                      disabled={submitting}
                    >
                      {submitting ? "Sender..." : "Send bestilling"}
                      <span>
                        <FiArrowRight />
                      </span>
                    </button>

                    <div className={styles.smallNote}>
                      Ved å sende inn samtykker du til at vi kan kontakte deg om
                      bestillingen.
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* row end */}
        </div>
      </div>
    </section>
  );
}
