// components/marketing/layout/SectionHeader.tsx
import Link from "next/link";
import styles from "@/styles/marketing/layout/sectionHeader.module.css";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  subtitle,
  breadcrumb,
  align = "center",
}: SectionHeaderProps) {
  const textAlignClass = align === "left" ? "text-start" : "text-center";
  const colClass = align === "left" ? "col-lg-8" : "col-lg-10 m-auto";

  return (
    <>
      <div className={`common-hero`}>
        <div className="container">
          <div className="row">
            <div className={colClass}>
              <div
                className={`main-heading ${textAlignClass} ${styles.header}`}
              >
                {breadcrumb && breadcrumb.length > 0 && (
                  <nav className={styles.breadcrumb}>
                    {breadcrumb.map((item, index) => {
                      const isLast = index === breadcrumb.length - 1;
                      return (
                        <span key={index} className={styles.crumbItem}>
                          {item.href && !isLast ? (
                            <Link href={item.href}>{item.label}</Link>
                          ) : (
                            <span className={styles.crumbCurrent}>
                              {item.label}
                            </span>
                          )}
                          {!isLast && <span className={styles.sep}>/</span>}
                        </span>
                      );
                    })}
                  </nav>
                )}

                {/* Main title */}
                <h1 className={styles.title}>{title}</h1>

                {/* Subtitle */}
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
