import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <BreadcrumbHero title="About YA-RONA" subtitle="Member-owned, people-first banking." />
      <main className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-neutral-200">
          YA-RONA Co-operative Bank SA is a proudly Black-owned, member-driven financial institution…
        </p>
      </main>
    </>
  );
}
