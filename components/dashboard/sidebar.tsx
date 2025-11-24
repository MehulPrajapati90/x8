"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Home, Database, Settings, PanelRight, Link as LucideLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { useState } from "react";

const items = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Tables", icon: Database, href: "/tables" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(true);

  console.log(pathname)
  return (
    <>
      {open ? (
        <aside
          className={cn(
            "h-full flex flex-col border-r border-neutral-800 bg-neutral-950 text-neutral-200 transition-all ease-in-out duration-200", open ? "w-60" : "w-0"
          )}
        >
          <div className="p-4 font-semibold text-lg tracking-tight flex items-center justify-between">
            <div className='flex items-center gap-1.5'>
              <LucideLink size={20} className='text-[#ff0066]' />
              <h2 className='text-[16px] font-sans tracking-tight font-semibold'>X8</h2>
            </div>
            <div onClick={() => setOpen((prev) => !prev)} className="p-1 hover:bg-neutral-700/40 rounded-[5px] transition-all ease-in-out duration-200">
              <PanelRight size={16} />
            </div>
          </div>
          <Separator className="bg-neutral-700/70" />

          <nav className="flex flex-col gap-1 px-2 py-5">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-neutral-800/70 transition", pathname === item.href && "bg-neutral-800/70")}
              >
                <item.icon className={cn("h-4 w-4")} />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-4 text-xs text-neutral-500 flex items-center justify-between">
            <p> {new Date().getFullYear()} © All Rights X8</p>
            {open && <UserButton />}
          </div>
        </aside>
      ) : (
        <aside
          className={cn(
            "h-full flex flex-col border-r border-neutral-800 bg-neutral-950 text-neutral-200 transition-all ease-in-out duration-200", open ? "w-0" : "w-15"
          )}
        >
          <div className="p-4 font-semibold text-lg tracking-tight flex items-center justify-between">
            <div onClick={() => setOpen((prev) => !prev)} className="p-1 hover:bg-neutral-700/40 rounded-[5px] transition-all ease-in-out duration-200">
              <PanelRight size={16} />
            </div>
          </div>
          <Separator className="bg-neutral-700/70" />

          <nav className="flex flex-col gap-1 px-2 py-5">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-neutral-800/70 transition", pathname === item.href && "bg-neutral-800/70")}
              >
                <item.icon className={cn("h-4 w-4")} />
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-4 text-xs text-neutral-500 flex items-center justify-between">
            <UserButton />
          </div>
        </aside>
      )}
    </>
  );
}
