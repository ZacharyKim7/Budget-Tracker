import { AppSidebar } from "@/components/sections/app-sidebar"
import { SiteHeader } from "@/components/sections/site-header"
import { Outlet } from "react-router"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="container mx-auto py-10">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
