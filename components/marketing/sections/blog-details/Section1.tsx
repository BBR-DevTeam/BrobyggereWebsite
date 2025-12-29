"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import blogData from "../../../../utils/marketing/blog.json";
import styles from "../../../../styles/marketing/blog-details/blogDetail.module.css";

interface Section1Props {
  blogId: number;
}

export default function Section1({ blogId }: Section1Props) {
  const [isOpen, setIsOpen] = useState(false);

  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="service-details-all sp">
        <div className="container">
          <p>Blogginnlegg ble ikke funnet.</p>
        </div>
      </div>
    );
  }

  const heroImageSrc = blog.img.startsWith("/") ? blog.img : `/${blog.img}`;

  // default Norwegian footer text (translation of the original English)
  const defaultFooterText =
    "Bloggen vår er ditt sted for oppdatert innsikt, beste praksis og faglige råd innen bemanning – fra å forbedre rekrutteringsprosessene til å navigere endringer i arbeidslivslovgivningen og utvikle karrieren din.";

  const footerText = (blog as any).footerText || defaultFooterText;
  const content = (blog as any).content as string[] | undefined;

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="Y8XpQpW5OVY"
        onClose={() => setIsOpen(false)}
      />

      <div className="service-details-all sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="blog-details-all">
                <article>
                  <div className="blog-details-box">
                    <div className={styles.heroImageWrapper}>
                      <img
                        src={heroImageSrc}
                        alt={blog.title}
                        className={styles.heroImage}
                      />
                    </div>
                    <ul className="users">
                      <li>
                        <img
                          className="author"
                          src="/assets/img/blog/blog-details-othor.png"
                          alt={blog.author}
                        />
                        <Link href="#">{blog.author}</Link>
                      </li>
                      <li>
                        <img
                          src="/assets/img/icons/blog-details-icon1.png"
                          alt=""
                        />
                        <Link href="#">{blog.date}</Link>
                      </li>
                      <li>
                        <img
                          src="/assets/img/icons/blog-details-icon2.png"
                          alt=""
                        />
                        <Link href="#">{blog.category}</Link>
                      </li>
                    </ul>
                    <div className="space10" />
                    <div className="heading1">
                      <h2>{blog.title}</h2>
                      <div className="space16" />

                      {content && content.length > 0 ? (
                        content.map((paragraph, index) => (
                          <div key={index}>
                            <p>{paragraph}</p>
                            {/* space between paragraphs, except after last */}
                            {index < content.length - 1 && (
                              <div className="space16" />
                            )}
                          </div>
                        ))
                      ) : (
                        <>
                          {/* fallback if no content is defined yet */}
                          <p>
                            Her kommer brødteksten for blogginnlegget. Legg inn
                            en eller flere paragrafer i content-feltet i
                            blog.json.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </article>

                <div className="space10" />
                <div className="blog-details-border" />
                <div className="space20" />

                {/* Footer text box */}
                <div className="after-box-details">
                  <div className="heading1">
                    <p>{footerText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====SERVICE DETAILS END=======*/}
    </>
  );
}
