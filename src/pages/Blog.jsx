import { useState } from "react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/siteData";
import { Reveal, SectionHeader, PageBanner } from "../components/ui";
import { ArrowRight, Clock, Tag } from "lucide-react";

export default function Blog() {
  const categories = ["All", "Exam Guide", "Strategy", "Subject Tips", "Guidance", "Admission"];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? BLOGS : BLOGS.filter((b) => b.category === active);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Our Blog" breadcrumb={["Home", "Blog"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <SectionHeader
            badge="Blog"
            title={<>NEET <span className="gradient-text">Tips & Insights</span></>}
            subtitle="Expert tips, study guides, topper strategies, and NEET updates to help you ace the exam."
          />
        </Reveal>

        {/* Category Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  active === cat
                    ? "bg-sky-600 text-white shadow-md shadow-sky-500/20 border border-sky-600"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((blog, i) => (
            <Reveal key={blog.id} delay={i * 100}>
              <div className="clean-card overflow-hidden border-slate-200 hover:border-sky-300 h-full flex flex-col group">
                {/* Image */}
                <div className="aspect-video img-placeholder relative border-b border-slate-100 bg-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-4xl mb-2">📰</div>
                    <p className="text-slate-400 text-xs font-medium">Article Image</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-white text-sky-700 shadow-sm border border-slate-100">
                      {blog.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col bg-white">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-teal-600">
                      <Tag className="w-3 h-3" /> {blog.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-outfit font-black text-slate-900 text-xl leading-snug mb-3 flex-1 group-hover:text-sky-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{blog.excerpt}</p>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold uppercase">{blog.date}</span>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
