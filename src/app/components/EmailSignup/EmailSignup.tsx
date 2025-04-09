"use client";

import styles from "./EmailSignup.module.scss";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useResendEmail from "@/utils/useResendEmail";

export default function EmailSignup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { createContact, isLoading, responseMessage } = useResendEmail();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);

    if (message) {
      setMessage("");
    }
  };

  const validateEmail = (email: string) => {
    const errors: Record<string, string> = {};

    if (!email.trim()) {
      errors.email = "Email is required";
      setMessage("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
      setMessage("Please enter a valid email address");
    }

    return Object.keys(errors).length === 0;
  };

  const handleClick = async () => {
    if (!validateEmail(email)) {
      return;
    }

    await createContact({
      email,
      // tags: data.tags,
    });
  };

  useEffect(() => {
    if (responseMessage) {
      setMessage(responseMessage);
    }
  }, [responseMessage]);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Subscribe to receive the latest KMC news!
      </h3>
      <div className={styles.form}>
        <input
          className={styles.input}
          name="email"
          placeholder="Your Email Address"
          type="email"
          value={email}
          onChange={handleChange}
          ref={emailRef}
          required
        />
        <input type="hidden" name="tags" value={["website", "homepage"]} />
        <button className={styles.button} onClick={handleClick}>
          {isLoading ? <LoadingSpinner /> : "Sign me up!"}
        </button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </section>
  );
}
