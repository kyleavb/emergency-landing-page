"use client";

import { useEffect, useRef } from "react";
import { DollarSign, CreditCard, Wallet, BadgeCheck } from "lucide-react";

export default function Cost() {
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
          {/* Left — Pricing card */}
          <div className="animate-on-scroll">
            <div className="relative rounded-2xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-800 p-10 md:p-12 text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(245,184,61,0.3) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                  <DollarSign className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                    Tuition
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-6xl md:text-7xl font-bold text-white">
                      $500
                    </span>
                    <span className="text-white/50 text-lg font-medium">
                      / credit
                    </span>
                  </div>
                  <p className="text-white/40 text-sm mt-2">
                    Degree-completion program
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Wallet, text: "Pay as you go — take courses at your pace" },
                    { icon: CreditCard, text: "Federal & state financial aid options" },
                    { icon: BadgeCheck, text: "No hidden fees or surprise costs" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="animate-on-scroll">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 leading-[1.1] mb-6 text-balance">
              Cost &amp; Financial Aid{" "}
              <span className="gradient-gold">for Those Who Qualify</span>
            </h3>
            <div className="space-y-5 text-navy-500 text-[17px] leading-[1.75]">
              <p>
                At $500 per credit for this degree-completion program, you can
                move forward at a pace that fits your budget and schedule. You
                can take courses as you&apos;re able and explore federal or state
                financial aid options.
              </p>
            </div>
            <a
              href="#request-info"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/20"
            >
              Explore Financial Aid Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
