import React from "react";
import Link from "next/link";
import styles from "../../../styles/marketing/blog/blogItem.module.css";

export interface BlogItemProps {
  id: number;
  title: string;
  img: string;
  category: string;
  author: string;
  date: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  id,
  title,
  img,
  category,
  author,
  date,
}) => {
  const detailsHref = `/blog-details/${id}`;
  const imageSrc = img.startsWith("/") ? img : `/${img}`;

  return (
    <div className={`col-lg-4 col-md-6 d-flex ${styles.col}`}>
      <div className={`blog2-box ${styles.card}`}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={title} />
        </div>

        <div className={`heading5 ${styles.contentWrapper}`}>
          {/* TOP AREA */}
          <div className={styles.topArea}>
            <div className="tags">
              <Link href="#">
                <img src="/assets/img/icons/date2.png" alt="" /> {date}
              </Link>
              <Link href="#">
                <img src="/assets/img/icons/user2.png" alt="" /> {author}
              </Link>
            </div>

            {/* Fixed-height title block keeps category aligned */}
            <h4 className={styles.title}>
              <Link href={detailsHref}>{title}</Link>
            </h4>

            <p className={styles.categoryText}>Kategori: {category}</p>
          </div>

          {/* BOTTOM AREA */}
          <Link href={detailsHref} className={`learn ${styles.learn}`}>
            Les mer
            <span>
              <i className="fa-solid fa-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
