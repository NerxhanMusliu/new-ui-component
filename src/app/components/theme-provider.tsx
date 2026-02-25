"use client";

import { type ReactNode } from "react";
import { ThemeProvider, useTheme } from "@/components/theme-context";
import { Button } from "@/components/ui/button";

const themes = ["flux", "core", "soft", "edge"] as const;

function StyleToggleHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="shrink-0 z-40 flex items-center justify-between border-b bg-background px-8 py-6">
      <div>
        <h1 className="text-2xl font-bold">Component Library</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Design system components styled with the brand theme.
        </p>
      </div>

      {/* Toggle - hidden while only Flux is active */}
      {/* <div className="flex items-center gap-2">
        {themes.map((t) => (
          <Button
            key={t}
            variant={theme === t ? "default" : "secondary"}
            size="sm"
            onClick={() => setTheme(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </Button>
        ))}
      </div> */}
    </div>
  );
}

export function StyleToggleProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex flex-1 flex-col overflow-hidden">
        <StyleToggleHeader />
        {children}
      </div>
    </ThemeProvider>
  );
}
