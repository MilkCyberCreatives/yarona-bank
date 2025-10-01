"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function MainHeader() {
  const [open, setOpen] = useState<string | null>(null);

  const itemCls =
    "px-3 py-2 rounded hover:bg-white/5 transition text-sm font-medium whitespace-nowrap";

  return (
    <header className="absolute top-9 left-0 w-full z-40 glass-dark text-white">
      <div className="mx-auto max-w-7xl h-20 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="YA-RONA"
            width={160}
            height={50}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className={itemCls}>Home</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen("services")}
            onMouseLeave={() => setOpen(null)}
          >
            <Link href="/services" className={itemCls}>Services</Link>
            <div
              className={`absolute left-0 mt-2 min-w-[280px] rounded-xl glass-dark border-soft p-2 shadow-lg
                         ${open === "services" ? "block" : "hidden"} group-hover:block`}
            >
              <Link href="/services/accounts" className={itemCls + " block"}>Bank Accounts</Link>
              <Link href="/services/savings" className={itemCls + " block"}>Savings & Investments</Link>
              <Link href="/services/loans" className={itemCls + " block"}>Loan Facilities</Link>
              <Link href="/services/safe-deposit" className={itemCls + " block"}>Safe Deposit</Link>
              <Link href="/services/education" className={itemCls + " block"}>Financial Education</Link>
            </div>
          </div>

          <Link href="/about" className={itemCls}>About</Link>
          <Link href="/csi" className={itemCls}>CSI</Link>
          <Link href="/tenders" className={itemCls}>Tenders</Link>
          <Link href="/careers" className={itemCls}>Careers</Link>

          {/* Resources Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen("resources")}
            onMouseLeave={() => setOpen(null)}
          >
            <Link href="/resources" className={itemCls}>Resources</Link>
            <div
              className={`absolute left-0 mt-2 min-w-[240px] rounded-xl glass-dark border-soft p-2 shadow-lg
                         ${open === "resources" ? "block" : "hidden"} group-hover:block`}
            >
              <Link href="/resources/faqs" className={itemCls + " block"}>FAQs</Link>
              <Link href="/resources/downloads" className={itemCls + " block"}>Downloads</Link>
              <Link href="/resources/news" className={itemCls + " block"}>News & Updates</Link>
            </div>
          </div>

          <Link href="/contact" className={itemCls}>Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-md bg-[var(--brand-gold)] text-black px-5 py-2 font-semibold shadow hover:shadow-lg transition"
          >
            Open Account
          </Link>
        </div>

        {/* Mobile */}
        <MobileNav />
      </div>
    </header>
  );
}
