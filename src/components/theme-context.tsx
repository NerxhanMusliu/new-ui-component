"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "soft" | "edge";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const edgeOverrides: Record<string, string> = {
  "--radius": "0rem",
  "--background": "#FFFFFF",
  "--foreground": "#122757",
  "--primary": "#122757",
  "--primary-foreground": "#FFFFFF",
  "--secondary": "#EDF1F8",
  "--secondary-foreground": "#122757",
  "--muted": "#EDF1F8",
  "--muted-foreground": "#4A5E80",
  "--accent": "#DAE3F3",
  "--accent-foreground": "#122757",
  "--destructive": "#C9243A",
  "--border": "#C2CCE0",
  "--input": "#C2CCE0",
  "--ring": "#1D4ED8",
  "--card": "#F8FAFF",
  "--card-foreground": "#122757",
  "--popover": "#F8FAFF",
  "--popover-foreground": "#122757",
  "--header": "#122757",
  "--header-foreground": "#FFFFFF",
  "--brand": "#1D4ED8",
  "--font-inter": "var(--font-jetbrains), monospace",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("soft");
  const isEdge = theme === "edge";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="font-sans" style={isEdge ? edgeOverrides : undefined}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

export function useThemeContext(): Theme {
  const ctx = useContext(ThemeContext);
  return ctx?.theme ?? "soft";
}
