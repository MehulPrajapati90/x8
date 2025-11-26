import SidebarWrapper from "@/components/dashboard/sidebar-wrapper";
import { AppBar } from "@/components/dashboard/app-bar";

function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarWrapper>
      <AppBar />
      <div className="flex-1 overflow-y-auto bg-neutral-950 p-6 text-neutral-200">
        {children}
      </div>
    </SidebarWrapper>
  );
}

export default DashboardLayout;