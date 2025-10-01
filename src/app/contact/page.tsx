import BreadcrumbHero from "@/components/BreadcrumbHero";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <BreadcrumbHero title="Contact" subtitle="Talk to us about accounts, savings or loans." />
      <main className="mx-auto max-w-7xl px-4 py-12 text-neutral-200">
        <p className="mb-4"><strong className="text-white">Phone:</strong> <a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="tel:+27836841715">083 684 1715</a></p>
        <p className="mb-8"><strong className="text-white">Email:</strong> <a className="underline decoration-[var(--brand-gold)] underline-offset-4" href="mailto:info@yarona.co.za">info@yarona.co.za</a></p>
        <a href="https://wa.me/27836841715" className="inline-block rounded-md bg-[var(--brand-gold)] text-black px-6 py-3 font-semibold">WhatsApp: Open Account</a>
      </main>
    </>
  );
}
