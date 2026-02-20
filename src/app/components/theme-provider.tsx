"use client";

import { type ReactNode } from "react";
import { ThemeProvider, useTheme } from "@/components/theme-context";
import { Button } from "@/components/ui/button";

function StyleToggleHeader() {
  const { theme, setTheme } = useTheme();
  const isEdge = theme === "edge";

  return (
    <div className="flex items-center justify-between border-b px-8 py-6">
      <div>
        <h1 className="text-2xl font-bold">Component Library</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Design system components styled with the brand theme.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant={!isEdge ? "default" : "secondary"}
          size="sm"
          onClick={() => setTheme("soft")}
        >
          Soft
        </Button>
        <Button
          variant={isEdge ? "default" : "secondary"}
          size="sm"
          onClick={() => setTheme("edge")}
        >
          Edge
        </Button>
      </div>
    </div>
  );
}

export function StyleToggleProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <StyleToggleHeader />
      {children}
    </ThemeProvider>
  );
}
