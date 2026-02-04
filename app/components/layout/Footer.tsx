export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-500 font-semibold">
            CodeBridge Technology
          </span>
          . All rights reserved.
        </p>

        <p className="text-sm">
          Building modern web solutions with React, Laravel & Vue.
        </p>
      </div>
    </footer>
  )
}