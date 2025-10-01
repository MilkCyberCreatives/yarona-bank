import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Downloads" };

export default function DownloadsPage() {
  return (
    <>
      <BreadcrumbHero title="Downloads" subtitle="Application forms, pricing, and policy documents." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <ul className="space-y-3">
          <li><a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="#">Account Application (PDF)</a></li>
          <li><a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="#">Pricing & Fees (PDF)</a></li>
          <li><a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="#">POPIA Notice (PDF)</a></li>
        </ul>
      </main>
    </>
  );
}
