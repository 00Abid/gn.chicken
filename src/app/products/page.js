import Image from "next/image";
import { MessageCircle, Phone, Shield, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { products, getWhatsAppLink } from "@/lib/products-data";
import BottomCTA from "@/app/components/BottomCTA";

export default function ProductsPage() {
    // SEO Strategy: Dynamically generate product list schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": product.name,
            "description": product.description,
            "image": product.image,
            "url": `https://yourdomain.com/products#${product.id}`
        }))
    };

    return (
        <div className="bg-white">
            {/* Structured Data for Google Search */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero Header - High Authority */}
            <section className="bg-emerald-900 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Fresh <span className="text-emerald-400">Halal Chicken</span> Products
                        </h1>
                        <p className="text-emerald-100/80 text-lg md:text-xl font-medium leading-relaxed">
                            100% Zabihah Halal, dressed to order and delivered fresh daily across the Vasai-Virar region. Quality you can trust, from farm to your kitchen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Bar - Micro-Signals */}
            <section className="bg-emerald-50 border-y border-emerald-100 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6 text-sm font-bold uppercase tracking-wider text-emerald-800">
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} /> <span>Fresh Stock Daily</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={18} /> <span>Certified Halal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} /> <span>Open 7 AM - 10 PM</span>
                        </div>
                        <a href="tel:+918446319998" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-500">
                            <Phone size={18} /> <span>+91 8446319998</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Product Grid - Core SEO Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                id={product.id}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} - Fresh Halal Chicken Supplier Vasai Phata`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-emerald-900 text-xs font-black px-4 py-2 rounded-full shadow-lg">
                                        {product.price || "Call for Price"}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h2 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                        {product.name}
                                    </h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {product.description}
                                    </p>
                                    <a
                                        href={getWhatsAppLink(product.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-bold transition-all shadow-md active:scale-95"
                                    >
                                        <MessageCircle size={20} />
                                        Order via WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wholesale & Custom Orders Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                                        Bulk Wholesale & <span className="text-emerald-600">Custom Cuts</span>
                                    </h2>
                                    <p className="text-slate-500 text-lg">
                                        Partner with Garib Nawaz for your restaurant, hotel, or event. We provide competitive wholesale pricing for bulk poultry supply in Vasai-Virar.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Custom butchery & cuts",
                                        "Bulk event catering supply",
                                        "Daily restaurant delivery",
                                        "Competitive wholesale rates"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-slate-700 font-semibold">
                                            <CheckCircle2 className="text-emerald-500" size={20} />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a
                                        href="https://wa.me/918446319998?text=Enquiry%20about%20bulk%20orders"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-2xl font-bold shadow-lg transition-all"
                                    >
                                        <MessageCircle size={22} /> Get Wholesale Quote
                                    </a>
                                    <a href="tel:+918446319998" className="flex items-center justify-center gap-3 border-2 border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-5 rounded-2xl font-bold transition-all">
                                        <Phone size={20} /> Call Now
                                    </a>
                                </div>
                            </div>

                            <div className="relative h-80 lg:h-122.4 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                                    alt="Wholesale chicken supplier service for restaurants in Vasai"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BottomCTA />
        </div>
    );
}