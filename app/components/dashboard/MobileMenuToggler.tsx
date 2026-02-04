"use client";

interface MobileMenuTogglerProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function MobileMenuToggler({ open, setOpen }: MobileMenuTogglerProps) {
  return (
    <button
      className="md:hidden fixed top-4 left-4 z-30 p-2 bg-emerald-600 text-white rounded-md"
      onClick={() => setOpen(!open)}
    >
      {open ? "✖" : "☰"}
    </button>
  );
}
