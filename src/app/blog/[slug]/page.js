import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowLeft, Calendar, User, Share2, Clock, Facebook, Twitter } from "lucide-react";
import { blogPosts, getBlogPostBySlug, getLatestPosts } from "@/lib/blog-data";

// Generate static paths for SEO/Performance (SSG)
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Dynamic Metadata for Social Sharing & SERP
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) return { title: "Article Not Found" };

    return {
        title: `${post.title} | Garib Nawaz Chicken`,
        description: post.excerpt,
        alternates: { canonical: `https://garibnawazchicken.com/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
        }
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) notFound();

    const relatedPosts = getLatestPosts(5).filter((p) => p.slug !== post.slug).slice(0, 2);

    // JSON-LD Article Schema for Google Rich Snippets
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": post.date,
        "author": { "@type": "Person", "name": "Garib Nawaz Culinary Team" },
        "publisher": {
            "@type": "Organization",
            "name": "Garib Nawaz Fresh Halal Chicken",
            "logo": { "@type": "ImageObject", "url": "https://garibnawazchicken.com/logo.png" }
        },
        "description": post.excerpt
    };

    return (
        <main className="bg-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Modern, Minimal Header */}
            <header className="bg-white">
                <section className="bg-emerald-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-emerald-100/80 text-lg md:text-xl font-medium">
                                {post.author} &#8226; {new Date(post.date).toLocaleDateString("en-IN", { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </section>
            </header>

            <section className="py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Article Body */}
                        <div className="lg:col-span-8">
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border border-slate-100">
                                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                            </div>

                            {/* High-Performance Content Parser */}
                            <div className="prose prose-emerald prose-lg max-w-none text-slate-600 leading-relaxed">
                                {post.content.split("\n\n").map((block, i) => {
                                    if (block.startsWith("## ")) return <h2 key={i} className="text-3xl font-black text-slate-900 mt-12 mb-6">{block.replace("## ", "")}</h2>;
                                    if (block.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-slate-800 mt-8 mb-4">{block.replace("### ", "")}</h3>;
                                    if (block.startsWith("- ") || block.startsWith("1. ")) {
                                        return (
                                            <ul key={i} className="space-y-3 my-6">
                                                {block.split("\n").map((li, j) => (
                                                    <li key={j} className="flex gap-3 items-start">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                                        <span>{li.replace(/^[-\d.]\s*/, "").replace(/\*\*/g, "")}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return <p key={i} className="mb-6">{block.replace(/\*\*/g, "")}</p>;
                                })}
                            </div>

                            {/* Conversion Injection */}
                            <div className="mt-16 bg-emerald-50 rounded-4xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-md">
                                    <h3 className="text-2xl font-black text-emerald-900 mb-2 tracking-tight">Cook with Freshness</h3>
                                    <p className="text-emerald-800/70 text-sm">Experience the difference of Certified Halal Chicken delivered to your doorstep in Vasai Phata.</p>
                                </div>
                                <a
                                    href="https://wa.me/918446319998?text=I%20read%20your%20blog%20and%20want%20to%20order%20chicken"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200"
                                >
                                    <MessageCircle size={20} /> Order Fresh Now
                                </a>
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-32 space-y-12">

                                {/* Related Posts */}
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Further Reading</h3>
                                    <div className="space-y-6">
                                        {relatedPosts.map((rp) => (
                                            <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex items-center gap-4 px-4 py-2 rounded-2xl hover:bg-slate-50 transition-all">
                                                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                                                    <Image src={rp.image} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <h4 className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 leading-snug line-clamp-2">
                                                    {rp.title}
                                                </h4>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Local Trust Card */}
                                <div className="bg-emerald-900 rounded-4xl p-8 text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <Clock className="text-emerald-200 mb-4" size={32} />
                                        <h3 className="text-xl font-bold mb-2">Open Daily</h3>
                                        <p className="text-white text-sm mb-6">Serving Vasai-Virar with farm-fresh poultry from 7 AM to 10 PM.</p>
                                        <a href="tel:+918446319998" className="block text-center bg-white text-slate-900 py-3 rounded-xl font-bold text-sm">Call Now</a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}