export default function ContactStrip() {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-extrabold">Talk to us</h3>
          <p className="mt-2 text-neutral-700">
            We’re here for individuals, stockvels, social clubs, spaza shops and SMMEs.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="tel:+27836841715" className="rounded-md bg-brand-black text-white px-5 py-3 font-semibold">
            Call: 083 684 1715
          </a>
          <a href="mailto:info@yarona.co.za" className="rounded-md border px-5 py-3 font-semibold">
            info@yarona.co.za
          </a>
        </div>
      </div>
    </section>
  );
}
