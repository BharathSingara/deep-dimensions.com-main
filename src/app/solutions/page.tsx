import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Building2, GraduationCap, HeartPulse, LineChart, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
    const industries = [
        {
            title: "FinTech & Financial Services",
            icon: LineChart,
            desc: "Trust, Speed, and Compliance. We build high-frequency trading infrastructure and fraud detection systems.",
            useCase: "Real-time Fraud Detection using AI to flag suspicious transactions in <50ms.",
            outcome: "Reduced fraud losses by 40%.",
        },
        {
            title: "Healthcare & MedTech",
            icon: HeartPulse,
            desc: "Patient-First Innovation. Unlock health data without compromising privacy.",
            useCase: "NLP pipeline to extract clinical data from unstructured doctor notes.",
            outcome: "Saved 15 hours/week per physician.",
        },
        {
            title: "E-commerce & Retail",
            icon: ShoppingBag,
            desc: "Personalization at Scale. Recommendation engines and headless storefronts.",
            useCase: "AI-driven 'Visual Search' allowing users to shop by uploading photos.",
            outcome: "25% increase in average order value.",
        },
        {
            title: "Manufacturing",
            icon: Truck,
            desc: "Predictive Operations. Connect IoT sensors to cloud dashboards.",
            useCase: "Predictive maintenance model for factory floor machinery.",
            outcome: "Reduced unplanned downtime by 35%.",
        },
        {
            title: "SaaS & Technology",
            icon: Building2,
            desc: "Accelerate Your Roadmap. We augment your engineering team to ship faster.",
            useCase: "Refactoring a monolithic app into microservices.",
            outcome: "Deployment frequency increased to daily.",
        },
        {
            title: "Education & EdTech",
            icon: GraduationCap,
            desc: "Smart Learning Systems. Adaptive learning platforms and AI tutors.",
            useCase: "AI tutor that adapts curriculum difficulty based on performance.",
            outcome: "20% improvement in test scores.",
        },
    ];

    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading uppercase tracking-widest">
                        Tailored Tech for <span className="text-gradient glitch-text">Your Sector</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono border-l-2 border-brand-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        // SECTOR ANALYSIS COMPLETE... <br />
                        We don't believe in one-size-fits-all. We understand the unique regulatory and operational challenges of your industry.
                    </p>
                </div>
            </section>

            <section className="pb-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((ind, i) => (
                            <div key={i} className="glass p-8 rounded-none skew-x-[-2deg] hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-2">
                                <div className="skew-x-[2deg] flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-none bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                                        <ind.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-heading uppercase text-white group-hover:text-brand-primary transition-colors">{ind.title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed font-mono flex-grow">{ind.desc}</p>

                                    <div className="bg-deep-900/50 border border-white/10 rounded-none p-4 mb-6">
                                        <p className="text-xs text-brand-accent font-bold uppercase mb-1 font-heading">Use Case</p>
                                        <p className="text-sm text-gray-300 mb-2 font-sans">{ind.useCase}</p>
                                        <p className="text-xs text-brand-primary font-medium font-mono">✓ {ind.outcome}</p>
                                    </div>

                                    <Link href="/contact" className="text-white font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider font-heading group-hover:text-brand-primary">
                                        Discuss Your Project <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-deep-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-deep-950 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold mb-6 font-heading uppercase">Don't See Your Industry?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-mono">
                        // SYSTEM ADAPTABILITY: 100% <br />
                        Our core technologies—AI, Data, and Web—are universal. Let's discuss your specific challenge.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 rounded-none skew-x-[-10deg] border border-brand-primary/50 hover:bg-brand-primary/10 transition-colors font-bold text-brand-primary uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                    >
                        <span className="skew-x-[10deg]">Talk to an Expert</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
