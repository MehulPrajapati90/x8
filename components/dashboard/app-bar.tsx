"use client";

import { Input } from "@/components/ui/input";
import { Bell, Info, LogOut, Search, User, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Navigationitems } from "@/utils";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Hint from "@/components/ui/hint";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AppBar() {
  const user = useUser();
  const pathname = usePathname()?.split('/')?.pop();
  return (
    <header className="h-14 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium text-neutral-300 font-sans">
          <div className="text-sm font-medium text-neutral-300 font-sans px-4 border border-neutral-800 flex gap-3 items-center py-2 rounded-[30px] tracking-tight">
            {pathname ? pathname.charAt(0).toUpperCase() + pathname.slice(1) : ''}
          </div>
        </div>
        <div className="text-sm font-medium text-neutral-300 font-sans px-4 border border-neutral-800 bg-neutral-900 flex gap-3 items-center py-2 rounded-[30px]">
          {Navigationitems.map((val, idx: number) => (
            <Hint label={val.name} key={idx}>
              <Link href={val.href} key={idx}>
                <val.icon size={16} className={cn(`/${pathname}` === val.href && "text-red-500")} />
              </Link>
            </Hint>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center gap-2">
          <Hint label="Info">
            <Info size={15} strokeWidth={1.5} className="text-white mb-[2px]" />
          </Hint>
          <div className="text-[15px] font-sans text-neutral-400 mr-2">
            <p>Wellcome back! <span className="text-white">{user.user?.firstName}</span></p>
          </div>
        </div>
        <Hint label="Logout">
          <div className="h-7 w-7 rounded-full hover:bg-red-500/30 transition-all duration-200 ease-in-out bg-red-500/20 border border-red-500 flex items-center justify-center">
            <SignOutButton>
              <User className="h-4 w-4 text-red-500" />
            </SignOutButton>
          </div>
        </Hint>
      </div>
    </header>
  );
};