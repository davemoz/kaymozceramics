"use client";

import styles from "./EmailSignup.module.scss";
import { ChangeEvent, useRef, useState } from "react";
import useSubscribeEmail from "@/utils/useSubscribeEmail";

export default function EmailSignup() {
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { doFetch, isLoading, response } = useSubscribeEmail();

  const handleSubmit = async (event) => {
    if (email === "") {
      setMessage("An email address is required to signup.");
      return;
    }
    if (emailRef.current) {
      if (emailRef.current.validity.typeMismatch) {
        emailRef.current.setCustomValidity(
          "Please provide a valid email address."
        );
        setMessage("Please provide a valid email address.");
      } else {
        emailRef.current.setCustomValidity("");
      }
    }
    if (formRef.current) {
      const data = Object.fromEntries(new FormData(event.target));
      doFetch({
        email: data.email,
        tags: data.tags,
      });
      if (response) {
        console.log(response);
        setMessage("Thanks for signing up! We'll be in touch.");
      } else {
        console.log(response?.body.detail);
        setMessage(response?.body.detail);
      }
    }
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Subscribe to receive the latest KMC news!
      </h3>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          className={styles.input}
          name="email"
          placeholder="Your Email Address"
          type="email"
          value={email}
          onChange={(e: ChangeEvent) => setEmail(e.currentTarget.value)}
          ref={emailRef}
          required
        />
        <input type="hidden" name="tags" value={["website", "homepage"]} />
        {message && <p className={styles.message}>{message}</p>}
        <button className={styles.submit} type="submit">
          Sign me up!
        </button>
      </form>
    </section>
  );
}
