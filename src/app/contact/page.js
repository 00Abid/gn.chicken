"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send, ChevronDown, ChevronUp } from "lucide-react";

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
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "general", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");
    const [openFaq, setOpenFaq] = useState(null);

    // FAQ Schema for Search Engines
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 800)); // Performance feel
        setSubmitStatus("success");
        setIsSubmitting(false);
        setFormData({ name: "", phone: "", email: "", subject: "general", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
    };

    return (
        <div className="bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Modern Header */}
            <section className="bg-emerald-900 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Contact <span className="text-emerald-400">Garib Nawaz</span>
                    </h1>
                    <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl font-medium">
                        Have questions about bulk orders or daily delivery? Our team is ready to assist you in Vasai Phata.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Form Section */}
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-black text-slate-900 mb-8">Quick Inquiry</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6 text-black">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-black mb-3">Full Name</label>
                                    <input
                                        type="text" required value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-0 transition-all outline-none"
                                        placeholder="E.g. Khan Mohammad"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Phone Number</label>
                                    <input
                                        type="tel" required value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-0 transition-all outline-none"
                                        placeholder="+91 1234567890"
                                    />
                                </div>
                            </div>

                            <div className="text-black">
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Message</label>
                                <textarea
                                    required rows={4} value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-emerald-500 focus:ring-0 transition-all outline-none resize-none"
                                    placeholder="Tell us about your order..."
                                />
                            </div>

                            <button
                                type="submit" disabled={isSubmitting}
                                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-100 disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : <><Send size={20} /> Send Inquiry</>}
                            </button>

                            {submitStatus === "success" && (
                                <p className="text-emerald-700 text-center font-bold bg-emerald-100 p-4 rounded-xl">
                                    Message sent! We'll reply within 24 hours.
                                </p>
                            )}
                        </form>
                    </div>

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
                                        <p className="text-slate-500 text-sm">+91 8446319998</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Visit Shop</h3>
                                        <p className="text-slate-500 text-sm leading-tight">Shop no 1, 2, Gausiya Masjid, Wakanpada, Vasai Phata, Vasai - Palghar, Maharashtra 401208</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d72.8397!3d19.3919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGausiya%20Masjid%2C%20Wakanpada!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%" height="100%" style={{ border: 0 }}
                                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                title="Garib Nawaz Fresh Chicken Location"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Critical for SERP Real Estate */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">FAQ</h2>
                        <p className="text-slate-500 font-medium">Common questions about our halal chicken services.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-8 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <p className="px-8 pb-8 text-slate-500 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}