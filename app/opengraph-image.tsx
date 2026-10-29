import { ImageResponse } from "next/og";

export const alt = "Syndicate Investment Advisory: private credit, real assets and private equity across Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #242852 0%, #1E2133 60%, #1F3F78 100%)",
          color: "#FAFBFD",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 48 48">
            <rect x="6" y="28" width="7" height="14" rx="1" fill="#FFFFFF" opacity="0.7" />
            <rect x="15" y="20" width="7" height="22" rx="1" fill="#FFFFFF" opacity="0.85" />
            <rect x="24" y="12" width="7" height="30" rx="1" fill="#FFFFFF" />
            <path d="M28 10L36 4L38 12L28 10Z" fill="#2E9BFF" />
            <path d="M26 14L36 5" stroke="#2E9BFF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: 3 }}>SYNDICATE</span>
            <span style={{ fontSize: 15, letterSpacing: 4, color: "#7DB5F0" }}>INVESTMENT ADVISORY</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, lineHeight: 1.1, maxWidth: 1000 }}>
            We turn good businesses into investments that capital can back
          </div>
          <div style={{ display: "flex", marginTop: 32, width: 120, height: 4, background: "#297FD5" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 24, color: "#C6CCDA" }}>
          <span>Private Credit · Real Assets · Private Equity</span>
          <span>Accra, Ghana</span>
        </div>
      </div>
    ),
    size
  );
}
