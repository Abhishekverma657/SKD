import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SITE, ADDRESSES } from "../data/siteData";
import { Reveal, SectionHeader, PageBanner } from "../components/ui";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Contact Us" breadcrumb={["Home", "Contact"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <SectionHeader
            badge="Get In Touch"
            title={<>Let's Start Your <span className="gradient-text">NEET Journey</span></>}
            subtitle="Reach out to our counselors for admissions, course info, or any queries. We're here to help!"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {ADDRESSES.map((addr, i) => (
              <Reveal key={addr.id} delay={i * 100}>
                <div className="clean-card p-6 border-slate-200 hover:border-sky-300 transition-all cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 text-xl shrink-0">
                      {addr.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{addr.label}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{addr.address}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="clean-card p-6 border-slate-200 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Call Us</p>
                    <div className="font-semibold text-slate-800">
                      <a href={`tel:+91${SITE.phone1}`} className="hover:text-sky-600 transition-colors">{SITE.phone1}</a>
                      <span className="text-slate-300 mx-2">|</span>
                      <a href={`tel:+91${SITE.phone2}`} className="hover:text-sky-600 transition-colors">{SITE.phone2}</a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-100" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-0.5">Email Us</p>
                    <a href={`mailto:${SITE.email}`} className="font-semibold text-slate-800 hover:text-sky-600 transition-colors">{SITE.email}</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={150}>
            <div className="clean-card p-8 sm:p-10 border-slate-200 h-full">
              {submitted ? (
                <div className="h-full flex items-center justify-center text-center py-16">
                  <div>
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-outfit font-black text-3xl text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-600">
                      Thank you for reaching out! Our counselors will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-outfit font-black text-2xl text-slate-900 mb-2">Send us a Message</h3>
                  <p className="text-slate-600 text-sm mb-8">Fill the form below and we'll get back to you soon.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="input-field w-full px-4 py-3.5 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="Your phone number"
                          className="input-field w-full px-4 py-3.5 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        className="input-field w-full px-4 py-3.5 rounded-xl text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Course Interested In</label>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        className="input-field w-full px-4 py-3.5 rounded-xl text-sm"
                      >
                        <option value="">Select a course</option>
                        <option>Whole Year (Target)</option>
                        <option>Foundation Course (Momentum)</option>
                        <option>Foundation Course (Spectrum)</option>
                        <option>Crash Course</option>
                        <option>NEET Test Series</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Write your message here..."
                        className="input-field w-full px-4 py-3.5 rounded-xl text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-sky-500/20"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
