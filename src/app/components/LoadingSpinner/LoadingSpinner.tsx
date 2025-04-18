import styles from "./LoadingSpinner.module.scss";

export default function LoadingSpinner() {
  return (
    <svg
      className={styles.spinner}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <radialGradient
        id="a12"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor="currentColor"></stop>
        <stop offset=".3" stopColor="currentColor" stopOpacity=".9"></stop>
        <stop offset=".6" stopColor="currentColor" stopOpacity=".6"></stop>
        <stop offset=".8" stopColor="currentColor" stopOpacity=".3"></stop>
        <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
      </radialGradient>
      <circle
        fill="none"
        stroke="url(#a12)"
        cx="100"
        cy="100"
        r="70"
        style={{
          transformOrigin: "center",
          strokeWidth: "15",
          strokeLinecap: "round",
          strokeDasharray: "200 1000",
          strokeDashoffset: "0",
        }}
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="0.6"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        fill="none"
        opacity=".2"
        stroke="currentColor"
        cx="100"
        cy="100"
        r="70"
        style={{
          transformOrigin: "center",
          strokeWidth: "15",
          strokeLinecap: "round",
        }}
      ></circle>
    </svg>
  );
}
