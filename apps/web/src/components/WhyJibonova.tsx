const benefits = [
  {
    icon: "🤖",
    title: "Smart AI Assistance",
    description:
      "Ask questions and organize everyday tasks with intelligent assistance.",
  },
  {
    icon: "🇧🇩",
    title: "Built for Bangladesh",
    description:
      "Designed around the everyday needs of people across Bangladesh.",
  },
  {
    icon: "🛡️",
    title: "Simple & Secure",
    description:
      "A clean and easy experience with privacy and security in mind.",
  },
];

export default function WhyJibonova() {
  return (
    <section className="bg-blue-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200">
            WHY JIBONOVA?
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            One Platform.
            <span className="block text-blue-400">
              A Simpler Everyday Life.
            </span>
          </h2>

          <p className="mt-5 text-slate-300">
            Jibonova brings useful digital tools and everyday services
            together in one simple experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="text-4xl">{benefit.icon}</div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}