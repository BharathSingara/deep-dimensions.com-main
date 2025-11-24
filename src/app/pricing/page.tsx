import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading uppercase tracking-widest">
                        Transparent <span className="text-gradient glitch-text">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono border-l-2 border-brand-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        // CALCULATING ROI... <br />
                        No hidden fees. Whether you need a rapid pilot or a long-term partner, our models align with your outcomes.
                    </p>
                </div>
            </section>

            {/* Project Tiers */}
            <section className="pb-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Starter */}
                        <div className="glass p-8 rounded-none skew-x-[-2deg] border-t-4 border-brand-accent flex flex-col hover:shadow-[0_0_20px_rgba(255,0,60,0.2)] transition-all duration-300 hover:-translate-y-2">
                            <div className="skew-x-[2deg] flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-2 font-heading uppercase">Starter / Pilot</h3>
                                <p className="text-gray-400 text-sm mb-6 font-mono">Perfect for POCs and MVPs.</p>
                                <div className="text-3xl font-bold mb-1 font-heading text-brand-accent">$5k - $15k</div>
                                <div className="text-sm text-gray-500 mb-8 font-mono">Est. 2-4 Weeks</div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {["Discovery & Architecture", "MVP Build (Core Features)", "Basic Documentation", "Deployment to Staging"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-sans">
                                            <Check size={18} className="text-brand-accent shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="w-full py-3 rounded-none skew-x-[-5deg] border border-white/20 hover:bg-white/10 transition-colors text-center font-bold uppercase tracking-wider font-heading">
                                    <span className="skew-x-[5deg]">Start Pilot</span>
                                </Link>
                            </div>
                        </div>

                        {/* Growth */}
                        <div className="glass p-8 rounded-none skew-x-[-2deg] border-t-4 border-brand-primary relative bg-white/5 flex flex-col shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.2)] transition-all duration-300 hover:-translate-y-2 scale-105 z-10">
                            <div className="skew-x-[2deg] flex flex-col h-full">
                                <div className="absolute top-0 right-0 bg-brand-primary text-deep-950 text-xs font-bold px-3 py-1 font-heading uppercase tracking-wider">POPULAR</div>
                                <h3 className="text-2xl font-bold mb-2 font-heading uppercase text-white">Growth / Scale</h3>
                                <p className="text-gray-400 text-sm mb-6 font-mono">For full product launches.</p>
                                <div className="text-3xl font-bold mb-1 font-heading text-brand-primary">$20k - $80k</div>
                                <div className="text-sm text-gray-500 mb-8 font-mono">Est. 2-4 Months</div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {["Full-Stack Team", "Comprehensive QA", "Production Deployment", "User Training", "30 Days Support"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-sans">
                                            <Check size={18} className="text-brand-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="w-full py-3 rounded-none skew-x-[-5deg] bg-brand-primary hover:bg-white hover:text-deep-950 transition-all text-center font-bold text-deep-950 uppercase tracking-wider font-heading shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                                    <span className="skew-x-[5deg]">Scale Up</span>
                                </Link>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="glass p-8 rounded-none skew-x-[-2deg] border-t-4 border-brand-secondary flex flex-col hover:shadow-[0_0_20px_rgba(112,0,255,0.2)] transition-all duration-300 hover:-translate-y-2">
                            <div className="skew-x-[2deg] flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-2 font-heading uppercase">Enterprise</h3>
                                <p className="text-gray-400 text-sm mb-6 font-mono">Large-scale transformation.</p>
                                <div className="text-3xl font-bold mb-1 font-heading text-brand-secondary">Custom</div>
                                <div className="text-sm text-gray-500 mb-8 font-mono">6+ Months</div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {["Dedicated Agile Squad", "SLA (99.99% Uptime)", "SOC2/HIPAA Compliance", "24/7 Priority Support", "On-Premise Options"].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-sans">
                                            <Check size={18} className="text-brand-secondary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="w-full py-3 rounded-none skew-x-[-5deg] border border-white/20 hover:bg-white/10 transition-colors text-center font-bold uppercase tracking-wider font-heading">
                                    <span className="skew-x-[5deg]">Contact Sales</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Retainers */}
            <section className="py-24 bg-deep-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold mb-12 text-center font-heading uppercase tracking-widest">Monthly Retainers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "AI & Data Ops", price: "$3,000/mo", desc: "Model retraining, pipeline maintenance, and performance reporting." },
                            { title: "Web & Cyber Care", price: "$1,500/mo", desc: "Security patching, uptime monitoring, and content updates." },
                            { title: "Dedicated Engineer", price: "$4,500/mo", desc: "Full-time senior developer dedicated to your project." },
                        ].map((plan, i) => (
                            <div key={i} className="glass p-8 rounded-none border-l-2 border-brand-primary hover:bg-white/5 transition-all group">
                                <h3 className="font-bold text-xl mb-2 font-heading uppercase text-white group-hover:text-brand-primary transition-colors">{plan.title}</h3>
                                <div className="text-2xl font-bold text-brand-accent mb-4 font-mono">{plan.price}</div>
                                <p className="text-gray-400 mb-6 font-sans text-sm">{plan.desc}</p>
                                <Link href="/contact" className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider font-heading text-brand-primary">
                                    Inquire <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
