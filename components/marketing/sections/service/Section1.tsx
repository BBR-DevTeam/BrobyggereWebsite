// components/marketing/sections/service/Section1.tsx
import { services } from "../../../../utils/marketing/service";
import ServiceCard from "@/components/marketing/elements/ServiceCard";
import styles from "../../../../styles/marketing/service/section1.module.css";

export default function Section1() {
  return (
    <>
      {/*===== SERVICE OVERVIEW AREA START =======*/}
      <section className={`${styles.section} service-overview `}>
        <div className="container">
          {/* Grid of services */}
          <div className="row g-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/*===== SERVICE OVERVIEW AREA END =======*/}
    </>
  );
}
