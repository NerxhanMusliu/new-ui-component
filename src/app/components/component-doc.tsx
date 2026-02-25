"use client";

import { useState } from "react";

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentDocData {
  props: PropDef[];
  code: string;
}

function renderCodeWithLinks(code: string) {
  const urlRegex = /(https?:\/\/[^\s)]+)/g;
  const parts = code.split(urlRegex);
  return parts.map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-primary/80"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

export function ComponentDoc({ props, code }: ComponentDocData) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Props Table */}
      {props.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                  Prop
                </th>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                  Type
                </th>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                  Default
                </th>
                <th className="px-3 py-2 text-left font-semibold text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr key={prop.name} className="border-b last:border-0">
                  <td className="px-3 py-2 font-mono text-xs text-foreground">
                    {prop.name}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {prop.type}
                  </td>
                  <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                    {prop.default ?? "—"}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Collapsible Code Snippet */}
      <div>
        <button
          onClick={() => setShowCode(!showCode)}
          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          {showCode ? "Hide Code" : "Show Code"}
        </button>

        {showCode && (
          <div className="relative mt-2">
            <button
              onClick={handleCopy}
              className="absolute right-2 top-2 rounded-md border bg-background px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 text-xs leading-relaxed">
              <code className="font-mono">{renderCodeWithLinks(code)}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
