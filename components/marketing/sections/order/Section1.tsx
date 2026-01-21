"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
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
} from "react-icons/fi";

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
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  comment: string;
};

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
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Order request:", formData);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* MOBILE-ONLY header (keeps title at top on mobile) */}
        <div className={`d-block d-lg-none ${styles.mobileHeader}`}>
          <h2 className={styles.title}>Bestill vikar</h2>
          <p className={styles.subtitle}>
            Fyll ut skjemaet, så tar vi kontakt så raskt som mulig. Du kan også
            bestille via telefon eller e-post.
          </p>
        </div>

        <div className="row align-items-stretch">
          {/* LEFT (moves below form on mobile) */}
          <div className="col-lg-5 order-2 order-lg-1">
            <div className={styles.left}>
              {/* DESKTOP-ONLY title/subtitle (keeps alignment with form) */}
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

          {/* RIGHT (form first on mobile) */}
          <div className="col-lg-7 d-flex order-1 order-lg-2">
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Bestillingsskjema</h3>
                <p className={styles.formSub}>
                  Legg inn detaljer om behovet – jo mer info, jo raskere match.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="row">
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
                        placeholder="Skole / barnehage / bedrift"
                        value={formData.orgName}
                        onChange={handleChange}
                        required
                        aria-label="Skole / barnehage / bedrift"
                      />
                    </div>
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
                        placeholder="Kontaktperson"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        aria-label="Kontaktperson"
                      />
                    </div>
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
                        placeholder="Telefonnummer (+47 ...)"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        inputMode="tel"
                        required
                        aria-label="Telefonnummer"
                      />
                    </div>
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
                        placeholder="E-post (navn@firma.no)"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="E-post"
                      />
                    </div>
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
                        onChange={handleChange}
                      >
                        <option value="vestlandet">Vestlandet</option>
                        <option value="oslo">Akershus/Oslo</option>
                        <option value="rogaland">Rogaland</option>
                      </select>
                    </div>
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
                        onChange={handleChange}
                      >
                        {jobOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className={styles.label} htmlFor="startDate">
                      Startdato
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiCalendar />
                      </span>
                      <input
                        id="startDate"
                        className={styles.input}
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className={styles.label} htmlFor="endDate">
                      Sluttdato (valgfritt)
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiCalendar />
                      </span>
                      <input
                        id="endDate"
                        className={styles.input}
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className={styles.label} htmlFor="startTime">
                      Starttid
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiClock />
                      </span>
                      <input
                        id="startTime"
                        className={styles.input}
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className={styles.label} htmlFor="endTime">
                      Sluttid (valgfritt)
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiClock />
                      </span>
                      <input
                        id="endTime"
                        className={styles.input}
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

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
                        onChange={handleChange}
                        rows={4}
                        aria-label="Kommentar"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className={`theme-btn1 ${styles.themeBtnFix} ${styles.full}`}
                    >
                      Send bestilling
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
