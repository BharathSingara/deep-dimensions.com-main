"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Clock, Loader2, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        challenge: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to submit form");

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", company: "", projectType: "", challenge: "" });
        } catch (error) {
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* Contact Info */}
                        <div className="lg:w-5/12 space-y-10">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading uppercase leading-tight">
                                    Let’s Build <br /> <span className="text-gradient">Something Extraordinary.</span>
                                </h1>
                                <p className="text-gray-400 text-lg font-mono border-l-2 border-brand-primary/50 pl-6">
                                    // INITIATE COMMUNICATION <br />
                                    Ready to automate your workflows or unlock your data? Schedule a free 30-minute strategy session. No sales pitch, just an engineering assessment.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-none skew-x-[-5deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-deep-950 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                        <Mail size={20} className="skew-x-[5deg]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 font-heading uppercase text-white">Email Us</h3>
                                        <p className="text-gray-400 font-mono text-sm">hello@deep-dimensions.com</p>
                                        <p className="text-xs text-gray-500 mt-1">We respect your inbox. Zero spam.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-none skew-x-[-5deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-deep-950 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                        <Clock size={20} className="skew-x-[5deg]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 font-heading uppercase text-white">Operating Hours</h3>
                                        <p className="text-gray-400 font-mono text-sm">Mon-Fri, 10:00 AM - 7:00 PM IST</p>
                                        <p className="text-xs text-gray-500 mt-1">Overlap availability for US/EU/APAC.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-none skew-x-[-5deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-deep-950 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                                        <MapPin size={20} className="skew-x-[5deg]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 font-heading uppercase text-white">Headquarters</h3>
                                        <p className="text-gray-400 font-mono text-sm">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:w-7/12 w-full">
                            <form onSubmit={handleSubmit} className="glass p-6 md:p-8 rounded-none skew-x-[-1deg] space-y-5 relative overflow-hidden border border-brand-primary/20 shadow-[0_0_30px_rgba(0,240,255,0.05)] max-w-2xl mx-auto lg:ml-auto">
                                <div className="skew-x-[1deg]">
                                    {status === "success" && (
                                        <div className="absolute inset-0 bg-deep-950/95 backdrop-blur-md flex flex-col items-center justify-center z-10 text-center p-8">
                                            <CheckCircle className="w-16 h-16 text-brand-primary mb-4 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                            <h3 className="text-2xl font-bold mb-2 font-heading uppercase text-white">Message Received!</h3>
                                            <p className="text-gray-400 mb-6 font-mono">We'll be in touch shortly to schedule your strategy call.</p>
                                            <button
                                                type="button"
                                                onClick={() => setStatus("idle")}
                                                className="px-6 py-2 rounded-none skew-x-[-10deg] border border-brand-primary/50 hover:bg-brand-primary/10 transition-colors text-brand-primary font-bold uppercase"
                                            >
                                                <span className="skew-x-[10deg]">Send Another Message</span>
                                            </button>
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Name *</label>
                                            <input
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="How should we address you?"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Work Email *</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="So we can send the invite"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Phone Number</label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-brand-primary font-mono uppercase">Company</label>
                                            <input
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="To help us research beforehand"
                                                className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-brand-primary font-mono uppercase">Project Type *</label>
                                        <select
                                            required
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white appearance-none font-sans text-sm"
                                        >
                                            <option value="" className="bg-deep-950 text-gray-500">Select a project type...</option>
                                            <option value="AI Agents & Automation" className="bg-deep-950">AI Agents & Automation</option>
                                            <option value="Data Consulting & Warehousing" className="bg-deep-950">Data Consulting & Warehousing</option>
                                            <option value="Web Development" className="bg-deep-950">Web Development</option>
                                            <option value="Cybersecurity" className="bg-deep-950">Cybersecurity</option>
                                            <option value="Other" className="bg-deep-950">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-brand-primary font-mono uppercase">What’s the Challenge?</label>
                                        <textarea
                                            name="challenge"
                                            value={formData.challenge}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Briefly tell us what you want to solve or build..."
                                            className="w-full bg-deep-900/50 border border-white/10 rounded-none px-4 py-2.5 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all text-white placeholder:text-gray-600 font-sans text-sm"
                                        ></textarea>
                                    </div>

                                    {status === "error" && (
                                        <p className="text-brand-accent text-sm text-center font-mono border border-brand-accent/50 bg-brand-accent/10 p-2">
                                            // ERROR: TRANSMISSION FAILED. PLEASE RETRY.
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full py-3 rounded-none skew-x-[-2deg] bg-brand-primary text-deep-950 font-bold hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                    >
                                        <span className="skew-x-[2deg] flex items-center gap-2 uppercase tracking-wider text-sm">
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18} /> Transmitting...
                                                </>
                                            ) : (
                                                "Book My Strategy Call"
                                            )}
                                        </span>
                                    </button>
                                    <p className="text-center text-[10px] text-gray-500 font-mono mt-2">
                                        // SECURE TRANSMISSION: 256-BIT ENCRYPTED
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
