"use client";

import { useEffect, useRef } from "react";
import {
  Calendar,
  FileText,
  DollarSign,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    desc: "Rolling admissions — submit your application any time of year.",
    color: "bg-navy-900 text-gold-400",
  },
  {
    icon: DollarSign,
    title: "Financial Aid",
    desc: "99% of students receive grants or scholarships. We'll help you navigate every option.",
    color: "bg-gold-500 text-navy-900",
  },
  {
    icon: Calendar,
    title: "Visit Campus",
    desc: "See our waterfront campus in person — tours available daily.",
    color: "bg-thames-400 text-white",
  },
  {
    icon: MessageCircle,
    title: "Connect",
    desc: "Talk with admissions counselors, current students, and faculty.",
    color: "bg-emerald-500 text-white",
  },
];

const quickFacts = [
  "Rolling Admissions — No Deadline Pressure",
  "73% Acceptance Rate",
  "Average Aid Package: $21,590",
  "Personalized Admissions Counseling",
];

export default function Admissions() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="admissions" ref={ref} className="relative py-24 md:py-32 bg-sand-50 overflow-hidden">
      <div className="absolute inset-0 bg-wave-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main CTA Block */}
        <div className="animate-on-scroll relative rounded-3xl overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 80% 20%, rgba(245, 184, 61, 0.3) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                Rolling Admissions
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6 text-balance">
              Your Journey Starts <span className="gradient-gold">Here</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed mb-10">
              We see possibility in everything and everyone. With rolling
              admissions and personalized support, there&apos;s no better time to
              take the first step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#"
                className="group px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20 flex items-center gap-2 text-lg"
              >
                Start Your Application
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="px-8 py-4 text-white/70 hover:text-white border border-white/10 hover:border-white/20 font-medium rounded-xl transition-all duration-300"
              >
                Request Information
              </a>
            </div>

            {/* Quick Facts */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact}
                  className="flex items-center gap-2 text-sm text-white/50"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400/60 flex-shrink-0" />
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="animate-on-scroll">
          <div className="text-center mb-14">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How to Get Started
            </h3>
            <p className="text-navy-400 max-w-xl mx-auto">
              Four simple steps to becoming a Mariner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group text-center p-8 rounded-2xl bg-white border border-sand-100 hover:shadow-xl hover:border-sand-200 transition-all duration-300 hover-lift"
              >
                <div className="relative mb-6">
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sand-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-navy-400">
                      {i + 1}
                    </span>
                  </div>
                  <div
                    className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-navy-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-navy-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
