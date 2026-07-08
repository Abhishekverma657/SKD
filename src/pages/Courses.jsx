import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { COURSES } from "../data/siteData";
import { Reveal, SectionHeader, PageBanner } from "../components/ui";

export default function Courses() {
  return (
    <div className="bg-slate-50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] animate-float-x pointer-events-none" />
      <PageBanner title="Our Courses" breadcrumb={["Home", "Courses"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <SectionHeader
            badge="All Courses"
            title={<>Courses for Every <span className="gradient-text">NEET Aspirant</span></>}
            subtitle="At SKDNSCI, with a backing of our 42+ years of success and experience, we make realize that cracking NEET is a cakewalk! We provide courses for all levels of aspirants."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, i) => (
            <Reveal key={course.id} delay={i * 100}>
              <div className="gradient-border-card h-full group transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300">
                <div className="bg-white/80 backdrop-blur-xl rounded-[calc(1rem-2px)] overflow-hidden h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-slate-50 to-sky-50/50 p-6 border-b border-slate-100 relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl border border-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        {course.icon}
                      </div>
                      <span className="badge bg-sky-100 text-sky-700 shadow-sm border border-sky-200">
                        {course.badge}
                      </span>
                    </div>
                    <h3 className="font-outfit font-black text-2xl text-slate-900 mb-2 relative z-10">{course.title}</h3>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600 relative z-10">
                      <span className="flex items-center gap-1">
                        <span className="text-teal-500 animate-pulse">●</span> {course.type}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 flex-1 bg-transparent">
                    <h4 className="text-slate-500 text-xs font-bold mb-4 uppercase tracking-wider">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {course.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:text-sky-500 transition-colors" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="p-6 pt-0 mt-auto">
                    <Link
                      to={`/${course.id}`}
                      className="w-full btn-outline border-slate-200 text-slate-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/30 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="mt-16 bg-sky-50 rounded-3xl p-10 border border-sky-100 text-center">
            <h3 className="font-outfit font-black text-3xl text-slate-900 mb-4">
              Not Sure Which Course to Choose?
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
              Talk to our counselors for free! We'll help you select the right course based on your
              current preparation level and NEET goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-xl font-bold flex items-center gap-2">
                Book Free Counseling <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+917080111595" className="btn-outline bg-white px-8 py-3.5 rounded-xl font-bold">
                📞 Call: 7080111595
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
