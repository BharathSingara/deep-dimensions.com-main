import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
    return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-3 mb-6 text-brand-accent font-medium font-mono uppercase tracking-wider border-b border-brand-accent/30 pb-2 w-fit">
                        <Icon size={24} />
                        <span>{service.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight font-heading uppercase">
                        {service.hero.headline}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-10 font-mono border-l-2 border-brand-primary/50 pl-6">
                        {service.hero.subheadline}
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-none skew-x-[-10deg] bg-brand-primary text-deep-950 font-bold hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] uppercase tracking-wider"
                        >
                            <span className="skew-x-[10deg] flex items-center gap-2">Book Strategy Call <ArrowRight size={20} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* KPIs */}
            <section className="border-y border-brand-primary/20 bg-deep-900/50 backdrop-blur-sm py-12 relative">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {service.kpis.map((stat, i) => (
                        <div key={i} className="group">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-heading group-hover:text-brand-primary transition-colors group-hover:scale-110 transform duration-300">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider font-mono">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Props */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 font-heading uppercase">Why <span className="text-gradient">Deep Dimensions?</span></h2>
                            <div className="space-y-6">
                                {service.valueProps.map((prop, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <CheckCircle2 className="text-brand-primary shrink-0 group-hover:text-brand-accent transition-colors" size={24} />
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 font-heading uppercase text-white">{prop.title}</h3>
                                            <p className="text-gray-400 font-mono text-sm">{prop.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-6">
                            {service.features.map((feature, i) => (
                                <div key={i} className="glass p-6 rounded-none skew-x-[-2deg] border border-white/5 hover:border-brand-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                                    <div className="skew-x-[2deg]">
                                        <h3 className="font-bold text-xl mb-2 font-heading uppercase text-brand-secondary">{feature.title}</h3>
                                        <p className="text-gray-400 font-sans">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Services */}
            <section className="py-24 bg-deep-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold mb-12 text-center font-heading uppercase tracking-widest">Our Capabilities</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {service.subServices.map((sub, i) => (
                            <div key={i} className="glass p-8 rounded-none border-l-4 border-l-brand-primary border-y border-r border-y-white/5 border-r-white/5 hover:bg-white/5 transition-all group">
                                <h3 className="text-2xl font-bold mb-4 font-heading uppercase text-white group-hover:text-brand-primary transition-colors">{sub.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-mono text-sm">{sub.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center font-heading uppercase">How We Deliver</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {service.process.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-8xl font-bold text-white/5 absolute -top-8 left-0 z-0 font-heading group-hover:text-brand-primary/10 transition-colors">{i + 1}</div>
                                <div className="relative z-10 pt-8 pl-4 border-l border-brand-primary/30 h-full">
                                    <h3 className="text-xl font-bold mb-2 font-heading uppercase text-brand-accent">{step.title}</h3>
                                    <p className="text-gray-400 text-sm font-mono">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-deep-950 to-deep-900 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-6 font-heading uppercase">Ready to Start?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-mono">
                        // INITIALIZE PARTNERSHIP PROTOCOL <br />
                        Let's build something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 rounded-none skew-x-[-10deg] bg-white text-deep-950 font-bold hover:bg-brand-primary transition-colors items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase tracking-wider"
                    >
                        <span className="skew-x-[10deg] flex items-center gap-2">Get a Quote <ArrowRight size={20} /></span>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
