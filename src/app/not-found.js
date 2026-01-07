import Link from "next/link";
import { Search, Home, ShoppingBag, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "404 - Page Not Found | Garib Nawaz Chicken",
    description: "The page you are looking for doesn't exist. Return to Garib Nawaz Chicken to find fresh halal poultry in Vasai Phata.",
    robots: {
        index: false, // SEO Best Practice: Never index 404 pages
        follow: true,
    },
};

export default function NotFound() {
    return (
        <main className="bg-white min-h-[80vh] flex flex-col">
            {/* Modern Header - Matched to Contact Page Design */}
            <section className="bg-emerald-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
                        404 <span className="text-emerald-400">Not Found</span>
                    </h1>
                    <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                        The page you are looking for has been moved or doesn't exist. Let's get you back to the freshest chicken in Vasai Phata.
                    </p>
                </div>
            </section>

            {/* Recovery Content */}
            <section className="flex-1 flex items-center justify-center py-20 px-6">
                <div className="max-w-xl w-full text-center">
                    <div className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-emerald-50 rounded-[2.5rem] text-emerald-600">
                        <Search size={48} strokeWidth={1.5} />
                    </div>

                    <h2 className="text-3xl font-black text-slate-900 mb-4">Lost in the Shop?</h2>
                    <p className="text-slate-500 mb-12 text-lg">
                        We couldn't find that specific link, but we have plenty of fresh stock elsewhere. Choose a destination below to continue.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-100"
                        >
                            <Home size={20} /> Back Home
                        </Link>
                        <Link
                            href="/products"
                            className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-emerald-200 text-slate-900 px-8 py-5 rounded-2xl font-bold transition-all shadow-sm"
                        >
                            <ShoppingBag size={20} /> View Products
                        </Link>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-emerald-700 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
                        >
                            <ArrowLeft size={16} /> Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}