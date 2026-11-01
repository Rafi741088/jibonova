import Navbar from "@/components/Navbar";
import AIAssistant from "@/components/AIAssistant";
import ReminderSection from "@/components/ReminderSection";
import ServicesSection from "@/components/ServicesSection";
import WhyJibonova from "@/components/WhyJibonova";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white px-6">

        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <span className="inline-block rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            ✨ Smart Digital Life Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-blue-950 md:text-7xl">
            Your Life,
            <span className="block text-blue-600">
              One Digital Home.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Manage your daily life, discover trusted services,
            organize important documents and get smart AI
            assistance — all in one place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-800">
              Get Started →
            </button>

            <button className="rounded-xl border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-950 transition hover:bg-blue-50">
              Explore Services
            </button>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Built for everyday life in Bangladesh 🇧🇩
          </p>

        </div>
      </section>

      {/* AI Assistant */}
      <AIAssistant />


{/* Daily Reminder */}
<ReminderSection />

{/* Services */}
<ServicesSection />

{/* Why Jibonova */}
<WhyJibonova />


      {/* Footer */}
<Footer />

    </main>
  );
}
