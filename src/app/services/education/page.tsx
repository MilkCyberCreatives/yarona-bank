import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Financial Education" };

export default function EducationPage() {
  return (
    <>
      <BreadcrumbHero title="Financial Education" subtitle="Workshops and tools that build a culture of saving." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p>Practical financial literacy for members, youth, and SMMEs.</p>
      </main>
    </>
  );
}
