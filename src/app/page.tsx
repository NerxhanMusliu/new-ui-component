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
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const tableData = [
  {
    description: "10000 - BOA Chk 4837 - Operating",
    pyBalance: 15000,
    unadjustedBalance: 18500,
    bookAdjustment: 0,
    bookAdjBalance: 18500,
    taxReclassAdj: 0,
    taxReclassBal: 18500,
    eliminationAdj: 0,
    eliminationBal: 18500,
    permanentAdj: 0,
    temporaryAdj: 0,
    pyTaxAdj: 0,
    taxAdjBalance: 18500,
  },
  {
    description: "10215 - First Internet Chk 3746661835 - Grid...",
    pyBalance: 8200,
    unadjustedBalance: 12340,
    bookAdjustment: -1200,
    bookAdjBalance: 11140,
    taxReclassAdj: 0,
    taxReclassBal: 11140,
    eliminationAdj: 0,
    eliminationBal: 11140,
    permanentAdj: 0,
    temporaryAdj: 0,
    pyTaxAdj: 0,
    taxAdjBalance: 11140,
  },
  {
    description: "10220 - First Internet Chk 6195540933 - ...",
    pyBalance: 3400,
    unadjustedBalance: 5670,
    bookAdjustment: 0,
    bookAdjBalance: 5670,
    taxReclassAdj: 0,
    taxReclassBal: 5670,
    eliminationAdj: 0,
    eliminationBal: 5670,
    permanentAdj: 0,
    temporaryAdj: 0,
    pyTaxAdj: 0,
    taxAdjBalance: 5670,
  },
  {
    description: "11020 - Accounts Receivable (Trade)",
    pyBalance: 24500,
    unadjustedBalance: 31200,
    bookAdjustment: 2500,
    bookAdjBalance: 33700,
    taxReclassAdj: -1500,
    taxReclassBal: 32200,
    eliminationAdj: 0,
    eliminationBal: 32200,
    permanentAdj: 0,
    temporaryAdj: -3200,
    pyTaxAdj: 0,
    taxAdjBalance: 29000,
  },
  {
    description: "11030 - Interest receivable",
    pyBalance: 1200,
    unadjustedBalance: 1850,
    bookAdjustment: 0,
    bookAdjBalance: 1850,
    taxReclassAdj: 0,
    taxReclassBal: 1850,
    eliminationAdj: 0,
    eliminationBal: 1850,
    permanentAdj: -450,
    temporaryAdj: 0,
    pyTaxAdj: 0,
    taxAdjBalance: 1400,
  },
  {
    description: "12001 - Investments, capital calls funded",
    pyBalance: -45000,
    unadjustedBalance: -52000,
    bookAdjustment: 8500,
    bookAdjBalance: -43500,
    taxReclassAdj: 0,
    taxReclassBal: -43500,
    eliminationAdj: 12000,
    eliminationBal: -31500,
    permanentAdj: 0,
    temporaryAdj: 15200,
    pyTaxAdj: -2300,
    taxAdjBalance: -18600,
  },
  {
    description: "12005 - Investments, operating income/lo...",
    pyBalance: -12800,
    unadjustedBalance: -18200,
    bookAdjustment: 3200,
    bookAdjBalance: -15000,
    taxReclassAdj: 1500,
    taxReclassBal: -13500,
    eliminationAdj: 0,
    eliminationBal: -13500,
    permanentAdj: 6800,
    temporaryAdj: -4500,
    pyTaxAdj: 1800,
    taxAdjBalance: -9400,
  },
  {
    description: "12006 - Investments, unrealized gain/loss",
    pyBalance: -8700,
    unadjustedBalance: -15824,
    bookAdjustment: 11318,
    bookAdjBalance: -4506,
    taxReclassAdj: 0,
    taxReclassBal: -4506,
    eliminationAdj: -12000,
    eliminationBal: -16506,
    permanentAdj: -6350,
    temporaryAdj: -7500,
    pyTaxAdj: 500,
    taxAdjBalance: -29856,
  },
];

function formatCurrency(value: number): string {
  if (value < 0) {
    return `(${Math.abs(value).toLocaleString()})`;
  }
  return value.toLocaleString();
}

function computeTotals() {
  const keys = [
    "pyBalance",
    "unadjustedBalance",
    "bookAdjustment",
    "bookAdjBalance",
    "taxReclassAdj",
    "taxReclassBal",
    "eliminationAdj",
    "eliminationBal",
    "permanentAdj",
    "temporaryAdj",
    "pyTaxAdj",
    "taxAdjBalance",
  ] as const;
  const totals: Record<string, number> = {};
  for (const key of keys) {
    totals[key] = tableData.reduce((sum, row) => sum + row[key], 0);
  }
  return totals;
}

const columns = [
  { key: "pyBalance", label: "PY Balance" },
  { key: "unadjustedBalance", label: "Unadjusted Balance" },
  { key: "bookAdjustment", label: "Book Adjustment" },
  { key: "bookAdjBalance", label: "Book Adj Balance" },
  { key: "taxReclassAdj", label: "Tax Reclass Adj" },
  { key: "taxReclassBal", label: "Tax Reclass Bal" },
  { key: "eliminationAdj", label: "Elimination Adj" },
  { key: "eliminationBal", label: "Elimination Bal" },
  { key: "permanentAdj", label: "Permanent Adj" },
  { key: "temporaryAdj", label: "Temporary Adj" },
  { key: "pyTaxAdj", label: "PY Tax Adj" },
  { key: "taxAdjBalance", label: "Tax Adj Balance" },
];

export default function Home() {
  const totals = computeTotals();

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* Top Navigation Bar */}
      <header className="flex h-16 items-center justify-between bg-[#0A0A14] px-6 text-white">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white">
            <Menu className="h-5 w-5" />
          </Button>
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <span className="font-semibold text-[#4B9EFF]">HubSync</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>My Tasks</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white font-medium">
              Baker Tilly - 2024 Tax Return
            </span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Plus className="h-3.5 w-3.5" />
            Add Activity
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white" asChild>
            <Link href="/components">
              <Palette className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-white/70 hover:bg-white/10 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-[#1B4DDB] text-white text-xs font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Tab Navigation Row */}
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

      {/* Summary Banner */}
      <div className="flex items-center justify-between border-b bg-muted/50 px-8 py-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Net Taxable Income
          </span>
          <span className="text-xl font-bold">$16,464</span>
          <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            View Details
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Select View</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                Consolidated
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Consolidated</DropdownMenuItem>
              <DropdownMenuItem>By Entity</DropdownMenuItem>
              <DropdownMenuItem>By Tax Line</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-4 gap-5 px-8 py-6">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Net Taxable Income</p>
            <p className="mt-2 text-2xl font-bold">$16,464</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Book Income</p>
            <p className="mt-2 text-2xl font-bold">$56,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Total Adjustments</p>
            <p className="mt-2 text-2xl font-bold text-green-600">$24,318</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Effective Tax Rate
              </p>
              <Badge variant="secondary" className="text-xs">
                Federal
              </Badge>
            </div>
            <p className="mt-2 text-2xl font-bold">21.0%</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="mx-8" />

      {/* Table Toolbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Row Groups:
          </span>
          <Badge
            variant="secondary"
            className="gap-1.5 pl-3 pr-2 py-1 font-normal"
          >
            Entity Name
            <button className="ml-0.5 rounded-full hover:bg-muted">
              <X className="h-3 w-3" />
            </button>
          </Badge>
          <Badge
            variant="secondary"
            className="gap-1.5 pl-3 pr-2 py-1 font-normal"
          >
            Tax Line - TB
            <button className="ml-0.5 rounded-full hover:bg-muted">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="h-9 w-60 pl-9 text-sm"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Columns3 className="h-4 w-4" />
            Columns
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <MessageSquareText className="h-4 w-4" />
            Review Notes
            <Badge
              variant="default"
              className="ml-1 h-5 min-w-5 rounded-full px-1.5 text-[10px]"
            >
              27
            </Badge>
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 overflow-auto px-8 pb-8">
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="sticky left-0 z-10 min-w-[320px] bg-muted/50 font-semibold">
                  Description
                </TableHead>
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className="min-w-[130px] text-right font-semibold"
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* CONSOLIDATED Group Header */}
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableCell
                  colSpan={columns.length + 1}
                  className="py-2 font-semibold text-xs tracking-wider text-muted-foreground uppercase"
                >
                  <div className="flex items-center gap-1.5">
                    <ChevronDown className="h-3.5 w-3.5" />
                    Consolidated
                  </div>
                </TableCell>
              </TableRow>

              {/* Data Rows */}
              {tableData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/20">
                  <TableCell className="sticky left-0 z-10 bg-background font-medium text-sm">
                    {row.description}
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      className="text-right tabular-nums text-sm"
                    >
                      {formatCurrency(row[col.key as keyof typeof row] as number)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              {/* Grand Total Row */}
              <TableRow className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <TableCell className="sticky left-0 z-10 bg-primary font-bold text-sm">
                  GRAND TOTAL
                </TableCell>
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className="text-right tabular-nums text-sm font-bold"
                  >
                    {formatCurrency(totals[col.key])}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
