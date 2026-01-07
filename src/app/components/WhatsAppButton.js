"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <>
            <style jsx>{`
        @keyframes custom-spring {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-spring {
          animation: custom-spring 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 1s;
          transform: scale(0);
        }
      `}</style>

            <a
                href="https://wa.me/918446319998?text=Hi%20Garib%20Nawaz,%20I%20want%20to%20order%20chicken"
                target="_blank"
                rel="noopener noreferrer"
                title="Order Fresh Chicken on WhatsApp"
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 active:scale-90 hover:-translate-y-1 animate-spring group"
                aria-label="Chat on WhatsApp"
            >
                {/* Main Icon */}
                <MessageCircle className="w-8 h-8 text-white drop-shadow-md" />

                {/* Notification Pulse - Signals "Online/Active" Status */}
                <span className="absolute top-3 right-3 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                </span>

                {/* Tooltip for Desktop UX */}
                <span className="absolute right-20 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                    Order Now
                </span>
            </a>
        </>
    );
}