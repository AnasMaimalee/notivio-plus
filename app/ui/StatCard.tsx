interface StatCardProps {
  title: string
  value: string
  accent: string
}

export default function StatCard({ title, value, accent }: StatCardProps) {
  return (
    <div className="
      relative overflow-hidden rounded-2xl
      bg-white dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800
      p-6
    ">
      
      {/* Accent bar */}
      <div
        className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${accent}`}
      />

      <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        {value}
      </p>
    </div>
  )
}
