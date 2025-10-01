import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "CSI" };

export default function CsiPage() {
  return (
    <>
      <BreadcrumbHero title="Corporate Social Investment" subtitle="Education, entrepreneurship and community upliftment." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>Our programmes are focused on savings education, youth & women empowerment, and SMME clinics.</p>
      </main>
    </>
  );
}
