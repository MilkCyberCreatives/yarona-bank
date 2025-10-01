"use client";

import { useEffect } from "react";
import { orgSchema, navSchema, faqSchema } from "@/lib/schema";

export default function Hero() {
  useEffect(() => {
    const add = (obj: any) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    };
    add(orgSchema); add(navSchema); add(faqSchema);
  }, []);

  return (
    <section className="relative w-full h-screen" id="about">
      {/* Background image */}
      <img
        src="/images/hero.jpg"
        alt="Professional banking"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Gradient overlay to boost text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-black/70 via-black/40 to-black/10" />

      {/* Hero Content aligned right, lowered to middle */}
      <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-end">
        <div className="max-w-xl text-right translate-y-16">
          <p className="inline-block rounded-full glass-dark px-3 py-1 text-[11px] tracking-wide border-soft">
            Proudly Black-owned • Serving South Africa
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
            A Bank by the People,{" "}
            <span className="text-[var(--brand-gold)]">for the People</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-neutral-200">
            Changing Lives. Empowering Communities. Whether you’re an individual,
            stockvel, social club, spaza shop, or small business—YA-RONA is your
            gateway to real financial freedom.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-end justify-end gap-3">
            <a
              href="/contact"
              className="rounded-md bg-[var(--brand-gold)] text-black px-6 py-3 font-semibold shadow hover:shadow-lg transition"
            >
              Open an account (R50)
            </a>
            <a
              href="/services"
              className="rounded-md glass-dark border-soft px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Explore services
            </a>
          </div>

          {/* Contact line */}
          <p className="mt-6 text-sm text-neutral-200">
            <span className="font-semibold text-white">Contact:</span> Zacharia Rantseli —{" "}
            <a
              href="tel:+27836841715"
              className="underline decoration-[var(--brand-gold)] underline-offset-4 hover:text-[var(--brand-gold)]"
            >
              083 684 1715
            </a>
          </p>
        </div>
      </div>

      {/* Bottom strap */}
      <div className="absolute bottom-0 left-0 right-0 glass-dark">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-xs text-neutral-200">
          “Join today and be part of a financial revolution.”
        </div>
      </div>
    </section>
  );
}
