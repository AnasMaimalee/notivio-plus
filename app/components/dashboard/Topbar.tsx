"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/stores/useAuth";
import { FiLogOut, FiSettings } from "react-icons/fi";

interface TopbarProps {
  setMobileOpen: (open: boolean) => void;
  sidebarWidth: number;
}

export default function Topbar({ setMobileOpen, sidebarWidth }: TopbarProps) {
  const { user, logout } = useAuth();
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen width on client only
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="fixed top-0 right-0 h-16 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-6 bg-white dark:bg-neutral-900 z-30 transition-all duration-300"
      style={{ left: isDesktop ? sidebarWidth : 0 }}
    >
      {/* Mobile hamburger */}
      <button
        className="md:hidden text-neutral-700 dark:text-neutral-300"
        onClick={() => setMobileOpen(true)}
      >
        ☰
      </button>

      <h2 className="font-semibold text-lg">Dashboard</h2>

      {/* User profile dropdown */}
      <div className="relative group flex items-center gap-4 cursor-pointer">
        <span className="text-sm text-neutral-500">{user?.name || "User"}</span>
        <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>

        {/* Dropdown menu */}
        <div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <button
            className="flex items-center gap-2 px-4 py-2 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            onClick={() => alert("Go to settings")}
          >
            <FiSettings /> Settings
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            onClick={() => logout()}
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
    </header>
  );
}
