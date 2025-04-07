import classnames from "classnames";
import Link from "next/link";

import styles from "./Nav.module.scss";

export default function Nav({ isHomepage }: { isHomepage: boolean }) {
  return (
    <nav className={styles.nav}>
      <Link
        href="about"
        className={classnames(styles.link, {
          [styles["home"]]: isHomepage,
        })}
        data-nav-link
      >
        About
      </Link>
      <Link
        href="shop"
        className={classnames(styles.link, {
          [styles["home"]]: isHomepage,
        })}
        data-nav-link
      >
        Shop
      </Link>
      <Link
        href="contact"
        className={classnames(styles.link, {
          [styles["home"]]: isHomepage,
        })}
        data-nav-link
      >
        Contact
      </Link>
    </nav>
  );
}
