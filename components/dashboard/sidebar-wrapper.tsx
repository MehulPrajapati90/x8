import { Sidebar } from "./sidebar";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />

      <main className="flex flex-col flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
