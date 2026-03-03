"use client";

import { useState, useCallback } from "react";
import { Search, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";

type SidebarChild = { id: string; label: string };

type SidebarItem = {
  id: string;
  label: string;
  children?: SidebarChild[];
};

type SidebarGroup = {
  heading: string;
  items: SidebarItem[];
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function ComponentSearch({
  sidebarGroups,
}: {
  sidebarGroups: SidebarGroup[];
}) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Flat list of all sidebar items for filtering
  const allItems = sidebarGroups.flatMap((g) =>
    g.items.map((item) => ({ ...item, heading: g.heading }))
  );

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        const allHidden = Array.from(children).every((c) =>
          c.hasAttribute("hidden")
        );
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

  // When searching, filter items and their children; also auto-expand matching categories
  const filteredGroups = q
    ? sidebarGroups
        .map((group) => ({
          ...group,
          items: group.items
            .map((item) => {
              // Filter children that match
              const matchingChildren = item.children?.filter((child) =>
                child.label.toLowerCase().includes(q)
              );
              const labelMatches = item.label.toLowerCase().includes(q);
              // Check if section has visible showcases in DOM
              const sectionEl = document.querySelector(
                `[data-section="${item.id}"]`
              );
              const sectionVisible = sectionEl
                ? !sectionEl.hasAttribute("hidden")
                : false;

              if (
                labelMatches ||
                (matchingChildren && matchingChildren.length > 0) ||
                sectionVisible
              ) {
                return {
                  ...item,
                  // When searching, show only matching children (or all if category itself matches)
                  children: labelMatches
                    ? item.children
                    : matchingChildren && matchingChildren.length > 0
                      ? matchingChildren
                      : item.children,
                };
              }
              return null;
            })
            .filter(Boolean) as SidebarItem[],
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
          <ul className="space-y-0.5">
            {group.items.map((s) => {
              const hasChildren = s.children && s.children.length > 0;
              const isExpanded = !!q || !!expanded[s.id];

              return (
                <li key={s.id}>
                  <div className="flex items-center">
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => toggleExpanded(s.id)}
                        className="flex w-full items-center rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {isExpanded ? (
                          <Minus className="mr-2 h-3 w-3 shrink-0" />
                        ) : (
                          <Plus className="mr-2 h-3 w-3 shrink-0" />
                        )}
                        <span
                          role="link"
                          className="flex-1 text-left cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToId(s.id);
                          }}
                        >
                          {s.label}
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => scrollToId(s.id)}
                        className="block w-full text-left rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {s.label}
                      </button>
                    )}
                  </div>
                  {hasChildren && isExpanded && (
                    <ul className="ml-5 mt-0.5 space-y-0.5 border-l pl-3">
                      {s.children!.map((child) => (
                        <li key={child.id}>
                          <button
                            type="button"
                            onClick={() => scrollToId(child.id)}
                            className="block w-full text-left rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
