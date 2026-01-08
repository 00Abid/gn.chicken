"use client";

import { useState } from "react";
import { MessageCircle, User, MapPin, ShoppingBag, PenTool } from "lucide-react";

export default function ContactForm() {
    // 1. Define the initial state for easy resetting
    const initialState = {
        name: "",
        location: "",
        order: "",
        notes: ""
    };

    const [formData, setFormData] = useState(initialState);

    const handleWhatsAppRedirect = (e) => {
        e.preventDefault();
        const adminPhone = "918446319998";

        // 2. Format the WhatsApp message
        const text = `*New Lead: Garib Nawaz Chicken*%0A----------------------------%0A*👤 Customer:* ${formData.name}%0A*📍 Area:* ${formData.location}%0A*🍗 Requirement:* ${formData.order}%0A*📝 Instructions:* ${formData.notes || "None"}%0A----------------------------%0A_Inquiry via garibnawazchicken.com_`;

        // 3. Open WhatsApp in a new tab
        window.open(`https://wa.me/${adminPhone}?text=${text}`, "_blank");

        // 4. THE FIX: Reset the state to initial (empty) values
        setFormData(initialState);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 md:p-12">
                <header className="mb-10">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Order Inquiry</h2>
                    <p className="text-slate-500 font-medium">Direct line to our shop manager in Vasai Phata.</p>
                </header>

                <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
                    <div className="space-y-4">
                        {/* Name Input */}
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-4 mb-2 block">Your Full Name</label>
                            <div className="relative">
                                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={formData.name} // CRITICAL: This allows the form to clear
                                    placeholder="e.g. Rashid Ahmed"
                                    className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-900 placeholder:text-slate-300"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Location Input */}
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-4 mb-2 block">Delivery Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={formData.location} // CRITICAL: This allows the form to clear
                                    placeholder="e.g. Wakanpada, Vasai East"
                                    className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-900 placeholder:text-slate-300"
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Order Input */}
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-4 mb-2 block">What do you need?</label>
                            <div className="relative">
                                <ShoppingBag className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={18} />
                                <input
                                    type="text"
                                    required
                                    value={formData.order} // CRITICAL: This allows the form to clear
                                    placeholder="e.g. 2kg Breast, 1kg Curry Cut"
                                    className="w-full bg-slate-50 border-none ring-1 ring-slate-200 py-4 pl-14 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-900 placeholder:text-slate-300"
                                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Notes Input */}
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ml-4 mb-2 block">Special Notes (Optional)</label>
                            <div className="relative">
                                <PenTool className="absolute left-5 top-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={18} />
                                <textarea
                                    rows={3}
                                    value={formData.notes} // CRITICAL: This allows the form to clear
                                    placeholder="e.g. Small pieces, clean liver separately..."
                                    className="w-full bg-slate-50 border-none ring-1 ring-slate-200 p-5 pl-14 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-slate-900 placeholder:text-slate-300 resize-none"
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className=" bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-2 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-12px_rgba(16,185,129,0.35)] active:scale-[0.98]"
                    >
                        Send Order via WhatsApp
                    </button>

                    <footer className="text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Instant Response • 7am - 10pm
                        </p>
                    </footer>
                </form>
            </div>
        </div>
    );
}