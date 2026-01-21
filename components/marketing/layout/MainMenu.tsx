import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/marketing/header/mainMenu.module.css";
import { NAV_ITEMS } from "@/utils/marketing/navItems";

export default function MainMenu() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <ul className={styles.menu}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href} className={styles.menuItem}>
          <Link
            href={item.href}
            className={`${styles.link} ${
              isActive(item.href) ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
