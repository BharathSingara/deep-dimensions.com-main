import FAQClient from "@/components/faq/FAQClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import faqs from "@/data/faqs.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Deep Dimensions",
    description: "Find answers to common questions about Deep Dimensions' services, processes, and technology.",
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-deep-950 text-foreground selection:bg-brand-primary selection:text-white">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about our services, methodology, and how we deliver value.
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <FAQClient data={faqs} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
