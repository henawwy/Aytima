"use client";

import { ShipWheel } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoadingSpinner() {
    return (
        <div suppressHydrationWarning 
            dir="auto" 
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm"
        >
            <div className="relative flex flex-col items-center space-y-8">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#182f73]/10 dark:bg-[#cea742]/10 blur-3xl rounded-full animate-pulse" />
                
                <div className="relative">
                    {/* Rotating ShipWheel */}
                    <div className="relative z-10 p-4 rounded-full bg-white dark:bg-neutral-900 shadow-[0_0_20px_rgba(24,47,115,0.1)] dark:shadow-[0_0_20px_rgba(206,167,66,0.1)] border border-neutral-100 dark:border-neutral-800">
                        <ShipWheel 
                            className={cn(
                                "sm:h-12 sm:w-12 h-8 w-8 animate-[spin_3s_linear_infinite]",
                                "text-[#182f73] dark:text-[#cea742]"
                            )} 
                        />
                    </div>
 
                    {/* Outer Rotating Ring */}
                    <div className="absolute inset-[-8px] border-2 border-dashed border-[#182f73]/20 dark:border-[#cea742]/20 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>

                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-bold tracking-widest uppercase text-[#182f73] dark:text-[#cea742] animate-pulse">
                        Aytima
                    </span>
                    <div className="h-0.5 w-12 bg-linear-to-r from-transparent via-[#182f73] dark:via-[#cea742] to-transparent" />
                </div>
            </div>
        </div>
    );
}
