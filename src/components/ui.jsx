import { useEffect, useRef, useState } from "react";

import { motion, useInView } from "framer-motion";

// Advanced Animated Reveal Wrapper
export function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "scale" ? 0.9 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, x: 0, scale: 1,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: delay / 1000 
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section Header component
export function SectionHeader({ badge, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 flex flex-col ${center ? "items-center text-center" : "items-start text-left"}`}>
      {badge && (
        <div className="mb-4">
          <span className="badge">{badge}</span>
        </div>
      )}
      <h2 className="font-outfit font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-600 text-lg leading-relaxed max-w-2xl ${center ? "text-center" : "text-left"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Image placeholder / actual image component
export function ImgPlaceholder({ src, alt, className = "", style = {}, heightClass = "h-full" }) {
  // If src is provided, it means the user should put their image there
  return (
    <div className={`relative bg-slate-100 overflow-hidden ${className}`} style={style}>
      {src ? (
        <>
          <img src={src} alt={alt} className={`object-cover w-full ${heightClass} absolute inset-0 z-10 opacity-0 transition-opacity duration-300`} onLoad={(e) => e.target.classList.remove('opacity-0')} />
          {/* Instruction for user */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-100 z-0 border-2 border-dashed border-sky-300">
            <div className="text-4xl mb-3 text-sky-400">📸</div>
            <p className="text-slate-700 font-bold mb-1">Place Image Here</p>
            <p className="text-sky-600 text-xs font-mono bg-sky-50 px-2 py-1 rounded">public{src}</p>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className="text-3xl mb-2 text-slate-400">🖼️</div>
          <p className="text-slate-500 text-xs font-medium text-center">{alt}</p>
        </div>
      )}
    </div>
  );
}

// Floating badge / label
export function FloatingBadge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}

// Page Hero Banner
export function PageBanner({ title, breadcrumb }) {
  return (
    <div className="relative pt-36 pb-20 overflow-hidden bg-[#102126]">
      {/* EdCare Subtle Background */}
      <div className="absolute inset-0 bg-medical-pattern opacity-10" />
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #14b8a6 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <Reveal direction="scale">
          <h1 className="font-outfit font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight drop-shadow-xl">
            {title}
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="flex items-center justify-center gap-2 text-teal-50 text-sm font-medium bg-white/5 backdrop-blur-sm px-6 py-2.5 rounded border border-white/10 shadow-lg">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">/</span>}
                <span className={i === breadcrumb.length - 1 ? "text-teal-400 font-bold" : "hover:text-white transition-colors"}>
                  {b}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      
      {/* Wavy bottom */}
      <div className="custom-shape-divider-bottom" style={{ transform: 'rotate(0deg)' }}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" style={{fill: '#ffffff'}}></path>
          </svg>
      </div>
    </div>
  );
}

// --- NEW COMPONENT: SpotlightCard ---
// Creates a stunning mouse-tracking spotlight glow and smoothly transitions colors
export function SpotlightCard({ children, className = "" }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className={`card-spotlight ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
