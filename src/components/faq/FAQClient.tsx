"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { clsx } from "clsx";

type Question = {
    id: string;
    question: string;
    answer: string;
};

type Category = {
    name: string;
    questions: Question[];
};

export default function FAQClient({ data }: { data: Category[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>(data[0]?.name || "");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const itemsPerPage = 20;

    // Filter and Search Logic
    const filteredData = useMemo(() => {
        let filtered = data;

        // If search is active, search across ALL categories
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            return filtered.map(cat => ({
                ...cat,
                questions: cat.questions.filter(q =>
                    q.question.toLowerCase().includes(query) ||
                    q.answer.toLowerCase().includes(query)
                )
            })).filter(cat => cat.questions.length > 0);
        }

        // Otherwise, return only the selected category
        return filtered.filter(cat => cat.name === selectedCategory);
    }, [data, selectedCategory, searchQuery]);

    // Flatten questions for pagination
    const allQuestions = useMemo(() => {
        return filteredData.flatMap(cat => cat.questions);
    }, [filteredData]);

    const totalPages = Math.ceil(allQuestions.length / itemsPerPage);
    const currentQuestions = allQuestions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
        setSearchQuery(""); // Clear search when switching category
        setCurrentPage(1);
        setIsSidebarOpen(false);
    };

    const toggleQuestion = (id: string) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            {/* Mobile Category Toggle */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg w-full"
                >
                    <Menu size={20} />
                    <span>Categories</span>
                </button>
            </div>

            {/* Sidebar */}
            <aside className={clsx(
                "lg:w-1/4 lg:block fixed lg:static inset-0 z-50 bg-deep-950 lg:bg-transparent p-4 lg:p-0 transition-transform duration-300",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            )}>
                <div className="flex justify-between items-center lg:hidden mb-6">
                    <h3 className="font-bold text-xl">Categories</h3>
                    <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
                </div>

                <div className="space-y-1 max-h-[calc(100vh-100px)] lg:max-h-none overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-primary/20">
                    {data.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => handleCategoryClick(cat.name)}
                            className={clsx(
                                "w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium",
                                selectedCategory === cat.name && !searchQuery
                                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            {cat.name.replace(/^Category \d+: /, '')}
                            <span className="ml-2 text-xs opacity-50">({cat.questions.length})</span>
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4">
                {/* Search Bar */}
                <div className="relative mb-8">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search 5,000+ FAQs..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                    />
                </div>

                {/* Results Info */}
                <div className="mb-6 text-sm text-gray-400">
                    Showing {currentQuestions.length} of {allQuestions.length} questions
                    {searchQuery && ` matching "${searchQuery}"`}
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                    {currentQuestions.map((q) => (
                        <motion.div
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors"
                        >
                            <button
                                onClick={() => toggleQuestion(q.id)}
                                className="w-full flex items-start justify-between p-6 text-left gap-4"
                            >
                                <span className="font-medium text-lg text-white/90">{q.question}</span>
                                <span className={clsx(
                                    "p-1 rounded-full bg-white/5 transition-transform duration-200 shrink-0",
                                    openQuestionId === q.id ? "rotate-180" : ""
                                )}>
                                    <ChevronDown size={20} />
                                </span>
                            </button>
                            <AnimatePresence>
                                {openQuestionId === q.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {q.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    {currentQuestions.length === 0 && (
                        <div className="text-center py-20 bg-white/5 rounded-xl border border-white/5 border-dashed">
                            <p className="text-gray-400">No questions found matching your criteria.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronDown className="rotate-90" size={20} />
                        </button>

                        <span className="text-sm text-gray-400">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
