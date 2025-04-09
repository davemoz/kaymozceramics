"use client";

import { useState } from "react";
import useResendEmail from "@/utils/useResendEmail";
import styles from "./ContactForm.module.scss";
import Link from "next/link";
import TurnstileComponent from "../Turnstile/TurnstileComponent";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    newsletter: false,
    termsAccepted: false,
    turnstileToken: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");

  const { createContact, isLoading, responseMessage } = useResendEmail();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (!formData.termsAccepted) {
      errors.termsAccepted = "You must accept the terms and privacy policy";
    }

    if (turnstileStatus !== "success") {
      errors.turnstileToken = "Please verify that you are human";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/email/send", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // If user opted in for newsletter, add them using the createContact function
      if (formData.newsletter) {
        await createContact({ email: formData.email });
      }

      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        message: "",
        newsletter: false,
        termsAccepted: false,
        turnstileToken: "",
      });
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {submitSuccess ? (
        <div className={styles.successMessage}>
          <h3>Thank you for your message!</h3>
          <p>
            We've received your inquiry and will get back to you as soon as
            possible.
          </p>
          {formData.newsletter && (
            <p className={styles.newsletterMessage}>{responseMessage}</p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={formErrors.fullName ? styles.inputError : ""}
            />
            {formErrors.fullName && (
              <span className={styles.errorMessage}>{formErrors.fullName}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? styles.inputError : ""}
            />
            {formErrors.email && (
              <span className={styles.errorMessage}>{formErrors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={formErrors.message ? styles.inputError : ""}
            />
            {formErrors.message && (
              <span className={styles.errorMessage}>{formErrors.message}</span>
            )}
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter">
              Add me to the Kay Moz Ceramics newsletter
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className={formErrors.termsAccepted ? styles.inputError : ""}
            />
            <label htmlFor="termsAccepted">
              I acknowledge that I agree to the{" "}
              <Link
                href="/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </Link>{" "}
              and have read the{" "}
              <Link href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
            </label>
            {formErrors.termsAccepted && (
              <span className={styles.errorMessage}>
                {formErrors.termsAccepted}
              </span>
            )}
          </div>

          <div className={styles.turnstile}>
            <TurnstileComponent
              onError={() => {
                setTurnstileStatus("error");
              }}
              onVerify={(token) => {
                setTurnstileStatus("success");
                setFormData({
                  ...formData,
                  turnstileToken: token,
                });
              }}
              onExpire={() => {
                setTurnstileStatus("expired");
              }}
            />
          </div>

          {submitError && (
            <div className={styles.submitError}>{submitError}</div>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
