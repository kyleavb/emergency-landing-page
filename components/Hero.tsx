"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, MapPin, Award, Users } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const parallaxElements =
        heroRef.current.querySelectorAll("[data-parallax]");
      parallaxElements.forEach((el) => {
        const speed = parseFloat(
          (el as HTMLElement).dataset.parallax || "0.5"
        );
        (el as HTMLElement).style.transform = `translateY(${
          scrollY * speed
        }px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />

        {/* Atmospheric layers */}
        <div
          className="absolute inset-0 opacity-30"
          data-parallax="0.15"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(71, 163, 195, 0.4) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          data-parallax="0.1"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(245, 184, 61, 0.3) 0%, transparent 50%)",
          }}
        />

        {/* Geometric accents */}
        <div className="absolute top-20 right-[15%] w-72 h-72 border border-white/[0.04] rounded-full animate-float" />
        <div className="absolute bottom-32 left-[10%] w-48 h-48 border border-gold-400/[0.08] rounded-full animate-float delay-300" />
        <div className="absolute top-1/3 left-[20%] w-1.5 h-1.5 bg-gold-400/30 rounded-full animate-float delay-500" />
        <div className="absolute top-1/4 right-[30%] w-1 h-1 bg-thames-300/40 rounded-full animate-float delay-700" />

        {/* Wave bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#faf8f5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-40 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] mb-8 animate-fade-up">
          <Award className="w-4 h-4 text-gold-400" />
          <span className="text-sm font-medium text-white/80">
            Est. 1938 · NECHE Accredited
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6 animate-fade-up delay-100">
          Where
          <span className="block mt-1">
            <span className="gradient-gold">Possibility</span>
          </span>
          <span className="block mt-1 text-white/90">Begins</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10 animate-fade-up delay-200 font-accent text-balance">
          A waterfront liberal arts college on the Thames River in New London,
          Connecticut — where every student&apos;s unique strengths are
          celebrated, challenged, and set free.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
          <a
            href="#academics"
            className="group px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20 flex items-center gap-2"
          >
            Explore Programs
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#campus"
            className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] font-medium rounded-xl transition-all duration-300 backdrop-blur-sm"
          >
            Virtual Tour
          </a>
        </div>

        {/* Quick Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 animate-fade-up delay-400">
          {[
            { icon: Users, value: "14:1", label: "Student-Faculty Ratio" },
            { icon: MapPin, value: "68", label: "Acre Waterfront Campus" },
            { icon: Award, value: "99%", label: "Receive Financial Aid" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <div className="stat-number text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
