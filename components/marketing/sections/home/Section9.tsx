import Link from "next/link";
import styles from "@/styles/marketing/home/section9.module.css";

type BlogCardProps = {
  href: string;
  imageSrc: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
};

function BlogCard({
  href,
  imageSrc,
  date,
  author,
  title,
  excerpt,
}: BlogCardProps) {
  return (
    <article
      className={styles.card}
      data-aos="zoom-in-up"
      data-aos-duration={850}
    >
      <Link href={href} className={styles.imageLink} aria-label={title}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={imageSrc} alt={title} />
          <div className={styles.imageOverlay} />
        </div>
      </Link>

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <img src="/assets/img/icons/date.png" alt="" />
            {date}
          </span>
          <span className={styles.metaItem}>
            <img src="/assets/img/icons/user.png" alt="" />
            {author}
          </span>
        </div>

        <h3 className={styles.cardTitle}>
          <Link href={href}>{title}</Link>
        </h3>

        <p className={styles.cardExcerpt}>{excerpt}</p>

        <div className={styles.cardFooter}>
          <Link href={href} className={styles.readMore}>
            Les mer
            <span>
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Section9() {
  return (
    <section className={`blog1 sp overflow-hidden ${styles.section}`} id="blog">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading1">
              <span
                className="span"
                data-aos="zoom-in-left"
                data-aos-duration={800}
              >
                Nyheter
              </span>

              <h2 className="text-anime-style-3">
                Oppdatert innsikt innen bemanning og rekruttering
              </h2>

              <div className="space16" />

              <p data-aos="fade-up" data-aos-duration={800}>
                I bloggen deler vi nyttig innhold for både arbeidsgivere og
                jobbsøkere, med artikler om bemanning i barnehage og skole,
                bransjetrender og faglige tips.
              </p>
            </div>
          </div>
        </div>

        <div className="space30" />

        {/* Cards */}
        <div className="row">
          <div className="col-lg-6">
            <BlogCard
              href="/blog-details/1"
              imageSrc="/assets/img/blog/blog2-img1.JPG"
              date="18 August 2025"
              author="Rachel Bårdsen"
              title="Brobyggere er nå sertifisert for kvalitet, trygghet og miljø"
              excerpt="En internasjonal standard som dokumenterer at vi jobber systematisk med kvalitet i alle ledd."
            />
          </div>

          <div className="col-lg-6">
            <BlogCard
              href="/blog-details/2"
              imageSrc="/assets/img/blog/blog2-img3.jpeg"
              date="13 Mai 2025"
              author="Celine April Rosnes Ramberg"
              title="Sosiale treff og teambuilding"
              excerpt="I Brobyggere er vi opptatt av at våre ansatte skal trives og oppleve motivasjon i arbeidet de utfører."
            />
          </div>
        </div>

        <div className="space40" />

        {/* CTA */}
        <div className="row justify-content-center">
          <div
            className="col-lg-4 text-center"
            data-aos="fade-up"
            data-aos-duration={1100}
          >
            <Link href="/blog" className="theme-btn1">
              Se flere nyheter
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
