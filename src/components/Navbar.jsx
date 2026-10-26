import { useState } from "react";
import {
  Activity,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Workouts", href: "#workouts" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Progress", href: "#progress" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2b3027] bg-[#10120f]/95 backdrop-blur-xl">
      <nav className="page-container flex min-h-[72px] items-center justify-between gap-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="PULSEFIT home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c1fa70] text-[#11140d]">
            <Activity size={21} strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">
            PULSE<span className="text-[#c1fa70]">FIT</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[#a5aa9c] transition-colors hover:text-[#c1fa70]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#dashboard"
          className="btn-primary hidden min-h-[40px] px-4 sm:inline-flex"
        >
          Open dashboard <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#34392f] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#2b3027] bg-[#151712] p-4 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-[#b9beb1] transition-colors hover:bg-[#24281f] hover:text-[#c1fa70]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#dashboard"
              onClick={closeMenu}
              className="btn-primary mt-2"
            >
              Open dashboard
            </a>
          </div>
        </div>
      )}
    </header>
  );
}