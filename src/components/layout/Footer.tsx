import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, AtSign } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-deep-950 border-t border-brand-primary/20 pt-16 pb-8 shadow-[0_-10px_40px_-10px_rgba(0,240,255,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Deep Dimensions Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]"
                                />
                            </div>
                            <span className="text-2xl font-heading font-bold uppercase">
                                Deep <span className="text-brand-primary">Dimensions</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed font-mono">
                            // SYSTEM STATUS: ONLINE <br />
                            Global technology studio bridging the gap between future tech and present value.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/deep-dimensions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/_DeepDimensions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/deep.dimensions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.threads.com/@deep.dimensions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-primary transition-colors hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]">
                                <AtSign size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold mb-6 text-brand-primary font-heading uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-mono">
                            <li><Link href="/services/ai" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">AI Services</Link></li>
                            <li><Link href="/services/data" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Data Consulting</Link></li>
                            <li><Link href="/services/web" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Web Development</Link></li>
                            <li><Link href="/services/cyber" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Cybersecurity</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold mb-6 text-brand-primary font-heading uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-mono">
                            <li><Link href="/about" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Careers</Link></li>
                            <li><Link href="/case-studies" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Case Studies</Link></li>
                            <li><Link href="/blog" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-6 text-brand-primary font-heading uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-mono">
                            <li><Link href="/faq" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
                            <li><Link href="/legal/privacy-policy" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms-of-service" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-accent hover:translate-x-1 transition-all inline-block">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
                    <p>© {new Date().getFullYear()} Deep Dimensions. All rights reserved.</p>
                    <p>Designed & Built in India 🇮🇳</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
