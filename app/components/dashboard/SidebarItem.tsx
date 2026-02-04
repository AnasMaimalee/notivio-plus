"use client";

import Link from "next/link";
import * as FiIcons from "react-icons/fi";

interface SidebarItemProps {
  label: string;
  icon?: string;
  route: string;
  expanded?: boolean;
  onClick?: () => void;
}

export default function SidebarItem({ label, icon, route, expanded = true, onClick }: SidebarItemProps) {
  // Ensure the icon matches react-icons/fi name, e.g., 'FiHome', 'FiBook'
  const IconComponent = icon ? (FiIcons as any)[icon] : null;

  return (
    <Link
      href={route}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-neutral-700 dark:text-neutral-300"
    >
      {IconComponent && <IconComponent className="w-5 h-5" />}
      {expanded && <span>{label}</span>}
    </Link>
  );
}
