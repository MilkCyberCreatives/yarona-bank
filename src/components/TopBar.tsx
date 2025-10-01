"use client";

import { FiPhoneCall, FiMail } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50 glass-dark text-white text-sm">
      <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <FiPhoneCall className="text-[var(--brand-gold)]" />
            <a href="tel:+27836841715" className="hover:text-[var(--brand-gold)] transition">
              083 684 1715
            </a>
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <FiMail className="text-[var(--brand-gold)]" />
            <a href="mailto:info@yarona.co.za" className="hover:text-[var(--brand-gold)] transition">
              info@yarona.co.za
            </a>
          </span>
        </div>

        {/* Now white instead of gold */}
        <span className="font-semibold text-white tracking-wide">
          Available Nationwide
        </span>
      </div>
    </div>
  );
}
