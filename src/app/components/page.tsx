import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Search,
  Plus,
  AlertCircle,
  Info,
  TriangleAlert,
} from "lucide-react";
import { StyleToggleProvider } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DialogDemo,
  SheetDemo,
  DropdownMenuDemo,
  TooltipDemo,
  SelectDemo,
  CheckboxDemo,
  SwitchDemo,
} from "./component-preview-client";
import {
  ColorsSection,
  TypographySection,
  SpacingSection,
  RadiusSection,
} from "./design-tokens-client";
import { ComponentDoc } from "./component-doc";
import { componentDocs } from "./component-data";

const sidebarGroups = [
  {
    heading: "Foundations",
    items: [
      { id: "colors", label: "Colors" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing" },
      { id: "radius", label: "Radius" },
    ],
  },
  {
    heading: "Components",
    items: [
      { id: "general", label: "General" },
      { id: "form-controls", label: "Form Controls" },
      { id: "data-display", label: "Data Display" },
      { id: "feedback", label: "Feedback" },
      { id: "overlays", label: "Overlays" },
      { id: "navigation", label: "Navigation" },
    ],
  },
];

function ComponentShowcase({
  name,
  description,
  children,
  doc,
}: {
  name: string;
  description: string;
  children: React.ReactNode;
  doc?: React.ReactNode;
}) {
  return (
    <div className="space-y-3 pb-10 pt-2 first:pt-0">
      <div>
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border bg-background p-6">{children}</div>
      {doc}
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <div className="flex h-screen flex-col bg-background font-sans">
      {/* Header */}
      <header className="shrink-0 z-50 flex h-16 items-center justify-between bg-header px-6 text-white">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:opacity-80">
            <img src="/hubsync-logo.svg" alt="HubSync" className="h-6" />
          </Link>
          <div className="h-5 w-px bg-white/20" />
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <span className="text-white font-medium">Component Library</span>
          </nav>
        </div>
      </header>

      <StyleToggleProvider>
        {/* Two-column layout */}
        <div className="flex flex-1 min-h-0">
          {/* Sidebar */}
          <nav className="hidden w-56 shrink-0 overflow-y-auto border-r p-6 lg:block">
            <div className="space-y-6">
              {sidebarGroups.map((group) => (
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
          </nav>

          {/* Main content */}
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-4xl space-y-16 px-8 py-10">
            {/* ── Design Tokens ── */}
            <section id="colors" className="space-y-8">
              <h2 className="text-lg font-bold">Colors</h2>
              <ComponentShowcase
                name="Color Tokens"
                description="All design system color tokens with their current resolved values."
              >
                <ColorsSection />
              </ComponentShowcase>
            </section>

            <section id="typography" className="space-y-8">
              <h2 className="text-lg font-bold">Typography</h2>
              <ComponentShowcase
                name="Type Scale"
                description="Font families, sizes, and weights used across the system."
              >
                <TypographySection />
              </ComponentShowcase>
            </section>

            <section id="spacing" className="space-y-8">
              <h2 className="text-lg font-bold">Spacing</h2>
              <ComponentShowcase
                name="Spacing Scale"
                description="Tailwind spacing values used for margins, padding, and gaps."
              >
                <SpacingSection />
              </ComponentShowcase>
            </section>

            <section id="radius" className="space-y-8">
              <h2 className="text-lg font-bold">Radius</h2>
              <ComponentShowcase
                name="Border Radius"
                description="Radius tokens applied to corners — Edge theme uses 0 for sharp edges."
              >
                <RadiusSection />
              </ComponentShowcase>
            </section>

            {/* ── General ── */}
            <section id="general" className="space-y-10 divide-y">
              <h2 className="text-lg font-bold">General</h2>

              <ComponentShowcase
                name="Button"
                description="Primary actions and interactions."
                doc={<ComponentDoc {...componentDocs.Button} />}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="xs">Extra Small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button disabled>Disabled</Button>
                    <Button>
                      <Plus className="h-4 w-4" />
                      With Icon
                    </Button>
                    <Button size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Badge"
                description="Status indicators and labels."
                doc={<ComponentDoc {...componentDocs.Badge} />}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-success/10 text-success border-transparent">
                      Approved
                    </Badge>
                    <Badge className="bg-warning/10 text-warning border-transparent">
                      Pending
                    </Badge>
                    <Badge className="bg-destructive/10 text-destructive border-transparent">
                      Rejected
                    </Badge>
                    <Badge className="bg-info/10 text-info border-transparent">
                      In Review
                    </Badge>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Avatar"
                description="User representations with initials and grouping."
                doc={<ComponentDoc {...componentDocs.Avatar} />}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
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
                    <Avatar size="lg">
                      <AvatarFallback className="bg-primary text-white text-sm">
                        LG
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Avatar Group
                    </p>
                    <AvatarGroup>
                      {["JD", "SK", "AB", "MR"].map((initials) => (
                        <Avatar key={initials}>
                          <AvatarFallback className="bg-primary text-white text-xs">
                            {initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </AvatarGroup>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Separator"
                description="Visual dividers between content."
                doc={<ComponentDoc {...componentDocs.Separator} />}
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Horizontal
                    </p>
                    <Separator />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Vertical
                    </p>
                    <div className="flex h-8 items-center gap-4">
                      <span className="text-sm">Item A</span>
                      <Separator orientation="vertical" />
                      <span className="text-sm">Item B</span>
                      <Separator orientation="vertical" />
                      <span className="text-sm">Item C</span>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>
            </section>

            {/* ── Form Controls ── */}
            <section id="form-controls" className="space-y-10 divide-y">
              <h2 className="text-lg font-bold">Form Controls</h2>

              <ComponentShowcase
                name="Input"
                description="Text input fields with variants."
                doc={<ComponentDoc {...componentDocs.Input} />}
              >
                <div className="grid gap-4 max-w-sm">
                  <div className="grid gap-2">
                    <Label htmlFor="input-default">Default</Label>
                    <Input
                      id="input-default"
                      placeholder="Enter value..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="input-disabled">Disabled</Label>
                    <Input
                      id="input-disabled"
                      placeholder="Disabled input"
                      disabled
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="input-icon">With Icon</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="input-icon"
                        placeholder="Search..."
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Textarea"
                description="Multi-line text input."
                doc={<ComponentDoc {...componentDocs.Textarea} />}
              >
                <div className="max-w-sm grid gap-2">
                  <Label htmlFor="textarea-demo">Notes</Label>
                  <Textarea
                    id="textarea-demo"
                    placeholder="Add review notes..."
                  />
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Select"
                description="Dropdown selection menus."
                doc={<ComponentDoc {...componentDocs.Select} />}
              >
                <SelectDemo />
              </ComponentShowcase>

              <ComponentShowcase
                name="Checkbox"
                description="Multi-select checkboxes with labels."
                doc={<ComponentDoc {...componentDocs.Checkbox} />}
              >
                <CheckboxDemo />
              </ComponentShowcase>

              <ComponentShowcase
                name="Switch"
                description="Toggle switches for boolean settings."
                doc={<ComponentDoc {...componentDocs.Switch} />}
              >
                <div className="max-w-sm">
                  <SwitchDemo />
                </div>
              </ComponentShowcase>
            </section>

            {/* ── Data Display ── */}
            <section id="data-display" className="space-y-10 divide-y">
              <h2 className="text-lg font-bold">Data Display</h2>

              <ComponentShowcase
                name="Table"
                description="Structured data in rows and columns."
                doc={<ComponentDoc {...componentDocs.Table} />}
              >
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">
                          Account
                        </TableHead>
                        <TableHead className="text-right font-semibold">
                          Book Balance
                        </TableHead>
                        <TableHead className="text-right font-semibold">
                          Adjustments
                        </TableHead>
                        <TableHead className="text-right font-semibold">
                          Tax Balance
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Cash &amp; Equivalents
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          18,500
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          0
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          18,500
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Accounts Receivable
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          33,700
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          (4,700)
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          29,000
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Investments
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          (63,006)
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          5,150
                        </TableCell>
                        <TableCell className="text-right tabular-nums">
                          (57,856)
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                        <TableCell className="font-bold">Total</TableCell>
                        <TableCell className="text-right tabular-nums font-bold">
                          (10,806)
                        </TableCell>
                        <TableCell className="text-right tabular-nums font-bold">
                          450
                        </TableCell>
                        <TableCell className="text-right tabular-nums font-bold">
                          (10,356)
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Card"
                description="Content containers with optional headers and footers."
                doc={<ComponentDoc {...componentDocs.Card} />}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Default Card</CardTitle>
                      <CardDescription>
                        A standard card with header and content.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cards group related content and actions together.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-5">
                      <p className="text-sm text-muted-foreground">
                        Net Taxable Income
                      </p>
                      <p className="mt-2 text-2xl font-bold">$16,464</p>
                      <p className="mt-1 text-xs text-success">
                        +12.3% from prior year
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="sm:col-span-2">
                    <CardHeader>
                      <CardTitle>Card with Footer</CardTitle>
                      <CardDescription>
                        Includes action buttons in the footer.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This card demonstrates the footer pattern with actions.
                      </p>
                    </CardContent>
                    <CardFooter className="gap-2 border-t">
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                      <Button size="sm">Save Changes</Button>
                    </CardFooter>
                  </Card>
                </div>
              </ComponentShowcase>
            </section>

            {/* ── Feedback ── */}
            <section id="feedback" className="space-y-10 divide-y">
              <h2 className="text-lg font-bold">Feedback</h2>

              <ComponentShowcase
                name="Alert"
                description="Contextual messages for user feedback."
                doc={<ComponentDoc {...componentDocs.Alert} />}
              >
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      Your tax return has been submitted for review.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <TriangleAlert className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Unable to save changes. Please check required fields.
                    </AlertDescription>
                  </Alert>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Progress"
                description="Visual progress indicators."
                doc={<ComponentDoc {...componentDocs.Progress} />}
              >
                <div className="space-y-6">
                  {[
                    { label: "0%", value: 0 },
                    { label: "33%", value: 33 },
                    { label: "66%", value: 66 },
                    { label: "100%", value: 100 },
                  ].map((item) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Progress
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <Progress value={item.value} />
                    </div>
                  ))}
                </div>
              </ComponentShowcase>
            </section>

            {/* ── Overlays ── */}
            <section id="overlays" className="space-y-10 divide-y">
              <h2 className="text-lg font-bold">Overlays</h2>

              <ComponentShowcase
                name="Dialog"
                description="Modal dialog for focused interactions."
                doc={<ComponentDoc {...componentDocs.Dialog} />}
              >
                <DialogDemo />
              </ComponentShowcase>

              <ComponentShowcase
                name="Sheet"
                description="Slide-out panel for secondary content."
                doc={<ComponentDoc {...componentDocs.Sheet} />}
              >
                <SheetDemo />
              </ComponentShowcase>

              <ComponentShowcase
                name="Dropdown Menu"
                description="Contextual action menus."
                doc={<ComponentDoc {...componentDocs.DropdownMenu} />}
              >
                <DropdownMenuDemo />
              </ComponentShowcase>

              <ComponentShowcase
                name="Tooltip"
                description="Informational popups on hover."
                doc={<ComponentDoc {...componentDocs.Tooltip} />}
              >
                <TooltipDemo />
              </ComponentShowcase>
            </section>

            {/* ── Navigation ── */}
            <section id="navigation" className="space-y-10 divide-y">
              <h2 className="text-lg font-bold">Navigation</h2>

              <ComponentShowcase
                name="Breadcrumb"
                description="Hierarchical navigation showing the current page location."
                doc={<ComponentDoc {...componentDocs.Breadcrumb} />}
              >
                <div className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm text-muted-foreground">Default</p>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Entities</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Acme Corp</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                  <Separator />
                  <div>
                    <p className="mb-3 text-sm text-muted-foreground">Longer path</p>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Returns</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">2024</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">Acme Corp</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Adjustments</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                name="Tabs"
                description="Tabbed navigation with default and line variants."
                doc={<ComponentDoc {...componentDocs.Tabs} />}
              >
                <div className="space-y-8">
                  <div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Default variant
                    </p>
                    <Tabs defaultValue="overview">
                      <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          Overview tab content goes here.
                        </p>
                      </TabsContent>
                      <TabsContent value="details" className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          Details tab content goes here.
                        </p>
                      </TabsContent>
                      <TabsContent value="settings" className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          Settings tab content goes here.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <Separator />

                  <div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Line variant
                    </p>
                    <Tabs defaultValue="entities">
                      <TabsList variant="line">
                        <TabsTrigger value="entities">Entities</TabsTrigger>
                        <TabsTrigger value="adjustments">
                          Adjustments
                        </TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                      </TabsList>
                      <TabsContent value="entities" className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          Entity manager content goes here.
                        </p>
                      </TabsContent>
                      <TabsContent value="adjustments" className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          Adjustments content goes here.
                        </p>
                      </TabsContent>
                      <TabsContent value="history" className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          History content goes here.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </ComponentShowcase>
            </section>
            </div>
          </main>
        </div>
      </StyleToggleProvider>
    </div>
  );
}
