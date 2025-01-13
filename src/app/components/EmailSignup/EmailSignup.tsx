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
  const [lists, setLists] = useState([]);
  const handleClick = async () => {
    if (window !== null) {
      const endpoint = new URL("api", window.location.href);
      const response = await fetch(endpoint, {
        method: "GET",
      });
      if (response.ok) {
        const res: any = response.json();
        setLists(res.lists);
      }
    }
  };
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Subscribe to receive the latest KMC news!
      </h3>
      <button onClick={handleClick}>Get lists</button>
      {lists && (
        <ul>
          {lists.map((list: ListT) => (
            <li>
              {list.name}: {list.id}
            </li>
          ))}
        </ul>
      )}
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
        <Form.Submit asChild>
          <button className={styles.submit}>Sign me up!</button>
        </Form.Submit>
      </Form.Root>
    </section>
  );
}
