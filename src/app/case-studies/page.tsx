import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BarChart3, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
    const cases = [
        {
            title: "AI Transformation",
            subtitle: "Scaling Support without Scaling Headcount",
            client: "Global Logistics Provider",
            icon: Truck,
            problem: "Customer support costs were skyrocketing. Agents were overwhelmed by repetitive calls.",
            solution: "Deployed a custom GenAI Voice & Chat Assistant integrated with their ERP.",
            outcomes: [
                "80% of Tier-1 calls resolved automatically",
                "$450k annual savings",
                "24/7 instant response",
            ],
            quote: "The AI is polite, accurate, and never sleeps.",
            author: "VP of Operations",
        },
        {
            title: "Data Engineering",
            subtitle: "Unifying 50+ Data Sources",
            client: "Multi-Brand Retail Chain",
            icon: BarChart3,
            problem: "Data was siloed across POS and e-commerce. Finance spent 2 weeks/month stitching spreadsheets.",
            solution: "Architected a Snowflake warehouse with Airbyte/dbt pipelines for real-time ingestion.",
            outcomes: [
                "Real-time P&L visibility",
                "90% reduction in reporting hours",
                "15% inventory optimization",
            ],
            quote: "Deep Dimensions gave us the 'single source of truth' we had been chasing.",
            author: "Chief Data Officer",
        },
        {
            title: "Web & Security",
            subtitle: "Secure, High-Speed FinTech Portal",
            client: "Wealth Management Startup",
            icon: ShieldCheck,
            problem: "Existing MVP was slow and vulnerable. Needed banking-grade security (SOC2).",
            solution: "Rebuilt frontend in Next.js and implemented role-based access control with AWS WAF.",
            outcomes: [
                "<1s page load time",
                "Zero critical vulnerabilities",
                "SOC2 Type 1 achieved in 3 months",
            ],
            quote: "They understood that for us, speed is trust.",
            author: "CTO",
        },
    ];

    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading uppercase tracking-widest">
                        Proven <span className="text-gradient glitch-text">Results</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono border-l-2 border-brand-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        // DEPLOYMENT SUCCESS RATE: 99.9% <br />
                        We don't just promise outcomes; we engineer them. Here is how we've helped industry leaders transform.
                    </p>
                </div>
            </section>

            <section className="pb-24 relative">
                <div className="container mx-auto px-4 space-y-24">
                    {cases.map((study, i) => (
                        <div key={i} className="glass p-8 md:p-12 rounded-none skew-x-[-1deg] flex flex-col md:flex-row gap-12 items-center border border-white/5 hover:border-brand-primary/30 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            <div className="skew-x-[1deg] md:w-1/2 space-y-6">
                                <div className="flex items-center gap-3 text-brand-primary font-bold uppercase tracking-wider text-sm font-mono border-b border-brand-primary/20 pb-2 w-fit">
                                    <study.icon size={20} />
                                    <span>{study.title}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading uppercase">{study.subtitle}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed font-sans">
                                    <span className="text-white font-bold font-heading uppercase text-sm">Problem:</span> {study.problem}
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed font-sans">
                                    <span className="text-white font-bold font-heading uppercase text-sm">Solution:</span> {study.solution}
                                </p>

                                <div className="bg-white/5 rounded-none p-6 border-l-4 border-brand-primary relative overflow-hidden">
                                    <div className="absolute top-0 right-0 text-6xl text-white/5 font-heading">"</div>
                                    <p className="italic text-gray-300 mb-4 font-mono relative z-10">"{study.quote}"</p>
                                    <p className="text-sm font-bold text-white font-heading uppercase relative z-10">— {study.author}</p>
                                    <p className="text-xs text-gray-500 font-mono relative z-10">{study.client}</p>
                                </div>
                            </div>

                            <div className="skew-x-[1deg] md:w-1/2 w-full">
                                <div className="bg-deep-900/50 rounded-none p-8 border border-white/10 relative">
                                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-brand-primary" />
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-brand-primary" />
                                    <h3 className="font-bold text-xl mb-6 border-b border-white/10 pb-4 font-heading uppercase text-brand-secondary">Key Outcomes</h3>
                                    <ul className="space-y-4">
                                        {study.outcomes.map((outcome, j) => (
                                            <li key={j} className="flex items-center gap-3 text-lg font-mono text-sm">
                                                <div className="w-2 h-2 rounded-none bg-brand-primary shrink-0 shadow-[0_0_5px_#00f0ff]" />
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <Link href="/contact" className="w-full py-3 rounded-none skew-x-[-5deg] bg-white text-deep-950 font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                            <span className="skew-x-[5deg] flex items-center gap-2">Get Similar Results <ArrowRight size={18} /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
