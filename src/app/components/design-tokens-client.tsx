"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-context";

/* ── helpers ── */

function resolveVar(el: HTMLElement, varName: string): string {
  const raw = getComputedStyle(el).getPropertyValue(varName).trim();
  if (!raw) return "";
  // If already hex, return directly
  if (raw.startsWith("#")) return raw.toUpperCase();
  // If oklch/rgb/hsl, resolve via a temp element
  const tmp = document.createElement("div");
  tmp.style.color = raw.startsWith("var(") ? raw : `var(${varName})`;
  // fall back: just set it directly
  tmp.style.color = raw;
  el.appendChild(tmp);
  const resolved = getComputedStyle(tmp).color;
  el.removeChild(tmp);
  // Convert rgb() → hex
  const match = resolved.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)/
  );
  if (match) {
    const hex = [match[1], match[2], match[3]]
      .map((n) => Number(n).toString(16).padStart(2, "0"))
      .join("");
    return `#${hex.toUpperCase()}`;
  }
  return raw;
}

/* ── Colors ── */

const colorTokens: { group: string; tokens: { name: string; var: string; hasFg?: boolean }[] }[] = [
  {
    group: "Brand",
    tokens: [
      { name: "Primary", var: "--primary", hasFg: true },
      { name: "Secondary", var: "--secondary", hasFg: true },
      { name: "Accent", var: "--accent", hasFg: true },
    ],
  },
  {
    group: "Semantic",
    tokens: [
      { name: "Destructive", var: "--destructive", hasFg: true },
      { name: "Success", var: "--success", hasFg: true },
      { name: "Warning", var: "--warning", hasFg: true },
      { name: "Info", var: "--info", hasFg: true },
    ],
  },
  {
    group: "Surfaces",
    tokens: [
      { name: "Background", var: "--background" },
      { name: "Foreground", var: "--foreground" },
      { name: "Card", var: "--card", hasFg: true },
      { name: "Popover", var: "--popover", hasFg: true },
      { name: "Muted", var: "--muted", hasFg: true },
    ],
  },
  {
    group: "Chrome",
    tokens: [
      { name: "Border", var: "--border" },
      { name: "Input", var: "--input" },
      { name: "Ring", var: "--ring" },
      { name: "Header", var: "--header", hasFg: true },
      { name: "Brand", var: "--brand" },
    ],
  },
  {
    group: "Charts",
    tokens: [
      { name: "Chart 1", var: "--chart-1" },
      { name: "Chart 2", var: "--chart-2" },
      { name: "Chart 3", var: "--chart-3" },
      { name: "Chart 4", var: "--chart-4" },
      { name: "Chart 5", var: "--chart-5" },
    ],
  },
];

export function ColorsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [resolved, setResolved] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const map: Record<string, string> = {};
    for (const group of colorTokens) {
      for (const t of group.tokens) {
        map[t.var] = resolveVar(el, t.var);
        if (t.hasFg) {
          map[`${t.var}-foreground`] = resolveVar(el, `${t.var}-foreground`);
        }
      }
    }
    setResolved(map);
  }, [theme]);

  return (
    <div ref={ref} className="space-y-6">
      {colorTokens.map((group) => (
        <div key={group.group}>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            {group.group}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {group.tokens.map((t) => (
              <Swatch
                key={t.var}
                name={t.name}
                varName={t.var}
                hex={resolved[t.var]}
              />
            ))}
            {group.tokens
              .filter((t) => t.hasFg)
              .map((t) => (
                <Swatch
                  key={`${t.var}-foreground`}
                  name={`${t.name} FG`}
                  varName={`${t.var}-foreground`}
                  hex={resolved[`${t.var}-foreground`]}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Swatch({
  name,
  varName,
  hex,
}: {
  name: string;
  varName: string;
  hex?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-10 w-10 shrink-0 rounded-md border"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">{name}</p>
        <p className="text-[11px] text-muted-foreground font-mono truncate">
          {hex || "…"}
        </p>
      </div>
    </div>
  );
}

/* ── Typography ── */

export function TypographySection() {
  const { theme } = useTheme();
  const fontLabel =
    theme === "edge" ? "JetBrains Mono" : theme === "core" ? "IBM Plex Sans" : "Inter";

  return (
    <div className="space-y-6">
      <div className="rounded-md bg-muted/50 px-4 py-2 text-sm">
        Active font family: <span className="font-semibold">{fontLabel}</span>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Headings
        </p>
        <div className="space-y-3">
          <div>
            <span className="text-xs text-muted-foreground">h1 — 30px / bold</span>
            <p className="text-[30px] font-bold leading-tight">Heading One</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">h2 — 24px / semibold</span>
            <p className="text-2xl font-semibold leading-tight">Heading Two</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">h3 — 20px / semibold</span>
            <p className="text-xl font-semibold leading-tight">Heading Three</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">h4 — 16px / semibold</span>
            <p className="text-base font-semibold leading-tight">Heading Four</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Body &amp; Utility
        </p>
        <div className="space-y-3">
          <div>
            <span className="text-xs text-muted-foreground">body — 14px / normal</span>
            <p className="text-sm">
              The quick brown fox jumps over the lazy dog. This is standard body text used throughout the application.
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">small — 12px / normal</span>
            <p className="text-xs">
              Smaller supporting text for captions and metadata.
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">muted — 14px / muted-foreground</span>
            <p className="text-sm text-muted-foreground">
              Muted text for secondary information and descriptions.
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">code — mono</span>
            <p className="font-mono text-sm bg-muted rounded px-2 py-1 inline-block">
              const total = balance + adjustments;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Spacing ── */

const spacingScale = [
  { label: "1", px: 4 },
  { label: "2", px: 8 },
  { label: "3", px: 12 },
  { label: "4", px: 16 },
  { label: "5", px: 20 },
  { label: "6", px: 24 },
  { label: "8", px: 32 },
  { label: "10", px: 40 },
  { label: "12", px: 48 },
  { label: "16", px: 64 },
];

export function SpacingSection() {
  return (
    <div className="space-y-2">
      {spacingScale.map((s) => (
        <div key={s.label} className="flex items-center gap-4">
          <span className="w-8 text-right text-xs font-mono text-muted-foreground">
            {s.label}
          </span>
          <div
            className="h-4 rounded-sm bg-primary"
            style={{ width: s.px }}
          />
          <span className="text-xs text-muted-foreground">{s.px}px</span>
        </div>
      ))}
    </div>
  );
}

/* ── Radius ── */

const radiusTokens = [
  { label: "sm", var: "--radius-sm" },
  { label: "md", var: "--radius-md" },
  { label: "lg", var: "--radius-lg" },
  { label: "xl", var: "--radius-xl" },
  { label: "2xl", var: "--radius-2xl" },
];

export function RadiusSection() {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      {theme !== "soft" && (
        <div className="rounded-md bg-muted/50 px-4 py-2 text-sm">
          {theme === "edge" ? (
            <>
              Edge theme sets <code className="font-mono text-xs">--radius</code> to{" "}
              <span className="font-semibold">0</span> — all corners are sharp.
            </>
          ) : (
            <>
              Core theme sets <code className="font-mono text-xs">--radius</code> to{" "}
              <span className="font-semibold">0.375rem</span> — subtly rounded corners.
            </>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-6">
        {radiusTokens.map((r) => (
          <div key={r.label} className="flex flex-col items-center gap-2">
            <div
              className="h-16 w-16 border-2 border-primary bg-primary/10"
              style={{ borderRadius: `var(${r.var})` }}
            />
            <span className="text-xs font-mono text-muted-foreground">
              {r.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
