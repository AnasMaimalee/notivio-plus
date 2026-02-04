"use client";

import { useAuth } from "@/app/stores/useAuth";

export default function Topbar() {
  const { user, logout } = useAuth();

  if (!user) return null; // optional: hide if not logged in

  // Get initials for avatar
  const initials = user.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-6 bg-white dark:bg-neutral-900">
      
      <h2 className="font-semibold text-lg">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-500">
          {user.name}
        </span>

        <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
          {initials}
        </div>

        <button
          onClick={logout}
          className="ml-4 px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-500 transition text-sm"
        >
          Logout
        </button>
      </div>

    </header>
  );
}
