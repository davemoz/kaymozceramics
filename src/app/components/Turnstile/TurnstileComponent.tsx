import { Turnstile } from "next-turnstile";

export default function TurnstileComponent({ onVerify, onError, onExpire }) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
      onVerify={onVerify}
      onError={onError}
      onExpire={onExpire}
      refreshExpired="auto"
      sandbox={process.env.NODE_ENV === "development"}
      theme="light"
    />
  );
}
