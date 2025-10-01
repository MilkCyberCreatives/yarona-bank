import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Loan Facilities" };

export default function LoansPage() {
  return (
    <>
      <BreadcrumbHero title="Loan Facilities" subtitle="Responsible personal and business finance for growth." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>Affordable lending aligned to affordability and co-operative principles.</p>
      </main>
    </>
  );
}
