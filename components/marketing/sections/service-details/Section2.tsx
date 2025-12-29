// components/marketing/sections/service-details/Section2.tsx
import Link from "next/link";
import { services } from "@/utils/marketing/service";

interface Section2Props {
  currentSlug: string;
}

export default function Section2({ currentSlug }: Section2Props) {
  // All services except the one we're currently viewing
  const otherServices = services
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3);

  return (
    <>
      {/*=====SERVICE AREA START=======*/}
      <div className="service1 service-page-service pb120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading1">
                <h2>Se flere tjenester</h2>
              </div>
            </div>
          </div>
          <div className="space30" />
          <div className="row">
            {otherServices.map((service, index) => {
              const imageSrc = service.image.startsWith("/")
                ? service.image
                : `/${service.image}`;

              // 👇 middle card (index === 1) gets "active" like in the template
              const boxClassName =
                index === 1 ? "service1-box active" : "service1-box";

              return (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className={boxClassName}>
                    <div className="image overlay-anim">
                      <img src={imageSrc} alt={service.subtitle} />
                    </div>
                    <div className="hover-area">
                      <div className="icon">
                        {/* FontAwesome icon from data file */}
                        <i className={service.iconClass} />
                      </div>
                      <div className="space16" />
                      <div className="heading1-w">
                        <h4>
                          <Link href={`/service-details/${service.slug}`}>
                            {service.subtitle}
                          </Link>
                        </h4>
                        <div className="space16" />
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*=====SERVICE AREA END=======*/}
    </>
  );
}
