import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="
      min-h-screen flex items-center justify-center px-6
      bg-slate-50 dark:bg-neutral-950 transition-colors
    ">
      <div className="
        w-full max-w-md p-8 rounded-2xl
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        shadow-sm
      ">

        <h1 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-400">
          Welcome back
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Sign in to continue
        </p>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="
              w-full px-4 py-3 rounded-lg
              bg-neutral-100 dark:bg-neutral-800
              text-neutral-900 dark:text-neutral-100
              outline-none focus:ring-2 focus:ring-emerald-500/40
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full px-4 py-3 rounded-lg
              bg-neutral-100 dark:bg-neutral-800
              text-neutral-900 dark:text-neutral-100
              outline-none focus:ring-2 focus:ring-emerald-500/40
            "
          />

          <button
            className="
              w-full py-3 rounded-lg
              bg-emerald-600 text-white font-semibold
              hover:bg-emerald-500 transition
            "
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-6 text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-emerald-600 hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}
