"use client";

import { useEffect, useRef } from "react";
import {
  TreePine,
  Waves,
  Building2,
  Compass,
  MapPin,
  Sun,
} from "lucide-react";

const campusHighlights = [
  {
    icon: Waves,
    title: "Two Private Beaches",
    desc: "Study, relax, and recharge on the Thames River shoreline.",
    accent: "bg-thames-100 text-thames-400",
  },
  {
    icon: TreePine,
    title: "Mitchell Woods",
    desc: "68 acres of trails, ponds, and green space for reflection.",
    accent: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: Building2,
    title: "The Red Barn",
    desc: "Our landmark event and performing arts space.",
    accent: "bg-red-50 text-red-400",
  },
  {
    icon: Compass,
    title: "Historic New London",
    desc: "1 hr to Hartford & Providence. 2 hrs to Boston & NYC.",
    accent: "bg-gold-50 text-gold-600",
  },
  {
    icon: Sun,
    title: "Michael's Dairy",
    desc: "Our beloved campus ice cream shop, a local institution.",
    accent: "bg-amber-50 text-amber-500",
  },
  {
    icon: MapPin,
    title: "Waterfront Living",
    desc: "Residential campus with modern halls and historic homes.",
    accent: "bg-navy-50 text-navy-500",
  },
];

export default function Campus() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="campus" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-white to-sand-50" />

      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-thames-100 border border-thames-200 mb-6">
              <Waves className="w-3.5 h-3.5 text-thames-400" />
              <span className="text-xs font-semibold text-thames-400 uppercase tracking-wider">
                Our Campus
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 leading-[1.05] mb-6">
              68 Acres on the{" "}
              <span className="gradient-text">Thames River</span>
            </h2>
            <p className="text-navy-400 text-lg leading-relaxed mb-8">
              Nestled on the Connecticut shoreline, our campus blends historic
              architecture with natural beauty. From wooded trails to waterfront
              views, every corner invites discovery.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/20"
            >
              <Compass className="w-4 h-4" />
              Take a Virtual Tour
            </a>
          </div>

          {/* Campus Image Placeholder — Geometric art piece */}
          <div className="animate-on-scroll relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
              {/* Stylized campus illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-600 to-thames-400">
                {/* Water */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-thames-300/40 to-transparent" />

                {/* Buildings silhouette */}
                <svg
                  viewBox="0 0 600 400"
                  className="absolute inset-0 w-full h-full"
                  fill="none"
                >
                  {/* Sky elements */}
                  <circle cx="480" cy="80" r="30" fill="rgba(245,184,61,0.3)" />
                  <circle cx="480" cy="80" r="20" fill="rgba(245,184,61,0.5)" />

                  {/* Trees */}
                  <ellipse cx="80" cy="260" rx="35" ry="50" fill="rgba(34,120,80,0.4)" />
                  <ellipse cx="140" cy="250" rx="28" ry="45" fill="rgba(34,120,80,0.3)" />
                  <ellipse cx="500" cy="250" rx="30" ry="48" fill="rgba(34,120,80,0.35)" />

                  {/* Main Building */}
                  <rect x="200" y="160" width="200" height="140" rx="4" fill="rgba(255,255,255,0.15)" />
                  <rect x="220" y="180" width="40" height="50" rx="2" fill="rgba(255,255,255,0.1)" />
                  <rect x="280" y="180" width="40" height="50" rx="2" fill="rgba(255,255,255,0.1)" />
                  <rect x="340" y="180" width="40" height="50" rx="2" fill="rgba(255,255,255,0.1)" />
                  {/* Tower */}
                  <rect x="275" y="110" width="50" height="50" rx="2" fill="rgba(255,255,255,0.18)" />
                  <polygon points="275,110 300,85 325,110" fill="rgba(255,255,255,0.12)" />

                  {/* Smaller building */}
                  <rect x="430" y="200" width="80" height="100" rx="3" fill="rgba(255,255,255,0.12)" />
                  <rect x="445" y="220" width="20" height="25" rx="1" fill="rgba(255,255,255,0.08)" />
                  <rect x="475" y="220" width="20" height="25" rx="1" fill="rgba(255,255,255,0.08)" />

                  {/* Water line with waves */}
                  <path
                    d="M0,300 Q75,285 150,300 Q225,315 300,300 Q375,285 450,300 Q525,315 600,300"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0,320 Q75,305 150,320 Q225,335 300,320 Q375,305 450,320 Q525,335 600,320"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    fill="none"
                  />

                  {/* Ground */}
                  <rect x="0" y="300" width="600" height="100" fill="rgba(71,163,195,0.15)" />
                </svg>
              </div>

              {/* Location badge overlay */}
              <div className="absolute bottom-4 left-4 glass-card rounded-xl px-4 py-2.5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-navy-600" />
                <span className="text-sm font-semibold text-navy-800">
                  New London, CT
                </span>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 glass-card rounded-2xl p-5 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy-900 text-lg">
                    85+
                  </div>
                  <div className="text-xs text-navy-400">Years of Legacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {campusHighlights.map((item, i) => (
            <div
              key={item.title}
              className="animate-on-scroll group p-6 rounded-2xl bg-white border border-sand-100 hover:border-sand-200 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-11 h-11 rounded-xl ${item.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="font-display text-lg font-bold text-navy-900 mb-1.5">
                {item.title}
              </h4>
              <p className="text-sm text-navy-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
