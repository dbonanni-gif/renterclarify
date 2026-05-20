"use client";

import { RetroButton } from "./RetroButton";

export function HomeButtons() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
      <RetroButton
        variant="primary"
        onClick={() =>
          document.getElementById("analyzer-tools")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Analyze My Lease
      </RetroButton>
      <RetroButton
        variant="ghost"
        onClick={() => (window.location.href = "/states")}
      >
        Browse All 50 States
      </RetroButton>
    </div>
  );
}
