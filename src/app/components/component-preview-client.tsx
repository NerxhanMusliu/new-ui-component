"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner";
import {
  Bold,
  Copy,
  Edit,
  Italic,
  MoreHorizontal,
  Share,
  Strikethrough,
  Trash2,
  Underline,
} from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Entity</DialogTitle>
          <DialogDescription>
            Add a new entity to your tax return. Fill out the details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="entity-name">Entity Name</Label>
            <Input id="entity-name" placeholder="Enter entity name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ein">EIN</Label>
            <Input id="ein" placeholder="XX-XXXXXXX" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Entity</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Review Notes</SheetTitle>
          <SheetDescription>
            View and manage review notes for this return.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-auto px-4">
          <div className="space-y-4">
            {[
              { author: "JD", note: "Verify depreciation schedule for Q4.", time: "2 hours ago" },
              { author: "SK", note: "Client confirmed investment basis.", time: "Yesterday" },
              { author: "JD", note: "Need to reconcile intercompany balances.", time: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border p-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.author}</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <SheetFooter>
          <Button className="w-full">Add Note</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Edit className="h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="h-4 w-4" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share className="h-4 w-4" />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive">
          <Trash2 className="h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        {(["top", "bottom", "left", "right"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">
                {side.charAt(0).toUpperCase() + side.slice(1)}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export function SelectDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <div className="grid gap-2">
        <Label>Entity Type</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="c-corp">C Corporation</SelectItem>
            <SelectItem value="s-corp">S Corporation</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="llc">LLC</SelectItem>
            <SelectItem value="sole-prop">Sole Proprietorship</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Tax Year</Label>
        <Select defaultValue="2024">
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function CheckboxDemo() {
  return (
    <div className="space-y-3">
      {[
        { id: "book-adj", label: "Book Adjustments", defaultChecked: true },
        { id: "tax-reclass", label: "Tax Reclassifications", defaultChecked: true },
        { id: "eliminations", label: "Eliminations", defaultChecked: false },
        { id: "perm-diff", label: "Permanent Differences", defaultChecked: false },
      ].map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <Checkbox id={item.id} defaultChecked={item.defaultChecked} />
          <Label htmlFor={item.id}>{item.label}</Label>
        </div>
      ))}
    </div>
  );
}

export function SwitchDemo() {
  const [notifications, setNotifications] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-8">
        <div>
          <Label>Email Notifications</Label>
          <p className="text-sm text-muted-foreground">Receive updates via email</p>
        </div>
        <Switch checked={notifications} onCheckedChange={setNotifications} />
      </div>
      <Separator />
      <div className="flex items-center justify-between gap-8">
        <div>
          <Label>Auto-save</Label>
          <p className="text-sm text-muted-foreground">Automatically save changes</p>
        </div>
        <Switch checked={autoSave} onCheckedChange={setAutoSave} />
      </div>
    </div>
  );
}

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a Trial Balance?</AccordionTrigger>
        <AccordionContent>
          A trial balance is a bookkeeping worksheet listing the balances of all
          ledgers compiled into debit and credit columns. It serves as a
          checkpoint to ensure total debits equal total credits.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How are book adjustments handled?</AccordionTrigger>
        <AccordionContent>
          Book adjustments are entered as journal entries that modify the
          unadjusted balance. Each adjustment requires supporting documentation
          and partner approval before it is applied.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is the review workflow?</AccordionTrigger>
        <AccordionContent>
          Accounts move through Pending, In Review, and Approved/Rejected
          statuses. Reviewers can add notes, request changes, or approve each
          account individually.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the account and all associated
            adjustments. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="book">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="book" id="r1" />
        <Label htmlFor="r1">Book Adjustment</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="tax-reclass" id="r2" />
        <Label htmlFor="r2">Tax Reclassification</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="permanent" id="r3" />
        <Label htmlFor="r3">Permanent Difference</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="temporary" id="r4" />
        <Label htmlFor="r4">Temporary Difference</Label>
      </div>
    </RadioGroup>
  );
}

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-1">
            <h4 className="font-medium text-sm">Account Details</h4>
            <p className="text-sm text-muted-foreground">
              Quick view of account information.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs text-muted-foreground">Account</Label>
              <span className="col-span-2 text-sm">10000 - BOA Chk 4837</span>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs text-muted-foreground">Entity</Label>
              <span className="col-span-2 text-sm">Baker Tilly LLC</span>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs text-muted-foreground">Balance</Label>
              <span className="col-span-2 text-sm font-medium">$18,500</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" onClick={() => toast("Adjustment saved successfully.")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Account approved and locked.")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Failed to save adjustment.")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.info("Review deadline is March 15.")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("2 accounts still need review.")}>
        Warning
      </Button>
    </div>
  );
}

export function SliderDemo() {
  const [value, setValue] = React.useState([50]);
  const [range, setRange] = React.useState([25, 75]);

  return (
    <div className="space-y-8 max-w-sm">
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <Label>Single value</Label>
          <span className="text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
      <Separator />
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <Label>Range</Label>
          <span className="text-muted-foreground">
            {range[0]} – {range[1]}
          </span>
        </div>
        <Slider value={range} onValueChange={setRange} max={100} step={1} />
      </div>
    </div>
  );
}

export function ToggleDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Individual toggles</p>
        <div className="flex items-center gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
      <Separator />
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Toggle Group (multiple)</p>
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
          <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
            <Strikethrough className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <Separator />
      <div>
        <p className="mb-3 text-sm text-muted-foreground">Toggle Group (single, outline)</p>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
