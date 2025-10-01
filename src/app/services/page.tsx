import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Services" };

export default function ServicesOverview() {
  return (
    <>
      <BreadcrumbHero title="Services" subtitle="Accounts, savings, loans, safe deposit & education." />
      <main className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition" href="/services/accounts">Bank Accounts</a>
        <a className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition" href="/services/savings">Savings & Investments</a>
        <a className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition" href="/services/loans">Loan Facilities</a>
        <a className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition" href="/services/safe-deposit">Safe Deposit</a>
        <a className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition" href="/services/education">Financial Education</a>
      </main>
    </>
  );
}
