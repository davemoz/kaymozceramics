import Link from "next/link";

import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="about" className={styles.link} data-nav-link>
        About
      </Link>
      <Link href="shop" className={styles.link} data-nav-link>
        Shop
      </Link>
      <Link href="contact" className={styles.link} data-nav-link>
        Contact
      </Link>
    </nav>
  );
}
