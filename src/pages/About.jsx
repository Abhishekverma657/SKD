import { Reveal, SectionHeader, PageBanner } from "../components/ui";

export default function About() {
  const timeline = [
    { year: "1983", title: "Foundation", desc: "SKD NSCI was established by Shri S.K.D. Singh with a vision to provide quality education." },
    { year: "1995", title: "Expansion", desc: "Opened multiple branches across Lucknow to cater to the growing demand for quality medical coaching." },
    { year: "2010", title: "10,000+ Selections", desc: "Crossed the milestone of 10,000+ successful medical selections across India." },
    { year: "2024", title: "Digital Evolution", desc: "Launched state-of-the-art CBT centers and AI-driven performance analytics for students." },
  ];

  return (
    <div className="bg-slate-50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-40 right-[-10%] w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[100px] animate-float-y pointer-events-none" />
      
      <PageBanner title="About Us" breadcrumb={["Home", "About"]} />

      {/* History & Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-purple-500 rounded-[2rem] transform -rotate-2 group-hover:rotate-2 transition-transform duration-500 opacity-50 blur-lg" />
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] bg-white/50 backdrop-blur-md border border-white/40 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center flex-col transform group-hover:scale-110 transition-transform duration-500">
                  <div className="text-8xl mb-4 drop-shadow-xl animate-float-y">🏛️</div>
                  <p className="text-slate-700 font-bold text-xl bg-white/80 px-4 py-1 rounded-full shadow-sm">SKD Institute</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <SectionHeader
                badge="Our Legacy"
                title={<>42+ Years of <span className="gradient-text">Excellence</span></>}
                subtitle="SKD New Standard Coaching Institute is Lucknow's premier institute for medical entrance examinations."
                center={false}
              />
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Established by <strong className="text-slate-900">Shri S.K.D. Singh</strong>, the institute has been a beacon of hope and success for aspiring doctors. Our methodology focuses on building a strong foundation, encouraging critical thinking, and providing comprehensive study material.
                </p>
                <p>
                  We believe that every student has the potential to succeed if given the right guidance. Our team of expert faculty members ensures that each student receives personalized attention and mentorship throughout their journey.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
          <Reveal>
            <div className="glass-card-vibrant p-10 h-full border-t-4 border-sky-400 group">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-4xl mb-6 shadow-lg shadow-sky-500/30 group-hover:rotate-12 transition-transform duration-300">
                🎯
              </div>
              <h3 className="font-outfit font-black text-3xl text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide the highest quality education and guidance to medical aspirants, fostering an environment of competitive excellence, ethical learning, and holistic development.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="clean-card p-10 h-full border-teal-100 hover:border-teal-300">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center text-3xl mb-6">
                👁️
              </div>
              <h3 className="font-outfit font-black text-3xl text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the most trusted and successful coaching institution in India, recognized for producing compassionate and highly skilled medical professionals.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Directors Message */}
        <Reveal>
          <div className="bg-sky-50 rounded-[2rem] p-10 md:p-16 border border-sky-100 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] text-sky-900/5 font-serif leading-none select-none">"</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10">
              <div className="col-span-1">
                <div className="aspect-[3/4] rounded-2xl img-placeholder overflow-hidden shadow-xl border-none">
                  <div className="absolute inset-0 flex items-center justify-center flex-col bg-slate-200">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <p className="text-slate-600 font-bold">Shri S.K.D. Singh</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-outfit font-black text-3xl text-slate-900 mb-2">Director's Message</h3>
                <p className="text-sky-700 font-bold mb-6">Founder & Director, SKD NSCI</p>
                <div className="space-y-4 text-slate-700 leading-relaxed text-lg font-medium italic">
                  <p>
                    "Since 1983, our goal at SKD has been singular: to nurture the medical dreams of young minds. We don't just teach syllabus; we build temperament, discipline, and analytical skills required to excel in exams like NEET."
                  </p>
                  <p>
                    "When a student joins SKD, they become part of a legacy that has produced over 12,000 doctors serving the nation. We are committed to maintaining this trust through our rigorous academics and unparalleled student support system."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <Reveal>
          <SectionHeader badge="Our Journey" title={<>Milestones of <span className="gradient-text">Success</span></>} />
        </Reveal>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 100}>
              <div className="flex gap-6 mb-8 relative">
                {/* Line */}
                {i !== timeline.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-[-32px] w-0.5 bg-slate-200" />
                )}
                {/* Dot */}
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center shrink-0 z-10 shadow-sm border border-sky-200 text-sky-600">
                  📍
                </div>
                {/* Content */}
                <div className="clean-card p-6 flex-1 shadow-sm border-slate-200">
                  <div className="font-bold text-sky-600 mb-1">{item.year}</div>
                  <h4 className="font-outfit font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
