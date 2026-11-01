import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Jibonova<span className="text-blue-400">.</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Your everyday digital companion for a simpler and smarter life.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold">Platform</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About Us</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold">Support</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/help">Help Center</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Bangladesh */}
          <div>
            <h3 className="font-semibold">Made for Bangladesh 🇧🇩</h3>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Building a smarter digital everyday life for everyone.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Jibonova. All rights reserved.</p>

          <p>Made with ❤️ for Bangladesh 🇧🇩</p>
        </div>
      </div>
    </footer>
  );
}