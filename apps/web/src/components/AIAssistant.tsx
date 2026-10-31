
export default function AIAssistant() {
  return (
    <section className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            ✨ Jibonova AI
          </span>

          <h2 className="mt-6 text-4xl font-bold text-blue-950">
            Meet Your AI Life Assistant
          </h2>

          <p className="mt-4 text-slate-600">
            Just tell us what you need.
            Your smart assistant helps organize your everyday life.
          </p>

        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-xl shadow-blue-100/50">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-2xl text-white">
              ✨
            </div>

            <div>
              <h3 className="font-bold text-blue-950">
                Jibonova Assistant
              </h3>
              <p className="text-sm text-green-600">
                Your digital companion
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              You
            </p>

            <p className="mt-2 text-slate-800">
              আগামীকাল আমাকে বিদ্যুৎ বিল দেওয়ার কথা মনে করিয়ে দাও।
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-blue-700 p-5 text-white">
            <p className="text-sm text-blue-100">
              Jibonova AI
            </p>

            <p className="mt-2">
              অবশ্যই! আগামীকালের জন্য বিদ্যুৎ বিলের একটি Reminder তৈরি করতে পারি।
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
            <span className="flex-1 text-sm text-slate-400">
              Ask anything in Bangla...
            </span>

            <button className="rounded-lg bg-blue-700 px-4 py-2 text-white">
              ↑
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-slate-400">
            Demo preview — AI functionality will be connected later.
          </p>

        </div>

      </div>

    </section>
  );
}
