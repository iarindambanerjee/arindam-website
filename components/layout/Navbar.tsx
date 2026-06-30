


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DiscoveryCallButton from "@/components/shared/DiscoveryCallButton";


export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Experience", href: "/experience" },
  { name: "Transformation Stories", href: "/transformation-stories" },
];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
          >
            Arindam Banerjee
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-10">

            {navigation.map((item) => {

              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition font-medium ${
                    active
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </nav>

          {/* Desktop CTA */}

         

        <DiscoveryCallButton
  source="navbar"
  className="hidden md:inline-flex bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
>
  Book a Discovery Call
</DiscoveryCallButton>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Navigation */}

        {mobileOpen && (

          <div className="md:hidden border-t border-slate-200 py-6 space-y-5">

            {navigation.map((item) => {

              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-medium ${
                    active
                      ? "text-blue-600"
                      : "text-slate-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            
<DiscoveryCallButton
  source="navbar"
   className="inline-flex mt-4 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold"
>
  Book a Discovery Call
</DiscoveryCallButton>

          </div>

        )}

      </div>
    </header>
  );
}