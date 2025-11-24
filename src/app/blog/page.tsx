import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function BlogPage() {
    const posts = [
        {
            title: "The AI-First Enterprise: A Blueprint for 2025",
            excerpt: "The companies that win in the next decade won't just use AI; they will be built around it. Here is what that actually means.",
            tag: "Strategy",
            date: "Nov 18, 2025",
            featured: true,
        },
        {
            title: "The 2-Week MVP: Validate AI Ideas Fast",
            excerpt: "How to scope and build a functional prototype without breaking the bank.",
            tag: "Engineering",
            date: "Nov 15, 2025",
            featured: false,
        },
        {
            title: "Data Warehousing 101",
            excerpt: "Why your Excel sheets are killing your growth and how to fix it.",
            tag: "Data",
            date: "Nov 10, 2025",
            featured: false,
        },
        {
            title: "Security by Design in CI/CD",
            excerpt: "Integrating DevSecOps into your pipeline to catch vulns early.",
            tag: "Security",
            date: "Nov 05, 2025",
            featured: false,
        },
    ];

    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading uppercase tracking-widest">
                        System <span className="text-gradient glitch-text">Logs</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono border-l-2 border-brand-primary/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        // ACCESSING DATABASE... <br />
                        Thoughts on AI, Engineering, and the future of work.
                    </p>
                </div>
            </section>

            <section className="pb-24 relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, i) => (
                            <Link key={i} href="#" className={`block group ${post.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                                <article className={`glass p-8 rounded-none skew-x-[-2deg] hover:bg-white/5 transition-all h-full flex flex-col justify-between border border-white/5 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:-translate-y-1 ${post.featured ? 'border-brand-primary/30 bg-brand-primary/5' : ''}`}>
                                    <div className="skew-x-[2deg]">
                                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                                            <span className={`text-xs font-bold uppercase tracking-wider font-heading ${post.featured ? 'text-brand-primary' : 'text-gray-500 group-hover:text-brand-primary transition-colors'}`}>
                                                {post.tag}
                                            </span>
                                            <span className="text-xs text-gray-500 font-mono">{post.date}</span>
                                        </div>
                                        <h2 className={`font-bold mb-3 group-hover:text-brand-accent transition-colors font-heading uppercase ${post.featured ? 'text-3xl' : 'text-xl'}`}>
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 leading-relaxed font-sans text-sm">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    {post.featured && (
                                        <div className="mt-6 text-brand-primary font-bold text-sm font-mono skew-x-[2deg] flex items-center gap-2">
                                            Read Featured Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    )}
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
