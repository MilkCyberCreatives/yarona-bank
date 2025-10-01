export default function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.svg" alt="YA-RONA" className="h-9" />
          <p className="mt-3 text-sm text-neutral-600">
            YA-RONA Co-operative Bank SA — Generational Wealth Empowerment.
          </p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#objectives" className="hover:underline">Objectives</a></li>
            <li><a href="#apply" className="hover:underline">Apply / Join</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Compliance</h4>
          <p className="mt-2 text-sm text-neutral-600">
            Registered Co-operative Financial Institution (CFI). POPIA-aligned.  
            © {new Date().getFullYear()} YA-RONA.
          </p>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-neutral-600 text-center">
          “A Bank By The People, For The People.”
        </div>
      </div>
    </footer>
  );
}
