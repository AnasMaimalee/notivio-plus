export default function Topbar() {
  return (
    <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-6 bg-white dark:bg-neutral-900">
      
      <h2 className="font-semibold text-lg">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-neutral-500">
          anas
        </span>

        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>

    </header>
  )
}
