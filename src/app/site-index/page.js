import Link from "next/link";
import { products } from "@/lib/products-data";
import { blogPosts } from "@/lib/blog-data";
import { ChevronRight, Globe, ShoppingBag, BookOpen, Info } from "lucide-react";

export const metadata = {
    title: "Sitemap | Garib Nawaz Fresh Halal Chicken",
    description: "Navigate all pages, fresh chicken products, and poultry insights at Garib Nawaz Chicken Vasai Phata.",
};

export default function SitemapPage() {
    const sections = [
        {
            title: "Main Navigation",
            icon: <Globe className="text-emerald-500" size={24} />,
            links: [
                { name: "Home", href: "/" },
                { name: "Fresh Products", href: "/products" },
                { name: "Poultry Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
            ],
        },
        {
            title: "Legal & Trust",
            icon: <Info className="text-emerald-500" size={24} />,
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
            ],
        },
    ];

    return (
        <main className="bg-white min-h-screen">
            {/* Modern Header - Matched to Contact Page */}
            <section className="bg-emerald-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Site <span className="text-emerald-400">Index</span>
                    </h1>
                    <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl font-medium">
                        Quickly navigate through our fresh poultry products, recipes, and local service details in Vasai Phata.
                    </p>
                </div>
            </section>

            {/* Sitemap Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                        {/* Standard Pages */}
                        {sections.map((section, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                    {section.icon}
                                    <h2 className="text-2xl font-black text-slate-900">{section.title}</h2>
                                </div>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 font-bold transition-colors group">
                                                <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Product Inventory Index - Massive SEO Value */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                <ShoppingBag className="text-emerald-500" size={24} />
                                <h2 className="text-2xl font-black text-slate-900">Products</h2>
                            </div>
                            <ul className="grid grid-cols-1 gap-4">
                                {products.map((product) => (
                                    <li key={product.id}>
                                        <Link href="/products" className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 text-sm font-semibold transition-colors group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors" />
                                            {product.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Content Library Index */}
                        <div className="md:col-span-2 lg:col-span-3 space-y-6 pt-12">
                            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                <BookOpen className="text-emerald-500" size={24} />
                                <h2 className="text-2xl font-black text-slate-900">Latest Culinary Insights</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                                {blogPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="text-slate-500 hover:text-emerald-700 text-sm font-medium line-clamp-1 border-l-2 border-transparent hover:border-emerald-500 pl-3 transition-all"
                                    >
                                        {post.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}