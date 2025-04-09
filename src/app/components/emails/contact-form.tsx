import { Head, Html, Body } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const ContactFormSubmissionEmail: React.FC<
  Readonly<EmailTemplateProps>
> = ({ fullName, email, message }) => {
  return (
    <Html>
      <Head />
      <Body>
        <h2>You've received a new message from the website contact form:</h2>
        <p>
          <strong>Name:</strong> {fullName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </Body>
    </Html>
  );
};
