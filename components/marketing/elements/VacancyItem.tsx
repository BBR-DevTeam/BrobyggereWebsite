import Link from "next/link";
import styles from "@/styles/marketing/vacancies/vacancyItem.module.css";
import type { Vacancy } from "@/utils/marketing/vacanciesData";

type Props = {
  vacancy: Vacancy;
};

export default function VacancyItem({ vacancy }: Props) {
  const href = `/vacancies/${vacancy.slug}`;

  return (
    <Link href={href} className={styles.card}>
      {/* Left image column */}
      <div className={styles.imageWrap}>
        <img src={vacancy.image} alt={vacancy.title} />
      </div>

      {/* Right content column */}
      <div className={styles.content}>
        {/* City */}
        <div className={styles.metaRow}>
          <i className={`fa-solid fa-location-dot ${styles.metaIcon}`} />
          <span className={styles.metaText}>
            {vacancy.city.charAt(0).toUpperCase() + vacancy.city.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h4 className={styles.title}>{vacancy.title}</h4>

        {/* Short description */}
        <p className={styles.description}>{vacancy.shortDescription}</p>

        {/* Tags */}
        {vacancy.tags?.length > 0 && (
          <div className={styles.tagsRow}>
            {vacancy.tags.includes("fast") && (
              <span className={styles.tag}>
                <i className={`fa-solid fa-briefcase ${styles.tagIcon}`} />
                Fast
              </span>
            )}
            {vacancy.tags.includes("midlertidig") && (
              <span className={styles.tag}>
                <i className={`fa-solid fa-clock ${styles.tagIcon}`} />
                Midlertidig
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
