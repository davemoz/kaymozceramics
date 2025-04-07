import AboutHero from "../components/AboutHero/AboutHero";
import EmailSignup from "../components/EmailSignup/EmailSignup";
import Header from "../components/Header/Header";
import HopeHero from "../components/HopeHero/HopeHero";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

import styles from "../homepage.module.scss";

export default function Homepage() {
  return (
    <>
      <section className={styles.hero}>
        <video
          autoPlay={true}
          className={styles.video}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
          loop={true}
          muted={true}
          playsInline={true}
          poster="/media/video-poster-05.jpg"
        >
          <source src="/media/KMC-homepage-vid-05.webm" type="video/webm" />
          <source src="/media/KMC-homepage-vid-05.ogg" type="video/ogg" />
          <source src="/media/KMC-homepage-vid-05.mp4" type="video/mp4" />
          <p>Your browser doesn't support HTML video.</p>
        </video>
      </section>
      <EmailSignup />
      <HopeHero />
      <AboutHero />
      <InstagramFeed />
    </>
  );
}
