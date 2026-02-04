/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",
        accent: "#E9C46A",
        background: "#F8F5F2",
        surface: "#FFFFFF",
        ink: "#1F2937",
        dark: {
          bg: "#0F172A",
          surface: "#111827",
          ink: "#E5E7EB",
        },
      },
    },
  },
};
