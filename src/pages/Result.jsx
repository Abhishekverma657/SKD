import { Reveal, PageBanner } from "../components/ui";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Download } from "lucide-react";

export default function Result() {
  const results = [
    { year: "2025", topper: "Adrika Sriharsh", college: "AIIMS Delhi", score: "720/720", total: "2,450+" },
    { year: "2024", topper: "Khusdil Alam", college: "KGMU Lucknow", score: "715/720", total: "1,850+" },
    { year: "2023", topper: "Shyam Agarwal", college: "AIIMS Lucknow", score: "710/720", total: "1,640+" },
    { year: "2022", topper: "Saumya Chaubey", college: "Maulana Azad Medical College", score: "705/720", total: "1,420+" },
    { year: "2021", topper: "Jaspreet Singh", college: "SGPGI Lucknow", score: "702/720", total: "1,250+" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Our Results" breadcrumb={["Home", "Results"]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-outfit font-black text-4xl text-slate-900 mb-4">
              Consistent Results, <span className="gradient-text">Year After Year</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              With over 12,000+ MBBS selections in the last 4 decades, SKD NSCI has proven its 
              excellence in medical coaching time and again.
            </p>
          </div>
        </Reveal>

        {/* Results Table */}
        <Reveal delay={100}>
          <div className="clean-card overflow-hidden shadow-lg border-slate-200 mb-20">
            {results.map((r, i) => (
              <div key={r.year} className={`flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 ${i !== results.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 font-black text-xl shadow-sm shrink-0 border border-sky-200">
                  {r.year}
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full text-center sm:text-left">
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Topper</div>
                    <div className="font-bold text-slate-900">{r.topper}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Score</div>
                    <div className="font-bold text-teal-600">{r.score}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">College</div>
                    <div className="font-bold text-slate-700">{r.college}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Selections {r.year}</div>
                    <div className="font-bold text-sky-600">{r.total}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Reveal>
            <div className="clean-card p-8 border-slate-200 text-center h-full hover:border-sky-300">
              <h3 className="font-outfit font-black text-xl text-slate-900 mb-3">Want to check your test result?</h3>
              <p className="text-slate-600 text-sm mb-6">Login to the student portal or contact your center coordinator to check individual test results.</p>
              <a href="#" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md shadow-sky-500/20">
                <FileText className="w-4 h-4" /> Student Portal
              </a>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="clean-card p-8 border-slate-200 text-center h-full hover:border-sky-300">
              <h3 className="font-outfit font-black text-xl text-slate-900 mb-3">Download Answer Keys</h3>
              <p className="text-slate-600 text-sm mb-6">Download the official answer keys and solutions for recent NEET and internal tests.</p>
              <Link to="/cbt-test" className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-slate-50">
                <Download className="w-4 h-4" /> Get Answer Keys
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
