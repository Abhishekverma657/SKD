import { Reveal, SectionHeader, PageBanner } from "../components/ui";
import { Link } from "react-router-dom";

export default function CBTTest() {
  const features = [
    { icon: "🖥️", title: "Real Exam Simulation", desc: "Replicate the exact NEET CBT environment with authentic NTA-pattern interface." },
    { icon: "📊", title: "Performance Analytics", desc: "Detailed reports with section-wise analysis, accuracy tracking and rank prediction." },
    { icon: "⏱️", title: "Time-Bound Tests", desc: "Timed sessions matching NEET's 3-hour exam format with auto-submit feature." },
    { icon: "🔄", title: "Instant Review", desc: "Immediate answer key with detailed explanations from expert faculty." },
    { icon: "📱", title: "Any Device Access", desc: "Access CBT tests on computer, tablet or mobile — anywhere, anytime." },
    { icon: "🎯", title: "Adaptive Testing", desc: "Difficulty adapts based on performance for focused practice on weak areas." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="CBT Test Series" breadcrumb={["Home", "CBT Test"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl shadow-sky-900/10">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-teal-600" />
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="relative p-10 sm:p-16 text-center z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white border-0 mb-6 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">New for NEET 2027</div>
              <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-6">
                Prepare with Real NEET CBT Pattern
              </h2>
              <p className="text-sky-50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Prepare for the latest NEET CBT pattern with real exam simulation, performance tracking
                and expert guidance. <strong>42+ Years of Excellence</strong>.
              </p>
              <Link
                to="/registration"
                className="inline-flex items-center gap-2 bg-white text-sky-700 font-bold px-10 py-4 rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-lg"
              >
                Start CBT Preparation →
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeader
            badge="Features"
            title={<>Why Use SKD's <span className="gradient-text">CBT Platform?</span></>}
            subtitle="Our computer-based test platform mirrors the actual NEET exam interface for maximum preparation accuracy."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="clean-card p-8 border-slate-200 hover:border-sky-300 h-full">
                <div className="text-4xl mb-5 w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center shadow-sm">{f.icon}</div>
                <h3 className="font-outfit font-black text-slate-900 text-xl mb-3">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Test Packages */}
        <Reveal>
          <SectionHeader badge="Test Packages" title={<>Choose Your <span className="gradient-text">Test Package</span></>} />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Basic", tests: "10 Full Tests", price: "Contact Us", features: ["10 Full Syllabus Tests", "Basic Analytics", "Answer Key Access"] },
            { name: "Standard", tests: "25 Tests", price: "Contact Us", best: true, features: ["25 Full Syllabus Tests", "Advanced Analytics", "Video Solutions", "Rank Predictor"] },
            { name: "Premium", tests: "50+ Tests", price: "Contact Us", features: ["50+ Tests + Part Tests", "AI-based Analytics", "Personal Mentorship", "All India Ranking"] },
          ].map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100}>
              <div className={`clean-card p-8 text-center h-full flex flex-col ${pkg.best ? "border-sky-400 shadow-xl shadow-sky-500/10 ring-1 ring-sky-100 relative transform md:-translate-y-4" : "border-slate-200"}`}>
                {pkg.best && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    ⭐ Most Popular
                  </div>
                )}
                <h3 className={`font-outfit font-black text-2xl mb-1 ${pkg.best ? "text-sky-700" : "text-slate-900"}`}>{pkg.name}</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">{pkg.tests}</p>
                <div className="font-outfit font-black text-3xl text-slate-900 mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-8 flex-1 text-left">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <span className="text-teal-500 shrink-0 mt-0.5 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={pkg.best ? "btn-primary py-3.5 rounded-xl font-bold shadow-lg shadow-sky-500/20" : "btn-outline bg-white py-3.5 rounded-xl font-bold"}>
                  Get Started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
