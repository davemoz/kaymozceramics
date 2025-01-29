import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>Copyright © 2025 Kay Moz Ceramics</li>
        <li className={styles.item}>
          Site by <Link href="https://davemoz.dev"> davemoz.dev</Link>
        </li>
      </ul>
    </footer>
  );
}
