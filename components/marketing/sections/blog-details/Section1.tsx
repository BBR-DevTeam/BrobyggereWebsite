"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import blogData from "../../../../utils/marketing/blog.json";
import styles from "@/styles/marketing/blog-details/blogDetail.module.css";

interface Section1Props {
  blogId: number;
}

type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

type Blog = {
  id: number;
  title: string;
  img: string;
  category: string;
  author: string;
  date: string;
  footerText?: string;
  content?: string[] | ContentBlock[];
};

function normalizeContent(
  content: Blog["content"],
): ContentBlock[] | undefined {
  if (!content) return undefined;

  // Old format: string[]
  if (Array.isArray(content) && typeof content[0] === "string") {
    return (content as string[]).map((text) => ({ type: "p", text }));
  }

  // New format: ContentBlock[]
  return content as ContentBlock[];
}

export default function Section1({ blogId }: Section1Props) {
  const [isOpen, setIsOpen] = useState(false);

  const blog = (blogData as Blog[]).find((b) => b.id === blogId);

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

  const defaultFooterText =
    "Bloggen vår er ditt sted for oppdatert innsikt, beste praksis og faglige råd innen bemanning – fra å forbedre rekrutteringsprosessene til å navigere endringer i arbeidslivslovgivningen og utvikle karrieren din.";

  const footerText = blog.footerText || defaultFooterText;

  const blocks = normalizeContent(blog.content);

  return (
    <>
      <div className="service-details-all spabout">
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
                      {/* Main title stays as-is */}
                      <h2>{blog.title}</h2>

                      <div className="space16" />

                      {blocks && blocks.length > 0 ? (
                        <div className={styles.richContent}>
                          {blocks.map((block, index) => {
                            if (!block.text?.trim()) return null;

                            switch (block.type) {
                              case "h2":
                                return (
                                  <h3 key={index} className={styles.blockH2}>
                                    {block.text}
                                  </h3>
                                );

                              case "h3":
                                return (
                                  <h4 key={index} className={styles.blockH3}>
                                    {block.text}
                                  </h4>
                                );

                              case "p":
                              default:
                                return (
                                  <p key={index} className={styles.blockP}>
                                    {block.text}
                                  </p>
                                );
                            }
                          })}
                        </div>
                      ) : (
                        <p>
                          Her kommer brødteksten for blogginnlegget. Legg inn en
                          eller flere paragrafer i content-feltet i blog.json.
                        </p>
                      )}
                    </div>
                  </div>
                </article>

                <div className="space10" />
                <div className="blog-details-border" />
                <div className="space20" />

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
