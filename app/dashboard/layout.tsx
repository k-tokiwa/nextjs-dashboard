// app/dashboard/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { Sidebar as AppSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
// import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <NuqsAdapter>
      <SidebarProvider
      style={{
    "--sidebar-width": "10rem",
    "--sidebar-width-mobile": "8rem",
  } as React.CSSProperties}>
        <div className="flex h-screen w-full">
          <AppSidebar />
          <main className="flex-1 flex flex-col overflow-hidden">
            <header className="flex h-14 items-center gap-4 border-b px-6">
              <SidebarTrigger /> {/* これで開閉ボタンが付きます */}
              <h1 className="font-semibold">概要</h1>
            </header>
            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    // </NuqsAdapter>
  )
}