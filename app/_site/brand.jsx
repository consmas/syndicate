const C = {
  navy: "#0B1C2E",
  blue: "#0077C8",
};

function LogoIcon({ size = 36, light = false }) {
  const navy = light ? "#FFFFFF" : C.navy;
  const blue = C.blue;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="28" width="7" height="14" rx="1" fill={navy} opacity="0.7" />
      <rect x="15" y="20" width="7" height="22" rx="1" fill={navy} opacity="0.85" />
      <rect x="24" y="12" width="7" height="30" rx="1" fill={navy} />
      <path d="M28 10L36 4L38 12L28 10Z" fill={blue} />
      <path d="M26 14L36 5" stroke={blue} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function LogoFull({ light = false, compact = false }) {
  const textColor = light ? "#FFFFFF" : C.navy;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: compact ? 8 : 10, cursor: "pointer" }}>
      <LogoIcon size={compact ? 30 : 36} light={light} />
      <div>
        <div
          style={{
            fontFamily: "'DM Sans', -apple-system, sans-serif",
            fontSize: compact ? 15 : 17,
            fontWeight: 700,
            color: textColor,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          Syndicate
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', -apple-system, sans-serif",
            fontSize: compact ? 8 : 9.5,
            fontWeight: 500,
            color: C.blue,
            letterSpacing: 1.8,
            textTransform: "uppercase",
            marginTop: 1,
          }}
        >
          Investment Advisory
        </div>
      </div>
    </div>
  );
}

