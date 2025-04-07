import ContactForm from "../../components/ContactForm/ContactForm";

import styles from "./contact.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        Have a question or want to get in touch? Fill out the form below and
        we'll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
