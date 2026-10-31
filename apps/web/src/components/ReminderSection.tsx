export default function ReminderSection() {
  return (
    <section className="bg-blue-50/50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            📅 Daily Planner
          </span>

          <h2 className="mt-5 text-4xl font-bold text-blue-950 md:text-5xl">
            Never Miss an Important Moment
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Keep your daily tasks, important dates and reminders
            organized in one place.
          </p>
        </div>

        {/* Reminder Card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-950">
                Your Reminders
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Stay organized every day
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              2 Tasks
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-blue-50 p-4">
              <div>
                <p className="font-semibold text-blue-950">
                  Electricity Bill Payment
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Tomorrow · 10:00 AM
                </p>
              </div>

              <span className="text-xl">⚡</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div>
                <p className="font-semibold text-blue-950">
                  Doctor Appointment
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Friday · 4:00 PM
                </p>
              </div>

              <span className="text-xl">🏥</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800">
            + Add New Reminder
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            Demo preview — real reminders and notifications will be connected later.
          </p>
        </div>
      </div>
    </section>
  );
}