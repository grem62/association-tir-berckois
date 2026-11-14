export function TargetMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle
        cx="40"
        cy="40"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle
        cx="40"
        cy="40"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle
        cx="40"
        cy="40"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle
        cx="40"
        cy="40"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle cx="40" cy="40" r="1.4" fill="currentColor" />
      <path
        d="M40 1.5v7.5M40 71v7.5M1.5 40h7.5M71 40h7.5"
        stroke="currentColor"
        strokeWidth="0.6"
      />
    </svg>
  );
}
