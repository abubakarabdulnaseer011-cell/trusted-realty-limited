import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trusted Realty Limited";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top right, rgba(216,184,122,0.24), transparent 25%), linear-gradient(135deg, #11100f 0%, #1d1813 48%, #0f0d0b 100%)",
          color: "#f7f2eb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#d8b87a",
            fontSize: 26,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "72px",
              width: "72px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "2px solid rgba(216,184,122,0.7)",
            }}
          >
            TR
          </div>
          Trusted Realty Limited
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 600 }}>
            Property confidence, shaped for Nigeria&apos;s most important cities.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.5, color: "#d8cec0" }}>
            Premium homes, transparent transactions, and measured real estate advisory across Lagos, Abuja, Port Harcourt, Enugu, and Kano State.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
