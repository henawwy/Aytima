"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section suppressHydrationWarning className="relative py-5 px-3 sm:px-6 md:px-20 bg-[#f8f9fa] dark:bg-[#111116] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mt-5 flex flex-col lg:flex-row items-center gap-12 bg-[#0e1528] dark:bg-linear-to-r dark:from-[#060607] dark:to-[#0d0d0e] rounded-xl p-8 lg:p-12 overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/assets/images/assistant1.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="relative z-10 flex-1 text-center lg:text-start start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-Playfair">
              {t("cta.title")}
            </h3>
            <p className="text-gray-400 text-sm sm:text-lg mb-8">
              {t("cta.desc")}
            </p>
            <Link href="https://wa.me/97337061696" target="_blank">
              <Button className="cursor-pointer bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#fbea94] hover:via-[#b89b4b] hover:to-[#fbea94] text-[#111116] font-bold rounded-full px-6 sm:px-10 h-12 text-sm sm:text-base hover:scale-105 transition-transform">
                {t("cta.btn")}
              </Button>
            </Link>
          </div>
          
          <div className="relative z-10 w-full lg:w-1/3 aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg transform lg:rotate-3">
            <Image
              src="/assets/images/assistant1.png"
              alt="Sourcing Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
