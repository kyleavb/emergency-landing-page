"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-xl shadow-navy-900/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? "bg-gold-500"
                : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}
          >
            <GraduationCap
              className={`w-5 h-5 transition-colors ${
                scrolled ? "text-navy-900" : "text-white"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-white leading-none tracking-wide">
              Mitchell
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-medium">
              College
            </span>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="tel:860-701-5000"
            className="hidden sm:flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            (860) 701-5000
          </a>
          <a
            href="#request-info"
            className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Request Info
          </a>
        </div>
      </nav>
    </header>
  );
}
