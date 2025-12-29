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
  const imageSrc = img.startsWith("/") ? img : `/${img}`; // ✅ fixes relative path issue

  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog2-box">
        {/* Controlled image size */}
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={title} />
        </div>

        {/* Content */}
        <div className={`heading5 ${styles.contentWrapper}`}>
          <div className="tags">
            <Link href="#">
              <img src="/assets/img/icons/date2.png" alt="" /> {date}
            </Link>
            <Link href="#">
              <img src="/assets/img/icons/user2.png" alt="" /> {author}
            </Link>
          </div>

          <h4>
            <Link href={detailsHref}>{title}</Link>
          </h4>

          <div className="space16" />
          <p>Kategori: {category}</p>
          <div className="space16" />

          <Link href={detailsHref} className="learn">
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
