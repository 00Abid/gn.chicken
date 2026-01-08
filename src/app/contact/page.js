import { Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/app/components/ContactForm";

// SEO Metadata: Critical for Local Search
export const metadata = {
    title: "Contact & FAQ | Garib Nawaz Fresh Halal Chicken Vasai Phata",
    description: "Get in touch with Garib Nawaz for fresh chicken delivery in Vasai-Virar. Find answers to FAQs about our 100% Halal poultry and bulk wholesale supply.",
    alternates: { canonical: "https://garibnawazchicken.vercel.app/contact" }
};

const faqs = [
    {
        question: "Do you deliver fresh chicken in Vasai?",
        answer: "Yes, we offer home delivery within the Vasai-Virar area, including Wakanpada and Dhaniv. For delivery orders, please contact us via WhatsApp or phone. Charges vary by distance."
    },
    {
        question: "What is the current chicken price in Vasai Phata?",
        answer: "Chicken prices fluctuate daily based on market rates. For the most accurate wholesale or retail pricing, please call us at +91 8446319998. We offer discounts on bulk orders for events."
    },
    {
        question: "Is your chicken 100% Zabihah Halal?",
        answer: "Absolutely. All our poultry is 100% zabihah halal, slaughtered according to strict Islamic guidelines. We source only from trusted local suppliers who follow proper halal practices."
    },
    {
        question: "Do you supply chicken to restaurants in bulk?",
        answer: "Yes, we specialize in bulk chicken supply for restaurants, hotels, and catering events in Vasai. We provide custom cuts and competitive wholesale pricing."
    }
];

export default function ContactPage() {
    // FAQ Schema: Pre-rendered on the server for instant Google recognition
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <div className="bg-white">
            {/* Script injected at server-level */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Modern Header - SSR Optimized */}
            <section className="bg-emerald-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Contact <span className="text-emerald-400">Garib Nawaz</span>
                    </h1>
                    <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl font-medium">
                        Have questions about bulk orders or daily delivery? Our team is ready to assist you in **Vasai Phata**.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Client Component: Form remains interactive */}
                    <ContactForm />

                    {/* Contact Details & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8">Our Presence</h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Call Us</h3>
                                        <p className="text-slate-500 text-sm font-semibold">+91 8446319998</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Visit Shop</h3>
                                        <p className="text-slate-500 text-sm leading-tight font-medium">
                                            Shop 1, 2, Gausiya Masjid, Wakanpada, Vasai Phata, Maharashtra 401208
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5621453245244!2d72.88371367503554!3d19.38805368188182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a90f1d9e9e1d%3A0x1d9e9e1d9e9e1d9e!2sGarib%20Nawaz%20Chicken!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }}
                                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                title="Garib Nawaz Fresh Chicken Location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Manual FAQ Section - Pre-rendered for Maximum SEO "Punch" */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Essential Poultry Knowledge</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 open:shadow-xl open:border-emerald-200">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-slate-800 hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden">
                                    <span className="pr-4">{faq.question}</span>
                                    <div className="transition-transform duration-300 group-open:rotate-180 text-emerald-600">
                                        <Clock size={20} />
                                    </div>
                                </summary>
                                <div className="px-8 pb-8 text-slate-500 leading-relaxed font-medium border-t border-slate-50 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}