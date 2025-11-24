import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import { ArrowRight, Brain, Database, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
      <Navbar />

      <Hero />

      {/* KPI Bar */}
      <section className="border-y border-brand-primary/20 bg-deep-900/50 backdrop-blur-sm py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { label: "OpEx Reduction", value: "40%" },
            { label: "Pilot to Production", value: "2-6 Wks" },
            { label: "Pipelines Deployed", value: "100+" },
            { label: "Security Incidents", value: "Zero" },
          ].map((stat, i) => (
            <div key={i} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-heading drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] group-hover:text-brand-primary transition-colors">{stat.value}</div>
              <div className="text-sm text-brand-primary/80 uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deep-950 via-deep-900 to-deep-950 opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading uppercase tracking-widest">
              <span className="border-b-2 border-brand-primary pb-2">Featured Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono mt-6">
              // ACCESSING DATABASE... <br />
              Comprehensive technology services designed for the modern enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Card */}
            <div className="glass p-8 rounded-none skew-x-[-2deg] hover:border-brand-primary/50 transition-all group hover:-translate-y-2 duration-300">
              <div className="skew-x-[2deg]">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading uppercase text-brand-primary">AI Services</h3>
                <p className="text-gray-400 mb-6 font-sans">
                  Custom agents, voice assistants, and GenAI workflows that work alongside your team.
                </p>
                <Link href="/services/ai" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all font-mono uppercase text-sm">
                  Explore AI <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Data Card */}
            <div className="glass p-8 rounded-none skew-x-[-2deg] hover:border-brand-secondary/50 transition-all group hover:-translate-y-2 duration-300">
              <div className="skew-x-[2deg]">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(112,0,255,0.3)]">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading uppercase text-brand-secondary">Data Consulting</h3>
                <p className="text-gray-400 mb-6 font-sans">
                  End-to-end warehousing, ETL, and BI dashboards that turn raw noise into strategic clarity.
                </p>
                <Link href="/services/data" className="text-brand-secondary font-medium flex items-center gap-2 hover:gap-3 transition-all font-mono uppercase text-sm">
                  Explore Data <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Web/Cyber Card */}
            <div className="glass p-8 rounded-none skew-x-[-2deg] hover:border-brand-accent/50 transition-all group hover:-translate-y-2 duration-300">
              <div className="skew-x-[2deg]">
                <div className="w-12 h-12 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,0,60,0.3)]">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading uppercase text-brand-accent">Web & Cyber</h3>
                <p className="text-gray-400 mb-6 font-sans">
                  High-performance web apps protected by military-grade cybersecurity protocols.
                </p>
                <Link href="/services/web" className="text-brand-accent font-medium flex items-center gap-2 hover:gap-3 transition-all font-mono uppercase text-sm">
                  Explore Web <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-deep-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading uppercase tracking-widest">
              <span className="text-gradient">Execution Protocol</span>
            </h2>
            <p className="text-gray-400 font-mono">From concept to production in 4 steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "1. Discover", desc: "We map your friction points and design a high-impact architecture." },
              { title: "2. Build", desc: "We deploy a functional MVP in 2-6 weeks. You see results fast." },
              { title: "3. Scale", desc: "We harden the solution for enterprise loads and security." },
              { title: "4. Evolve", desc: "Our managed services keep your systems learning 24/7." },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-bold text-white/5 absolute -top-4 left-0 z-0 font-heading group-hover:text-brand-primary/10 transition-colors">{i + 1}</div>
                <div className="relative z-10 border-l-2 border-brand-primary/30 pl-6 py-2 group-hover:border-brand-primary transition-colors">
                  <h3 className="text-xl font-bold mb-2 font-heading uppercase text-white group-hover:text-brand-primary transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm font-mono">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-950 to-brand-primary/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading uppercase tracking-tight">
            Ready to <span className="text-brand-primary">Scale?</span> <br />
            Let’s <span className="text-brand-secondary">Build.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-sans">
            Stop stalling on legacy systems. Start your transformation with a partner who delivers speed, security, and measurable value.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-none skew-x-[-10deg] bg-brand-primary text-deep-950 font-bold hover:bg-white transition-colors items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <span className="skew-x-[10deg] flex items-center gap-2 uppercase tracking-wider">
              Start Your Project <ArrowRight size={20} />
            </span>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500 font-mono uppercase">
            <span className="flex items-center gap-1"><span className="text-brand-primary">✓</span> SOC2 Ready</span>
            <span className="flex items-center gap-1"><span className="text-brand-primary">✓</span> Strict NDA</span>
            <span className="flex items-center gap-1"><span className="text-brand-primary">✓</span> Risk-Free Pilots</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
