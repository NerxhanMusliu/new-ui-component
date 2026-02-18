"use client";

import { useState, type ReactNode } from "react";

type Style = "hubsync" | "lyra";

const lyraOverrides: Record<string, string> = {
  "--radius": "0rem",
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.145 0 0)",
  "--primary": "oklch(0.205 0 0)",
  "--primary-foreground": "oklch(0.985 0 0)",
  "--secondary": "oklch(0.97 0 0)",
  "--secondary-foreground": "oklch(0.205 0 0)",
  "--muted": "oklch(0.97 0 0)",
  "--muted-foreground": "oklch(0.556 0 0)",
  "--accent": "oklch(0.97 0 0)",
  "--accent-foreground": "oklch(0.205 0 0)",
  "--destructive": "oklch(0.577 0.245 27.325)",
  "--border": "oklch(0.922 0 0)",
  "--input": "oklch(0.922 0 0)",
  "--ring": "oklch(0.708 0 0)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.145 0 0)",
  "--popover": "oklch(1 0 0)",
  "--popover-foreground": "oklch(0.145 0 0)",
  "fontFamily": "var(--font-jetbrains), monospace",
};

export function StyleToggleProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<Style>("hubsync");

  const isLyra = style === "lyra";

  return (
    <>
      {/* Title bar */}
      <div className="flex items-center justify-between border-b px-8 py-6">
        <div>
          <h1 className="text-2xl font-bold">Component Library</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            HubSync design system components styled with the brand theme.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStyle("hubsync")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              !isLyra
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            HubSync
          </button>
          <button
            onClick={() => setStyle("lyra")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isLyra
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            Lyra
          </button>
        </div>
      </div>

      {/* Content wrapper with optional Lyra overrides */}
      <div style={isLyra ? lyraOverrides : undefined}>{children}</div>
    </>
  );
}
