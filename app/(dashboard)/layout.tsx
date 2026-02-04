import "../globals.css"
import Sidebar from "../components/layout/Sidebar"
import Topbar from "../components/layout/TopBar"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        
        <main className="p-6">
          {children}
        </main>
      </div>

    </div>
  )
}
