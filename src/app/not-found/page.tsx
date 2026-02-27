"use client";

import { Anchor, Home, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
    const { t , i18n} = useTranslation();

    return (
        <div suppressHydrationWarning className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0b0c0d] p-6 overflow-hidden">
            {/* Background Decorative Elements */}
            <div suppressHydrationWarning className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#182f73]/5 dark:bg-[#cea742]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div suppressHydrationWarning  className="relative z-10 flex flex-col items-center max-w-2xl w-full text-center">
                {/* Icon Container */}
                <div className="relative mb-4 group">
                    <div className="absolute inset-0 bg-[#182f73]/20 dark:bg-[#cea742]/10 blur-2xl rounded-full scale-150 animate-pulse" />
                    <div className="relative p-4 cursor-pointer rounded-full bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-2xl transition-transform duration-700 group-hover:rotate-12">
                        <Anchor className="w-12 h-12 text-[#182f73] dark:text-[#cea742]" />
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-4xl md:text-6xl font-black mb-2 font-Playfair italic bg-linear-to-b from-[#182f73] to-[#182f73]/80 dark:from-[#cea742] dark:to-[#cea742]/60 bg-clip-text text-transparent">
                    404
                </h1>
                
                <h2 suppressHydrationWarning className="text-xl md:text-2xl font-bold text-[#2f3056] dark:text-white mb-3">
                    {t("not_found.title")}
                </h2>
                
                <p suppressHydrationWarning className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mb-10 max-w-lg ">
                    {t("not_found.description")}
                </p>

                {/* Buttons */}
                <div suppressHydrationWarning className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link href="/home">
                        <Button 
                            size="lg" 
                            className="w-full cursor-pointer sm:w-auto gap-2 bg-[#182f73] hover:bg-[#182f73]/90 dark:bg-[#cea742] dark:hover:bg-[#bb983c]/90 text-white dark:text-neutral-950 font-bold rounded-full px-8 h-12 shadow-lg transition-all active:scale-95"
                        >
                            <Home className="w-5 h-5" />
                            {t("not_found.return_home")}
                        </Button>
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 text-[#2f3056] dark:text-neutral-400 font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all active:scale-95"
                    >
                        {t("not_found.go_back")}
                        <MoveRight className={`w-4 h-4 ${i18n.language === "ar" ? "mt-2" : "mt-0.5 ms-1"}`} />
                    </button>
                </div>

                {/* Bottom Branding */}
                <div suppressHydrationWarning className="mt-12 flex items-center gap-3 opacity-50">
                    <div className="h-px w-8 bg-neutral-500 dark:bg-neutral-700" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 dark:text-neutral-400">
                        {t("not_found.branding")}
                    </span>
                    <div className="h-px w-8 bg-neutral-500 dark:bg-neutral-700" />
                </div>
            </div>
        </div>
    );
}

