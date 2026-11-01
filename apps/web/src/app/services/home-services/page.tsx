"use client";

import { useState } from "react";

export default function HomeServicesPage() {
  const [message, setMessage] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-950">
          Home Services Test
        </h1>

        <button
          onClick={() => setMessage("Button is working! 🎉")}
          className="mt-6 w-full rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white"
        >
          Click Me
        </button>

        {message && (
          <p className="mt-6 rounded-xl bg-green-100 p-4 text-center font-semibold text-green-700">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}