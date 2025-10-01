import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Tenders" };

export default function TendersPage() {
  return (
    <>
      <BreadcrumbHero title="Tenders" subtitle="Current opportunities and procurement notices." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>No open tenders yet. Please check back soon.</p>
      </main>
    </>
  );
}
