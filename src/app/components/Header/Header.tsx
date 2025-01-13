import Nav from "../Nav/Nav";
import KMCLogo from "./kmc_logo.svg";

import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <KMCLogo className={styles.logo} />
      </Link>
      <Nav />
    </header>
  );
}
