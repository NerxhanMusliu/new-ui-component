import type { ComponentDocData } from "./component-doc";

export const componentDocs: Record<string, ComponentDocData> = {
  Button: {
    props: [
      { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', description: "Visual style of the button." },
      { name: "size", type: '"default" | "sm" | "xs" | "lg" | "icon"', default: '"default"', description: "Size of the button." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
      { name: "asChild", type: "boolean", default: "false", description: "Render as a child element (Slot)." },
    ],
    changes: [
      "Added xs size and icon-xs/icon-sm/icon-lg icon sizes",
      "Auto-sizes child SVGs based on button size",
      "Added data-variant and data-size attributes for external styling",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/button
import { Button } from "@/components/ui/button"

<Button variant="default" size="default">
  Click me
</Button>

<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

{/* With icon */}
<Button>
  <Plus className="h-4 w-4" />
  With Icon
</Button>

{/* Icon-only */}
<Button size="icon">
  <Mail className="h-4 w-4" />
</Button>`,
  },

  Badge: {
    props: [
      { name: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: "Visual style of the badge." },
    ],
    changes: [
      "Auto-sizes child SVGs and disables pointer events on them",
      "Uses rounded-full pill shape instead of rounded-md",
      "Added transition for color and box-shadow",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/badge
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

{/* Semantic colors via className */}
<Badge className="bg-success/10 text-success border-transparent">
  Approved
</Badge>`,
  },

  Avatar: {
    props: [
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size of the avatar." },
    ],
    changes: [
      "Added size prop (sm, default, lg) — not in stock shadcn",
      "Added AvatarGroup and AvatarGroupCount sub-components",
      "Added AvatarBadge for status indicators with ring styling",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/avatar
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

<Avatar size="sm">
  <AvatarFallback className="bg-primary text-white text-[10px]">
    SM
  </AvatarFallback>
</Avatar>

<Avatar>
  <AvatarFallback className="bg-primary text-white text-xs">
    MD
  </AvatarFallback>
</Avatar>

{/* Avatar Group */}
<AvatarGroup>
  {["JD", "SK", "AB"].map((initials) => (
    <Avatar key={initials}>
      <AvatarFallback className="bg-primary text-white text-xs">
        {initials}
      </AvatarFallback>
    </Avatar>
  ))}
</AvatarGroup>`,
  },

  Separator: {
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the separator." },
      { name: "decorative", type: "boolean", default: "true", description: "Whether the separator is purely decorative." },
    ],
    changes: [
      "No significant changes — uses stock shadcn implementation with semantic bg-border token",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/separator
import { Separator } from "@/components/ui/separator"

{/* Horizontal */}
<Separator />

{/* Vertical */}
<div className="flex h-8 items-center gap-4">
  <span>Item A</span>
  <Separator orientation="vertical" />
  <span>Item B</span>
</div>`,
  },

  Input: {
    props: [
      { name: "type", type: "string", default: '"text"', description: "HTML input type." },
      { name: "placeholder", type: "string", description: "Placeholder text." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the input." },
    ],
    changes: [
      "Theme-aware: conditionally applies shadow-xs (disabled in Flux theme)",
      "Added dark mode background (dark:bg-input/30)",
      "Enhanced focus and aria-invalid styling",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/input
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="grid gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" placeholder="Enter value..." />
</div>

{/* With icon */}
<div className="relative">
  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-9" />
</div>`,
  },

  Textarea: {
    props: [
      { name: "placeholder", type: "string", description: "Placeholder text." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the textarea." },
    ],
    changes: [
      "Theme-aware: conditionally applies shadow-xs (disabled in Flux theme)",
      "Added dark mode background (dark:bg-input/30)",
      "Uses field-sizing-content for auto-height",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/textarea
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

<div className="grid gap-2">
  <Label htmlFor="notes">Notes</Label>
  <Textarea id="notes" placeholder="Add review notes..." />
</div>`,
  },

  Label: {
    props: [
      { name: "htmlFor", type: "string", description: "ID of the associated form element." },
    ],
    changes: [
      "Added flex layout with gap-2 for inline content",
      "Handles disabled state via group-data-[disabled=true]",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/label
import { Label } from "@/components/ui/label"

<Label htmlFor="email">Email address</Label>`,
  },

  Select: {
    props: [
      { name: "value", type: "string", description: "Controlled selected value." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the selected value changes." },
      { name: "defaultValue", type: "string", description: "Default value for uncontrolled usage." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the select." },
    ],
    changes: [
      "Added size prop (sm, default) on SelectTrigger",
      "Theme-aware: conditionally applies shadow-xs (disabled in Flux theme)",
      "Added custom scroll up/down buttons with chevron icons",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/select
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="draft">Draft</SelectItem>
    <SelectItem value="review">In Review</SelectItem>
    <SelectItem value="approved">Approved</SelectItem>
  </SelectContent>
</Select>`,
  },

  Checkbox: {
    props: [
      { name: "checked", type: "boolean", description: "Controlled checked state." },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when the checked state changes." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the checkbox." },
    ],
    changes: [
      "Added shadow-xs (stock shadcn has no shadow)",
      "Added dark mode background (dark:bg-input/30)",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/checkbox
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`,
  },

  Switch: {
    props: [
      { name: "checked", type: "boolean", description: "Controlled checked state." },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Called when the switch is toggled." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the switch." },
    ],
    changes: [
      "Added size prop (sm, default) — not in stock shadcn",
      "Added shadow-xs on track",
      "Dark mode-specific thumb styling",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/switch
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`,
  },

  Table: {
    props: [
      { name: "children", type: "ReactNode", description: "TableHeader and TableBody elements." },
    ],
    changes: [
      "Wrapped in a container div with overflow-x-auto",
      "TableFooter uses bg-muted/50 instead of bg-primary",
      "Added data-slot attributes throughout for targeting",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/table
import {
  Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cash</TableCell>
      <TableCell className="text-right">18,500</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },

  Card: {
    props: [
      { name: "children", type: "ReactNode", description: "Card content — use CardHeader, CardContent, CardFooter." },
      { name: "className", type: "string", description: "Additional CSS classes." },
    ],
    changes: [
      "Theme-aware border-radius: none (Edge), lg (Core), xl (Flux/default)",
      "Shadow only applied when theme is not Flux",
      "Added CardAction sub-component for positioned header actions",
      "CardHeader uses @container query with grid layout",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/card
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
  },

  Alert: {
    props: [
      { name: "variant", type: '"default" | "destructive"', default: '"default"', description: "Visual style of the alert." },
    ],
    changes: [
      "Grid layout adapts columns based on SVG presence",
      "AlertDescription uses col-start-2 for icon alignment",
      "Destructive variant has specific icon/text color treatment",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/alert
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Your tax return has been submitted for review.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Unable to save changes.
  </AlertDescription>
</Alert>`,
  },

  Progress: {
    props: [
      { name: "value", type: "number", default: "0", description: "Current progress value (0–100)." },
    ],
    changes: [
      "Uses semantic primary color token for indicator",
      "Simplified implementation with inline transform for value",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/progress
import { Progress } from "@/components/ui/progress"

<Progress value={33} />
<Progress value={66} />
<Progress value={100} />`,
  },

  Dialog: {
    props: [
      { name: "open", type: "boolean", default: "false", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
    ],
    changes: [
      "Added showCloseButton prop to DialogContent and DialogFooter",
      "Built-in close button with X icon (togglable)",
      "Custom shadow-lg on content",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/dialog
import {
  Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },

  Sheet: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
      { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: "Side from which the sheet slides in." },
    ],
    changes: [
      "Added showCloseButton prop for togglable close button",
      "Conditional border placement based on side prop",
      "Custom slide animations per side direction",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/sheet
import {
  Sheet, SheetContent, SheetDescription,
  SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Sheet description goes here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">Sheet content</div>
  </SheetContent>
</Sheet>`,
  },

  DropdownMenu: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
    ],
    changes: [
      'Added variant prop on DropdownMenuItem ("default" | "destructive")',
      "Destructive items have custom focus state colors",
      "DropdownMenuSubTrigger auto-appends ChevronRight icon",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/dropdown-menu
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuItem className="text-destructive">
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },

  Tooltip: {
    props: [
      { name: "delayDuration", type: "number", default: "0", description: "Delay in ms before the tooltip appears." },
    ],
    changes: [
      "Default delayDuration changed to 0 (stock is 200ms)",
      "Default sideOffset changed to 0",
      "Custom arrow styling with fill and rotation",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/tooltip
import {
  Tooltip, TooltipContent,
  TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },

  Breadcrumb: {
    props: [
      { name: "separator", type: "ReactNode", description: "Custom separator element between items." },
    ],
    changes: [
      "Added BreadcrumbEllipsis with MoreHorizontal icon",
      "BreadcrumbSeparator uses ChevronRight icon",
      "All sub-components have data-slot attributes for targeting",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/breadcrumb
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/entities">Entities</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Acme Corp</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },

  Accordion: {
    props: [
      { name: "type", type: '"single" | "multiple"', default: '"single"', description: "Whether one or multiple items can be opened." },
      { name: "collapsible", type: "boolean", default: "false", description: "Allow closing all items (single type only)." },
      { name: "value", type: "string | string[]", description: "Controlled open item(s)." },
      { name: "onValueChange", type: "(value: string | string[]) => void", description: "Called when open items change." },
    ],
    changes: [
      "Added cursor-pointer to AccordionTrigger",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/accordion
import {
  Accordion, AccordionContent,
  AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section Title</AccordionTrigger>
    <AccordionContent>
      Content goes here.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  },

  AlertDialog: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
    ],
    changes: [
      "Action and Cancel buttons wrap with Button component for consistent styling",
      "Added AlertDialogMedia sub-component for icon/image placement",
      "Added size prop on AlertDialogContent (default | sm)",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/alert-dialog
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription,
  AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
  },

  RadioGroup: {
    props: [
      { name: "value", type: "string", description: "Controlled selected value." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when selection changes." },
      { name: "defaultValue", type: "string", description: "Default value for uncontrolled usage." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the entire group." },
    ],
    changes: [
      "Added cursor-pointer to RadioGroupItem",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/radio-group
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
</RadioGroup>`,
  },

  Popover: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
    ],
    changes: [
      "Added PopoverHeader, PopoverTitle, and PopoverDescription sub-components",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/popover
import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p className="text-sm">Popover content goes here.</p>
  </PopoverContent>
</Popover>`,
  },

  Sonner: {
    props: [
      { name: "position", type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"', default: '"bottom-right"', description: "Position of the toast container." },
      { name: "richColors", type: "boolean", default: "false", description: "Use colored backgrounds for different toast types." },
    ],
    changes: [
      "Custom icons for success, info, warning, error, and loading states",
      "Uses design system CSS variables for colors and border-radius",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/sonner
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

// Add <Toaster /> to your layout
<Toaster />

// Trigger toasts from anywhere
toast("Default notification")
toast.success("Success!")
toast.error("Something went wrong")
toast.info("FYI...")
toast.warning("Be careful")`,
  },

  Skeleton: {
    props: [
      { name: "className", type: "string", description: "Additional CSS classes to control size and shape." },
    ],
    changes: [
      "No significant changes — uses stock shadcn implementation",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/skeleton
import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />
<Skeleton className="h-[125px] w-full rounded-xl" />`,
  },

  ScrollArea: {
    props: [
      { name: "className", type: "string", description: "Additional CSS classes." },
      { name: "children", type: "ReactNode", description: "Scrollable content." },
    ],
    changes: [
      "No significant changes — uses stock shadcn implementation",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/scroll-area
import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-72 w-full rounded-md border p-4">
  {/* Long content here */}
</ScrollArea>`,
  },

  Slider: {
    props: [
      { name: "value", type: "number[]", description: "Controlled value(s)." },
      { name: "onValueChange", type: "(value: number[]) => void", description: "Called when value changes." },
      { name: "defaultValue", type: "number[]", description: "Default value(s) for uncontrolled usage." },
      { name: "min", type: "number", default: "0", description: "Minimum value." },
      { name: "max", type: "number", default: "100", description: "Maximum value." },
      { name: "step", type: "number", default: "1", description: "Step increment." },
    ],
    changes: [
      "Added cursor-pointer to slider thumb",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/slider
import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />

{/* Range slider */}
<Slider defaultValue={[25, 75]} max={100} step={1} />`,
  },

  Pagination: {
    props: [
      { name: "children", type: "ReactNode", description: "PaginationContent with PaginationItems." },
    ],
    changes: [
      "PaginationLink uses buttonVariants for consistent styling with cursor-pointer",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/pagination
import {
  Pagination, PaginationContent, PaginationEllipsis,
  PaginationItem, PaginationLink,
  PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  },

  Toggle: {
    props: [
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style of the toggle." },
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size of the toggle." },
      { name: "pressed", type: "boolean", description: "Controlled pressed state." },
      { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Called when pressed state changes." },
    ],
    changes: [
      "Added cursor-pointer to toggle base styles",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/toggle
import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle variant="outline" aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`,
  },

  ToggleGroup: {
    props: [
      { name: "type", type: '"single" | "multiple"', description: "Whether one or multiple items can be selected." },
      { name: "value", type: "string | string[]", description: "Controlled selected value(s)." },
      { name: "onValueChange", type: "(value: string | string[]) => void", description: "Called when selection changes." },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style inherited by items." },
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size inherited by items." },
    ],
    changes: [
      "Inherits cursor-pointer from toggleVariants",
      "Added spacing prop for gap between items",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/toggle-group
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
  },

  Tabs: {
    props: [
      { name: "defaultValue", type: "string", description: "Default active tab value." },
      { name: "value", type: "string", description: "Controlled active tab value." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the active tab changes." },
      { name: "variant", type: '"default" | "line"', default: '"default"', description: "Visual variant of the tab list (set on TabsList)." },
    ],
    changes: [
      'Added variant prop on TabsList ("default" | "line")',
      "Line variant uses bottom/right border indicator via ::after pseudo-element",
      "Supports vertical orientation with custom layouts",
      "Enhanced dark mode styling on triggers",
    ],
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content
  </TabsContent>
  <TabsContent value="details">
    Details content
  </TabsContent>
</Tabs>

{/* Line variant */}
<Tabs defaultValue="tab1">
  <TabsList variant="line">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
</Tabs>`,
  },
};
