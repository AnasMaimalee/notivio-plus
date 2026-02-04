import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react"

const contacts = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/AnasMaimalee",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/anas-abdussalam-91a66a374",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/2348123442014",
    color: "hover:text-[#25D366]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:anasment6@gmail.com",
    color: "hover:text-[#EA4335]",
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-neutral-950 text-white relative overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="section-subtitle mb-4 text-emerald-400">
          Contact
        </p>

        <h2 className="section-title mb-6 text-white">
          Let’s work together
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Have a project, idea, or business need?  
          Reach out to CodeBridge Technology — I’d love to discuss how we can
          build something great together.
        </p>

        {/* ICONS */}
        <div className="flex justify-center gap-8 flex-wrap">
          {contacts.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex flex-col items-center gap-3
                text-gray-400 transition
                ${item.color}
              `}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-900 border border-neutral-800 group-hover:border-emerald-500 transition">
                <item.icon size={28} />
              </div>
              <span className="text-sm font-medium">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}