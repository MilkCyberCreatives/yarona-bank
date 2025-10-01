import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Safe Deposit" };

export default function SafeDepositPage() {
  return (
    <>
      <BreadcrumbHero title="Safe Deposit" subtitle="Secure deposits and custodial services for members." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>Security, compliance and peace of mind for individuals and groups.</p>
      </main>
    </>
  );
}
