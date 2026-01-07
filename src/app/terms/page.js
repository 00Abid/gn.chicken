import Link from "next/link";

export const metadata = {
    title: "Terms and Conditions | Garib Nawaz Fresh Halal Chicken",
    description: "Read the official terms and conditions for ordering fresh halal chicken from Garib Nawaz. Our policies on delivery, pricing, and quality in Vasai-Virar.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function TermsPage() {
    const currentYear = new Date().getFullYear();

    return (
        <main className="bg-white min-h-screen">
            {/* Modern Header */}
            <section className="bg-emerald-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Terms & <span className="text-emerald-400">Conditions</span>
                    </h1>
                    <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl font-medium">
                        Effective Date: January {currentYear}
                    </p>
                </div>
            </section>


            {/* Terms Content */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Welcome to **Garib Nawaz Fresh Halal Chicken**. By accessing our website or placing an order via phone or WhatsApp, you agree to be bound by the following terms and conditions.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Product Quality & Halal Certification</h2>
                        <p className="text-slate-600 mb-6">
                            We guarantee that all poultry sold is **100% Zabihah Halal**, slaughtered according to Islamic rites. As a fresh meat supplier, we source our stock daily to ensure maximum quality.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Pricing & Market Fluctuations</h2>
                        <p className="text-slate-600 mb-6">
                            Prices for fresh chicken are subject to daily market fluctuations in the **Vasai-Virar** region. Prices quoted on the website are indicative. The final price will be confirmed at the time of your order via WhatsApp or Phone.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Delivery Policy</h2>
                        <ul className="space-y-3 mb-8 text-slate-600">
                            <li className="flex gap-3 items-start">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span>We deliver to specific areas including **Vasai Phata, Wakanpada, Dhaniv, and Vasai East**.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span>Delivery timelines are estimates and may be affected by traffic or weather conditions.</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span>Customers must ensure someone is available to receive the fresh product to maintain the cold chain.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Cancellations & Returns</h2>
                        <p className="text-slate-600 mb-6">
                            Due to the perishable nature of fresh meat, orders once processed and dressed cannot be cancelled. Returns are only accepted at the time of delivery if the product does not meet our quality standards.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Bulk & Wholesale Orders</h2>
                        <p className="text-slate-600 mb-6">
                            Wholesale orders for restaurants and events require a minimum lead time of 24 hours. Custom cuts are provided based on the specifications agreed upon during the order placement.
                        </p>

                        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Questions regarding these terms?</h2>
                            <p className="text-slate-600 text-sm mb-6">
                                Please visit us at our shop or contact our management team directly.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="tel:+918446319998" className="bg-emerald-700 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-800 transition-colors">
                                    Call Support
                                </a>
                                <Link href="/contact" className="border border-slate-300 text-slate-700 px-6 py-2 rounded-xl font-bold text-sm hover:bg-white transition-colors">
                                    Contact Page
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}