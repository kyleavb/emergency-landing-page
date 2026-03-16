"use client";

import { useEffect, useRef } from "react";
import {
  TrendingUp,
  BookOpen,
  BarChart3,
  Scale,
  Users,
  MessageSquare,
} from "lucide-react";

const courses = [
  { icon: BarChart3, name: "Economics" },
  { icon: TrendingUp, name: "Market Research" },
  { icon: Users, name: "Human Resource Management" },
  { icon: Scale, name: "Business Law" },
  { icon: MessageSquare, name: "Communication" },
  { icon: BookOpen, name: "Critical Thinking & Leadership" },
];

export default function Experience() {
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
    <section
      id="experience"
      ref={ref}
      className="relative bg-sand-50 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%231e3a6e' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl animate-on-scroll mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-600/5 border border-navy-600/10 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-navy-600" />
            <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">
              The Program
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.1] mb-6 text-balance">
            Your Experience Is Your Asset.{" "}
            <span className="gradient-gold">Use It.</span>
          </h2>
        </div>

        {/* Body copy */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="space-y-5 text-navy-500 text-[17px] leading-[1.75]">
              <p>
                Life happened. Career took priority. You didn&apos;t
                &ldquo;stop&rdquo; — you gained real-world experience. Now,
                it&apos;s time to match that experience with credentials that
                will move you forward faster in an environment that supports your
                learning needs and goals.
              </p>
              <p>
                Mitchell College&apos;s{" "}
                <strong className="text-navy-800 font-semibold">
                  Professional Studies–Business degree program
                </strong>{" "}
                is specifically engineered for the 60-credit-plus transfer
                student. This isn&apos;t about starting over. It&apos;s about
                accelerating your momentum alongside peers who share your drive.
                It&apos;s about achieving what&apos;s possible for you.
              </p>
              <p>
                You will gain practical knowledge through courses like
                Economics, Market Research, Human Resource Management, and
                Business Law. Through your learning journey, you will strengthen
                the communication, critical thinking, and leadership skills
                employers value most, preparing you to solve problems and lead
                with confidence.
              </p>
            </div>
          </div>

          {/* Course highlights */}
          <div className="lg:col-span-2 animate-on-scroll">
            <h3 className="font-display text-lg font-bold text-navy-900 mb-5">
              What You&apos;ll Study
            </h3>
            <div className="space-y-3">
              {courses.map((c, i) => (
                <div
                  key={c.name}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-sand-200/80 hover:border-sand-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-800 transition-colors">
                    <c.icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <span className="font-medium text-navy-700 text-[15px]">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
