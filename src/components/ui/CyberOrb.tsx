"use client";

import { motion } from "framer-motion";

export default function CyberOrb() {
    return (
        <div className="relative w-64 h-64 perspective-1000">
            <motion.div
                animate={{ rotateY: 360, rotateX: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full preserve-3d relative"
            >
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-brand-primary/30 rounded-full rotate-x-45" />
                <div className="absolute inset-0 border-2 border-brand-secondary/30 rounded-full rotate-y-45" />

                {/* Inner Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary/20 blur-xl rounded-full animate-pulse" />

                {/* Orbiting Particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)]"
                        animate={{
                            x: [Math.cos(i) * 100, Math.sin(i) * 100, Math.cos(i) * 100],
                            y: [Math.sin(i) * 100, Math.cos(i) * 100, Math.sin(i) * 100],
                            z: [Math.sin(i) * 50, Math.cos(i) * 50, Math.sin(i) * 50],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
