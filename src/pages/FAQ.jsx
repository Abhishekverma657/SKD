import { useState } from "react";
import { FAQS } from "../data/siteData";
import { Reveal, SectionHeader, PageBanner } from "../components/ui";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Frequently Asked Questions" breadcrumb={["Home", "FAQs"]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <SectionHeader
            badge="FAQs"
            title={<>Got <span className="gradient-text">Questions?</span></>}
            subtitle="Everything you need to know about SKD NSCI, our courses, admission process, and NEET preparation."
          />
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className={`clean-card overflow-hidden transition-all duration-300 ${
                  open === i
                    ? "border-sky-300 shadow-md ring-1 ring-sky-100"
                    : "border-slate-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-bold text-slate-900 text-base leading-snug">{faq.q}</span>
                  <span
                    className={`text-sky-500 text-2xl font-black shrink-0 transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open === i ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm bg-slate-50 border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Still have questions */}
        <Reveal>
          <div className="mt-12 bg-white rounded-2xl p-10 border border-slate-200 text-center shadow-sm">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="font-outfit font-black text-2xl text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600 text-base mb-8 max-w-lg mx-auto">
              Our expert counselors are available to answer all your queries about NEET preparation,
              admissions, and courses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-xl font-bold flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+917080111595" className="btn-outline bg-slate-50 px-8 py-3.5 rounded-xl font-bold">
                📞 Call: 7080111595
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
