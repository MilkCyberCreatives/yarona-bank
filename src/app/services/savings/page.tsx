import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Savings & Investments" };

export default function SavingsPage() {
  return (
    <>
      <BreadcrumbHero title="Savings & Investments" subtitle="Goal-based savings and fixed deposits to grow your money." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>Member-first savings products with competitive, transparent terms.</p>
      </main>
    </>
  );
}
