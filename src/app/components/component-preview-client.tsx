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
  Copy,
  Edit,
  MoreHorizontal,
  Share,
  Trash2,
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
