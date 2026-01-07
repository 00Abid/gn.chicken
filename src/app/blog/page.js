"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, ArrowRight, Calendar, User, Tag } from "lucide-react";
import { blogPosts, categories } from "@/lib/blog-data";

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Performance Optimization: Memoize the filtered results
    const sortedPosts = useMemo(() => {
        return blogPosts
            .filter((post) => {
                const matchesSearch =
                    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = !selectedCategory || post.category === selectedCategory;
                return matchesSearch && matchesCategory;
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [searchQuery, selectedCategory]);

    const recentPosts = useMemo(() => {
        return [...blogPosts]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Dynamic Header: High Topical Relevance */}
            <section className="bg-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Poultry <span className="text-emerald-400">Insights</span> & Recipes
                        </h1>
                        <p className="text-emerald-100/80 text-lg md:text-xl font-medium">
                            Everything you need to know about fresh halal chicken: from
                            certified Zabihah standards to kitchen-tested recipes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Main Content Area */}
                        <main className="lg:col-span-8">
                            <div className="grid sm:grid-cols-2 gap-8">
                                {sortedPosts.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="flex flex-col bg-white border border-slate-100 rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                sizes="(max-w-768px) 100vw, 400px"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="p-8 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-tighter mb-4">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar size={14} className="text-emerald-600" />
                                                    {new Date(post.date).toLocaleDateString("en-IN", { day: 'numeric', month: 'short' })}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <User size={14} className="text-emerald-600" /> {post.author}
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                            </h2>

                                            <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                                                {post.excerpt}
                                            </p>

                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all"
                                            >
                                                Read Full Article <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {sortedPosts.length === 0 && (
                                <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                    <p className="text-slate-500 font-bold italic">No matching articles found in our kitchen...</p>
                                    <button
                                        onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}
                                        className="mt-4 text-emerald-700 font-black underline"
                                    >
                                        Reset Filter
                                    </button>
                                </div>
                            )}
                        </main>

                        {/* Sidebar Strategy: Internal Linking & UX */}
                        <aside className="lg:col-span-4 space-y-10">

                            {/* Search Widget */}
                            <div className="bg-emerald-900 rounded-4xl p-8 text-white">
                                <h3 className="font-bold text-xl mb-6">Search Library</h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Find a recipe or tip..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 pl-12 pr-4 py-4 rounded-xl  focus:outline-none transition-all placeholder:text-white"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={20} />
                                </div>
                            </div>

                            {/* Category Filter */}
                            <div className="bg-slate-50 rounded-4xl p-8 border border-slate-100">
                                <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                                    <Tag size={20} className="text-emerald-600" /> Topics
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${!selectedCategory ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-600"
                                            }`}
                                    >
                                        View All
                                    </button>
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-600"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Posts - Keep 'em clicking */}
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 text-xl mb-6 px-4">Latest Updates</h3>
                                <div className="space-y-6">
                                    {recentPosts.map((post) => (
                                        <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-center gap-4 group px-4 py-2 rounded-2xl hover:bg-emerald-50 transition-all">
                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                                <Image src={post.image} alt="" fill className="object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 line-clamp-2 transition-colors leading-tight">
                                                    {post.title}
                                                </h4>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                                    {new Date(post.date).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}