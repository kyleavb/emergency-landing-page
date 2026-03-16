"use client";

import { useEffect, useRef } from "react";
import {
  HeartHandshake,
  GraduationCap,
  BookOpen,
  Briefcase,
  Monitor,
  Heart,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Dedicated Academic Advisor",
    desc: "Paired with an advisor experienced in working with adult learners to map credits and stay on track.",
  },
  {
    icon: BookOpen,
    title: "Tutoring Services",
    desc: "One-on-one and group tutoring to support you through challenging coursework.",
  },
  {
    icon: Briefcase,
    title: "Career Services",
    desc: "Resume support, networking guidance, and career planning for your next chapter.",
  },
  {
    icon: Monitor,
    title: "Technology Assistance",
    desc: "Help with online learning tools whenever you need it.",
  },
  {
    icon: GraduationCap,
    title: "Library Support",
    desc: "Full access to research databases, librarian support, and academic resources.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Resources to support your mental, emotional, and physical well-being.",
  },
];

export default function Support() {
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
    <section ref={ref} className="relative py-24 md:py-32 bg-sand-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-600/5 border border-navy-600/10 mb-6">
            <HeartHandshake className="w-3.5 h-3.5 text-navy-600" />
            <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">
              Support Services
            </span>
          </div>
          <h4 className="font-display text-3xl md:text-4xl font-bold text-navy-900 leading-[1.1] mb-6 text-balance">
            Nationally Recognized Support —{" "}
            <span className="gradient-gold">Every Step of the Way</span>
          </h4>
          <p className="text-navy-500 text-[17px] leading-[1.75]">
            Mitchell is nationally recognized for supporting students wherever
            they are in their education journey. We know that being an online
            learner with competing priorities has its challenges. We&apos;ll pair
            you with an academic advisor experienced in working with adult
            learners, helping you map transferred credits, succeed in your
            coursework, and stay on track to graduate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group p-6 rounded-2xl bg-white border border-sand-200/80 hover:border-sand-300 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-navy-800 transition-colors">
                <s.icon className="w-5 h-5 text-gold-400" />
              </div>
              <h5 className="font-display text-lg font-bold text-navy-900 mb-2">
                {s.title}
              </h5>
              <p className="text-navy-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="animate-on-scroll text-center text-navy-500 text-[15px] mt-10 max-w-2xl mx-auto leading-relaxed">
          You&apos;ll also have access to tutoring, career services, library
          support, technology assistance, and health and wellness resources.{" "}
          <strong className="text-navy-700 font-semibold">
            We&apos;re here for you every step of the way.
          </strong>
        </p>
      </div>
    </section>
  );
}
