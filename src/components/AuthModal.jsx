import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, GraduationCap, Lock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login"); // 'login' or 'register'
  const [otpSent, setOtpSent] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop with strong blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Content - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30, rotateX: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -left-16 w-64 h-64 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  x: [0, -30, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl" 
              />
            </div>

            {/* Header */}
            <div className="p-8 pb-0 flex justify-between items-center relative z-10">
              <div className="flex gap-6 border-b border-slate-200/50 w-full mb-6">
                <button
                  onClick={() => { setActiveTab("login"); setOtpSent(false); }}
                  className={`pb-4 text-sm font-black uppercase tracking-widest transition-colors relative ${
                    activeTab === "login" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Log In
                  {activeTab === "login" && (
                    <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-t-full" />
                  )}
                </button>
                <button
                  onClick={() => { setActiveTab("register"); setOtpSent(false); }}
                  className={`pb-4 text-sm font-black uppercase tracking-widest transition-colors relative ${
                    activeTab === "register" ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Register
                  {activeTab === "register" && (
                    <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-t-full" />
                  )}
                </button>
              </div>
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2 text-slate-400 hover:text-slate-700 bg-white/50 hover:bg-slate-100 backdrop-blur-md rounded-full transition-all hover:rotate-90 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 pt-0 relative z-10">
              <AnimatePresence mode="wait">
                {activeTab === "login" ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-8">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-teal-500/30"
                      >
                        <User className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2 className="text-3xl font-black font-outfit text-slate-900 mb-2">Welcome Back</h2>
                      <p className="text-slate-500 text-sm">Log in to continue your preparation.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                            <User className="w-5 h-5" />
                          </div>
                          <input
                            type="text"
                            placeholder="Enter Mobile or Roll No"
                            className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200/60 rounded-2xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                          />
                        </div>
                      </div>

                      {otpSent && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, scale: 0.9 }}
                          animate={{ opacity: 1, height: "auto", scale: 1 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                        >
                          <div className="relative group mt-4">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter 6-digit OTP"
                              className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200/60 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium tracking-[0.2em]"
                            />
                          </div>
                        </motion.div>
                      )}

                      {!otpSent ? (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setOtpSent(true)}
                          className="relative w-full group py-4 rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden shadow-xl shadow-teal-500/20 bg-slate-900 text-white mt-6"
                        >
                          {/* Animated Gradient Background */}
                          <motion.div 
                            className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="relative flex items-center gap-2 z-10 text-white">
                            Send OTP 
                            <motion.span 
                              animate={{ x: [0, 5, 0] }} 
                              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.span>
                          </span>
                        </motion.button>
                      ) : (
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { alert("Logged in successfully!"); onClose(); }}
                          className="w-full relative group py-4 rounded-2xl font-bold flex items-center justify-center gap-2 overflow-hidden shadow-xl shadow-emerald-500/20 bg-slate-900 text-white mt-6"
                        >
                          <motion.div 
                            className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="relative flex items-center gap-2 z-10 text-white">
                            Verify & Log In <Lock className="w-4 h-4" />
                          </span>
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles className="w-3 h-3" /> New Student
                      </div>
                      <h2 className="text-3xl font-black font-outfit text-slate-900 mb-2">Create Account</h2>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                            <User className="w-5 h-5" />
                          </div>
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                            <Mail className="w-5 h-5" />
                          </div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <select
                            className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white outline-none transition-all appearance-none text-slate-600 font-medium cursor-pointer"
                          >
                            <option value="">Select Class</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                            <option value="dropper">Dropper</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div className="relative flex gap-2">
                          <div className="relative flex-1 group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                              <Phone className="w-5 h-5" />
                            </div>
                            <input
                              type="tel"
                              placeholder="Mobile Number"
                              className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium"
                            />
                          </div>
                          {!otpSent && (
                            <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setOtpSent(true)}
                              className="px-5 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 whitespace-nowrap relative overflow-hidden group"
                            >
                              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-500 ease-out skew-x-12" />
                              <span className="relative">Get OTP</span>
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {otpSent && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, scale: 0.9 }}
                          animate={{ opacity: 1, height: "auto", scale: 1 }}
                          transition={{ type: "spring", bounce: 0.4 }}
                        >
                          <div className="relative group mt-2">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter 6-digit OTP"
                              className="w-full pl-12 pr-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white outline-none transition-all placeholder:text-slate-400 font-medium tracking-[0.2em]"
                            />
                          </div>
                        </motion.div>
                      )}

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => { alert("Registered successfully!"); onClose(); }}
                        className="w-full relative group py-4 rounded-xl font-bold flex items-center justify-center gap-2 overflow-hidden shadow-xl shadow-teal-500/20 bg-slate-900 text-white mt-6"
                      >
                        <motion.div 
                          className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative flex items-center gap-2 z-10 text-white">
                          Create Account <Sparkles className="w-4 h-4" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
