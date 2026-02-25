import type { ComponentDocData } from "./component-doc";

export const componentDocs: Record<string, ComponentDocData> = {
  Button: {
    props: [
      { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default: '"default"', description: "Visual style of the button." },
      { name: "size", type: '"default" | "sm" | "xs" | "lg" | "icon"', default: '"default"', description: "Size of the button." },
      { name: "disabled", type: "boolean", default: "false", description: "Disables the button." },
      { name: "asChild", type: "boolean", default: "false", description: "Render as a child element (Slot)." },
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
    code: `// Based on shadcn/ui — https://ui.shadcn.com/docs/components/progress
import { Progress } from "@/components/ui/progress"

<Progress value={33} />
<Progress value={66} />
<Progress value={100} />`,
  },

  Dialog: {
    props: [
      { name: "open", type: "boolean", description: "Controlled open state." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Called when open state changes." },
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
      { name: "delayDuration", type: "number", default: "200", description: "Delay in ms before the tooltip appears." },
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

  Tabs: {
    props: [
      { name: "defaultValue", type: "string", description: "Default active tab value." },
      { name: "value", type: "string", description: "Controlled active tab value." },
      { name: "onValueChange", type: "(value: string) => void", description: "Called when the active tab changes." },
      { name: "variant", type: '"default" | "line"', default: '"default"', description: "Visual variant of the tab list (set on TabsList)." },
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
