"use client";

import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      <svg
        className="absolute top-0 left-0 right-0 w-full -translate-y-[98%]"
        viewBox="0 0 1440 60"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,38 1440,30 L1440,60 L0,60 Z"
          fill="#061027"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-navy-900" />
            </div>
            <div>
              <div className="font-display text-lg font-bold leading-none">
                Mitchell College
              </div>
              <div className="text-[11px] text-white/40 mt-0.5">
                Professional Studies · Business
              </div>
            </div>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400/50 flex-shrink-0" />
              437 Pequot Ave, New London, CT 06320
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-400/50 flex-shrink-0" />
              (860) 701-5000
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-400/50 flex-shrink-0" />
              admissions@mitchell.edu
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Mitchell College. All rights
            reserved. NECHE Accredited.
          </div>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Title IX
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
