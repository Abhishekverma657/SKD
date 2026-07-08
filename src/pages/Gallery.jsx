import { useState } from "react";
import { GALLERY_ITEMS } from "../data/siteData";
import { Reveal, SectionHeader, PageBanner } from "../components/ui";

export default function Gallery() {
  const categories = ["All", "Classroom", "Events", "Awards", "Facilities"];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <div className="bg-white">
      <PageBanner title="Our Gallery" breadcrumb={["Home", "Gallery"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <SectionHeader
            badge="Gallery"
            title={<>Moments from <span className="gradient-text">SKD NSCI</span></>}
            subtitle="A glimpse into our classrooms, events, toppers, and facilities."
          />
        </Reveal>

        {/* Filter */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <div className="group relative rounded-2xl overflow-hidden aspect-square img-placeholder cursor-pointer border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center flex-col bg-slate-100">
                  <div className="text-4xl mb-2">🖼️</div>
                  <p className="text-slate-500 text-xs text-center px-2 font-medium">{item.label}</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <span className="inline-block mt-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {item.category}
                    </span>
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
