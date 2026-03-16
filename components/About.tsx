"use client";

import { useEffect, useRef } from "react";
import { Shield, Users, BookOpen, Star } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Radically Inclusive",
    text: "We celebrate diverse thinkers and learning styles.",
  },
  {
    icon: Users,
    title: "Unapologetically Accessible",
    text: "Higher education has an obligation to support the whole person.",
  },
  {
    icon: BookOpen,
    title: "Personalized for Each Person",
    text: "Your education adapts to your strengths, not the other way around.",
  },
  {
    icon: Star,
    title: "Designed for the Real World",
    text: "Practical skills, real internships, and career-ready outcomes.",
  },
];

export default function About() {
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
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column — Story */}
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-50 border border-navy-100 mb-6">
              <Shield className="w-3.5 h-3.5 text-navy-500" />
              <span className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 leading-[1.05] mb-8">
              85+ Years of
              <br />
              <span className="gradient-gold">Empowering Learners</span>
            </h2>

            <div className="space-y-5 text-navy-500 leading-relaxed">
              <p>
                Founded in 1938 as New London Junior College, Mitchell College
                has grown into a nationally recognized institution for its
                innovative approach to education. Named after Alfred Mitchell —
                whose family&apos;s summer estate now forms the heart of our
                campus — we&apos;ve spent over eight decades reimagining what a
                college education can be.
              </p>
              <p>
                The Mitchell Ability Model challenges the one-size-fits-all
                approach to higher education. By blending mentoring traditions
                with expertise in diverse learning styles, we equip students with
                adaptability, critical thinking, and real-world readiness.
              </p>
              <p>
                Re-accredited for 10 years by NECHE in 2023, Mitchell College
                continues to evolve — from our newest nursing program approved in
                2024 to our expanding community partnerships across southeastern
                Connecticut.
              </p>
            </div>

            {/* Timeline highlights */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { year: "1938", event: "Founded as NLJC" },
                { year: "1950", event: "Became Mitchell College" },
                { year: "2023", event: "NECHE Re-accredited" },
                { year: "2024", event: "Nursing Program Launched" },
              ].map((t) => (
                <div
                  key={t.year}
                  className="px-4 py-2.5 rounded-xl bg-sand-50 border border-sand-100"
                >
                  <div className="font-display font-bold text-navy-900 text-sm">
                    {t.year}
                  </div>
                  <div className="text-xs text-navy-400">{t.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Values */}
          <div className="lg:col-span-2 space-y-5">
            <div className="animate-on-scroll mb-2">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
                Our Values
              </h3>
              <p className="text-sm text-navy-400">
                The principles that guide every decision we make.
              </p>
            </div>

            {values.map((v, i) => (
              <div
                key={v.title}
                className="animate-on-scroll group flex gap-4 p-5 rounded-2xl bg-sand-50/50 border border-sand-100 hover:bg-white hover:shadow-lg hover:border-sand-200 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-800 transition-colors">
                  <v.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy-900 mb-1">
                    {v.title}
                  </h4>
                  <p className="text-sm text-navy-400 leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
