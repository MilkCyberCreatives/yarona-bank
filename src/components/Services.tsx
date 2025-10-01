import { FiShield, FiCreditCard, FiTrendingUp, FiBookOpen, FiLock } from "react-icons/fi";

const items = [
  { icon: FiCreditCard, title: "Affordable Bank Accounts", desc: "Low fees and practical features for everyday banking." },
  { icon: FiTrendingUp, title: "Savings & Investment", desc: "Grow your money with member-first savings and investment options." },
  { icon: FiShield, title: "Loans for Growth", desc: "Responsible personal and business loans, aligned to affordability." },
  { icon: FiLock, title: "Safe Deposit Services", desc: "Secure, compliant deposit and custodial services for members." },
  { icon: FiBookOpen, title: "Financial Education", desc: "Workshops and guides that build a culture of saving and smart money use." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">Our Services</h2>
        <p className="mt-2 text-neutral-600">Everything you need to bank better—built around people and communities.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border p-6 hover:shadow-md transition">
              <it.icon className="h-7 w-7 text-brand-black" />
              <h3 className="mt-4 font-bold">{it.title}</h3>
              <p className="mt-2 text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
