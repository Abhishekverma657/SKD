import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Star, CheckCircle, ChevronRight, ArrowUpRight, Presentation, Award, GraduationCap, ClipboardList } from "lucide-react";
import { STATS, TOPPERS, FEATURES, COURSES, SITE } from "../data/siteData";
import { Reveal, SectionHeader, ImgPlaceholder, SpotlightCard } from "../components/ui";
import { useScrollReveal, useCountUp } from "../hooks";

// Swiper for the Hero Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import instituteImg from "../assets/images/institute.png";
import cbtImg from "../assets/images/hero/cbt.png";
import slider1Img from "../assets/images/hero/slider1.png";

// Hero Section Slider
function HeroSection() {
  return (
    <section className="relative w-full h-[800px] lg:h-[820px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, renderBullet: function (index, className) { return '<span class="' + className + ' bg-sky-500 w-3 h-3"></span>'; } }}
        className="w-full h-full"
      >
        {/* Slide 1: Main Admissions — EdCare Deep Teal */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center bg-[#1a3841]">
            {/* EdCare Subtle Pattern / Rays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#203a3f] to-[#112429]"></div>
              <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at top left, #14b8a6 0%, transparent 40%)'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 lg:mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="pt-4 lg:pt-10">
                  <Reveal direction="up" delay={200}>
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded bg-teal-500/20 text-teal-300 text-xs font-medium tracking-widest uppercase mb-6 backdrop-blur-sm">
                      <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                      Admissions Open 2026–27
                    </div>
                    <h1 className="font-outfit font-bold text-5xl sm:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white drop-shadow-sm">
                      TRUST SKD.<br />
                      CRACK NEET.
                    </h1>
                  </Reveal>
                  <Reveal direction="up" delay={400}>
                    <div className="mt-8 flex flex-col gap-4 max-w-md">
                      <div className="edcare-card-dark p-5 border-l-4 border-l-teal-500 bg-white/5 backdrop-blur-md">
                        <h3 className="font-outfit font-medium text-xl text-white group-hover:text-teal-400 transition-colors">नया JOSH, नयी अनुभवी TEAM</h3>
                        <p className="text-teal-100/70 text-sm font-medium mt-1">नयी APPROACH के साथ</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal direction="up" delay={600}>
                    <div className="mt-10 flex gap-4">
                      <Link to="/registration" className="edcare-btn px-10 py-4 text-base shadow-lg shadow-teal-900/20">
                        ADMISSIONS OPEN
                      </Link>
                    </div>
                  </Reveal>
                </div>
                
                <div className="hidden lg:flex justify-end h-full relative items-center">
                   <div className="relative w-full max-w-[650px] h-[90%] flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/30 to-sky-400/10 rounded-full z-0 blur-3xl"></div>
                      <img src={slider1Img} alt="SKD Institute" className="relative z-10 w-full h-full object-contain animate-float-y drop-shadow-2xl" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Hall of Fame — EdCare Deep Teal */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center bg-[#1a3841]">
             <div className="absolute inset-0 z-0 overflow-hidden">
               {/* Subtle pattern */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#203a3f] to-[#112429]"></div>
               <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, #14b8a6 0%, transparent 40%)'}}></div>
             </div>
             
             <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24 lg:mt-10">
                <div className="text-center mb-6 sm:mb-12">
                 <Reveal direction="down">
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-5">
                     <span className="text-teal-400">🏆</span> Results That Speak
                   </div>
                   <h2 className="font-outfit font-bold text-4xl sm:text-6xl lg:text-7xl text-white mb-3 sm:mb-4 leading-tight tracking-tight">
                     FROM SKD CLASSROOMS TO<br/>
                     <span className="text-highlight">TOP MEDICAL COLLEGES</span>
                   </h2>
                   <p className="text-teal-100/70 text-sm sm:text-xl font-medium mb-6">12,000+ Selections · AIIMS · KGMU · RMLIMS</p>
                 </Reveal>
               </div>
                
               <Reveal direction="up" delay={300} className="w-full">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                      1280: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 2200, disableOnInteraction: false }}
                    className="w-full pb-10"
                    nested={true}
                  >
                    {TOPPERS.map((topper, idx) => (
                      <SwiperSlide key={idx} className="pb-4">
                        <div className="w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden border-[4px] border-teal-900/40 flex flex-col group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:border-teal-500/50 transition-all duration-500">
                          
                          {/* Top Photo Section */}
                          <div className="relative h-[55%] bg-[#f8f9fa] flex items-end justify-center overflow-hidden">
                            
                            {/* Teal Hexagon / Shape background */}
                            <div className="absolute bottom-0 w-[75%] h-[80%] bg-gradient-to-br from-[#14b8a6] to-[#0d9488] z-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)' }}></div>
                            
                            {/* Student Image */}
                            {topper.img ? (
                              <img src={topper.img} alt={topper.name} className="relative z-10 h-[90%] object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                              <div className="relative z-10 w-28 h-28 mb-6 bg-white rounded-full border-4 border-slate-200 shadow-lg flex items-center justify-center text-4xl text-slate-400">
                                🎓
                              </div>
                            )}
                          </div>

                          {/* Bottom Details Section */}
                          <div className="h-[45%] bg-[#0a1518] flex flex-col items-center justify-center py-5 px-3 gap-3 relative z-20 border-t-4 border-[#102126]">
                            <h4 className="text-white font-semibold text-lg sm:text-xl uppercase tracking-wide flex items-center gap-2 text-center leading-tight">
                              <span className="text-teal-400">🏆</span> {topper.name}
                            </h4>
                            
                            <div className="bg-[#14b8a6] text-white text-sm sm:text-base font-bold px-6 py-1.5 rounded-lg shadow-[inset_0_-4px_0_#0d9488] tracking-wider text-center uppercase group-hover:shadow-[inset_0_-4px_0_#0d9488,0_0_15px_rgba(20,184,166,0.4)] transition-shadow">
                              {topper.college.length > 15 ? topper.college.split(' ')[0] : topper.college}
                            </div>
                            
                            <div className="text-teal-300 font-bold text-2xl sm:text-3xl tracking-widest mt-1 drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]">
                              {topper.year}
                            </div>
                          </div>

                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
               </Reveal>
             </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: CBT Feature — EdCare Dark Teal */}
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center bg-[#1a3841]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, #14b8a6 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 lg:mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="pt-4 lg:pt-10">
                  <Reveal direction="right" delay={200}>
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded border border-teal-500/30 bg-teal-900/40 text-teal-300 mb-6 font-medium text-xs tracking-widest uppercase backdrop-blur-md">
                      <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                      New Feature · NEET 2027
                    </div>
                    <h1 className="font-outfit font-bold text-5xl sm:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-6">
                      <span className="text-highlight">CBT</span>
                      <span className="text-white"> Test</span>
                      <br />
                      <span className="text-white">Preparation</span>
                    </h1>
                    <p className="text-teal-100/90 text-xl mb-8 max-w-md font-medium leading-relaxed">
                      Experience the real NEET CBT environment with our state-of-the-art computer labs and simulated platform.
                    </p>
                  </Reveal>

                  <Reveal direction="up" delay={400}>
                    <ul className="space-y-4 mb-10">
                      {['Real NTA Exam Interface', 'Instant AI Analytics', 'All India Ranking'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-teal-900/50 border border-teal-500/30">
                            <CheckCircle className="w-4 h-4 text-teal-400" />
                          </div>
                          <span className="text-white font-medium text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                       <Link to="/cbt" className="edcare-btn px-8 py-3 text-sm shadow-lg shadow-teal-900/30">Book Demo Test</Link>
                    </div>
                  </Reveal>
                </div>
                
                <div className="hidden lg:flex justify-center h-full relative items-center">
                   <div className="relative w-full max-w-xl">
                      <img src={cbtImg} alt="CBT Interface" className="relative z-10 w-full h-auto object-contain drop-shadow-xl" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Synced Wave Divider — Hero → Features */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20" style={{lineHeight: 0}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[70px] md:h-[110px]">
          <path d="M0,80 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1380,40 1440,80 L1440,120 L0,120 Z" fill="white" opacity="0.06"/>
          <path d="M0,100 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z" fill="#f1f5f9"/>
        </svg>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24 bg-[#0a1518] overflow-hidden">
      <div className="absolute inset-0 bg-medical-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease" }}>
          <h2 className="font-outfit font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            Our Legacy of Success
          </h2>
          <p className="text-teal-100/70 text-xl max-w-2xl mx-auto font-medium">
            Numbers that speak for our dedication towards shaping the future of medical aspirants.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {STATS.map((stat, i) => {
            const count = useCountUp(stat.value, 2000, isVisible);
            return (
              <div
                key={stat.label}
                className="edcare-card-dark p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="font-outfit font-black text-5xl text-white mb-2 tracking-tight drop-shadow-sm">
                  {count}{stat.suffix}
                </div>
                <div className="text-teal-400 font-bold tracking-widest uppercase text-xs">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const points = [
    "Expert & Experienced Faculty",
    "Proven Track Record in NEET Results",
    "Regular Mock Tests & Performance Analysis",
    "Personalized Mentorship & Guidance",
    "Structured Study Material & Notes",
    "Continuous Support & Doubt Solving",
  ];

  return (
    <section className="py-24 bg-white" style={{ paddingBottom: '8rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10">
          
          <Reveal direction="left">
            <div className="relative">
              {/* Background blob */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-sky-200 via-teal-100 to-teal-50 rounded-[3rem] rotate-3 opacity-80 blur-2xl animate-pulse-glow z-0"></div>
              
              <div className="relative z-10 w-full max-w-lg mx-auto transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src={instituteImg} 
                  alt="SKD NSCI Institute" 
                  className="w-full h-auto drop-shadow-[0_20px_30px_rgba(20,184,166,0.3)] relative z-10" 
                />
                
                {/* Overlay cards */}
                <div className="absolute -bottom-6 -left-6 gradient-border-card p-5 z-20 shadow-2xl bg-white/90 backdrop-blur-sm animate-float-y rounded-2xl border border-white">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl text-white flex items-center justify-center font-black text-2xl shadow-inner">
                      42+
                    </div>
                    <div>
                      <div className="font-black text-slate-900 leading-tight">Years of<br />Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div>
              <SectionHeader
                badge="About SKD NSCI"
                title={<>We Provide Quality <span className="gradient-text">NEET Coaching</span> in Lucknow</>}
                center={false}
              />
              <p className="text-slate-600 text-lg leading-relaxed mb-10 -mt-6">
                With 42+ years of excellence, SKD New Standard Coaching Institute is a trusted name in NEET preparation, helping students achieve top ranks and secure successful medical careers.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Expert & Experienced Faculty</h4>
                    <p className="text-slate-600">Learn from highly experienced NEET educators with proven results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Proven Track Record</h4>
                    <p className="text-slate-600">Consistent NEET toppers and high selection rate every year.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <Play className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Smart Classrooms</h4>
                    <p className="text-slate-600">Interactive learning with modern tools and visual explanations.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="edcare-btn inline-flex items-center gap-2 px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Read More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


// Features Section
function FeaturesSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #14b8a6 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <Reveal>
          <SectionHeader
            badge="Why Choose SKD NSCI"
            title={<>The SKD <span className="text-highlight">Advantage</span></>}
            subtitle="We don't just teach, we build careers. Here's what makes us the top choice for NEET preparation."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 150} direction="up">
              <div className="edcare-card p-4 h-full flex items-start gap-4 relative group hover:border-teal-500/30 hover:shadow-[0_10px_30px_rgba(20,184,166,0.2)] transition-all duration-300 overflow-hidden">
                {/* Wavy full card fill animation */}
                <div className="absolute top-0 left-0 w-full h-full bg-teal-600 transform -translate-x-[calc(100%+50px)] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0">
                  <svg className="absolute top-0 left-full -ml-[1px] w-[40px] h-full text-teal-600" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 L50,0 C90,10 90,15 50,25 C10,35 10,40 50,50 C90,60 90,65 50,75 C10,85 10,90 50,100 L0,100 Z" />
                  </svg>
                </div>
                
                <div className="relative z-10 w-16 h-16 shrink-0 bg-teal-50/80 text-teal-600 rounded-[20px] rounded-br-md flex items-center justify-center text-2xl border border-teal-100 group-hover:bg-white group-hover:text-teal-600 group-hover:-rotate-6 group-hover:shadow-lg transition-all duration-500 shadow-sm">
                  {feature.icon}
                </div>
                <div className="relative z-10 flex-1 pt-0.5">
                  <h3 className="font-outfit font-black text-xl text-slate-900 mb-1 group-hover:text-white transition-colors duration-500 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-[13px] leading-relaxed group-hover:text-teal-50 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Courses Section
function CoursesSection() {
  return (
    <section className="py-24 bg-white" style={{ paddingBottom: '8rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Popular Courses"
            title={<>Explore Our <span className="text-highlight">Courses</span></>}
            subtitle="SKDNSCI offers courses for all levels of NEET aspirants — from foundation to crash courses."
          />
        </Reveal>

        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.2 },
            }}
            pagination={{ clickable: true, el: '.courses-pagination' }}
            className="pb-16"
          >
            {COURSES.map((course, i) => (
              <SwiperSlide key={course.id} className="h-auto">
                <Reveal delay={i * 100} direction="up" className="h-full">
                  <div className="edcare-card p-0 h-full flex flex-col group cursor-pointer relative overflow-hidden bg-white hover:border-transparent transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(13,148,136,0.3)]">
                    
                    {/* Waterfall Background */}
                    <div className="absolute inset-0 bg-teal-600 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></div>

                    {/* Image Section */}
                    <div className="w-full relative bg-slate-50 group-hover:bg-transparent pt-4 transition-colors duration-500 z-10">
                      <div className="absolute top-4 right-4 z-10">
                        <span className="badge bg-white group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 text-slate-800 shadow-md font-bold text-xs px-3 py-1.5 border border-slate-100 transition-colors duration-300">
                          {course.type}
                        </span>
                      </div>
                      <img src={course.image} alt={course.title} className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-500 ease-out" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col bg-transparent relative z-10">
                      <h3 className="font-outfit font-black text-2xl text-slate-900 mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
                        {course.title.split(' (').map((part, index) => 
                          index === 1 ? <><br/><span className="text-teal-600 font-bold text-xl group-hover:text-teal-200">({part}</span></> : part
                        )}
                      </h3>
                      
                      <ul className="space-y-2 mb-6 flex-1">
                        {course.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium group-hover:text-teal-50 transition-colors duration-500">
                            <span className="w-1.5 h-1.5 rounded-full border-2 border-teal-400 shrink-0 mt-1.5 group-hover:border-white group-hover:bg-white transition-colors duration-500"></span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Footer Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 group-hover:border-teal-500/50 transition-colors duration-500">
                         <span className="text-teal-700 font-bold text-sm bg-teal-50 px-3 py-1 rounded-md group-hover:bg-white transition-colors duration-500">{course.badge}</span>
                         <div className="text-right">
                            <div className="text-slate-900 font-black text-lg group-hover:text-white transition-colors duration-500">{course.fee}</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination */}
          <div className="courses-pagination flex justify-center gap-2 mt-4"></div>
        </div>

        <div className="text-center mt-12 mb-10">
          <Link
            to="/courses"
            className="edcare-btn-outline inline-flex items-center gap-2 px-8 py-3.5"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Strengths Section
// Strengths Section
function StrengthsSection() {
  const strengths = [
    { 
      icon: <Presentation className="w-10 h-10 text-teal-400 stroke-[1.5]" />, 
      title: "Expert Mentorship", 
      desc: "Learn from dedicated educators who focus on concept clarity and guide you consistently throughout your NEET preparation." 
    },
    { 
      icon: <Award className="w-10 h-10 text-teal-400 stroke-[1.5]" />, 
      title: "Consistent Performance", 
      desc: "Achieve strong results with our proven track record, built on years of academic excellence and student success in NEET." 
    },
    { 
      icon: <GraduationCap className="w-10 h-10 text-teal-400 stroke-[1.5]" />, 
      title: "Modern Learning Approach", 
      desc: "Experience smart teaching methods supported by digital tools that improve understanding, retention, and overall performance." 
    },
    { 
      icon: <ClipboardList className="w-10 h-10 text-teal-400 stroke-[1.5]" />, 
      title: "Exam-Oriented Preparation", 
      desc: "Stay exam-ready with regular tests, structured practice modules, and focused doubt-solving sessions for better accuracy." 
    },
  ];

  return (
    <section className="py-24 bg-[#132c33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side */}
          <Reveal direction="right">
            <div className="pr-0 lg:pr-10">
              <div className="inline-block mb-6">
                <h3 className="text-lg font-bold text-teal-400">Our Strengths</h3>
                <div className="h-[3px] w-full bg-teal-500/50 mt-1 rounded-full"></div>
              </div>
              
              <h2 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-white leading-[1.1] mb-12">
                Why Students Trust SKD NSCI For NEET Preparation
              </h2>

              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
                {/* Circular Text */}
                <div className="relative w-40 h-40 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text className="text-[10px] font-bold fill-teal-300 uppercase tracking-[0.1em]">
                      <textPath href="#circlePath" startOffset="0" textLength="215">
                        • SKD NSCI • NEET • EXCELLENCE • RESULTS • TRUSTED 
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-900/30 rounded-full border border-teal-500/20 backdrop-blur-sm">
                    <ArrowUpRight className="w-6 h-6 text-teal-400" strokeWidth={2.5} />
                  </div>
                </div>

                {/* 100% Card */}
                <div className="bg-[#102126] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-teal-900/40 p-8 flex-1 flex flex-col justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="font-outfit font-extrabold text-[56px] leading-none text-teal-400 mb-3 relative z-10 drop-shadow-[0_0_15px_rgba(20,184,166,0.2)]">100%</div>
                  <p className="text-teal-100/70 font-medium text-[15px] relative z-10">Focused completely on NEET exam preparation</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side Grid */}
          <Reveal direction="left" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-teal-900/40 relative">
              {strengths.map((s, i) => (
                <div 
                  key={s.title} 
                  className="p-10 border-r border-b border-teal-900/40 bg-transparent hover:bg-teal-900/20 transition-colors duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]">
                    {s.icon}
                  </div>
                  <h4 className="font-outfit font-bold text-lg text-white mb-3 relative z-10">{s.title}</h4>
                  <p className="text-teal-100/70 text-[13px] leading-relaxed font-medium relative z-10">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

// Marquee Section
function MarqueeSection() {
  return (
    <div className="bg-sky-700 text-white text-base sm:text-lg py-4 overflow-hidden shadow-inner">
      <div className="marquee-track">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="flex items-center gap-10 mx-10 whitespace-nowrap font-bold tracking-wide">
            <span>🎓 Crack NEET with SKD NSCI</span>
            <span>•</span>
            <span>⭐ 41+ Years of Excellence</span>
            <span>•</span>
            <span>👨‍🏫 Expert Faculty</span>
            <span>•</span>
            <span>📚 Complete NEET Preparation</span>
            <span>•</span>
            <span>📈 Regular Tests & Analysis</span>
            <span>•</span>
            <span>💡 Concept-Based Learning</span>
            <span>•</span>
            <span>🎯 Doubt Solving Support</span>
            <span>•</span>
            <span>🏆 Proven Results</span>
            <span>•</span>
            <span>🚀 Start Your Medical Journey Today</span>
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Admissions CTA Section
function AdmissionsCTA() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 font-outfit">
            Admissions Open for NEET 2027 – Free trial classes available
          </h3>
          <Link
            to="/contact"
            className="edcare-btn inline-block px-10 py-4 shadow-lg shadow-teal-500/20"
          >
            Enroll Now
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// FAQ Preview Section
function FAQPreview() {
  const faqs = [
    {
      q: "What makes SKD different from other NEET coaching in Lucknow?",
      a: "Unlike crowded corporate coachings, SKD focuses on a student-centric approach with limited batch sizes, personalized attention, highly experienced faculty, and a unique micro-analysis testing system.",
    },
    {
      q: "What is the track record of SKD Institute in NEET?",
      a: "SKD holds a stellar track record of producing top ranks year after year. Thousands of alumni are currently studying in premium government medical colleges across India.",
    },
    {
      q: "Is there a facility for outstation students?",
      a: "Yes! We assist in finding safe, hygienic hostel/PG accommodations near our centers with strict security protocols for outstation students.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            badge="Got Questions?"
            title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
            subtitle="Everything you need to know about SKD NSCI and NEET preparation."
          />
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`clean-card overflow-hidden transition-all duration-300 ${open === i ? "border-sky-300 shadow-md ring-1 ring-sky-100" : ""}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-bold text-slate-900 text-base">{faq.q}</span>
                  <span className={`text-sky-500 text-2xl font-black shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  style={{ maxHeight: open === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm bg-slate-50 border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/faq" className="btn-outline bg-white inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold">
            View All FAQs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Contact CTA Section
function ContactCTA() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="clean-card p-12 text-center border-sky-100 shadow-xl bg-white bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
              🎓
            </div>
            <h2 className="font-outfit font-black text-3xl sm:text-4xl text-slate-900 mb-4">
              Ready to Start Your <span className="text-sky-600">Medical Journey?</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of successful students who trusted SKD NSCI for their NEET preparation.
              Talk to our expert counselors today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base shadow-lg shadow-sky-500/20 hover:-translate-y-1"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+917080111595"
                className="btn-outline bg-white flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base hover:bg-slate-50"
              >
                📞 7080111595
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <CoursesSection />
      <StrengthsSection />
      <MarqueeSection />
      <AdmissionsCTA />
    </div>
  );
}
