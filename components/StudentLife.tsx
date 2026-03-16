"use client";

import { useEffect, useRef, useState } from "react";
import {
  Trophy,
  Music,
  Anchor,
  Theater,
  Dumbbell,
  HeartHandshake,
  Medal,
} from "lucide-react";

const activities = [
  {
    icon: Trophy,
    title: "NCAA Division III Athletics",
    detail: "Mariners compete in the Great Northeast Athletic Conference across multiple sports.",
    tag: "Athletics",
  },
  {
    icon: Music,
    title: "Select Choir Ensemble",
    detail: "Two concerts per year and performances across New England.",
    tag: "Arts",
  },
  {
    icon: Theater,
    title: "Drama Society",
    detail: "A fall play and spring musical produced entirely by students.",
    tag: "Arts",
  },
  {
    icon: Medal,
    title: "Dance & Cheer",
    detail: "Showcases, campus events, and game-day performances.",
    tag: "Athletics",
  },
  {
    icon: HeartHandshake,
    title: "Community Partnerships",
    detail: "Service-learning and civic engagement woven into the campus culture.",
    tag: "Service",
  },
  {
    icon: Dumbbell,
    title: "Wellness & Recreation",
    detail: "Prioritizing mental, emotional, and physical well-being for every student.",
    tag: "Wellness",
  },
];

const testimonials = [
  {
    quote:
      "Mitchell didn't just give me a degree — it gave me the confidence to figure out who I am and what I'm capable of.",
    name: "Emily R. '25",
    role: "Communication Major — Now at ESPN",
  },
  {
    quote:
      "The small class sizes meant my professors actually knew my name and cared about my success.",
    name: "Marcus T. '24",
    role: "Sport Management Major",
  },
  {
    quote:
      "Coming here was the best decision I ever made. The support systems are incredible.",
    name: "Sophia L. '26",
    role: "Psychology Major",
  },
];

export default function StudentLife() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="student-life"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900 noise-overlay">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(71, 163, 195, 0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 70% 80%, rgba(245, 184, 61, 0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
            <Anchor className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
              Life at Mitchell
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-6">
            More Than a <span className="gradient-gold">Campus</span>
            <br />A Community
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From championship athletics to performing arts, from community
            service to coastal adventures — life at Mitchell is anything but
            ordinary.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {activities.map((act, i) => (
            <div
              key={act.title}
              className="animate-on-scroll group p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <act.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="font-display text-lg font-bold text-white">
                      {act.title}
                    </h4>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {act.detail}
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-gold-400/60">
                    {act.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center">
          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === activeTestimonial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <blockquote className="font-accent text-2xl md:text-3xl text-white/90 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-gold-400">{t.name}</div>
                  <div className="text-sm text-white/40">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeTestimonial
                    ? "w-8 bg-gold-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
