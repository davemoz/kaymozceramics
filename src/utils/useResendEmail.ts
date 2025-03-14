import { useState } from "react";
import { Resend } from "resend";

const GENERAL_AUDIENCE_ID = "37f5708f-0596-4315-87b0-69d716bfebb3";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default function useResendEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>();

  const createContact = async (payload) => {
    setIsLoading(true);
    try {
      const response = await resend.contacts.create({
        email: payload.email,
        // firstName: "Steve",
        // lastName: "Wozniak",
        unsubscribed: false,
        audienceId: GENERAL_AUDIENCE_ID,
      });
      console.log(JSON.stringify(response));
      if (response.error) {
        console.error(`There was an error: ${response.error}`);
        setResponse(`There was an error: ${response.error}`);
      } else if (response.data) {
        setResponse("Success! Thanks for signing up!");
      }
    } catch (error) {
      setResponse(`There was an error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { createContact, isLoading, response };
}
