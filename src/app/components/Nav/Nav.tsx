import Link from "next/link";

import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="about" className={styles.link}>
        About
      </Link>
      <Link href="shop" className={styles.link}>
        Shop
      </Link>
      <Link href="contact" className={styles.link}>
        Contact
      </Link>
    </nav>
  );
}
