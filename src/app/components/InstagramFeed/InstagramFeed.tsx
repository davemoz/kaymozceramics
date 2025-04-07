import Link from "next/link";
import styles from "./InstagramFeed.module.scss";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
}

export default async function InstagramFeed() {
  async function getInstagramPosts() {
    try {
      // Replace with your Instagram access token and user ID
      const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      const userId = process.env.INSTAGRAM_USER_ID;

      if (!accessToken || !userId) {
        throw new Error("Instagram credentials not configured");
      }

      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_url,permalink,thumbnail_url&access_token=${accessToken}&limit=8`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
      }

      const data = await response.json();
      return data.data;
    } catch (err) {
      console.error("Error fetching Instagram posts:", err);
      return [];
    }
  }

  const posts = await getInstagramPosts();

  if (posts.length === 0) {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>@kaymoz_ceramics</h2>
        <p>Unable to load Instagram feed at this time.</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <Link
        href="https://www.instagram.com/kaymoz_ceramics"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.title}>@kaymoz_ceramics</h2>
      </Link>
      <div className={styles.grid}>
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <img
              src={post.thumbnail_url || post.media_url}
              alt="Instagram post"
              className={styles.image}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
