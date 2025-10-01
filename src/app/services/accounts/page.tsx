import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Bank Accounts" };

export default function AccountsPage() {
  return (
    <>
      <BreadcrumbHero title="Bank Accounts" subtitle="Low fees, debit card access, digital channels." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>Everyday transactional accounts built for people and community groups.</p>
      </main>
    </>
  );
}
