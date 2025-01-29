import { useState } from "react";

const KMC_LIST_ID = "1edfa092fc";

export default function useSubscribeEmail() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | {}>();

  const doFetch = async (payload) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://us20.api.mailchimp.com/3.0/lists/${KMC_LIST_ID}/members`,
        {
          method: "POST",
          body: JSON.stringify({
            email_address: payload.email,
            status: "pending",
            email_type: "html",
            tags: payload.tags.split(","),
          }),
          headers: {
            Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(response));
      if (response.ok) {
        setResponse(response);
      }
    } catch (error) {
      setResponse(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  return { doFetch, isLoading, response };
}
