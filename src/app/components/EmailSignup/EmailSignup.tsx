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

  const handleClick = async () => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
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
