"use client";

import { Award, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="request-info"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, rgba(71,163,195,0.4) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at 85% 20%, rgba(245,184,61,0.3) 0%, transparent 45%)",
          }}
        />
        <div className="absolute top-24 right-[12%] w-64 h-64 border border-white/[0.03] rounded-full" />
        <div className="absolute bottom-20 left-[8%] w-40 h-40 border border-gold-400/[0.06] rounded-full" />
        {/* Wave bottom */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C240,85 480,15 720,50 C960,85 1200,15 1440,50 L1440,100 L0,100 Z"
            fill="#faf8f5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Headline */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/[0.1] mb-8">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-white/75">
                Professional Studies · 100% Online
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6 text-balance">
              Honor the Promise{" "}
              <span className="gradient-gold">to Yourself</span>
            </h1>

            <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-8 max-w-lg font-light">
              You&apos;ve built a career, raised a family, lived a full life.
              Now finish what you started — on your terms.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/50">
              {[
                "$500 / credit",
                "Fully online",
                "60+ credits transfer",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl shadow-navy-900/20 p-8 md:p-10 border border-sand-200/60">
              <h2 className="font-display text-2xl font-bold text-navy-900 leading-snug mb-2">
                Let us help you honor the promise you made to yourself
              </h2>
              <p className="text-navy-400 text-sm leading-relaxed mb-8">
                You&apos;ve done the work. Now, get the credit. See how your 60+
                transfer credits apply toward a fully online B.A. degree in
                Business.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 uppercase tracking-wider mb-1.5">
                    Credits Completed
                  </label>
                  <select className="form-select">
                    <option value="">How many credits have you earned?</option>
                    <option value="60-75">60–75 credits</option>
                    <option value="76-90">76–90 credits</option>
                    <option value="91+">91+ credits</option>
                    <option value="unsure">I&apos;m not sure</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 px-6 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-base rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/20 flex items-center justify-center gap-2"
                >
                  Request Information
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-xs text-navy-300 text-center mt-4 leading-relaxed">
                By submitting, you agree to receive communications from Mitchell
                College. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
