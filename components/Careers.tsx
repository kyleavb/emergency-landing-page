"use client";

import { useEffect, useRef } from "react";
import {
  Rocket,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  BarChart3,
  Building2,
  Briefcase,
  Sparkles,
} from "lucide-react";

const careers = [
  { icon: TrendingUp, title: "Marketing Manager" },
  { icon: Users, title: "Human Resource Specialist" },
  { icon: Target, title: "Project or Program Manager" },
  { icon: Building2, title: "Operations Manager" },
  { icon: BarChart3, title: "Market Research Analyst" },
  { icon: Rocket, title: "Entrepreneur" },
  { icon: Lightbulb, title: "Business Strategy & Innovation Leader" },
  { icon: Sparkles, title: "Organizational Change Consultant" },
];

export default function Careers() {
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
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 25% 30%, rgba(71,163,195,0.2) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 75% 80%, rgba(245,184,61,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
            <Briefcase className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
              Career Possibilities
            </span>
          </div>
          <h6 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6 text-balance">
            Open Doors Across{" "}
            <span className="gradient-gold">Industries</span>
          </h6>
          <p className="text-white/50 text-[17px] leading-[1.75]">
            A business degree can open doors across industries. Graduates pursue
            roles such as:
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {careers.map((c, i) => (
            <div
              key={c.title}
              className="animate-on-scroll group p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300 text-center"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors">
                <c.icon className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-display text-[15px] font-bold text-white/90 leading-snug block">
                {c.title}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom copy */}
        <div className="animate-on-scroll max-w-3xl">
          <p className="text-white/45 text-[17px] leading-[1.75] mb-6">
            Mitchell College emphasizes transferable skills and adaptable
            thinking, so you&apos;re not boxed into one path. You graduate
            prepared to evolve and advance as industries change.
          </p>
        </div>
      </div>
    </section>
  );
}
