"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  const sidebarWidth = sidebarExpanded ? 256 : 80; // px

  // Detect screen size on client
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
      />

      {/* Main content */}
      <div
        className="flex-1 flex flex-col transition-all duration-300"
        style={{ marginLeft: isDesktop ? sidebarWidth : 0 }}
      >
        <Topbar
          setMobileOpen={setMobileOpen}
          sidebarWidth={isDesktop ? sidebarWidth : 0}
        />

        <main className="mt-16 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
