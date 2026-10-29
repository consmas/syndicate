import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B1C2E" }}>
        <svg width="120" height="120" viewBox="0 0 48 48">
          <rect x="6" y="28" width="7" height="14" rx="1" fill="#FFFFFF" opacity="0.7" />
          <rect x="15" y="20" width="7" height="22" rx="1" fill="#FFFFFF" opacity="0.85" />
          <rect x="24" y="12" width="7" height="30" rx="1" fill="#FFFFFF" />
          <path d="M28 10L36 4L38 12L28 10Z" fill="#2E9BFF" />
          <path d="M26 14L36 5" stroke="#2E9BFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  );
}
