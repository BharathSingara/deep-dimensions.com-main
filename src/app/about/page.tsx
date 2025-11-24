import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Globe2, ShieldCheck, Users, Zap } from "lucide-react";
import { Globe } from "@/components/ui/globe";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-heading uppercase">
                        Bridging the Gap Between <br />
                        <span className="text-gradient glitch-text">Future Tech and Present Value</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-mono border-l-2 border-brand-primary/50 pl-6">
                        // INITIALIZING MISSION PROTOCOL... <br />
                        We are Deep Dimensions, a global technology studio built for the AI era. We don't just write code; we engineer outcomes. In a world flooded with hype, we provide the technical backbone—AI agents, data pipelines, and secure platforms—that modern enterprises need to survive and thrive.
                    </p>
                </div>
            </section>

            {/* Delivery Model */}
            <section className="py-20 bg-deep-900/50 border-y border-brand-primary/20 backdrop-blur-sm relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 font-heading uppercase text-white">Global Standards, <br /> <span className="text-brand-primary">India-Based Excellence.</span></h2>
                            <p className="text-gray-400 mb-8 leading-relaxed font-sans">
                                We leverage India’s world-class engineering talent to deliver premium solutions without the premium price tag. We combine the speed of a startup with the rigor of an enterprise consultancy.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: Zap, title: "Speed", desc: "Rapid prototyping & agile cycles" },
                                    { icon: ShieldCheck, title: "Quality", desc: " rigorous code reviews & security" },
                                    { icon: Globe2, title: "Value", desc: "Enterprise output, competitive cost" },
                                    { icon: Users, title: "Collaboration", desc: "Seamless communication" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 group">
                                        <div className="mt-1 text-brand-primary group-hover:scale-110 transition-transform"><item.icon size={20} /></div>
                                        <div>
                                            <h4 className="font-bold text-sm font-heading uppercase text-white group-hover:text-brand-primary transition-colors">{item.title}</h4>
                                            <p className="text-xs text-gray-400 font-mono">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 relative h-[400px] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-deep-800/50 to-deep-900/50 rounded-full blur-3xl opacity-20" />
                            <Globe className="opacity-80" />
                            <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest bg-deep-950/50 backdrop-blur-sm inline-block px-4 py-1 rounded-full border border-white/5">Global Delivery Network</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold mb-12 text-center font-heading uppercase tracking-widest"><span className="border-b-2 border-brand-secondary pb-2">Core Values</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Outcome Over Output", desc: "We don't measure success by lines of code, but by your business metrics." },
                            { title: "Radical Transparency", desc: "No black boxes. You own your code, your data, and your IP." },
                            { title: "Security First", desc: "We treat your data like our own. Security is baked in, not bolted on." },
                            { title: "Continuous Evolution", desc: "Tech moves fast. We ensure your systems stay ahead of the curve." },
                            { title: "Plain Talk", desc: "We speak business, not just binary. We explain complex tech in plain English." },
                        ].map((val, i) => (
                            <div key={i} className="glass p-8 rounded-none skew-x-[-2deg] hover:bg-white/5 transition-all hover:-translate-y-1 duration-300 border border-white/5 hover:border-brand-accent/50">
                                <div className="skew-x-[2deg]">
                                    <h3 className="text-xl font-bold mb-3 text-brand-accent font-heading uppercase">{val.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-mono text-sm">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder's Note */}
            <section className="py-24 bg-deep-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-deep-950 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <div className="mb-8 text-brand-primary">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto opacity-50 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H7.19922C6.09465 16 5.19922 16.8954 5.19922 18V21H14.017ZM12.017 14C13.1216 14 14.017 13.1046 14.017 12V5C14.017 3.89543 13.1216 3 12.017 3H7.19922C6.09465 3 5.19922 3.89543 5.19922 5V12C5.19922 13.1046 6.09465 14 7.19922 14H12.017ZM17.017 19V5H19.017V19H17.017Z" />
                        </svg>
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 font-heading uppercase tracking-wide text-gray-200">
                        "Technology is only as good as the problem it solves. I founded Deep Dimensions with a simple belief: that advanced AI and data engineering shouldn't be the exclusive domain of tech giants."
                    </blockquote>
                    <cite className="not-italic">
                        <span className="block font-bold text-brand-primary font-mono uppercase tracking-wider">Bharath</span>
                        <span className="block text-sm text-gray-400 font-mono">Founder, Deep Dimensions</span>
                    </cite>
                </div>
            </section>

            <Footer />
        </main>
    );
}
