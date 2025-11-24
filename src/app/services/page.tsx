import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesIndexPage() {
    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading uppercase tracking-widest">
                        Our <span className="text-gradient glitch-text">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono border-l-2 border-brand-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        // DEPLOYING ENTERPRISE SOLUTIONS... <br />
                        End-to-end technology solutions for the modern enterprise.
                    </p>
                </div>
            </section>

            <section className="pb-24 relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(services).map(([slug, service]) => {
                            const Icon = service.icon;
                            return (
                                <Link key={slug} href={`/services/${slug}`} className="group block">
                                    <div className="glass p-8 rounded-none skew-x-[-2deg] hover:bg-white/5 transition-all duration-300 h-full flex flex-col border border-white/5 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:-translate-y-2">
                                        <div className="skew-x-[2deg] flex flex-col h-full">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-12 h-12 rounded-none bg-${service.color}/10 border border-${service.color}/30 flex items-center justify-center text-${service.color} group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.1)]`}>
                                                    <Icon size={24} />
                                                </div>
                                                <h2 className="text-2xl font-bold group-hover:text-brand-primary transition-colors font-heading uppercase">{service.title}</h2>
                                            </div>
                                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-mono text-sm border-l border-white/10 pl-4">
                                                {service.hero.subheadline}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all uppercase tracking-wider font-heading">
                                                <span className="text-brand-primary">//</span> Explore Service <ArrowRight size={16} className="text-brand-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
