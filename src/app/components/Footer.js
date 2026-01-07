import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle, Facebook, MessageSquare, Instagram } from "lucide-react";


const quickLinks = [
    { name: "Fresh Chicken Delivery", href: "/" },
    { name: "Fresh Chicken Products", href: "/products" },
    { name: "Poultry Blog", href: "/blog" },
    { name: "Contact Distributor", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
    return (
        <footer className="bg-[#1a241a] text-white border-t border-emerald-900/50">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Brand & Authority Section */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            {/* Logo with proper semantic markup */}
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
                                    className="h-42 w-auto transition-opacity duration-300 group-hover:opacity-90"
                                />
                            </Link>

                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Vasai Phata&apos;s leading halal chicken supplier since 2015. We specialize in farm-fresh poultry distribution for households and commercial kitchens across Maharashtra 401208.
                        </p>

                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook />, label: "Facebook", href: "#" },
                                { icon: <Instagram />, label: "Instagram", href: "#" },
                                { icon: <MessageCircle />, label: "WhatsApp", href: "https://wa.me/918446319998" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 text-gray-400"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Structured Quick Links */}
                    <div className="md:col-span-3">
                        <h4 className="font-bold text-white text-lg mb-6 border-b border-emerald-800 pb-2 inline-block">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-emerald-400 text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-emerald-800 rounded-full group-hover:bg-emerald-400 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Critical Local SEO (NAP) Section */}
                    <div className="md:col-span-4">
                        <h4 className="font-bold text-white text-lg mb-6 border-b border-emerald-800 pb-2 inline-block">Local Presence</h4>
                        <address className="not-italic space-y-5">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-emerald-900/30 rounded-md text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-gray-400 text-sm leading-6">
                                    Shop 1-2, Gausiya Masjid, Wakanpada,<br />
                                    <strong>Vasai Phata, East</strong>, Vasai-Virar,<br />
                                    Maharashtra 401208
                                </span>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-2 bg-emerald-900/30 rounded-md text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <div className="flex flex-col text-sm font-semibold text-gray-300">
                                    <a href="tel:+918446319998" className="hover:text-emerald-400">+91 8446319998</a>
                                    <a href="tel:+918446319990" className="hover:text-emerald-400">+91 8446319990</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-emerald-900/30 rounded-md text-emerald-400">
                                    <Clock size={18} />
                                </div>
                                <span className="text-gray-400 text-sm italic">Daily: 7 AM — 10 PM</span>
                            </div>
                        </address>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Garib Nawaz Fresh Chicken.
                        <span className="hidden md:inline"> | Certified Halal Distributor</span>
                    </p>
                    <div className="flex gap-6 text-xs font-bold text-gray-500 uppercase tracking-tighter">
                        <Link href="/site-index" className="hover:text-emerald-400">Sitemap</Link>
                        <Link href="/terms" className="hover:text-emerald-400">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}