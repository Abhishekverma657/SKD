import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { COURSES } from "./data/siteData";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Registration from "./pages/Registration";
import CBTTest from "./pages/CBTTest";
import Result from "./pages/Result";
import { PageBanner, Reveal } from "./components/ui";
import { Link } from "react-router-dom";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Global Scroll Progress Bar
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

// Page Transition Wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Generic placeholder pages
function QuestionPaper() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Question Papers" breadcrumb={["Home", "Student", "Question Papers"]} />
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Reveal>
          <div className="clean-card rounded-3xl p-16 border border-slate-200">
            <div className="text-6xl mb-6">📄</div>
            <h2 className="font-outfit font-black text-3xl text-slate-900 mb-4">Question Papers</h2>
            <p className="text-slate-600 mb-8">Previous year NEET question papers and practice sets from SKD NSCI.</p>
            <Link to="/contact" className="btn-primary px-8 py-3.5 rounded-xl font-bold inline-flex items-center gap-2">
              Contact to Access Papers
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Announcements() {
  const items = [
    { date: "July 5, 2026", title: "🔥 RE-NEET 2026 Answer Key Released", tag: "Important" },
    { date: "June 28, 2026", title: "Admissions Open for 2026-27 Batch — Limited Seats!", tag: "Admission" },
    { date: "June 20, 2026", title: "Result of Phase-1 Test Series Announced", tag: "Result" },
    { date: "June 15, 2026", title: "New Batch Starting July 15, 2026", tag: "Batch" },
    { date: "June 10, 2026", title: "Free Demo Classes Available — Register Now", tag: "Event" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Announcements & Notices" breadcrumb={["Home", "Student", "Announcements"]} />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-4">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="clean-card p-6 border-slate-200 hover:border-sky-300 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-lg shrink-0">
                  📢
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="badge">{item.tag}</span>
                    <span className="text-slate-500 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-slate-900 font-semibold">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoursePage({ course }) {
  const found = COURSES.find((c) => c.id === course) || COURSES[0];
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title={found.title} breadcrumb={["Home", "Courses", found.title]} />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Reveal>
          <div className={`clean-card p-10 border border-slate-200`}>
            <div className={`text-6xl mb-6`}>{found.icon}</div>
            <h2 className="font-outfit font-black text-3xl text-slate-900 mb-4">{found.title}</h2>
            <div className="flex gap-4 mb-6">
              <span className="badge">📡 {found.type}</span>
              <span className="badge">⏱️ {found.duration}</span>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              This course at SKD New Standard Coaching Institute is designed to provide comprehensive NEET preparation.
              With experienced faculty, structured study material, and regular mock tests, students achieve their best results.
            </p>
            <ul className="space-y-3 mb-8">
              {found.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-slate-700 text-sm">
                  <span className="text-teal-500 mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link to="/registration" className="btn-primary px-8 py-3.5 rounded-xl font-bold">Enroll Now</Link>
              <Link to="/contact" className="btn-outline px-8 py-3.5 rounded-xl font-bold">Contact Us</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Privacy Policy" breadcrumb={["Home", "Privacy Policy"]} />
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Reveal>
          <div className="clean-card p-8 border border-slate-200">
            <h2 className="text-slate-900 font-outfit font-bold text-2xl mb-4">Privacy Policy</h2>
            <p className="text-slate-600 mb-6">This Privacy Policy describes how SKD New Standard Coaching Institute collects, uses, and protects your information when you visit our website.</p>
            <h3 className="text-slate-900 font-bold text-lg mb-2">Information We Collect</h3>
            <p className="text-slate-600 mb-6">We collect information you provide directly, such as name, phone number, email, and course preferences when you fill out forms on our website.</p>
            <h3 className="text-slate-900 font-bold text-lg mb-2">How We Use Information</h3>
            <p className="text-slate-600 mb-6">We use your information to contact you regarding admissions, course details, and updates from SKD NSCI.</p>
            <h3 className="text-slate-900 font-bold text-lg mb-2">Contact</h3>
            <p className="text-slate-600">For privacy concerns, contact us at skdnsci02@gmail.com</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

// Floating enquiry button
function FloatingEnquiry() {
  return (
    <a
      href="tel:+917080111595"
      className="fixed bottom-6 right-6 z-50 bg-sky-600 text-white font-bold px-5 py-3 rounded-full shadow-lg shadow-sky-600/30 hover:bg-sky-700 transition-all hover:-translate-y-1 flex items-center gap-2 text-sm"
    >
      <span className="text-lg">📞</span>
      Enquire Now
    </a>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <ProgressBar />
      <Navbar />
      <main className="flex-1 mt-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/registration" element={<PageWrapper><Registration /></PageWrapper>} />
            <Route path="/cbt-test" element={<PageWrapper><CBTTest /></PageWrapper>} />
            <Route path="/result" element={<PageWrapper><Result /></PageWrapper>} />
            <Route path="/question-paper" element={<PageWrapper><QuestionPaper /></PageWrapper>} />
            <Route path="/announcements" element={<PageWrapper><Announcements /></PageWrapper>} />
            <Route path="/whole-year" element={<PageWrapper><CoursePage course="whole-year" /></PageWrapper>} />
            <Route path="/foundation-course" element={<PageWrapper><CoursePage course="foundation-momentum" /></PageWrapper>} />
            <Route path="/foundation-spectrum" element={<PageWrapper><CoursePage course="foundation-spectrum" /></PageWrapper>} />
            <Route path="/crash-course" element={<PageWrapper><CoursePage course="crash-course" /></PageWrapper>} />
            <Route path="/test-series" element={<PageWrapper><CoursePage course="test-series" /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/refund-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            {/* 404 */}
            <Route path="*" element={
              <PageWrapper>
                <div className="min-h-screen flex items-center justify-center flex-col gap-4">
                  <div className="text-8xl animate-bounce">🔍</div>
                  <h1 className="font-outfit font-black text-4xl text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-purple-600">Page Not Found</h1>
                  <p className="text-slate-600">The page you're looking for doesn't exist.</p>
                  <Link to="/" className="btn-primary px-8 py-3 rounded-xl font-bold mt-4 shadow-lg shadow-sky-500/30 hover:scale-105">Go Home</Link>
                </div>
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingEnquiry />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
