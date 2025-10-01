import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "News & Updates" };

export default function NewsPage() {
  return (
    <>
      <BreadcrumbHero title="News & Updates" subtitle="Announcements and media releases." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>There are no news items yet.</p>
      </main>
    </>
  );
}
