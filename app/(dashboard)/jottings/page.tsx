export default function JottingsPage() {
  return (
    <div className="h-[calc(100vh-4rem)] grid grid-cols-12 gap-0">

      {/* Sidebar */}
      <aside className="
        col-span-12 md:col-span-3 xl:col-span-2
        border-r border-neutral-200 dark:border-neutral-800
        bg-neutral-50 dark:bg-neutral-950
        p-4
      ">
        <h2 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-4">
          Courses
        </h2>

        <ul className="space-y-2">
          {["AI Fundamentals", "Cyber Security", "Web Systems"].map(course => (
            <li
              key={course}
              className="
                px-3 py-2 rounded-lg cursor-pointer
                text-sm
                hover:bg-neutral-200 dark:hover:bg-neutral-900
              "
            >
              {course}
            </li>
          ))}
        </ul>
      </aside>

      {/* Jottings List */}
      <section className="
        col-span-12 md:col-span-4 xl:col-span-3
        border-r border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-neutral-900
        p-4
      ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Jottings</h2>
          <button className="
            text-sm px-3 py-1 rounded-md
            bg-indigo-600 text-white
            hover:bg-indigo-500
          ">
            New
          </button>
        </div>

        <ul className="space-y-2">
          {["Intro to ML", "Neural Networks", "Threat Models"].map(note => (
            <li
              key={note}
              className="
                p-3 rounded-lg cursor-pointer
                hover:bg-neutral-100 dark:hover:bg-neutral-800
              "
            >
              <p className="font-medium text-sm">{note}</p>
              <p className="text-xs text-neutral-500">
                Updated 2 hours ago
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Editor */}
      <main className="col-span-12 md:col-span-5 xl:col-span-7 p-6">
        <input
          placeholder="Untitled jotting"
          className="
            w-full text-2xl font-bold mb-4
            bg-transparent outline-none
            text-neutral-900 dark:text-neutral-100
          "
        />

        <textarea
          placeholder="Start writing your notes here..."
          className="
            w-full h-[calc(100%-4rem)]
            resize-none outline-none
            bg-transparent
            text-neutral-700 dark:text-neutral-300
            leading-relaxed
          "
        />
      </main>

    </div>
  )
}
