"use client";

import { useTheme } from "./theme-context";
import { Button } from "@/components/ui/button";

const themes = ["soft", "edge", "core", "flux"] as const;

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      {themes.map((t) => (
        <Button
          key={t}
          variant="ghost"
          size="xs"
          onClick={() => setTheme(t)}
          className={
            theme === t
              ? "bg-white/20 text-white hover:bg-white/20 hover:text-white"
              : "text-white/50 hover:bg-transparent hover:text-white/80"
          }
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </Button>
      ))}
    </div>
  );
}
