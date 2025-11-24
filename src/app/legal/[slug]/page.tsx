import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    // In a real app, this would be dynamic. For now, we'll render a generic legal layout.
    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-deep-950">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h1 className="text-4xl font-bold mb-8 font-heading uppercase tracking-widest border-b-2 border-brand-primary/30 pb-4">
                        Legal <span className="text-brand-primary">Information</span>
                    </h1>

                    <div className="prose prose-invert prose-lg prose-headings:font-heading prose-headings:uppercase prose-p:text-gray-400 prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
                        <h2>Privacy Policy</h2>
                        <p className="font-mono text-sm text-brand-primary/80">// LAST UPDATED: NOV 2025</p>
                        <p>Deep Dimensions is committed to protecting your privacy. We collect minimal data (name, email) only when you provide it to us for business purposes. We never sell your data.</p>

                        <hr className="border-white/10 my-12" />

                        <h2>Terms of Service</h2>
                        <p className="font-mono text-sm text-brand-primary/80">// LAST UPDATED: NOV 2025</p>
                        <p>By using our website, you agree to these terms. All content is owned by Deep Dimensions. Our services are governed by separate Master Services Agreements (MSA) signed with each client.</p>

                        <hr className="border-white/10 my-12" />

                        <h3>Contact</h3>
                        <p>For legal inquiries, please contact <a href="mailto:legal@deep-dimensions.com" className="text-brand-primary font-bold">legal@deep-dimensions.com</a>.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
