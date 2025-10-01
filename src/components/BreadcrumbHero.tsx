type Props = {
  title: string;
  subtitle?: string;
};

export default function BreadcrumbHero({ title, subtitle }: Props) {
  return (
    <section className="relative h-[44vh] min-h-[320px]">
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="mx-auto max-w-7xl h-full px-4 flex items-end pb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h1>
          {subtitle && <p className="mt-2 text-neutral-200 max-w-2xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
