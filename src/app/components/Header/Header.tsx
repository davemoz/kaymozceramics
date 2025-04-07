import classnames from "classnames";
import Link from "next/link";

import Nav from "../Nav/Nav";
import KMCLogo from "./kmc_logo.svg";

import styles from "./Header.module.scss";

export default function Header({ isHomepage }: { isHomepage: boolean }) {
  return (
    <header className={styles.header}>
      <Link href="/">
        <KMCLogo
          className={classnames(styles.logo, {
            [styles["white"]]: isHomepage,
            [styles["black"]]: !isHomepage,
          })}
        />
      </Link>
      <Nav isHomepage={isHomepage} />
    </header>
  );
}
