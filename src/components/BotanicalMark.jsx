export default function BotanicalMark({ className = "" }) {
  return (
    <svg
      className={`botanical-mark ${className}`}
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 18H46"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M74 18H110"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M60 6C56 10 54 14 54 18C54 22 56 26 60 30C64 26 66 22 66 18C66 14 64 10 60 6Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M60 10C58.5 13 57.8 15.5 57.8 18C57.8 20.5 58.5 23 60 26"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}
