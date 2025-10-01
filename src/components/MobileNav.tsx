"use client";

import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const linkCls = "block rounded-lg px-4 py-3 text-base font-medium hover:bg-neutral-100";

  const toggle = (key: string) => setOpenGroup(prev => (prev === key ? null : key));

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-2 rounded-md border border-white/20"
      >
        <FiMenu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <img src="/logo.svg" alt="YA-RONA" className="h-8" />
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <FiX size={28} />
            </button>
          </div>

          <nav className="p-2">
            <a href="/" onClick={() => setOpen(false)} className={linkCls}>Home</a>

            {/* Services group */}
            <button
              onClick={() => toggle("services")}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold"
            >
              Services <FiChevronDown className={`transition ${openGroup==="services" ? "rotate-180" : ""}`} />
            </button>
            {openGroup === "services" && (
              <div className="pl-2">
                <a href="/services" onClick={() => setOpen(false)} className={linkCls}>Overview</a>
                <a href="/services/accounts" onClick={() => setOpen(false)} className={linkCls}>Bank Accounts</a>
                <a href="/services/savings" onClick={() => setOpen(false)} className={linkCls}>Savings & Investments</a>
                <a href="/services/loans" onClick={() => setOpen(false)} className={linkCls}>Loan Facilities</a>
                <a href="/services/safe-deposit" onClick={() => setOpen(false)} className={linkCls}>Safe Deposit</a>
                <a href="/services/education" onClick={() => setOpen(false)} className={linkCls}>Financial Education</a>
              </div>
            )}

            <a href="/about" onClick={() => setOpen(false)} className={linkCls}>About</a>
            <a href="/csi" onClick={() => setOpen(false)} className={linkCls}>CSI</a>
            <a href="/tenders" onClick={() => setOpen(false)} className={linkCls}>Tenders</a>
            <a href="/careers" onClick={() => setOpen(false)} className={linkCls}>Careers</a>

            {/* Resources group */}
            <button
              onClick={() => toggle("resources")}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold"
            >
              Resources <FiChevronDown className={`transition ${openGroup==="resources" ? "rotate-180" : ""}`} />
            </button>
            {openGroup === "resources" && (
              <div className="pl-2">
                <a href="/resources" onClick={() => setOpen(false)} className={linkCls}>Overview</a>
                <a href="/resources/faqs" onClick={() => setOpen(false)} className={linkCls}>FAQs</a>
                <a href="/resources/downloads" onClick={() => setOpen(false)} className={linkCls}>Downloads</a>
                <a href="/resources/news" onClick={() => setOpen(false)} className={linkCls}>News & Updates</a>
              </div>
            )}

            <a href="/contact" onClick={() => setOpen(false)} className={linkCls}>Contact</a>

            <div className="px-4 pt-2 pb-6">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-md bg-[var(--brand-gold)] text-black px-4 py-3 font-semibold"
              >
                Open Account
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
