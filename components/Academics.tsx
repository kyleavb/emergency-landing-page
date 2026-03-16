"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Brain,
  Briefcase,
  FlaskConical,
  Heart,
  Waves,
  Monitor,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const divisions = [
  {
    title: "Behavioral & Social Sciences",
    icon: Brain,
    color: "from-thames-300 to-thames-400",
    bgHover: "group-hover:bg-thames-50",
    programs: ["Criminal Justice", "Psychology", "Public Health", "General Studies"],
    description:
      "Understand human behavior and social systems through hands-on research and community engagement.",
  },
  {
    title: "Business, Communication & Education",
    icon: Briefcase,
    color: "from-gold-400 to-gold-500",
    bgHover: "group-hover:bg-gold-50",
    programs: [
      "Business Management",
      "Communication",
      "Computer & Data Systems",
      "Early Childhood Education",
      "Hospitality & Tourism",
      "Sport Management",
    ],
    description:
      "Build leadership skills and real-world experience with internship-driven programs.",
  },
  {
    title: "Science",
    icon: FlaskConical,
    color: "from-emerald-400 to-emerald-500",
    bgHover: "group-hover:bg-emerald-50",
    programs: ["Marine Science", "Biology", "Chemistry", "Environmental Science"],
    description:
      "Explore the natural world in labs and coastal ecosystems just steps from campus.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Mitchell Ability Model",
    text: "Our signature approach weaves essential skills — adaptability, critical thinking, collaboration — throughout every course and experience.",
  },
  {
    icon: BookOpen,
    title: "Associate & Bachelor's Degrees",
    text: "14 majors across 11 fields of study, with both 2-year and 4-year pathways tailored to your goals.",
  },
  {
    icon: Heart,
    title: "Learning Support Programs",
    text: "Thames, the Mystic Program, and Bentsen Learning Center provide dedicated support for diverse learners.",
  },
  {
    icon: Monitor,
    title: "Career Labs & Internships",
    text: "Apply classroom knowledge through on-campus career labs and real-world professional internships in our region.",
  },
];

export default function Academics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="academics"
      ref={sectionRef}
      className="relative bg-sand-50 py-24 md:py-32 overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-wave-pattern opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-600/5 border border-navy-600/10 mb-6">
            <GraduationCap className="w-3.5 h-3.5 text-navy-600" />
            <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">
              Academic Programs
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.05] mb-6">
            A Curriculum Built{" "}
            <span className="gradient-gold">Around You</span>
          </h2>
          <p className="text-lg text-navy-400 leading-relaxed font-light">
            Mitchell&apos;s academic divisions offer more than 14 majors, each
            designed to blend classroom rigor with experiential learning. Your
            education will be as unique as you are.
          </p>
        </div>

        {/* Academic Divisions — Interactive Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {divisions.map((div, i) => (
            <div
              key={div.title}
              className={`group animate-on-scroll relative rounded-2xl bg-white border border-sand-200 p-8 hover-lift cursor-pointer transition-all duration-500 ${
                activeDiv === i
                  ? "ring-2 ring-navy-500/20 shadow-xl"
                  : "shadow-sm"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
              onClick={() => setActiveDiv(i)}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110`}
              >
                <div.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                {div.title}
              </h3>
              <p className="text-navy-400 text-sm leading-relaxed mb-6">
                {div.description}
              </p>

              {/* Programs List */}
              <div className="space-y-2">
                {div.programs.map((prog) => (
                  <div
                    key={prog}
                    className="flex items-center gap-2 text-sm text-navy-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    {prog}
                  </div>
                ))}
              </div>

              {/* Explore link */}
              <div className="mt-6 pt-6 border-t border-sand-100">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 hover:text-navy-800 transition-colors group/link"
                >
                  Explore Division
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="animate-on-scroll">
          <div className="text-center mb-14">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              The Mitchell Difference
            </h3>
            <p className="text-navy-400 max-w-xl mx-auto">
              More than a degree — a framework for lifelong adaptability and
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="group flex gap-5 p-6 rounded-2xl bg-white/60 border border-sand-200/60 hover:bg-white hover:border-sand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-800 transition-colors">
                  <feat.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-navy-900 mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {feat.text}
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
