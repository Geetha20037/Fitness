import {
  Activity,
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Workouts", href: "#workouts" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Progress", href: "#progress" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-anchor border-t border-[#2b3027] bg-[#0c0e0b]"
    >
      <div className="page-container py-10 sm:py-14">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c1fa70] text-[#11140d]">
                <Activity size={21} />
              </span>
              <span className="font-display text-xl font-extrabold">
                PULSE<span className="text-[#c1fa70]">FIT</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#858b7e]">
              Small steps. Strong habits. A healthier you. Your daily
              companion for a more balanced fitness journey.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30362b] text-[#aeb4a5] transition-colors hover:border-[#c1fa70] hover:text-[#c1fa70]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30362b] text-[#aeb4a5] transition-colors hover:border-[#c1fa70] hover:text-[#c1fa70]"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:hello@pulsefit.example"
                aria-label="Email PULSEFIT"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#30362b] text-[#aeb4a5] transition-colors hover:border-[#c1fa70] hover:text-[#c1fa70]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Quick links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-[#858b7e] transition-colors hover:text-[#c1fa70]"
                  >
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Get in touch</h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:hello@pulsefit.example"
                className="flex items-start gap-3 text-sm text-[#858b7e] hover:text-[#c1fa70]"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />
                hello@pulsefit.example
              </a>
              <div className="flex items-start gap-3 text-sm leading-6 text-[#858b7e]">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                Your fitness journey starts wherever you are.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2b3027] pt-5 text-xs text-[#777e70] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PULSEFIT. All rights reserved.</p>
          <a
            href="#home"
            className="text-[#aeb4a5] transition-colors hover:text-[#c1fa70]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}