import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "../data/siteData";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Main Navbar - EdCare Style */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#102126] shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group px-2">
              <div className="w-10 h-10 rounded-md bg-teal-500 flex items-center justify-center text-white font-black text-lg transition-transform duration-300 group-hover:bg-teal-400">
                S
              </div>
              <div>
                <div className="font-outfit font-black text-xl leading-none text-white">
                  SKD <span className="text-teal-400">NSCI</span>
                </div>
                <div className="text-[9px] tracking-widest uppercase font-bold mt-0.5 text-teal-100/70">
                  New Standard Coaching
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className="flex items-center gap-1 px-4 py-2 text-sm font-bold transition-colors text-white/90 hover:text-teal-400 uppercase tracking-wider"
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {link.label}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      </button>
                      {/* Dropdown */}
                      <div
                        className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="bg-white rounded-xl p-2 min-w-[220px] shadow-lg border border-slate-200">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.label}
                              to={child.path}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 text-sm rounded-lg transition-all font-medium ${
                                  isActive
                                    ? "bg-sky-50 text-sky-700"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-sky-600"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-4 py-2 text-sm font-bold transition-colors uppercase tracking-wider ${
                          isActive
                            ? 'text-teal-400'
                            : 'text-white/90 hover:text-teal-400'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4 shrink-0 pr-2">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="font-bold text-white/90 hover:text-teal-400 transition-colors uppercase tracking-wider text-sm flex items-center gap-2"
              >
                Log In
              </button>
              <Link
                to="/contact"
                className="edcare-btn px-6 py-2.5 text-sm uppercase tracking-wider"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile menu btn */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors mr-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-slate-200 overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white font-black">
                S
              </div>
              <span className="font-outfit font-bold text-slate-900">SKD NSCI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg p-1.5">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <div>
                    <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm font-medium rounded-xl transition-all ml-2 ${
                            isActive
                              ? "bg-sky-50 text-sky-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                        isActive
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => { setIsOpen(false); setIsAuthModalOpen(true); }}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white block text-center py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Log In / Register
            </button>
            <Link
              to="/registration"
              onClick={() => setIsOpen(false)}
              className="btn-primary block text-center py-3 rounded-xl text-sm font-semibold"
            >
              Enroll Now
            </Link>
            <a
              href={`tel:+91${SITE.phone1}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              {SITE.phone1}
            </a>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
