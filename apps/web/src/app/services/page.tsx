import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "🏠",
    title: "Home Services",
    description: "Find useful home repair and maintenance services.",
  },
  {
    icon: "🤖",
    title: "AI Assistant",
    description: "Get smart assistance for your everyday questions and tasks.",
  },
  {
    icon: "📅",
    title: "Smart Reminders",
    description: "Organize important tasks, dates and daily reminders.",
  },
  {
    icon: "📄",
    title: "Document Guide",
    description: "Simple guidance for important documents and applications.",
  },
  {
    icon: "🛒",
    title: "Daily Needs",
    description: "Organize everyday needs and important activities.",
  },
  {
    icon: "🔎",
    title: "Find Services",
    description: "Discover useful services based on your needs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            JIBONOVA SERVICES
          </span>

          <h1 className="mt-6 text-4xl font-bold text-blue-950 md:text-6xl">
            Everyday Services,
            <span className="block text-blue-600">
              One Smart Platform.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore useful digital tools and services designed to make
            everyday life in Bangladesh simpler.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
              Explore Our Services
            </h2>

            <p className="mt-3 text-slate-600">
              Useful tools and services, designed for everyday life.
            </p>
          </div>

          {/* Service Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 font-semibold text-blue-700 transition hover:text-blue-950">
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}