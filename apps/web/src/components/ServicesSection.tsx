const services = [
  {
    icon: "🏠",
    title: "Home Services",
    description: "Find trusted electricians, plumbers and repair services.",
  },
  {
    icon: "📄",
    title: "Document Help",
    description: "Get simple guidance for important documents and applications.",
  },
  {
    icon: "💳",
    title: "Bills & Payments",
    description: "Keep track of important bills and payment reminders.",
  },
  {
    icon: "🛒",
    title: "Daily Needs",
    description: "Organize your everyday tasks and essential needs.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            🇧🇩 Everyday Services
          </span>

          <h2 className="mt-5 text-4xl font-bold text-blue-950 md:text-5xl">
            Everything You Need, In One Place
          </h2>

          <p className="mt-4 text-slate-600">
            Discover useful services designed to make everyday life simpler.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <button className="mt-6 font-semibold text-blue-700 transition group-hover:text-blue-900">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}