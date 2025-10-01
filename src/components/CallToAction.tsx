export default function CallToAction() {
  return (
    <section id="apply" className="py-16 bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to unlock real financial freedom?
        </h2>
        <p className="mt-3 text-neutral-200">
          Join our co-operative community. One bank. One people. One future.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://forms.gle/" /* replace with your form/onboarding */
            className="rounded-md bg-brand-gold text-black px-6 py-3 font-semibold"
          >
            Start Application
          </a>
          <a
            href="https://wa.me/27836841715"
            className="rounded-md border border-white/70 px-6 py-3 font-semibold hover:bg-white/10"
          >
            WhatsApp Zacharia
          </a>
        </div>
        <p className="mt-4 text-xs opacity-80">Joining fee: R50 • T&Cs apply</p>
      </div>
    </section>
  );
}
