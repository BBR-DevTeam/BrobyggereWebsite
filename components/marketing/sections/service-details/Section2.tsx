// components/marketing/sections/service-details/Section2.tsx
import ServiceCard from "@/components/marketing/elements/ServiceCard";
import { services } from "@/utils/marketing/service";
import styles from "@/styles/marketing/service-details/section2.module.css";

interface Section2Props {
  currentSlug: string;
}

export default function Section2({ currentSlug }: Section2Props) {
  const otherServices = services
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3);

  return (
    <>
      {/*=====SERVICE AREA START=======*/}
      <div className={`service1 service-page-service pb120 ${styles.section2}`}>
        <div className="container">
          {/* Title */}
          <div className={`row ${styles.titleRow}`}>
            <div className={`col-lg-6 ${styles.titleCol}`}>
              <div className="heading1">
                <h2>Se flere tjenester</h2>
              </div>
            </div>
          </div>

          <div className="space30" />

          {/* Cards */}
          <div className={`row ${styles.cardsRow}`}>
            {otherServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
      {/*=====SERVICE AREA END=======*/}
    </>
  );
}
