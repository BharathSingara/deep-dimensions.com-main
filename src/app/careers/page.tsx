import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Code2, Globe, GraduationCap, Heart } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading uppercase tracking-widest">
                        Build the <span className="text-gradient glitch-text">Future</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono border-l-2 border-brand-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        // RECRUITING PROTOCOL INITIATED... <br />
                        Join a team of relentless problem solvers. At Deep Dimensions, we don't just follow trends; we engineer them.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center font-heading uppercase">Why Join Us?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Globe, title: "Global Impact", desc: "Work on projects for Fortune 500s." },
                            { icon: Code2, title: "Latest Tech", desc: "GenAI, Modern Data Stack, Cloud Native." },
                            { icon: GraduationCap, title: "Learning", desc: "Annual budget for courses & certs." },
                            { icon: Heart, title: "Remote-First", desc: "Work from anywhere in India." },
                        ].map((perk, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 rounded-none skew-x-[-10deg] bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                                    <perk.icon size={28} className="skew-x-[10deg]" />
                                </div>
                                <h3 className="font-bold mb-2 font-heading uppercase text-white">{perk.title}</h3>
                                <p className="text-sm text-gray-400 font-mono">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 font-heading uppercase">Open Roles</h2>
                    <div className="space-y-6">
                        {[
                            { title: "Senior AI Engineer", exp: "4+ Years", stack: "Python, LangChain, OpenAI", loc: "Remote" },
                            { title: "Data Engineer", exp: "3+ Years", stack: "Snowflake, dbt, Airflow", loc: "Remote" },
                            { title: "Full Stack Developer", exp: "3+ Years", stack: "Next.js, TypeScript, Node", loc: "Remote" },
                        ].map((role, i) => (
                            <div key={i} className="glass p-6 rounded-none skew-x-[-2deg] flex flex-col md:flex-row justify-between items-center gap-6 border border-white/5 hover:border-brand-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:-translate-y-1">
                                <div className="skew-x-[2deg]">
                                    <h3 className="text-xl font-bold mb-1 font-heading uppercase text-white">{role.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-400 font-mono">
                                        <span>{role.exp}</span>
                                        <span className="text-brand-primary">•</span>
                                        <span>{role.stack}</span>
                                        <span className="text-brand-primary">•</span>
                                        <span>{role.loc}</span>
                                    </div>
                                </div>
                                <Link href="/contact" className="skew-x-[2deg] px-6 py-2 rounded-none bg-white text-deep-950 font-bold hover:bg-brand-primary transition-colors uppercase tracking-wider font-heading text-sm">
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-4 font-mono">Don't see a role?</p>
                        <a href="mailto:careers@deep-dimensions.com" className="text-brand-primary font-bold hover:underline font-heading uppercase tracking-wider">
                            Email your portfolio to careers@deep-dimensions.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
