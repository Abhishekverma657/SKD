// All site data centralized here

export const SITE = {
  name: "SKD NSCI",
  fullName: "SKD New Standard Coaching Institute",
  tagline: "Best NEET Coaching in Lucknow",
  description: "SKD Standard Coaching Institute is one of the Best NEET coaching in Lucknow. Renowned for its unparalleled academic excellence and remarkable performance.",
  phone1: "7080111595",
  phone2: "7080111582",
  email: "skdnsci02@gmail.com",
  year: "2026",
  founder: "Shri S.K.D. Singh",
  legacy: "42+",
  selections: "12,000+",
};

export const ADDRESSES = [
  {
    id: 1,
    label: "Hazratganj Center",
    address: "11, Sapru Marg, Prem Nagar, Hazratganj, Lucknow, UP 226001",
    icon: "🏛️",
  },
  {
    id: 2,
    label: "Rajajipuram Center",
    address: "E-BLOCK, Block E, Rajajipuram, Lucknow, UP 226017",
    icon: "🏢",
  },
  {
    id: 3,
    label: "Barabanki Center",
    address: "Barel, Chauraha, Barabanki, UP 225001",
    icon: "🏫",
  },
];

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Gallery", path: "/gallery" },
      { label: "FAQs", path: "/faq" },
    ],
  },
  {
    label: "Courses",
    path: "/courses",
    children: [
      { label: "Whole Year (Target)", path: "/whole-year" },
      { label: "Foundation Course (Momentum)", path: "/foundation-course" },
      { label: "Foundation Course (Spectrum)", path: "/foundation-spectrum" },
      { label: "Crash Course", path: "/crash-course" },
      { label: "NEET Test Series", path: "/test-series" },
    ],
  },
  {
    label: "Student",
    path: "/registration",
    children: [
      { label: "Registration", path: "/registration" },
      { label: "Result", path: "/result" },
      { label: "Question Paper", path: "/question-paper" },
      { label: "Announcements", path: "/announcements" },
    ],
  },
  { label: "CBT Test", path: "/cbt-test" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const TOPPERS = [
  { name: "Adrika Sriharsh", year: "2025", rank: "State Topper", college: "AIIMS Delhi", img: null },
  { name: "Khusdil Alam", year: "2024", rank: "State Topper", college: "KGMU Lucknow", img: null },
  { name: "Shyam Agarwal", year: "2023", rank: "State Topper", college: "AIIMS Lucknow", img: null },
  { name: "Saumya Chaubey", year: "2022", rank: "State Topper", college: "Maulana Azad Medical College", img: null },
  { name: "Jaspreet Singh", year: "2021", rank: "State Topper", college: "SGPGI Lucknow", img: null },
  { name: "Murari Lal", year: "2020", rank: "State Topper", college: "BHU Varanasi", img: null },
];

export const STATS = [
  { value: 12000, suffix: "+", label: "Students Mentored", icon: "👨‍🎓" },
  { value: 42, suffix: "+", label: "Years of Excellence", icon: "🏆" },
  { value: 98, suffix: "%", label: "Student Success Rate", icon: "📈" },
  { value: 50, suffix: "+", label: "Expert Faculty", icon: "👨‍🏫" },
];

export const FEATURES = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    desc: "Learn from highly experienced NEET educators with proven results and decades of teaching excellence.",
  },
  {
    icon: "📋",
    title: "Structured Study Plan",
    desc: "Well-planned syllabus coverage with daily, weekly & monthly targets to keep you on track.",
  },
  {
    icon: "📝",
    title: "Regular Test Series",
    desc: "NEET-pattern mock tests with detailed performance analysis and personalized feedback.",
  },
  {
    icon: "💬",
    title: "Doubt Solving Support",
    desc: "Clear your concepts with dedicated doubt-solving classes by experienced mentors.",
  },
  {
    icon: "🖥️",
    title: "Smart Classrooms",
    desc: "Interactive learning with modern tools, digital boards and visual explanations.",
  },
  {
    icon: "📊",
    title: "Performance Tracking",
    desc: "Track your progress with detailed reports, analytics and personalized improvement tips.",
  },
  {
    icon: "📚",
    title: "Study Material",
    desc: "Comprehensive and exam-focused notes, modules and question banks designed by experts.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    desc: "Get personalized one-on-one guidance to improve weak areas and maximize your NEET rank.",
  },
  {
    icon: "🏅",
    title: "Proven Results",
    desc: "Consistent NEET toppers and high selection rate every year from Lucknow's best institute.",
  },
];

import wholeYearImg from "../assets/images/courses/whole-year.png";
import momentumImg from "../assets/images/courses/momentum.png";
import spectrumImg from "../assets/images/courses/spectrum.png";
import crashCourseImg from "../assets/images/courses/crash-course.png";
import testSeriesImg from "../assets/images/courses/test-series.png";

export const COURSES = [
  {
    id: "whole-year",
    title: "Whole Year (Target)",
    type: "Hybrid",
    badge: "Most Popular",
    badgeColor: "from-violet-500 to-cyan-500",
    icon: "🎯",
    image: wholeYearImg,
    duration: "1 Year",
    fee: "₹5,000",
    feeLabel: "Pre-registration",
    features: [
      "Classes by well experienced faculty",
      "Comprehensive Test Discussion",
      "Full NEET syllabus based classes",
      "Phase One 15 Major & 10 Minor Tests",
      "Regular doubt solving sessions",
      "Performance tracking & analysis",
    ],
    path: "/whole-year",
    color: "from-violet-500/20 to-cyan-500/10",
    borderColor: "border-violet-500/30",
    iconBg: "from-violet-500 to-cyan-500",
  },
  {
    id: "foundation-momentum",
    title: "Foundation Course (Momentum)",
    type: "Hybrid",
    badge: "For Class 11-12",
    badgeColor: "from-blue-500 to-indigo-500",
    icon: "🚀",
    image: momentumImg,
    duration: "2 Years",
    fee: "₹5,000",
    feeLabel: "Pre-registration",
    features: [
      "Classes by well experienced faculty",
      "Classroom Teaching for board & competitive syllabi",
      "Comprehensive topic-wise coverage",
      "Regular mock tests & analysis",
      "Pre-registration fee: 5000/-",
      "Study material included",
    ],
    path: "/foundation-course",
    color: "from-blue-500/20 to-indigo-500/10",
    borderColor: "border-blue-500/30",
    iconBg: "from-blue-500 to-indigo-500",
  },
  {
    id: "foundation-spectrum",
    title: "Foundation Course (Spectrum)",
    type: "Hybrid",
    badge: "For Class 12",
    badgeColor: "from-emerald-500 to-teal-500",
    icon: "🌟",
    image: spectrumImg,
    duration: "1 Year",
    fee: "₹5,000",
    feeLabel: "Pre-registration",
    features: [
      "Classes by well experienced faculty",
      "Separate Printed Modules & Home Assignments",
      "Preparation for board & competitive exams",
      "Regular test series included",
      "Doubt clearing sessions",
      "Expert mentorship",
    ],
    path: "/foundation-spectrum",
    color: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    iconBg: "from-emerald-500 to-teal-500",
  },
  {
    id: "crash-course",
    title: "Crash Course",
    type: "Hybrid",
    badge: "Post Board Exam",
    badgeColor: "from-orange-500 to-red-500",
    icon: "⚡",
    image: crashCourseImg,
    duration: "3-4 Months",
    fee: "Contact Us",
    feeLabel: "For pricing",
    features: [
      "Topic wise Question Bank",
      "Doubt solving sessions by experienced faculty",
      "12 Major & 5 Minor Tests",
      "Rapid revision strategy",
      "High-yield topic coverage",
      "Last-mile exam preparation",
    ],
    path: "/crash-course",
    color: "from-orange-500/20 to-red-500/10",
    borderColor: "border-orange-500/30",
    iconBg: "from-orange-500 to-red-500",
  },
  {
    id: "test-series",
    title: "NEET Test Series",
    type: "Hybrid",
    badge: "Practice Only",
    badgeColor: "from-pink-500 to-rose-500",
    icon: "📝",
    image: testSeriesImg,
    duration: "Flexible",
    fee: "Contact Us",
    feeLabel: "For pricing",
    features: [
      "Comprehensive test Discussion",
      "Doubt clearing session",
      "Topic wise question bank",
      "Phase One 15 Major & 10 Minor Tests",
      "Detailed performance analytics",
      "NTA-pattern simulation",
    ],
    path: "/test-series",
    color: "from-pink-500/20 to-rose-500/10",
    borderColor: "border-pink-500/30",
    iconBg: "from-pink-500 to-rose-500",
  },
];

export const FAQS = [
  {
    q: "What makes SKD New Standard Coaching Institute different from other NEET coaching in Lucknow?",
    a: "Unlike crowded corporate coaching's, SKD focuses on a student-centric approach with limited batch sizes. We combine a legacy of outstanding selections with personalized attention, highly stable and experienced faculty, and a unique micro-analysis testing system that tracks every student's daily progress.",
  },
  {
    q: "How does SKD prepare students for the latest NTA NEET exam pattern?",
    a: "Our curriculum is dynamically updated as per the latest NTA guidelines. We conduct regular Part Tests and Full-Syllabus Mock Tests that replicate the actual exam environment, complete with negative marking and time-bound OMR practice.",
  },
  {
    q: "What is the success rate or track record of SKD Institute in the NEET exam?",
    a: "SKD New Standard Coaching Institute holds a stellar track record of producing top ranks in NEET from Lucknow year after year. With decades of academic legacy, thousands of our alumni are currently studying in premium government medical colleges across India.",
  },
  {
    q: "Is there a facility for outstation students at SKD Lucknow, and how is their security managed?",
    a: "Yes, SKD caters to thousands of students coming from different parts of Uttar Pradesh and other states. We assist in finding safe, hygienic, and well-managed hostel/PG accommodations near our Lucknow centers with strict security protocols.",
  },
  {
    q: "How does SKD Institute train students to improve time management during the 3-hour NEET exam?",
    a: "Speed and accuracy are the ultimate keys to cracking NEET. At SKD, we conduct a specialized Time-Bound Drill Series. We teach students cognitive shortcuts, elimination techniques, and the correct order of attempting sections. Regular practice on actual NTA-pattern OMR sheets helps students finish 15 minutes before the final bell.",
  },
  {
    q: "What subjects are covered in the NEET coaching and what is the medium of instruction?",
    a: "We cover all three subjects — Physics, Chemistry, and Biology — in a comprehensive manner. Classes are conducted in both Hindi and English medium to ensure every student benefits from clear understanding.",
  },
  {
    q: "Is there a demo or trial class available before enrollment?",
    a: "Yes! We offer free demo classes for all prospective students. Contact us or walk into any of our three centers to attend a demo session and experience SKD's teaching methodology firsthand.",
  },
  {
    q: "What are the payment and scholarship options available?",
    a: "We offer flexible payment options and merit-based scholarships for deserving students. Students with strong academic records may qualify for fee waivers. Contact our admission team for details on scholarship criteria and installment plans.",
  },
];

export const BLOGS = [
  {
    id: 1,
    title: "NEET 2027 Syllabus: Complete Subject-wise Breakdown",
    category: "Exam Guide",
    date: "June 28, 2026",
    readTime: "8 min read",
    excerpt: "Complete analysis of NEET 2027 syllabus with important topics, weightage analysis, and expert tips to prioritize your preparation.",
    img: null,
    tag: "Must Read",
  },
  {
    id: 2,
    title: "How to Score 650+ in NEET: A Topper's Strategy",
    category: "Strategy",
    date: "June 20, 2026",
    readTime: "12 min read",
    excerpt: "SKD topper Adrika Sriharsh shares her complete study plan, daily routine, and revision strategy that helped her crack NEET 2025.",
    img: null,
    tag: "Topper Tips",
  },
  {
    id: 3,
    title: "Biology High-Yield Topics for NEET 2027",
    category: "Subject Tips",
    date: "June 15, 2026",
    readTime: "10 min read",
    excerpt: "Expert faculty at SKD reveals the most frequently tested biology topics in NEET with chapter-wise weightage and last-minute tips.",
    img: null,
    tag: "Biology",
  },
  {
    id: 4,
    title: "Common Mistakes to Avoid in NEET Preparation",
    category: "Guidance",
    date: "June 10, 2026",
    readTime: "7 min read",
    excerpt: "Our counselors have identified the top 10 mistakes that NEET aspirants make during preparation and how to avoid them.",
    img: null,
    tag: "Guidance",
  },
  {
    id: 5,
    title: "NEET Physics: Mastering Mechanics and Optics",
    category: "Subject Tips",
    date: "June 5, 2026",
    readTime: "9 min read",
    excerpt: "Detailed guide on how to approach Physics for NEET — from mechanics to optics, with solved examples and shortcut formulas.",
    img: null,
    tag: "Physics",
  },
  {
    id: 6,
    title: "Admission Process at SKD NSCI: Step-by-Step Guide",
    category: "Admission",
    date: "May 30, 2026",
    readTime: "5 min read",
    excerpt: "Everything you need to know about enrolling at SKD NSCI — registration, documents required, fee structure, and batch timings.",
    img: null,
    tag: "Admission",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, label: "Classroom Session", category: "Classroom", img: null },
  { id: 2, label: "Annual Result Function", category: "Events", img: null },
  { id: 3, label: "Topper Felicitation", category: "Awards", img: null },
  { id: 4, label: "Smart Lab", category: "Facilities", img: null },
  { id: 5, label: "Study Hall", category: "Facilities", img: null },
  { id: 6, label: "Faculty Meet", category: "Events", img: null },
  { id: 7, label: "CBT Test Center", category: "Facilities", img: null },
  { id: 8, label: "Sports Day", category: "Events", img: null },
  { id: 9, label: "Science Exhibition", category: "Events", img: null },
  { id: 10, label: "Library", category: "Facilities", img: null },
  { id: 11, label: "Batch Orientation", category: "Classroom", img: null },
  { id: 12, label: "Parent-Teacher Meet", category: "Events", img: null },
];
