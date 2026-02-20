"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronRight,
  Bell,
  Settings,
  Plus,
  Building2,
  FileSpreadsheet,
  Table2,
  SlidersHorizontal,
  ArrowRightLeft,
  History,
  Import,
  Download,
  Search,
  Columns3,
  MessageSquareText,
  X,
  ChevronDown,
  ExternalLink,
  Palette,
  Info,
  TriangleAlert,
  CheckCircle2,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Filter,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { ThemeProvider } from "@/components/theme-context";
import { ThemeSwitcher } from "@/components/theme-switcher";

/* ── Data ── */

const tableData = [
  {
    id: "10000",
    description: "10000 - BOA Chk 4837 - Operating",
    entity: "Baker Tilly LLC",
    status: "approved" as const,
    pyBalance: 15000,
    unadjustedBalance: 18500,
    bookAdjustment: 0,
    taxAdjBalance: 18500,
  },
  {
    id: "10215",
    description: "10215 - First Internet Chk 3746 - Grid...",
    entity: "Baker Tilly LLC",
    status: "pending" as const,
    pyBalance: 8200,
    unadjustedBalance: 12340,
    bookAdjustment: -1200,
    taxAdjBalance: 11140,
  },
  {
    id: "10220",
    description: "10220 - First Internet Chk 6195 - ...",
    entity: "Baker Tilly LLC",
    status: "approved" as const,
    pyBalance: 3400,
    unadjustedBalance: 5670,
    bookAdjustment: 0,
    taxAdjBalance: 5670,
  },
  {
    id: "11020",
    description: "11020 - Accounts Receivable (Trade)",
    entity: "Grid Capital Inc",
    status: "in-review" as const,
    pyBalance: 24500,
    unadjustedBalance: 31200,
    bookAdjustment: 2500,
    taxAdjBalance: 29000,
  },
  {
    id: "11030",
    description: "11030 - Interest receivable",
    entity: "Grid Capital Inc",
    status: "rejected" as const,
    pyBalance: 1200,
    unadjustedBalance: 1850,
    bookAdjustment: 0,
    taxAdjBalance: 1400,
  },
  {
    id: "12001",
    description: "12001 - Investments, capital calls funded",
    entity: "Grid Capital Inc",
    status: "pending" as const,
    pyBalance: -45000,
    unadjustedBalance: -52000,
    bookAdjustment: 8500,
    taxAdjBalance: -18600,
  },
  {
    id: "12005",
    description: "12005 - Investments, operating income/lo...",
    entity: "Baker Tilly LLC",
    status: "approved" as const,
    pyBalance: -12800,
    unadjustedBalance: -18200,
    bookAdjustment: 3200,
    taxAdjBalance: -9400,
  },
  {
    id: "12006",
    description: "12006 - Investments, unrealized gain/loss",
    entity: "Grid Capital Inc",
    status: "in-review" as const,
    pyBalance: -8700,
    unadjustedBalance: -15824,
    bookAdjustment: 11318,
    taxAdjBalance: -29856,
  },
];

const reviewNotes = [
  {
    author: "JD",
    name: "Jane Doe",
    time: "2 hours ago",
    text: "Verified the cash balance against bank statement. No discrepancies found.",
    account: "10000",
  },
  {
    author: "SK",
    name: "Sam Kim",
    time: "5 hours ago",
    text: "The book adjustment on this line needs supporting documentation. Please attach the journal entry.",
    account: "10215",
  },
  {
    author: "AB",
    name: "Alex Brown",
    time: "1 day ago",
    text: "Reclass from operating to investing seems correct per ASC 230. Approved.",
    account: "12001",
  },
];

const statusConfig = {
  approved: {
    label: "Approved",
    className: "bg-green-100 text-green-700 border-transparent",
  },
  pending: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-700 border-transparent",
  },
  "in-review": {
    label: "In Review",
    className: "bg-blue-100 text-blue-700 border-transparent",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-100 text-red-700 border-transparent",
  },
};

function formatCurrency(value: number): string {
  if (value < 0) {
    return `(${Math.abs(value).toLocaleString()})`;
  }
  return value.toLocaleString();
}

const columns = [
  { key: "pyBalance", label: "PY Balance" },
  { key: "unadjustedBalance", label: "Unadjusted Balance" },
  { key: "bookAdjustment", label: "Book Adjustment" },
  { key: "taxAdjBalance", label: "Tax Adj Balance" },
];

/* ── Page ── */

export default function Home() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [showZeroBalances, setShowZeroBalances] = useState(true);

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === tableData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(tableData.map((r) => r.id)));
    }
  };

  const approvedCount = tableData.filter(
    (r) => r.status === "approved"
  ).length;
  const completionPct = Math.round((approvedCount / tableData.length) * 100);

  const totals = columns.reduce(
    (acc, col) => {
      acc[col.key] = tableData.reduce(
        (sum, row) => sum + (row[col.key as keyof typeof row] as number),
        0
      );
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col bg-background font-sans">
          {/* ── Top Navigation Bar ── */}
          <header className="flex h-16 items-center justify-between bg-header px-6 text-white">
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Navigation menu</TooltipContent>
              </Tooltip>
              <nav className="flex items-center gap-2 text-sm text-white/60">
                <span className="font-semibold text-brand">HubSync</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>My Tasks</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-medium text-white">
                  Baker Tilly - 2024 Tax Return
                </span>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              {/* Add Adjustment Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Adjustment
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>New Book Adjustment</DialogTitle>
                    <DialogDescription>
                      Create a new adjustment entry for the current tax period.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-2">
                    <div className="grid gap-2">
                      <Label htmlFor="adj-account">Account</Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select account..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10000">
                            10000 - BOA Chk 4837
                          </SelectItem>
                          <SelectItem value="10215">
                            10215 - First Internet Chk
                          </SelectItem>
                          <SelectItem value="11020">
                            11020 - Accounts Receivable
                          </SelectItem>
                          <SelectItem value="12001">
                            12001 - Investments
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="adj-type">Type</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select type..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="book">Book</SelectItem>
                            <SelectItem value="tax-reclass">
                              Tax Reclass
                            </SelectItem>
                            <SelectItem value="permanent">Permanent</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="adj-amount">Amount</Label>
                        <Input
                          id="adj-amount"
                          type="number"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="adj-memo">Memo</Label>
                      <Textarea
                        id="adj-memo"
                        placeholder="Describe the reason for this adjustment..."
                        rows={3}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="adj-recurring" />
                      <Label htmlFor="adj-recurring" className="font-normal">
                        Mark as recurring adjustment
                      </Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Adjustment</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                      3
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>3 new notifications</TooltipContent>
              </Tooltip>

              <ThemeSwitcher />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="/components">
                      <Palette className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Component library</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white"
                  >
                    <Settings className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>

              <div className="flex items-center gap-2 border-l border-white/15 pl-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary text-xs font-semibold text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* ── Tab Navigation Row ── */}
          <div className="flex items-center justify-between border-b px-6 py-1">
            <Tabs defaultValue="working-tb">
              <TabsList variant="line">
                <TabsTrigger value="entity-manager" className="px-4 py-3">
                  <Building2 className="h-4 w-4" />
                  Entity Manager
                </TabsTrigger>
                <TabsTrigger value="tb-manager" className="px-4 py-3">
                  <FileSpreadsheet className="h-4 w-4" />
                  TB Manager
                </TabsTrigger>
                <TabsTrigger value="working-tb" className="px-4 py-3">
                  <Table2 className="h-4 w-4" />
                  Working TB
                </TabsTrigger>
                <TabsTrigger value="adjustments" className="px-4 py-3">
                  <SlidersHorizontal className="h-4 w-4" />
                  Adjustments
                </TabsTrigger>
                <TabsTrigger value="book-to-tax" className="px-4 py-3">
                  <ArrowRightLeft className="h-4 w-4" />
                  Book to Tax
                </TabsTrigger>
                <TabsTrigger value="history" className="px-4 py-3">
                  <History className="h-4 w-4" />
                  History
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Import className="h-3.5 w-3.5" />
                    Import
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Import from CSV</DropdownMenuItem>
                  <DropdownMenuItem>Import from Excel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-3.5 w-3.5" />
                    Export
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Export as CSV</DropdownMenuItem>
                  <DropdownMenuItem>Export as Excel</DropdownMenuItem>
                  <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* ── Alert Banner ── */}
          <div className="px-8 pt-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Review in Progress</AlertTitle>
              <AlertDescription>
                2 accounts are pending partner review. 1 adjustment was rejected
                and needs revision before the March 15 filing deadline.
              </AlertDescription>
            </Alert>
          </div>

          {/* ── KPI Cards Row ── */}
          <div className="grid grid-cols-4 gap-5 px-8 pt-5 pb-6">
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">
                  Net Taxable Income
                </p>
                <p className="mt-2 text-2xl font-bold">$16,464</p>
                <p className="mt-1 text-xs text-green-600">
                  +12.3% from prior year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">Book Income</p>
                <p className="mt-2 text-2xl font-bold">$56,000</p>
                <div className="mt-2 flex items-center gap-2">
                  <AvatarGroup>
                    {["JD", "SK", "AB"].map((initials) => (
                      <Avatar key={initials} size="sm">
                        <AvatarFallback className="bg-primary text-[10px] font-semibold text-white">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  <span className="text-xs text-muted-foreground">
                    3 reviewers
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">
                  Total Adjustments
                </p>
                <p className="mt-2 text-2xl font-bold text-green-600">
                  $24,318
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700 border-transparent">
                    {approvedCount} Approved
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-700 border-transparent">
                    {tableData.length - approvedCount} Pending
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Review Progress
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {completionPct}%
                  </Badge>
                </div>
                <p className="mt-2 text-2xl font-bold">
                  {approvedCount}/{tableData.length}
                </p>
                <div className="mt-2">
                  <Progress value={completionPct} />
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="mx-8" />

          {/* ── Table Toolbar ── */}
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                Filters:
              </span>
              <Select>
                <SelectTrigger size="sm">
                  <SelectValue placeholder="All Entities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Entities</SelectItem>
                  <SelectItem value="baker-tilly">Baker Tilly LLC</SelectItem>
                  <SelectItem value="grid-capital">
                    Grid Capital Inc
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger size="sm">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-review">In Review</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2">
                <Switch
                  id="zero-balances"
                  size="sm"
                  checked={showZeroBalances}
                  onCheckedChange={setShowZeroBalances}
                />
                <Label
                  htmlFor="zero-balances"
                  className="text-sm font-normal text-muted-foreground"
                >
                  Show zero balances
                </Label>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search accounts..."
                  className="h-9 w-60 pl-9 text-sm"
                />
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Columns3 className="h-4 w-4" />
                    Columns
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle visible columns</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Advanced
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Advanced filters</TooltipContent>
              </Tooltip>

              {/* Review Notes Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquareText className="h-4 w-4" />
                    Review Notes
                    <Badge
                      variant="default"
                      className="ml-1 h-5 min-w-5 rounded-full px-1.5 text-[10px]"
                    >
                      {reviewNotes.length}
                    </Badge>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Review Notes</SheetTitle>
                    <SheetDescription>
                      Comments and review feedback from team members.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex-1 overflow-auto px-4">
                    <div className="space-y-4">
                      {reviewNotes.map((note, i) => (
                        <div key={i} className="rounded-lg border p-3">
                          <div className="flex items-center gap-2">
                            <Avatar size="sm">
                              <AvatarFallback className="bg-primary text-[10px] font-semibold text-white">
                                {note.author}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{note.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {note.time} &middot; Account {note.account}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {note.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <SheetFooter>
                    <div className="w-full space-y-3">
                      <Separator />
                      <div className="grid gap-2">
                        <Label htmlFor="new-note">Add a note</Label>
                        <Textarea
                          id="new-note"
                          placeholder="Write a review comment..."
                          rows={3}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button size="sm" className="gap-2">
                          <Send className="h-3.5 w-3.5" />
                          Post Note
                        </Button>
                      </div>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* ── Selected Row Actions ── */}
          {selectedRows.size > 0 && (
            <div className="mx-8 mb-3">
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>
                  {selectedRows.size} account
                  {selectedRows.size > 1 ? "s" : ""} selected
                </AlertTitle>
                <AlertDescription>
                  <div className="flex items-center gap-2 mt-1">
                    <Button size="xs" variant="outline" className="gap-1.5">
                      <Eye className="h-3.5 w-3.5" />
                      View Details
                    </Button>
                    <Button size="xs" variant="outline" className="gap-1.5">
                      <Pencil className="h-3.5 w-3.5" />
                      Bulk Edit
                    </Button>
                    <Button
                      size="xs"
                      variant="destructive"
                      className="gap-1.5"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Remove
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* ── Data Table with Tabs ── */}
          <div className="flex-1 overflow-auto px-8 pb-8">
            <Tabs defaultValue="all-accounts">
              <TabsList>
                <TabsTrigger value="all-accounts">All Accounts</TabsTrigger>
                <TabsTrigger value="needs-review">
                  Needs Review
                  <Badge
                    variant="secondary"
                    className="ml-1.5 h-5 min-w-5 rounded-full px-1.5 text-[10px]"
                  >
                    3
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
              </TabsList>

              <TabsContent value="all-accounts" className="mt-4">
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-12">
                          <Checkbox
                            checked={
                              selectedRows.size === tableData.length
                                ? true
                                : selectedRows.size > 0
                                  ? "indeterminate"
                                  : false
                            }
                            onCheckedChange={toggleAll}
                          />
                        </TableHead>
                        <TableHead className="min-w-[280px] font-semibold">
                          Description
                        </TableHead>
                        <TableHead className="font-semibold">Entity</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        {columns.map((col) => (
                          <TableHead
                            key={col.key}
                            className="min-w-[120px] text-right font-semibold"
                          >
                            {col.label}
                          </TableHead>
                        ))}
                        <TableHead className="w-12" />
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* Group Header */}
                      <TableRow className="bg-muted/30 hover:bg-muted/30">
                        <TableCell
                          colSpan={columns.length + 5}
                          className="py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          <div className="flex items-center gap-1.5">
                            <ChevronDown className="h-3.5 w-3.5" />
                            Consolidated
                          </div>
                        </TableCell>
                      </TableRow>

                      {/* Data Rows */}
                      {tableData.map((row) => {
                        const sc = statusConfig[row.status];
                        return (
                          <TableRow
                            key={row.id}
                            className="hover:bg-muted/20"
                            data-state={
                              selectedRows.has(row.id) ? "selected" : undefined
                            }
                          >
                            <TableCell>
                              <Checkbox
                                checked={selectedRows.has(row.id)}
                                onCheckedChange={() => toggleRow(row.id)}
                              />
                            </TableCell>
                            <TableCell className="text-sm font-medium">
                              {row.description}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {row.entity}
                            </TableCell>
                            <TableCell>
                              <Badge className={sc.className}>{sc.label}</Badge>
                            </TableCell>
                            {columns.map((col) => (
                              <TableCell
                                key={col.key}
                                className="text-right text-sm tabular-nums"
                              >
                                {formatCurrency(
                                  row[col.key as keyof typeof row] as number
                                )}
                              </TableCell>
                            ))}
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Pencil className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Open in TB Manager
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        );
                      })}

                      {/* Grand Total Row */}
                      <TableRow className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                        <TableCell />
                        <TableCell className="text-sm font-bold">
                          GRAND TOTAL
                        </TableCell>
                        <TableCell />
                        <TableCell />
                        {columns.map((col) => (
                          <TableCell
                            key={col.key}
                            className="text-right text-sm font-bold tabular-nums"
                          >
                            {formatCurrency(totals[col.key])}
                          </TableCell>
                        ))}
                        <TableCell />
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="needs-review" className="mt-4">
                <div className="space-y-4">
                  {tableData
                    .filter(
                      (r) =>
                        r.status === "pending" ||
                        r.status === "in-review" ||
                        r.status === "rejected"
                    )
                    .map((row) => {
                      const sc = statusConfig[row.status];
                      return (
                        <Card key={row.id}>
                          <CardHeader>
                            <CardTitle className="text-sm">
                              {row.description}
                            </CardTitle>
                            <CardDescription>{row.entity}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-4">
                              <Badge className={sc.className}>{sc.label}</Badge>
                              <Separator
                                orientation="vertical"
                                className="h-4"
                              />
                              <span className="text-sm text-muted-foreground">
                                Book Adj:{" "}
                                <span className="font-medium text-foreground">
                                  {formatCurrency(row.bookAdjustment)}
                                </span>
                              </span>
                              <Separator
                                orientation="vertical"
                                className="h-4"
                              />
                              <span className="text-sm text-muted-foreground">
                                Tax Balance:{" "}
                                <span className="font-medium text-foreground">
                                  {formatCurrency(row.taxAdjBalance)}
                                </span>
                              </span>
                            </div>
                            {row.status === "rejected" && (
                              <Alert variant="destructive" className="mt-3">
                                <TriangleAlert className="h-4 w-4" />
                                <AlertTitle>Action Required</AlertTitle>
                                <AlertDescription>
                                  This adjustment was rejected. Please revise
                                  and resubmit with supporting documentation.
                                </AlertDescription>
                              </Alert>
                            )}
                          </CardContent>
                          <CardFooter className="gap-2 border-t">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">
                              {row.status === "rejected"
                                ? "Revise & Resubmit"
                                : "Approve"}
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                </div>
              </TabsContent>

              <TabsContent value="approved" className="mt-4">
                <div className="rounded-lg border p-8 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-green-500" />
                  <p className="mt-3 text-sm font-medium">
                    {approvedCount} accounts approved
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    All approved accounts have been verified and are ready for
                    filing.
                  </p>
                  <div className="mt-4">
                    <Progress value={completionPct} className="mx-auto max-w-xs" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      {completionPct}% of accounts reviewed
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}
