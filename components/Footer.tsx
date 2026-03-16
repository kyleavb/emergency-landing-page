"use client";

import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const footerLinks = {
  Academics: [
    "Undergraduate Programs",
    "Academic Calendar",
    "Mitchell Ability Model",
    "Library Resources",
    "Faculty Directory",
  ],
  Admissions: [
    "Apply Now",
    "Visit Campus",
    "Tuition & Aid",
    "Transfer Students",
    "International Students",
  ],
  "Campus Life": [
    "Athletics",
    "Student Activities",
    "Residence Life",
    "Dining Services",
    "Health & Wellness",
  ],
  About: [
    "Our History",
    "Leadership",
    "News & Events",
    "Careers at Mitchell",
    "Contact Us",
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      {/* Top wave */}
      <svg
        className="absolute top-0 left-0 right-0 w-full -translate-y-[98%]"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill="#061027"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <div className="font-display text-lg font-bold leading-none">
                  Mitchell
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-medium">
                  College
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              A waterfront liberal arts college dedicated to empowering every
              learner through personalized education and inclusive community.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-gold-400/60 flex-shrink-0" />
                437 Pequot Avenue, New London, CT 06320
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="w-4 h-4 text-gold-400/60 flex-shrink-0" />
                (860) 701-5000
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="w-4 h-4 text-gold-400/60 flex-shrink-0" />
                admissions@mitchell.edu
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm text-white/90 mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Mitchell College. All rights
            reserved.
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {["Facebook", "Instagram", "X", "YouTube"].map((label, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200"
                aria-label={label}
              >
                <Globe className="w-4 h-4 text-white/50" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Title IX
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
