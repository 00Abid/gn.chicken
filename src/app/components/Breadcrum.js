"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show breadcrumbs on the homepage
    if (pathname === "/") return null;

    // Split path into segments and filter out empty strings
    const pathSegments = pathname.split("/").filter((v) => v.length > 0);

    // Generate Schema.org BreadcrumbList for Rich Snippets
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://garibnawazchicken.com/"
            },
            ...pathSegments.map((segment, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
                "item": `https://garibnawazchicken.com/${pathSegments.slice(0, index + 1).join("/")}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-100 py-4 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
                {/* Home Link */}
                <Link
                    href="/"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-emerald-700 transition-colors text-xs font-bold uppercase tracking-widest"
                >
                    <Home size={14} /> Home
                </Link>

                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;
                    const label = segment.replace(/-/g, " ");

                    return (
                        <div key={href} className="flex items-center gap-2">
                            <ChevronRight size={14} className="text-slate-300" />
                            {isLast ? (
                                <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest truncate max-w-50">
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className="text-slate-500 hover:text-emerald-700 transition-colors text-xs font-bold uppercase tracking-widest"
                                >
                                    {label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}