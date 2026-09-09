type SocialName = "instagram" | "x" | "facebook" | "youtube";

const labels: Record<SocialName, string> = {
  instagram: "Instagram",
  x: "X",
  facebook: "Facebook",
  youtube: "YouTube",
};

function SocialIcon({ name }: { name: SocialName }) {
  if (name === "instagram") {
    return (
      <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="17" rx="5" width="17" x="3.5" y="3.5" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="17.7" cy="6.4" fill="currentColor" r="0.8" stroke="none" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.7 21v-8h2.8l.4-3.1h-3.2V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.5V13h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2c-.5 1.1-.5 3.8-.5 3.8s0 2.7.5 3.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.1.5-3.8.5-3.8s0-2.7-.5-3.8Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="m10 15.2 5-3.2-5-3.2v6.4Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="m5 4 14 16M19 4 5 20" />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const networks: SocialName[] = ["instagram", "x", "facebook", "youtube"];

  return (
    <div className={`social-links ${className}`} aria-label="Redes sociales">
      {networks.map((network) => (
        <span
          aria-label={`${labels[network]} de ExpoJuy, enlace oficial a confirmar`}
          className="social-link pending"
          key={network}
          role="img"
          title={`${labels[network]} · enlace oficial a confirmar`}
        >
          <SocialIcon name={network} />
        </span>
      ))}
    </div>
  );
}
