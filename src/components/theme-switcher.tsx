"use client";

import { useTheme } from "./theme-context";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isEdge = theme === "edge";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="xs"
        onClick={() => setTheme("soft")}
        className={
          !isEdge
            ? "bg-white/20 text-white hover:bg-white/20 hover:text-white"
            : "text-white/50 hover:bg-transparent hover:text-white/80"
        }
      >
        Soft
      </Button>
      <Button
        variant="ghost"
        size="xs"
        onClick={() => setTheme("edge")}
        className={
          isEdge
            ? "bg-white/20 text-white hover:bg-white/20 hover:text-white"
            : "text-white/50 hover:bg-transparent hover:text-white/80"
        }
      >
        Edge
      </Button>
    </div>
  );
}
