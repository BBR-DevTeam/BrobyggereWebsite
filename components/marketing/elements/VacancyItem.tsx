import Link from "next/link";
import styles from "@/styles/marketing/vacancies/vacancyItem.module.css";
import type { Vacancy } from "@/utils/marketing/vacanciesData";
import { regionLabel, areaLabel } from "@/utils/marketing/vacanciesData";

type Props = {
  vacancy: Vacancy;
};

export default function VacancyItem({ vacancy }: Props) {
  const href = `/vacancies/${vacancy.slug}`;

  const region = regionLabel[vacancy.region];
  const areas = vacancy.areas.map((a) => areaLabel[a]).join(", ");

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={vacancy.image} alt={vacancy.title} />
      </div>

      <div className={styles.content}>
        <div className={styles.metaRow}>
          <i className={`fa-solid fa-location-dot ${styles.metaIcon}`} />
          <span className={styles.metaText}>
            <span className={styles.metaRegion}>{region}</span>
            <span className={styles.metaDot}>•</span>
            <span className={styles.metaAreas}>{areas}</span>
          </span>
        </div>

        <h4 className={styles.title}>{vacancy.title}</h4>
        <p className={styles.description}>{vacancy.shortDescription}</p>

        <div className={styles.bottomRow}>
          <span className={styles.openPositions}>
            {vacancy.openPositions} ledige stillinger
          </span>
        </div>
      </div>
    </Link>
  );
}
