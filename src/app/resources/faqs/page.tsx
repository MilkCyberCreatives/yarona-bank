import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <>
      <BreadcrumbHero title="FAQs" subtitle="Helpful answers for new and existing members." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200 space-y-6">
        <div>
          <h3 className="font-bold text-white">How do I open an account?</h3>
          <p>Click “Open Account” and complete the steps, or visit an agent with SA ID & proof of address. Joining fee is R50.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Who can join?</h3>
          <p>Individuals, stockvels, social clubs, spaza shops, and SMMEs across South Africa.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Do you offer loans?</h3>
          <p>Yes—responsible personal and business lending subject to affordability and credit policy.</p>
        </div>
      </main>
    </>
  );
}
