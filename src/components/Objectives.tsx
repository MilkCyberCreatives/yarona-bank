export default function Objectives() {
  const points = [
    "Provide access to financial services for members",
    "Encourage a culture of savings",
    "Support community-based investments",
    "Offer secure loans and accept deposits",
  ];

  return (
    <section id="objectives" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Objectives</h2>
            <p className="mt-2 text-neutral-700">
              We exist to build intergenerational wealth through inclusive, member-owned banking.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-gold" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white border p-6">
            <h3 className="text-xl font-bold">Open an account for only R50</h3>
            <p className="mt-2 text-neutral-700">
              Becoming a member is simple. Bring your SA ID and proof of address—or start online and we’ll guide you.
            </p>
            <a
              href="#apply"
              className="mt-6 inline-block rounded-md bg-brand-gold text-black px-5 py-3 font-semibold"
            >
              Join YA-RONA Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
