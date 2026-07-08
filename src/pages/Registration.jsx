import { useState } from "react";
import { CheckCircle, ArrowRight, Send } from "lucide-react";
import { COURSES } from "../data/siteData";
import { Reveal, SectionHeader, PageBanner } from "../components/ui";

export default function Registration() {
  const [form, setForm] = useState({
    name: "", father: "", dob: "", phone: "", email: "", address: "", course: "", medium: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const steps = ["Personal Info", "Course Selection", "Confirmation"];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner title="Registration" breadcrumb={["Home", "Student", "Registration"]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <SectionHeader
            badge="Admissions Open 2026-27"
            title={<>Register at <span className="gradient-text">SKD NSCI</span></>}
            subtitle="Fill in the form below to register for your preferred NEET course. Limited seats available!"
          />
        </Reveal>

        {/* Steps */}
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  step >= i + 1
                    ? "bg-sky-100 text-sky-700 border border-sky-200"
                    : "bg-white text-slate-400 border border-slate-200"
                }`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${step > i + 1 ? "bg-sky-600 text-white" : "border border-current"}`}>
                    {step > i + 1 ? "✓" : i + 1}
                  </span>
                  <span className="hidden sm:inline">{s}</span>
                </div>
                {i < 2 && <div className={`w-8 h-px ${step > i + 1 ? "bg-sky-400" : "bg-slate-300"}`} />}
              </div>
            ))}
          </div>
        </Reveal>

        {submitted ? (
          <Reveal>
            <div className="clean-card p-16 border-green-200 text-center shadow-lg bg-green-50/30">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="font-outfit font-black text-3xl text-slate-900 mb-3">Registration Successful! 🎉</h3>
              <p className="text-slate-600 mb-2 text-lg">
                Thank you, <strong className="text-slate-900">{form.name || "Student"}</strong>!
              </p>
              <p className="text-slate-500 text-sm mb-8">
                Your registration has been submitted. Our team will contact you at <strong className="text-slate-700">{form.phone}</strong> within 24 hours to confirm your seat.
              </p>
              <div className="inline-flex items-center gap-2 badge text-base px-6 py-2 bg-white shadow-sm border border-slate-200 text-sky-700">
                📞 Expected call within 24 hours
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="clean-card p-8 sm:p-10 border-slate-200 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Student Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="input-field w-full px-4 py-3.5 rounded-xl text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Father's Name *</label>
                    <input type="text" name="father" value={form.father} onChange={handleChange} required placeholder="Father's full name" className="input-field w-full px-4 py-3.5 rounded-xl text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Date of Birth *</label>
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="input-field w-full px-4 py-3.5 rounded-xl text-sm text-slate-600" />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Mobile Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile" className="input-field w-full px-4 py-3.5 rounded-xl text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email address" className="input-field w-full px-4 py-3.5 rounded-xl text-sm" />
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Course *</label>
                  <select name="course" value={form.course} onChange={handleChange} required className="input-field w-full px-4 py-3.5 rounded-xl text-sm">
                    <option value="">Select course</option>
                    {COURSES.map((c) => <option key={c.id}>{c.title}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Medium of Instruction</label>
                  <div className="flex gap-4">
                    {["Hindi", "English", "Hindi & English"].map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-slate-50 transition-colors">
                        <input
                          type="radio"
                          name="medium"
                          value={m}
                          onChange={handleChange}
                          className="accent-sky-600 w-4 h-4"
                        />
                        <span className="text-slate-700 text-sm font-medium">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-bold mb-2 uppercase tracking-wider">Current Address</label>
                  <textarea name="address" value={form.address} onChange={handleChange} rows={3} placeholder="Your current address" className="input-field w-full px-4 py-3.5 rounded-xl text-sm resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-sky-500/20"
                >
                  {loading ? (
                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Submit Registration</>
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center font-medium">
                  By registering, you agree to be contacted by our counselors. No payment is required at this step.
                </p>
              </form>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
