"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
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
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <p className="font-accent text-xl md:text-2xl text-navy-500 italic leading-relaxed mb-8 max-w-2xl mx-auto">
            Join a community of motivated adult learners, supported by advisors
            and faculty who understand your journey and celebrate your individual
            experience.
          </p>

          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.1] mb-6 text-balance">
            Request information today and see{" "}
            <span className="gradient-gold">what&apos;s possible</span> for you.
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#request-info"
              className="group px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20 flex items-center gap-2"
            >
              Request Information
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:860-701-5000"
              className="px-8 py-4 text-navy-500 hover:text-navy-700 border border-sand-300 hover:border-sand-400 font-medium rounded-xl transition-all duration-300"
            >
              Call (860) 701-5000
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-navy-400">
            {[
              "$500/credit",
              "100% online",
              "Rolling admissions",
              "Financial aid available",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500/60 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
