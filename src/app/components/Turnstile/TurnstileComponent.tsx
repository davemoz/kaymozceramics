import Turnstile from "react-turnstile";

export default function TurnstileComponent({
  onVerify,
  onError,
  onExpire,
  onTimeout,
}) {
  return (
    <Turnstile
      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
      onVerify={onVerify}
      onError={onError}
      onExpire={onExpire}
      onTimeout={onTimeout}
      fixedSize={true}
      theme="light"
    />
  );
}
