"use client";

import { subscribe } from "@/app/email";
import * as Form from "@radix-ui/react-form";

import styles from "./EmailSignup.module.scss";
import { useState } from "react";

type ListT = {
  id: string;
  name: string;
};

export default function EmailSignup() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Subscribe to receive the latest KMC news!
      </h3>
      <Form.Root action={subscribe}>
        <Form.Field name="email">
          <Form.Control asChild>
            <input
              className={styles.input}
              placeholder="Your Email Address"
              type="email"
              required
            />
          </Form.Control>
          <Form.Message match="valueMissing">
            An email address is required to signup.
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid email address.
          </Form.Message>
        </Form.Field>
        <input type="hidden" name="tags" value={["website", "homepage"]} />
        <Form.Submit asChild>
          <button className={styles.submit}>Sign me up!</button>
        </Form.Submit>
      </Form.Root>
    </section>
  );
}
