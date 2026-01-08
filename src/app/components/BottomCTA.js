"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function PoultryConversionSection() {
    return (
        <section className="py-20 bg-slate-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-emerald-800 rounded-[2.5rem] p-10 md:p-20 text-center text-white shadow-2xl overflow-hidden group">

                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full -ml-48 -mb-48 blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        {/* SEO-Rich Heading: Targeted at Local Conversion */}
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                            Ready for Fresh, Halal <br className="hidden md:block" />
                            Chicken in Vasai Phata?
                        </h2>

                        <p className="text-emerald-100 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                            Join 500+ businesses and families who trust Garib Nawaz for daily fresh poultry delivery. Experience the quality of farm-fresh meat, prepared with care.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            {/* Primary Action: WhatsApp */}
                            <a
                                href="https://wa.me/918446319998?text=Hi%20Garib%20Nawaz,%20I%20want%20to%20order%20chicken"
                                target="_blank"
                                data-track="cta-whatsapp-button"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#1ebf5b] transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Order on WhatsApp
                            </a>

                            <a
                                href="tel:+918446319998"
                                data-track="cta-call-button"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                            >
                                <Phone className="w-6 h-6" />
                                Call +91 8446319998
                            </a>
                        </div>

                        {/* Trust Signal with Real-Time Context */}
                        <div className="mt-10 flex items-center justify-center gap-3 text-emerald-200/80 font-semibold">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                            </span>
                            <span className="uppercase tracking-widest text-xs">
                                Open Daily for Delivery: 7 AM - 10 PM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}