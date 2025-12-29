"use client";

import Link from "next/link";
import Image from "next/image";
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

type Place = "bergen" | "oslo" | "stavanger";

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
    []
  );

  const [formData, setFormData] = useState<FormState>({
    orgName: "",
    contactName: "",
    phone: "",
    email: "",
    place: "bergen",
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
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with your submit logic (API / email / CRM)
    console.log("Order request:", formData);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-stretch">
          {/* LEFT */}
          <div className="col-lg-5">
            <div className={styles.left}>
              <h2 className={styles.title}>Bestill vikar</h2>
              <p className={styles.subtitle}>
                Fyll ut skjemaet, så tar vi kontakt så raskt som mulig. Du kan
                også bestille via telefon eller e-post.
              </p>

              <Link
                href="/contact"
                className={`theme-btn1 ${styles.themeBtnFix}`}
              >
                Gå til kontaktsiden
                <span>
                  <FiArrowRight />
                </span>
              </Link>

              <div className={styles.imageWrap}>
                <Image
                  src="/assets/img/order/order-main.jpg"
                  alt="Bestill vikar"
                  fill
                  className={styles.image}
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7 d-flex">
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Bestillingsskjema</h3>
                <p className={styles.formSub}>
                  Legg inn detaljer om behovet – jo mer info, jo raskere match.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="row">
                  {/* Org */}
                  <div className="col-md-6">
                    <label className={styles.label}>
                      Skole / barnehage / bedrift
                    </label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiHome />
                      </span>
                      <input
                        className={styles.input}
                        name="orgName"
                        placeholder="F.eks. Solsiden barnehage"
                        value={formData.orgName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="col-md-6">
                    <label className={styles.label}>Kontaktperson</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiUser />
                      </span>
                      <input
                        className={styles.input}
                        name="contactName"
                        placeholder="Navn på kontaktperson"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className={styles.label}>Telefonnummer</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiPhone />
                      </span>
                      <input
                        className={styles.input}
                        name="phone"
                        placeholder="+47 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        inputMode="tel"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className={styles.label}>E-post</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiMail />
                      </span>
                      <input
                        className={styles.input}
                        name="email"
                        type="email"
                        placeholder="navn@firma.no"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Place */}
                  <div className="col-md-6">
                    <label className={styles.label}>Sted</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiMapPin />
                      </span>
                      <select
                        className={styles.select}
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                      >
                        <option value="bergen">Bergen</option>
                        <option value="oslo">Oslo</option>
                        <option value="stavanger">Stavanger</option>
                      </select>
                    </div>
                  </div>

                  {/* Job type */}
                  <div className="col-md-6">
                    <label className={styles.label}>Oppdragstype</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiBriefcase />
                      </span>
                      <select
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

                  {/* Start date */}
                  <div className="col-md-6">
                    <label className={styles.label}>Startdato</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiCalendar />
                      </span>
                      <input
                        className={styles.input}
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* End date */}
                  <div className="col-md-6">
                    <label className={styles.label}>Sluttdato</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiCalendar />
                      </span>
                      <input
                        className={styles.input}
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Start time */}
                  <div className="col-md-6">
                    <label className={styles.label}>Starttid</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiClock />
                      </span>
                      <input
                        className={styles.input}
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* End time */}
                  <div className="col-md-6">
                    <label className={styles.label}>Sluttid</label>
                    <div className={styles.field}>
                      <span className={styles.fieldIcon}>
                        <FiClock />
                      </span>
                      <input
                        className={styles.input}
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="col-md-12">
                    <label className={styles.label}>Kommentar</label>
                    <div className={styles.fieldTextarea}>
                      <span className={styles.fieldIconTextarea}>
                        <FiMessageSquare />
                      </span>
                      <textarea
                        className={styles.textarea}
                        name="comment"
                        placeholder="F.eks. antall personer, erfaring, språk, behov for politiattest, osv."
                        value={formData.comment}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit */}
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
