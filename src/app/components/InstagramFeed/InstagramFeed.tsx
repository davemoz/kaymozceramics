import Link from "next/link";
import styles from "./InstagramFeed.module.scss";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
}

export default async function InstagramFeed() {
  return (
    <section className={styles.container}>
      <Link
        href="https://www.instagram.com/kaymoz_ceramics"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.link}>
          <h2 className={styles.title}>@kaymoz_ceramics</h2>
          <p className={styles.subtitle}>on Instagram</p>
        </button>
      </Link>
    </section>
  );
}
