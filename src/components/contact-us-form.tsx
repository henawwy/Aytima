"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactUsForm() {
  const { t } = useTranslation();

    return (
        <section suppressHydrationWarning className="relative py-24 px-3 sm:px-6 md:px-20 bg-[#ffffff] dark:bg-[#0a0a0c] overflow-hidden">
        {/* Background Decorative Element */}
        {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#b89b4b]/5 to-transparent pointer-events-none" /> */}
        
        <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: CTA & Company Statement */}
            <div className="space-y-6 flex flex-col items-center lg:items-start lg:text-start start">
                <div className="inline-block px-4 py-1 rounded-full bg-[#fbea94]/30 border border-[#fbea94]/20 text-[#b89b4b] text-xs font-bold tracking-widest uppercase">
                    {t("contact_form.badge")}
                </div>
                <h2 className="text-2xl text-center lg:text-start start sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white font-Playfair leading-tight">
                    {t("contact_form.title1")} <br className="hidden lg:block" />
                <span className="bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">{t("contact_form.title2")}</span>
                </h2>
                <p className="text-center lg:text-start start text-gray-600 dark:text-gray-400 text-xs sm:text-sm max-w-lg">
                    {t("contact_form.desc")}
                </p>

                <div className="mb-3 lg:-ms-10 xl:-ms-20 relative h-10 w-full flex items-center justify-center opacity-80">
                    <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                    <div className="mx-6 h-6 w-6 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                        <div className="h-2 w-2 bg-[#b89b4b] dark:bg-[#fbea94]" />
                    </div>
                    <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="https://wa.me/97337061696" target="_blank">
                    <Button className="w-full sm:w-auto cursor-pointer bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#fbea94] hover:via-[#b89b4b] hover:to-[#fbea94] text-[#111116] font-bold rounded-full px-10 h-12 text-sm hover:scale-105 transition-all shadow-lg shadow-[#b89b4b]/20">
                    <MessageCircle className="mr-1 h-5 w-6" />
                        {t("contact_form.whatsapp_btn")}
                    </Button>
                </Link>
                <Link href="mailto:Customerservice.aytima@gmail.com">
                    <Button variant="outline" className="w-full cursor-pointer sm:w-auto rounded-full px-10 h-12 text-sm border-gray-300 dark:border-white/10 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                    <Mail className="mr-2 h-5 w-6" />
                    {t("contact_form.email_btn")}
                    </Button>
                </Link>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-6">
                {[
                    { icon: Facebook, href: "https://www.facebook.com/share/1HMLRYmGUQ/", label: "Facebook" },
                    { icon: Instagram, href: "https://www.instagram.com/aytimatrade?igsh=MXM1bjl6MGFtNGZpNw==", label: "Instagram" }
                ].map((social, idx) => (
                    <Link key={idx} href={social.href} target="_blank" className="p-3 rounded-full border border-gray-200 dark:border-white/10 dark:text-white  hover:border-[#fbea94] hover:text-[#b89b4b] dark:hover:border-[#fbea94] dark:hover:text-[#f2cf6f] transition-all">
                    <social.icon className="h-5 w-5" />
                    </Link>
                ))}
                </div>
            </div>

            {/* Right Side: Detailed Contact Info Card */}
            <div className="relative group">
                <div className="relative bg-white dark:bg-[#1a1b1e] p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-white/5 space-y-8">
                
                {/* WhatsApp Grid */}
                <div className="space-y-4">
                    <h4 className="flex items-center text-[#b89b4b] font-bold uppercase tracking-widest text-xs">
                    <MessageCircle className="mr-2 h-4 w-4" /> {t("contact_form.wa_channels")}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">{t("contact_form.bahrain")}</p>
                        <Link href="https://wa.me/97337061696" target="_blank" className="text-sm text-gray-900 dark:text-gray-200 font-medium hover:text-[#b89b4b] transition-colors">
                        +973 3706 1696
                        </Link>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">{t("contact_form.china")}</p>
                        <Link href="https://wa.me/8619924554911" target="_blank" className="text-sm text-gray-900 dark:text-gray-200 font-medium hover:text-[#b89b4b] transition-colors">
                        +86 199 2455 4911
                        </Link>
                    </div>
                    </div>
                </div>

                {/* Phone Grid */}
                <div className="space-y-4">
                    <h4 className="flex items-center text-[#b89b4b] font-bold uppercase tracking-widest text-xs">
                    <Phone className="mr-2 h-4 w-4" /> {t("contact_form.telephone")}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">{t("contact_form.bahrain_office")}</p>
                        <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">+973 3888 4367</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">{t("contact_form.china_office")}</p>
                        <p className="text-sm text-gray-900 dark:text-gray-200 font-medium">+86 199 2455 4911</p>
                    </div>
                    </div>
                </div>

                {/* Address */}
                <div className="space-y-4 pt-2 border-t border-gray-100 dark:border-white/5">
                    <h4 className="flex items-center text-[#b89b4b] font-bold uppercase tracking-widest text-xs">
                    <MapPin className="mr-2 h-4 w-4" /> {t("contact_form.hq")}
                    </h4>
                    <div className="p-6 rounded-xl bg-linear-to-br from-gray-50 to-white dark:from-white/5 dark:to-transparent border border-gray-100 dark:border-white/5">
                    <p className="text-gray-900 dark:text-gray-200 font-medium text-xs sm:text-sm">
                        {t("contact_form.address")}
                    </p>
                    </div>
                </div>

                </div>
            </div>

            </div>
        </div>
        </section>
    );
}
