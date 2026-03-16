"use client";

import { useEffect, useRef } from "react";
import { Clock, Laptop, CalendarDays, Gauge } from "lucide-react";

const flexPoints = [
  {
    icon: Laptop,
    title: "100% Online & Asynchronous",
    desc: "No required live lectures — study when it works for you.",
  },
  {
    icon: CalendarDays,
    title: "Start Spring, Summer, or Fall",
    desc: "Three entry points per year so you don't have to wait.",
  },
  {
    icon: Gauge,
    title: "Full Time or Part Time",
    desc: "Enroll at the pace that fits your life and responsibilities.",
  },
  {
    icon: Clock,
    title: "Your Schedule, Your Pace",
    desc: "Move forward when you're ready — no rigid timelines.",
  },
];

export default function Flexibility() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.1 }
    );
    ref.current
      ?.querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-thames-100 border border-thames-200 mb-6">
              <Clock className="w-3.5 h-3.5 text-thames-400" />
              <span className="text-xs font-semibold text-thames-400 uppercase tracking-wider">
                Flexibility
              </span>
            </div>
            <h5 className="font-display text-3xl md:text-4xl font-bold text-navy-900 leading-[1.1] mb-6 text-balance">
              Built Around <span className="gradient-gold">Your Life</span>
            </h5>
            <p className="text-navy-500 text-[17px] leading-[1.75] mb-4">
              This fully online, asynchronous program lets you schedule your
              coursework around your life, with no required live lectures. Start
              in spring, summer, or fall and enroll full time or part time. Move
              forward at a pace that works for you.
            </p>
          </div>

          {/* Right — Feature cards */}
          <div className="animate-on-scroll grid grid-cols-2 gap-4">
            {flexPoints.map((f, i) => (
              <div
                key={f.title}
                className="group p-5 rounded-2xl bg-sand-50 border border-sand-100 hover:bg-white hover:border-sand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-thames-100 flex items-center justify-center mb-4 group-hover:bg-thames-200 transition-colors">
                  <f.icon className="w-5 h-5 text-thames-400" />
                </div>
                <h6 className="font-display text-[15px] font-bold text-navy-900 mb-1.5 leading-snug">
                  {f.title}
                </h6>
                <p className="text-xs text-navy-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
