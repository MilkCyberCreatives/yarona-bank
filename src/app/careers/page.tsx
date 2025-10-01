import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <BreadcrumbHero title="Careers" subtitle="Join a people-first bank building generational wealth." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>We list roles here when available. You’re welcome to send a CV to info@yarona.co.za.</p>
      </main>
    </>
  );
}
