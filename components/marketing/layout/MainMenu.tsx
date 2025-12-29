import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../../styles/marketing/header/mainMenu.module.css";

export default function MainMenu() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link
          href="/"
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
        >
          Hjem
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          href="/about"
          className={`${styles.link} ${
            isActive("/about") ? styles.active : ""
          }`}
        >
          Om oss
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          href="/service"
          className={`${styles.link} ${
            isActive("/service") ? styles.active : ""
          }`}
        >
          Tjenester
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          href="/order"
          className={`${styles.link} ${
            isActive("/order") ? styles.active : ""
          }`}
        >
          For kunder
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          href="/jobs"
          className={`${styles.link} ${isActive("/jobs") ? styles.active : ""}`}
        >
          Ledige stillinger
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          href="/contact"
          className={`${styles.link} ${
            isActive("/contact") ? styles.active : ""
          }`}
        >
          Kontakt
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          href="/blog"
          className={`${styles.link} ${isActive("/blog") ? styles.active : ""}`}
        >
          Nyheter
        </Link>
      </li>
    </ul>
  );
}
