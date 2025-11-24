"use client";

import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";

export function AppBar() {
  return (
    <header className="h-14 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur flex items-center justify-between px-4">
      <div className="text-sm font-medium text-neutral-300">
        Production
      </div>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search..."
          className="h-8 bg-neutral-900 border-neutral-800 text-neutral-200 placeholder-neutral-500"
        />
        <Bell className="h-5 w-5 text-neutral-400" />
        <User className="h-5 w-5 text-neutral-400" />
      </div>
    </header>
  );
}
