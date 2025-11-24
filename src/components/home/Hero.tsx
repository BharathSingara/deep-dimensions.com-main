"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import Scene3D from "@/components/ui/Scene3D";
import CyberOrb from "@/components/ui/CyberOrb";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
            {/* Advanced Backgrounds */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            <Scene3D />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-hero-glow opacity-10 blur-[120px] rounded-full pointer-events-none animate-pulse" />

            {/* 3D Centerpiece (Background Layer) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none scale-150 blur-sm -z-10">
                <CyberOrb />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <TiltCard className="inline-block" perspective={2000} scale={1.02}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-mono mb-6 backdrop-blur-md tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                            // SYSTEM.READY: ONLINE
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-snug drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-heading uppercase">
                            Future-Proof Your <br />
                            <span className="text-gradient animate-gradient-x glitch-text drop-shadow-none">
                                Digital Reality
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans drop-shadow-md bg-deep-950/30 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                            Deploy custom AI agents, robust data pipelines, and secure web platforms.
                            <span className="text-white font-medium"> Engineered for the next generation.</span>
                        </p>
                    </motion.div>
                </TiltCard>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 relative z-20">
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 rounded-none skew-x-[-10deg] bg-brand-primary text-deep-950 font-bold overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.5)] flex items-center gap-2 border border-brand-primary"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shimmer" />
                        <span className="relative flex items-center gap-2 skew-x-[10deg]">
                            Initialize Protocol
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    <Link
                        href="/services"
                        className="px-8 py-4 rounded-none skew-x-[-10deg] border border-brand-secondary/50 hover:bg-brand-secondary/10 hover:border-brand-secondary transition-all font-medium backdrop-blur-sm flex items-center text-brand-secondary"
                    >
                        <span className="skew-x-[10deg]">View Systems</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
