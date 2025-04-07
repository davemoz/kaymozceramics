import EmailSignup from "../../components/EmailSignup/EmailSignup";
import styles from "./shop.module.scss";

export default function ShopPage() {
  return (
    <section className={styles.section}>
      <h1>A new shop is coming soon!</h1>
      <h2>Currently working on new pieces.</h2>
      <p>
        If you would like to be notified when new items are available, please
        sign up for our email list below.
      </p>
      <EmailSignup />
    </section>
  );
}
