"use client";

import Link from "next/link";
import ThemeToggle from "@/app/components/theme-toggle";

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">

      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />

      {/* NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-emerald-600">Notivio</h1>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm hover:text-emerald-600">
            Sign in
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Capture ideas.
          <span className="block text-emerald-600 dark:text-emerald-400">
            Organize knowledge.
          </span>
        </h1>

        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Notivio is a focused jotting system built for deep thinking, learning,
          and long-term knowledge retention — not noise.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold
              hover:bg-emerald-500 transition"
          >
            Get started free
          </Link>

          <Link
            href="/login"
            className="px-8 py-4 rounded-xl border border-neutral-300 dark:border-neutral-700
              hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
          >
            Sign in
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          How <span className="text-emerald-600">Notivio</span> works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Create jottings", desc: "Write ideas, notes, or drafts without distraction." },
            { step: "2", title: "Organize & version", desc: "Group notes by topic and track how ideas evolve." },
            { step: "3", title: "Share securely", desc: "Collaborate with full control over access." },
          ].map(item => (
            <div
              key={item.step}
              className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800
                         bg-white dark:bg-neutral-900"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full
                              bg-emerald-600 text-white font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY I CREATED IT */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why I built <span className="text-emerald-600">Notivio</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Most note apps optimize for speed, not thinking.  
            As a developer and learner, I needed a tool that respects how ideas
            grow — slowly, imperfectly, and over time.  
            Notivio was born to support **clarity**, not clutter.
          </p>
        </div>
      </section>

      {/* USER FEEDBACK */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          What users say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah L.", text: "Notivio changed how I structure my study notes." },
            { name: "James T.", text: "The version history alone is a game changer." },
            { name: "Maria K.", text: "Clean, focused, and beautiful to use." },
          ].map(review => (
            <div
              key={review.name}
              className="p-8 rounded-2xl bg-white dark:bg-neutral-900
                         border border-neutral-200 dark:border-neutral-800"
            >
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                “{review.text}”
              </p>
              <span className="font-semibold text-emerald-600">
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME + PROJECTS */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About me</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I’m <strong>Anas Abdussalam</strong>, a frontend-focused developer
              passionate about building thoughtful, human-centered products.
              I enjoy turning complex ideas into clean, usable interfaces.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Projects I’ve worked on</h3>
            <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <li>• Role-based dashboard systems with Vue & Nuxt</li>
              <li>• Fintech interfaces for transactions and receipts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Notivio. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-emerald-600">About</Link>
            <Link href="#" className="hover:text-emerald-600">Contact</Link>
            <Link href="#" className="hover:text-emerald-600">Privacy</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
