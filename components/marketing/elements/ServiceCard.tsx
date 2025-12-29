import Link from "next/link";
import type { Service } from "../../../utils/marketing/service";
import styles from "../../../styles/marketing/service/section1.module.css";

type ServiceCardProps = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const detailsHref = `/service-details/${service.slug}`;
  const imageSrc = service.image.startsWith("/")
    ? service.image
    : `/${service.image}`; // ✅ ensure root-relative path

  return (
    <div
      className="col-lg-3 col-md-6"
      data-aos="zoom-in-up"
      data-aos-duration={700 + index * 100}
    >
      <div className={styles.card}>
        <div className={`${styles.imageWrapper} overlay-anim`}>
          <img src={imageSrc} alt={service.subtitle} />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>
              <i className={service.iconClass} />
            </span>
          </div>

          <h5 className={styles.kicker}>{service.title}</h5>

          <h3 className={styles.title}>
            <Link href={detailsHref}>{service.subtitle}</Link>
          </h3>

          <p className={styles.text}>{service.description}</p>

          <div className={styles.linkWrapper}>
            <Link href={detailsHref} className={styles.link}>
              Les mer
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
