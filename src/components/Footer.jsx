import { Link } from "react-router-dom";
import { SITE, NAV_LINKS, ADDRESSES } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-black text-lg">
                S
              </div>
              <div>
                <div className="font-outfit font-black text-xl text-white leading-none">
                  SKD <span className="text-teal-400">NSCI</span>
                </div>
                <div className="text-[9px] text-slate-400 tracking-widest uppercase font-semibold mt-0.5">
                  New Standard Coaching
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lucknow's most trusted NEET coaching institute with 42+ years of academic excellence and 12,000+ successful MBBS selections.
            </p>
            <div className="flex items-center gap-4">
              {/* Social Icons Placeholder */}
              {["FB", "IG", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-sky-600 hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-400 hover:text-sky-400 text-sm transition-colors flex items-center gap-2">
                    <span className="text-sky-500/50">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Centers */}
          <div>
            <h4 className="font-outfit font-bold text-white mb-6">Our Centers</h4>
            <ul className="space-y-4">
              {ADDRESSES.map((addr) => (
                <li key={addr.id} className="text-sm">
                  <strong className="block text-slate-200 mb-1">{addr.label}</strong>
                  <span className="text-slate-400">{addr.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <span className="text-sky-400 mt-0.5">📞</span>
                <div>
                  <a href={`tel:+91${SITE.phone1}`} className="block hover:text-white transition-colors">{SITE.phone1}</a>
                  <a href={`tel:+91${SITE.phone2}`} className="block hover:text-white transition-colors">{SITE.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <span className="text-sky-400">✉️</span>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              </li>
            </ul>

            <div className="mt-8">
              <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
                <div className="text-white font-semibold text-sm mb-2">Download Our App</div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-slate-900 rounded border border-slate-700 p-2 text-center text-xs text-slate-400 cursor-pointer hover:bg-slate-700 transition-colors">
                    Play Store
                  </div>
                  <div className="flex-1 bg-slate-900 rounded border border-slate-700 p-2 text-center text-xs text-slate-400 cursor-pointer hover:bg-slate-700 transition-colors">
                    App Store
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SKD New Standard Coaching Institute. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
