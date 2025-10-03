"use client";

import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const linkCls =
    "block rounded-lg px-4 py-3 text-base font-medium hover:bg-white/10 transition";

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
        // FULL SCREEN, SOLID BLACK, ABOVE TOPBAR/HEADER
        <div className="fixed inset-0 z-[100] bg-black text-white">
          {/* Drawer header (solid) */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black">
            <Image src="/logo.svg" alt="YA-RONA" width={120} height={40} />
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <FiX size={28} />
            </button>
          </div>

          {/* NAV AREA (solid) */}
          <nav className="p-2 bg-black h-[calc(100vh-64px)] overflow-y-auto">
            <Link href="/" onClick={() => setOpen(false)} className={linkCls}>
              Home
            </Link>

            {/* Services group (solid background for submenu) */}
            <button
              onClick={() => toggle("services")}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold"
            >
              Services{" "}
              <FiChevronDown
                className={`transition ${openGroup === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {openGroup === "services" && (
              <div className="pl-2 bg-black">
                <Link href="/services" onClick={() => setOpen(false)} className={linkCls}>
                  Overview
                </Link>
                <Link href="/services/accounts" onClick={() => setOpen(false)} className={linkCls}>
                  Bank Accounts
                </Link>
                <Link href="/services/savings" onClick={() => setOpen(false)} className={linkCls}>
                  Savings & Investments
                </Link>
                <Link href="/services/loans" onClick={() => setOpen(false)} className={linkCls}>
                  Loan Facilities
                </Link>
                <Link href="/services/safe-deposit" onClick={() => setOpen(false)} className={linkCls}>
                  Safe Deposit
                </Link>
                <Link href="/services/education" onClick={() => setOpen(false)} className={linkCls}>
                  Financial Education
                </Link>
                <Link href="/services/taxi-sector" onClick={() => setOpen(false)} className={linkCls}>
                  Taxi Sector
                </Link>
              </div>
            )}

            <Link href="/about" onClick={() => setOpen(false)} className={linkCls}>
              About
            </Link>
            <Link href="/csi" onClick={() => setOpen(false)} className={linkCls}>
              CSI
            </Link>
            <Link href="/tenders" onClick={() => setOpen(false)} className={linkCls}>
              Tenders
            </Link>
            <Link href="/careers" onClick={() => setOpen(false)} className={linkCls}>
              Careers
            </Link>

            {/* Resources group */}
            <button
              onClick={() => toggle("resources")}
              className="w-full flex items-center justify-between px-4 py-3 font-semibold"
            >
              Resources{" "}
              <FiChevronDown
                className={`transition ${openGroup === "resources" ? "rotate-180" : ""}`}
              />
            </button>
            {openGroup === "resources" && (
              <div className="pl-2 bg-black">
                <Link href="/resources" onClick={() => setOpen(false)} className={linkCls}>
                  Overview
                </Link>
                <Link href="/resources/faqs" onClick={() => setOpen(false)} className={linkCls}>
                  FAQs
                </Link>
                <Link href="/resources/downloads" onClick={() => setOpen(false)} className={linkCls}>
                  Downloads
                </Link>
                <Link href="/resources/news" onClick={() => setOpen(false)} className={linkCls}>
                  News & Updates
                </Link>
              </div>
            )}

            <Link href="/contact" onClick={() => setOpen(false)} className={linkCls}>
              Contact
            </Link>

            <div className="px-4 pt-2 pb-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-md bg-[var(--brand-gold)] text-black px-4 py-3 font-semibold"
              >
                Open Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
