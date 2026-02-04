"use client"

import Link from "next/link"

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Jottings", href: "/dashboard/jottings" },
  { name: "Courses", href: "/dashboard/courses" },
  { name: "Shared", href: "/dashboard/shared" },
  { name: "Trash", href: "/dashboard/trash" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 p-5">
      
      <h1 className="text-xl font-bold mb-8 text-primary">
        KnowledgeBase
      </h1>

      <nav className="space-y-3">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-3 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>

    </aside>
  )
}
