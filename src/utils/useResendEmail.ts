import { useState } from "react";

export default function useResendEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  const createContact = async (payload): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/email/signup", {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
        }),
      });
      const jsonRes = await response.json();
      console.log(JSON.stringify(jsonRes));
      if (jsonRes.error) {
        console.error(`There was an error: ${jsonRes.error}`);
        setResponseMessage(`There was an error: ${jsonRes.error}`);
      } else if (jsonRes.data) {
        setResponseMessage("Success! Thanks for signing up!");
      }
    } catch (error) {
      setResponseMessage(`There was an error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { createContact, isLoading, responseMessage };
}
