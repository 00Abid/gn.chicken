import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Garib Nawaz Fresh Halal Chicken",
    description: "Read the Privacy Policy of Garib Nawaz Chicken. Learn how we protect your data and handle your information with care in Vasai Phata.",
    // SEO Pro-Tip: We usually want this page indexed but not necessarily outranking products
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 2026"; // Synchronized with current year

    return (
        <main className="bg-white min-h-screen">
            {/* Professional Header */}
            {/* <section className="bg-slate-900 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-black mb-4"></h1>
                        <p className="text-slate-400 text-lg font-medium">
                            
                        </p>
                    </div>
                </div>
            </section> */}
            {/* Modern Header */}
            <section className="bg-emerald-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Privacy <span className="text-emerald-400">Policy</span>
                    </h1>
                    <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl font-medium">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Policy Content */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-8 italic">
                            Garib Nawaz Chicken (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to your privacy. This policy outlines our data practices for our poultry distribution services in Vasai-Virar.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Introduction</h2>
                        <p className="text-slate-600 mb-6">
                            We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our delivery services.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Information We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            To provide fresh chicken delivery, we may collect:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                { label: "Contact Information", desc: "Name, phone number, and delivery address." },
                                { label: "Order Details", desc: "Products purchased and delivery preferences." },
                                { label: "Communication", desc: "WhatsApp messages, phone calls, or form inquiries." },
                                { label: "Usage Data", desc: "Technical information like IP addresses and browsing behavior." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-start text-slate-600">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span><strong>{item.label}:</strong> {item.desc}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. How We Use Your Data</h2>
                        <p className="text-slate-600 mb-6">
                            We use your information solely to:
                        </p>
                        <ul className="space-y-3 mb-8 text-slate-600">
                            <li className="flex gap-3 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> Fulfill and deliver chicken orders.</li>
                            <li className="flex gap-3 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> Provide customer support via WhatsApp.</li>
                            <li className="flex gap-3 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> Improve our shop&apos;s digital experience.</li>
                            <li className="flex gap-3 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> Comply with local health and trade regulations.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Data Security & Sharing</h2>
                        <p className="text-slate-600 mb-6">
                            **We do not sell your personal information.** We only share data with trusted delivery partners who help us reach your location in Vasai Phata. We implement SSL encryption and secure data handling to prevent unauthorized access.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Your Rights</h2>
                        <p className="text-slate-600 mb-6">
                            You have the right to request access to your data, ask for corrections, or request that we delete your contact information from our delivery logs. To do so, please contact us via phone.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Cookies & Third-Party Links</h2>
                        <p className="text-slate-600 mb-6">
                            We use minimal cookies for site performance. Our site includes links to **Google Maps** (for directions) and **WhatsApp** (for ordering). Please review their respective policies as we do not control their data practices.
                        </p>

                        <div className="mt-16 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                            <h2 className="text-xl font-bold text-emerald-900 mb-4">Contact Our Privacy Lead</h2>
                            <ul className="space-y-2 text-emerald-800 text-sm font-medium">
                                <li><strong>Phone:</strong> +91 8446319998</li>
                                <li><strong>WhatsApp:</strong> +91 8446319998</li>
                                <li><strong>Address:</strong> Shop 1-2, Gausiya Masjid, Wakanpada, Vasai Phata, Vasai - Palghar, Maharashtra 401208</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/" className="text-emerald-700 font-bold hover:underline">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}