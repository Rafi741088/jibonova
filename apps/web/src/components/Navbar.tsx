
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Jibonova Logo"
            width={46}
            height={46}
            priority
          />

          <span className="text-2xl font-extrabold tracking-tight text-blue-950">
            Jibonova<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/" className="text-blue-700">Home</Link>
          <Link href="/services" className="text-slate-600 hover:text-blue-700">Services</Link>
          <Link href="/about" className="text-slate-600 hover:text-blue-700">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-blue-700">Contact</Link>
        </div>

        {/* Get Started */}
        <Link
          href="/get-started"
          className="hidden rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-md shadow-blue-200 hover:bg-blue-800 md:block"
        >
          Get Started →
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-xl text-blue-950 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-blue-700 px-5 py-3 text-center font-semibold text-white"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
