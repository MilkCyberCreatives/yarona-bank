import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbHero title="Resources" subtitle="FAQs, forms, pricing and news." />
      <main className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-6">
        <a href="/resources/faqs" className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition">FAQs</a>
        <a href="/resources/downloads" className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition">Downloads</a>
        <a href="/resources/news" className="glass-dark border-soft p-6 rounded-xl hover:bg-white/10 transition">News & Updates</a>
      </main>
    </>
  );
}
