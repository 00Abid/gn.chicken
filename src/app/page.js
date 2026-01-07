import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle, Phone, MapPin, Sparkles, Shield,
  Users, Star, ArrowRight, Clock
} from "lucide-react";
import { products, getWhatsAppLink } from "@/lib/products-data";
import { getLatestPosts } from "@/lib/blog-data";
import BottomCTA from "@/app/components/BottomCTA";

const testimonials = [
  { name: "Rashid Ahmed", location: "Wakanpada", text: "Best halal chicken in Vasai! Always fresh and helpful.", rating: 5 },
  { name: "Fatima Khan", location: "Vasai East", text: "Quality chicken at fair prices. Highly recommend!", rating: 5 },
  { name: "Mohammed Ismail", location: "Dhaniv", text: "Trustworthy shop with genuine halal chicken. Quick service.", rating: 5 }
];

export default function HomePage() {
  const latestPosts = getLatestPosts(3);
  const featuredProducts = products.slice(0, 4);

  // JSON-LD for Local Business SEO & FAQ
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MeatStore",
      "name": "Garib Nawaz Fresh Halal Chicken",
      "image": "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop 1, 2, Gausiya Masjid, Wakanpada, Vasai Phata",
        "addressLocality": "Vasai-Virar",
        "addressRegion": "Maharashtra",
        "postalCode": "401208",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "19.4124", "longitude": "72.8397" },
      "openingHours": "Mo-Su 07:00-22:00",
      "telephone": "+918446319998",
      "priceRange": "₹"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is your chicken 100% Halal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are strictly Zabihah Halal certified. We follow traditional Islamic slaughtering practices to ensure purity and hygiene."
          }
        },
        {
          "@type": "Question",
          "name": "Do you deliver to Vasai West?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Currently, we focus on Vasai East (Phata, Wakanpada, Dhaniv). However, for bulk orders, we can arrange special delivery to other areas."
          }
        },
        {
          "@type": "Question",
          "name": "How do I place an order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can click the 'Order Online' button to message us directly on WhatsApp with your requirements. We reply instantly!"
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer wholesale pricing for restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We supply to many hotels and caterers in Vasai-Virar. Contact us for our special wholesale rate card."
          }
        }
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-white ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Optimized for LCP */}
      <section className="relative min-h-[85vh] flex items-center bg-emerald-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=1920&q=80"
            alt="Fresh halal chicken at Garib Nawaz Chicken Shop Vasai Phata"
            fill
            className="object-cover"
            priority // Critical for LCP ranking
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4" /> 100% Halal Certified
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Premium Fresh <span className="text-emerald-400">Halal Chicken</span> In Vasai Phata
            </h1>

            <p className="text-lg md:text-xl text-emerald-100/80 mb-10 leading-relaxed font-medium">
              Daily farm-to-shop poultry distribution. Serving Wakanpada, Dhaniv, and Vasai East with tender, hygienic chicken since 2015.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/products" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/40">
                View Price List <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/918446319998" className="bg-white hover:bg-emerald-50 text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg">
                <MessageCircle size={22} className="text-[#25D366]" /> Order Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Why Choose Garib Nawaz?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">The most trusted wholesale and retail poultry partner in Vasai-Virar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Sparkles, title: "Farm Fresh Daily", desc: "Never frozen. Sourced at 4 AM every day from local sustainable farms." },
              { icon: Shield, title: "Strictly Halal", desc: "Zabihah certified according to Islamic law with full hygiene protocols." },
              { icon: Users, title: "Local Authority", desc: "Proudly serving thousands of families in Vasai Phata and East since 2015." }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors group">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all text-emerald-700">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - High Conversion */}
      <section className="py-24 bg-emerald-900 text-white rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-4">Popular Cuts</h2>
              <p className="text-emerald-300 font-medium">Prepared fresh by our expert butchers</p>
            </div>
            <Link href="/products" className="text-white font-bold flex items-center gap-2 border-b-2 border-emerald-500 pb-1">
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 rounded-3xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw" />
                </div>
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-emerald-200/60 text-sm mb-6 line-clamp-2">{product.description}</p>
                <a href={getWhatsAppLink(product.name)} className="w-full bg-emerald-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
                  <MessageCircle size={16} /> Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Long-Tail Keyword Strategy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about our products and delivery.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is your chicken 100% Halal?",
                a: "Yes, we are strictly Zabihah Halal certified. We follow traditional Islamic slaughtering practices to ensure purity and hygiene."
              },
              {
                q: "Do you deliver to Vasai West?",
                a: "Currently, we focus on Vasai East (Phata, Wakanpada, Dhaniv). However, for bulk orders, we can arrange special delivery to other areas."
              },
              {
                q: "How do I place an order?",
                a: "You can click the 'Order Online' button to message us directly on WhatsApp with your requirements. We reply instantly!"
              },
              {
                q: "Do you offer wholesale pricing for restaurants?",
                a: "Absolutely! We supply to many hotels and caterers in Vasai-Virar. Contact us for our special wholesale rate card."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Trusted By The Community</h2>
              <p className="text-slate-500 mb-8">We take pride in our 5-star local reputation in the Vasai-Virar region.</p>
              <div className="flex items-center gap-4 py-4 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-emerald-200 border-2 border-white" />)}
                </div>
                <span className="text-sm font-bold text-slate-700">1,000+ Happy Customers</span>
              </div>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl shadow-sm italic text-slate-700">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, star) => <Star key={star} size={14} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  "{t.text}"
                  <div className="mt-6 not-italic">
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}