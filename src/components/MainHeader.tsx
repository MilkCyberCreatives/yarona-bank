"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";

export default function MainHeader() {
  const [open, setOpen] = useState<string | null>(null);

  const itemCls =
    "px-3 py-2 rounded hover:bg-white/5 transition text-sm font-medium whitespace-nowrap";

  return (
    <header className="absolute top-9 left-0 w-full z-40 glass-dark text-white">
      <div className="mx-auto max-w-7xl h-20 px-4 flex items-center justify-between">
        {/* Logo (slightly reduced per your last change) */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="YA-RONA" className="h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="/" className={itemCls}>Home</a>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(null)}
          >
            <a href="/services" className={itemCls}>Services</a>
            <div
              className={`absolute left-0 mt-2 min-w-[280px] rounded-xl glass-dark border-soft p-2 shadow-lg
                         ${open === "services" ? "block" : "hidden"} group-hover:block`}
            >
              <a href="/services/accounts" className={itemCls + " block"}>Bank Accounts</a>
              <a href="/services/savings" className={itemCls + " block"}>Savings & Investments</a>
              <a href="/services/loans" className={itemCls + " block"}>Loan Facilities</a>
              <a href="/services/safe-deposit" className={itemCls + " block"}>Safe Deposit</a>
              <a href="/services/education" className={itemCls + " block"}>Financial Education</a>
            </div>
          </div>

          <a href="/about" className={itemCls}>About</a>
          <a href="/csi" className={itemCls}>CSI</a>
          <a href="/tenders" className={itemCls}>Tenders</a>
          <a href="/careers" className={itemCls}>Careers</a>

          {/* Resources Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen("resources")}
            onMouseLeave={() => setOpen(null)}
          >
            <a href="/resources" className={itemCls}>Resources</a>
            <div
              className={`absolute left-0 mt-2 min-w-[240px] rounded-xl glass-dark border-soft p-2 shadow-lg
                         ${open === "resources" ? "block" : "hidden"} group-hover:block`}
            >
              <a href="/resources/faqs" className={itemCls + " block"}>FAQs</a>
              <a href="/resources/downloads" className={itemCls + " block"}>Downloads (Forms & Pricing)</a>
              <a href="/resources/news" className={itemCls + " block"}>News & Updates</a>
            </div>
          </div>

          <a href="/contact" className={itemCls}>Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="rounded-md bg-[var(--brand-gold)] text-black px-5 py-2 font-semibold shadow hover:shadow-lg transition"
          >
            Open Account
          </a>
        </div>

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  );
}
