"use client";

import { useState } from "react";
import { useAuth } from "@/app/stores/useAuth";
import SidebarItem from "./SidebarItem";
interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  expanded: boolean;
  setExpanded: (open: boolean) => void;
}

export default function Sidebar({ mobileOpen, setMobileOpen, expanded, setExpanded }: SidebarProps) {
  const { menus } = useAuth();

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 z-10 bg-black/20 md:hidden transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`
          fixed top-0 left-0 z-20 h-screen bg-white dark:bg-neutral-900
          border-r border-neutral-200 dark:border-neutral-800 p-4
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
          flex flex-col
          ${expanded ? "w-64" : "w-20"}
        `}
      >
        {/* Logo + Expand Button */}
        <div className="flex items-center justify-between mb-6">
          <h1
            className={`font-bold text-emerald-600 dark:text-emerald-400 truncate ${
              expanded ? "text-xl" : "text-2xl"
            }`}
          >
            KBase
          </h1>
          <button
            className="hidden md:block text-neutral-500 hover:text-emerald-600"
            onClick={toggleExpand}
          >
            {expanded ? "«" : "»"}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto space-y-2">
          {menus.map((menu: any) => (
            <SidebarItem
              key={menu.label}
              label={menu.label}
              route={menu.route}
              icon={menu.icon}
              expanded={expanded}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-4">
          {expanded && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} Notivio
            </p>
          )}
        </div>
      </aside>
    </>
  );
}
