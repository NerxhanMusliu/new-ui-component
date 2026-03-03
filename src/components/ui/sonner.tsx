"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          success: "!border-l-4 !border-l-success",
          error: "!border-l-4 !border-l-destructive",
          info: "!border-l-4 !border-l-info",
          warning: "!border-l-4 !border-l-warning",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          "--success-bg": "color-mix(in srgb, var(--success) 10%, var(--background))",
          "--success-text": "var(--success)",
          "--success-border": "color-mix(in srgb, var(--success) 20%, var(--background))",
          "--error-bg": "color-mix(in srgb, var(--destructive) 10%, var(--background))",
          "--error-text": "var(--destructive)",
          "--error-border": "color-mix(in srgb, var(--destructive) 20%, var(--background))",
          "--info-bg": "color-mix(in srgb, var(--info) 10%, var(--background))",
          "--info-text": "var(--info)",
          "--info-border": "color-mix(in srgb, var(--info) 20%, var(--background))",
          "--warning-bg": "color-mix(in srgb, var(--warning) 10%, var(--background))",
          "--warning-text": "var(--warning)",
          "--warning-border": "color-mix(in srgb, var(--warning) 20%, var(--background))",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
