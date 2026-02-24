"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "soft" | "edge" | "core" | "flux";

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
  "--destructive-foreground": "#FFFFFF",
  "--success": "#15803D",
  "--success-foreground": "#FFFFFF",
  "--warning": "#D97706",
  "--warning-foreground": "#FFFFFF",
  "--info": "#2563EB",
  "--info-foreground": "#FFFFFF",
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

export const coreOverrides: Record<string, string> = {
  "--radius": "0.375rem",
  "--background": "#FAFAFA",
  "--foreground": "#172B4D",
  "--primary": "#0052CC",
  "--primary-foreground": "#FFFFFF",
  "--secondary": "#F0F1F4",
  "--secondary-foreground": "#172B4D",
  "--muted": "#F0F1F4",
  "--muted-foreground": "#6B778C",
  "--accent": "#E9F2FF",
  "--accent-foreground": "#0052CC",
  "--destructive": "#D14343",
  "--destructive-foreground": "#FFFFFF",
  "--success": "#1F9D63",
  "--success-foreground": "#FFFFFF",
  "--warning": "#C88100",
  "--warning-foreground": "#FFFFFF",
  "--info": "#0F7A8C",
  "--info-foreground": "#FFFFFF",
  "--border": "#C1C7D0",
  "--input": "#C1C7D0",
  "--ring": "#0052CC",
  "--card": "#FFFFFF",
  "--card-foreground": "#172B4D",
  "--popover": "#FFFFFF",
  "--popover-foreground": "#172B4D",
  "--header": "#0747A6",
  "--header-foreground": "#FFFFFF",
  "--brand": "#2684FF",
  "--chart-1": "#0052CC",
  "--chart-2": "#2684FF",
  "--chart-3": "#79B8FF",
  "--chart-4": "#0747A6",
  "--chart-5": "#4C9AFF",
  "--font-inter": "var(--font-ibm-plex), sans-serif",
};

export const fluxOverrides: Record<string, string> = {
  // Core's colors
  "--background": "#FAFAFA",
  "--foreground": "#172B4D",
  "--primary": "#0052CC",
  "--primary-foreground": "#FFFFFF",
  "--secondary": "#F0F1F4",
  "--secondary-foreground": "#172B4D",
  "--muted": "#F0F1F4",
  "--muted-foreground": "#6B778C",
  "--accent": "#E9F2FF",
  "--accent-foreground": "#0052CC",
  "--destructive": "#D14343",
  "--destructive-foreground": "#FFFFFF",
  "--success": "#1F9D63",
  "--success-foreground": "#FFFFFF",
  "--warning": "#C88100",
  "--warning-foreground": "#FFFFFF",
  "--info": "#0F7A8C",
  "--info-foreground": "#FFFFFF",
  "--border": "#C1C7D0",
  "--input": "#C1C7D0",
  "--ring": "#0052CC",
  "--card": "#FFFFFF",
  "--card-foreground": "#172B4D",
  "--popover": "#FFFFFF",
  "--popover-foreground": "#172B4D",
  "--header": "#0747A6",
  "--header-foreground": "#FFFFFF",
  "--brand": "#2684FF",
  "--chart-1": "#0052CC",
  "--chart-2": "#2684FF",
  "--chart-3": "#79B8FF",
  "--chart-4": "#0747A6",
  "--chart-5": "#4C9AFF",
  // Soft's radius (no --radius override = uses :root 0.625rem)
  "--font-inter": "var(--font-geist), sans-serif",
};

const themeOverrides: Record<Theme, Record<string, string> | undefined> = {
  soft: undefined,
  edge: edgeOverrides,
  core: coreOverrides,
  flux: fluxOverrides,
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("soft");
  const overrides = themeOverrides[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="font-sans" style={overrides}>{children}</div>
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
