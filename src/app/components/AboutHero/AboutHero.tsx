import Link from "next/link";

import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Link href="/about">
          <button>Learn more about Kay</button>
        </Link>
      </div>
    </section>
  );
}
