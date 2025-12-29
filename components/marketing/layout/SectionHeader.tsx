// components/marketing/layout/SectionHeader.tsx
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string; // if no href → rendered as plain text (current page)
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
      {/*===== PAGE HERO / HEADER START =======*/}
      <div className="common-hero">
        <div className="container">
          <div className="row">
            <div className={colClass}>
              <div className={`main-heading ${textAlignClass}`}>
                {/* Optional breadcrumb (small & subtle) */}
                {breadcrumb && breadcrumb.length > 0 && (
                  <nav className="page-breadcrumb">
                    {breadcrumb.map((item, index) => {
                      const isLast = index === breadcrumb.length - 1;

                      return (
                        <span key={index} className="page-breadcrumb-item">
                          {item.href && !isLast ? (
                            <Link href={item.href}>{item.label}</Link>
                          ) : (
                            <span className="page-breadcrumb-current">
                              {item.label}
                            </span>
                          )}
                          {!isLast && (
                            <span className="page-breadcrumb-separator">/</span>
                          )}
                        </span>
                      );
                    })}
                  </nav>
                )}

                {/* Main title */}
                <h1>{title}</h1>

                {/* Optional subtitle / intro text */}
                {subtitle && <p className="page-subtitle">{subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== PAGE HERO / HEADER END =======*/}
    </>
  );
}
