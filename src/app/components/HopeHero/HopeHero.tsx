import Link from "next/link";

import styles from "./HopeHero.module.scss";

export default function HopeHero() {
  return (
    <section className={styles.section}>
      <h3>Hope to our community</h3>
      <p>
        Kay Moz ceramics gives 15% of every sale to{" "}
        <Link href="https://www.facebook.com/BethanyHouseNY/">
          Bethany House
        </Link>
        , a local women's homeless shelter.
      </p>
      <Link href="/about#about-bethany">
        <button className={styles.button}>Learn why we give</button>
      </Link>
    </section>
  );
}
