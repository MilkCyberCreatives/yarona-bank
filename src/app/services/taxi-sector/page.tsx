import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Taxi Sector" };

export default function TaxiSectorPage() {
  return (
    <>
      <BreadcrumbHero
        title="Taxi Sector Banking"
        subtitle="Tailored accounts, savings and finance solutions for taxi owners, drivers and associations."
      />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200 space-y-6">
        <section className="glass-dark border-soft p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white">What we offer</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2">
            <li>Low-fee business and association accounts</li>
            <li>Goal-based savings & fixed deposits for fleet upgrades</li>
            <li>Responsible finance options aligned to affordability</li>
            <li>Insurance & safe-deposit guidance (on request)</li>
            <li>Financial education for owners and drivers</li>
          </ul>
        </section>

        <section className="glass-dark border-soft p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white">Get started</h2>
          <p className="mt-2">
            Call{" "}
            <a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="tel:+27836841715">
              083 684 1715 (Zacharia)
            </a>{" "}
            or{" "}
            <a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="tel:+27670058292">
              067 005 8292 (Mrs Annie Matime)
            </a>
            . You can also use the{" "}
            <a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="/contact">
              contact page
            </a>{" "}
            to request a call-back.
          </p>
        </section>
      </main>
    </>
  );
}
