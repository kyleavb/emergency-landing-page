"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  GraduationCap,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Academics", href: "#academics" },
    { label: "Campus", href: "#campus" },
    { label: "Student Life", href: "#student-life" },
    { label: "Admissions", href: "#admissions" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-xl shadow-navy-900/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#visit"
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Visit
          </a>
          <a
            href="#apply"
            className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-dark border-t border-white/5 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 mt-4">
            <a
              href="#apply"
              className="block text-center px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-lg transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
