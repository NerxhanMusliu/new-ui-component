"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SidebarGroup = {
  heading: string;
  items: { id: string; label: string }[];
};

export function ComponentSearch({
  sidebarGroups,
}: {
  sidebarGroups: SidebarGroup[];
}) {
  const [query, setQuery] = useState("");

  // Flat list of all sidebar items for filtering
  const allItems = sidebarGroups.flatMap((g) =>
    g.items.map((item) => ({ ...item, heading: g.heading }))
  );

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value);
      const q = value.toLowerCase().trim();

      // Filter DOM elements
      const showcases = document.querySelectorAll<HTMLElement>(
        "[data-component-name]"
      );
      const sections = document.querySelectorAll<HTMLElement>("[data-section]");

      if (!q) {
        // Restore everything
        showcases.forEach((el) => el.removeAttribute("hidden"));
        sections.forEach((el) => el.removeAttribute("hidden"));
        return;
      }

      // Hide/show individual showcases
      showcases.forEach((el) => {
        const name = (el.dataset.componentName || "").toLowerCase();
        if (name.includes(q)) {
          el.removeAttribute("hidden");
        } else {
          el.setAttribute("hidden", "");
        }
      });

      // Hide sections where ALL showcases are hidden
      sections.forEach((el) => {
        const children = el.querySelectorAll<HTMLElement>(
          "[data-component-name]"
        );
        if (children.length === 0) {
          // Sections without showcases (like design tokens) — match by section id
          const sectionId = el.dataset.section || "";
          const sectionLabel =
            allItems.find((i) => i.id === sectionId)?.label || sectionId;
          if (sectionLabel.toLowerCase().includes(q)) {
            el.removeAttribute("hidden");
          } else {
            el.setAttribute("hidden", "");
          }
          return;
        }
        const allHidden = Array.from(children).every((c) => c.hasAttribute("hidden"));
        if (allHidden) {
          el.setAttribute("hidden", "");
        } else {
          el.removeAttribute("hidden");
        }
      });
    },
    [allItems]
  );

  const q = query.toLowerCase().trim();

  // Filter sidebar items — keep a section if its label matches OR if it has
  // visible showcases in the DOM (i.e. a component name matched the query)
  const filteredGroups = q
    ? sidebarGroups
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            if (item.label.toLowerCase().includes(q)) return true;
            // Check if the DOM section has any visible showcases
            const sectionEl = document.querySelector(
              `[data-section="${item.id}"]`
            );
            return sectionEl ? !sectionEl.hasAttribute("hidden") : false;
          }),
        }))
        .filter((group) => group.items.length > 0)
    : sidebarGroups;

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search components..."
          className="pl-9"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {filteredGroups.map((group) => (
        <div key={group.heading}>
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group.heading}
          </p>
          <ul className="space-y-1">
            {group.items.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
