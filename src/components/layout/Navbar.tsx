"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Solutions", href: "/solutions" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About", href: "/about" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-deep-950/80 backdrop-blur-xl border-b border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(0,240,255,0.2)] py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="Deep Dimensions Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                        />
                    </div>
                    <span className="text-2xl font-heading font-bold tracking-tighter uppercase">
                        Deep <span className="text-brand-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">Dimensions</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-brand-primary transition-colors font-mono tracking-wide uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 skew-x-[-10deg] bg-brand-primary/10 border border-brand-primary/50 text-brand-primary text-sm font-bold hover:bg-brand-primary hover:text-deep-950 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                    >
                        <span className="skew-x-[10deg] inline-block">Initialize</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-deep-950/95 backdrop-blur-xl border-b border-brand-primary/20 md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-brand-primary py-2 font-mono uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full text-center py-3 bg-brand-primary/20 border border-brand-primary text-brand-primary font-bold uppercase tracking-wider"
                                onClick={() => setIsOpen(false)}
                            >
                                Initialize
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
