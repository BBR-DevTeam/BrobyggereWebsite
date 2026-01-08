"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "@/styles/marketing/vacancies/vacancyDetails.module.css";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiPaperclip,
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiMapPin as FiMapPinSmall,
} from "react-icons/fi";
import { vacanciesData } from "@/utils/marketing/vacanciesData";

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
};

export default function VacancyDetailsSection({ slug }: Props) {
  const vacancy = useMemo(
    () => vacanciesData.find((v) => v.slug === slug),
    [slug]
  );

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    address: "",
    cvFile: null,
    otherFiles: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, cvFile: file }));
  };

  const handleOtherDocsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setFormData((prev) => ({ ...prev, otherFiles: files.slice(0, 5) }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Apply vacancy:", {
      slug,
      ...formData,
      cvFileName: formData.cvFile?.name,
      otherFileNames: formData.otherFiles.map((f) => f.name),
    });
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

  const cityLabel =
    vacancy.city.charAt(0).toUpperCase() + vacancy.city.slice(1);

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
                    {cityLabel}
                  </span>

                  {vacancy.tags.includes("fast") && (
                    <span className={styles.metaPill}>
                      <FiBriefcase />
                      Fast
                    </span>
                  )}

                  {vacancy.tags.includes("midlertidig") && (
                    <span className={styles.metaPill}>
                      <FiClock />
                      Midlertidig
                    </span>
                  )}
                </div>

                <p className={styles.subTitle}>{vacancy.shortDescription}</p>
              </div>

              {vacancy.details.map((section, idx) => (
                <div key={idx} className={styles.section}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>

                  {section.type === "text" ? (
                    <div className={styles.paragraphs}>
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className={styles.text}>
                          {p}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <ul className={styles.list}>
                      {section.items.map((item, i) => (
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

              <form onSubmit={handleSubmit} className={styles.form}>
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
                    required
                    aria-label="Navn"
                  />
                </div>

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
                    required
                    aria-label="E-post"
                  />
                </div>

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
                    required
                    aria-label="Telefon"
                  />
                </div>

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
                    required
                    aria-label="Adresse"
                  />
                </div>

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
                      required
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
                </div>

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
                </div>

                <button
                  type="submit"
                  className={`theme-btn1 ${styles.themeBtnFix} ${styles.full}`}
                >
                  Send søknad
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

            {/* ✅ NEW: Contact person card under the form */}
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
                        ""
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
