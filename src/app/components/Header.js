"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Phone, Clock, Menu, X, MessageCircle } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Fresh Chicken Products", href: "/products" }, // Descriptive anchor text for SEO
    { name: "Poultry Blog", href: "/blog" },
    { name: "Contact Distributor", href: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Schema.org structured data for Local Business visibility
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "WholesaleStore",
        "name": "Garib Nawaz Fresh Halal Chicken",
        "telephone": "+918446319998",
        "openingHours": "Mo-Su 07:00-22:00"
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            {/* Main Navigation */}
            <nav className="bg-white shadow-sm" aria-label="Main Navigation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link
                            href="/"
                            className="flex items-center group"
                            aria-label="Garib Nawaz Chicken - Return to homepage"
                        >
                            {/* Logo image - SEO optimized */}
                            <Image
                                src="/gnc-logo.webp"
                                alt="Garib Nawaz Chicken - Fresh Halal Chicken in Vasai Phata"
                                width={180}
                                height={56}
                                priority
                                className="h-34 w-auto transition-opacity duration-300 group-hover:opacity-90"
                            />
                        </Link>



                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-10">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-slate-600 hover:text-emerald-700 font-semibold text-sm transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+918446319998"
                                data-track="nav-call-button"
                                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition-all active:scale-95"
                            >
                                Call for Wholesale
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-emerald-900"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Pure CSS Transition for Performance */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-125 border-t border-gray-100' : 'max-h-0'}`}>
                    <div className="px-6 py-6 space-y-4 bg-gray-50">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-lg font-bold text-emerald-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-6 border-t border-gray-200 grid grid-cols-1 gap-4">
                            <a href="tel:+918446319998" className="flex items-center gap-3 font-bold text-emerald-700">
                                <Phone size={18} /> Call +91 8446319998
                            </a>
                            <a href="https://wa.me/918446319998" className="flex items-center gap-3 font-bold text-emerald-700">
                                <MessageCircle size={18} /> WhatsApp Order
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}