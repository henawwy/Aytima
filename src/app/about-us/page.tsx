"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck, MapPin, Globe, Package, CheckCircle2, MessagesSquare, FileText, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { ContactUsForm } from "@/components/contact-us-form";
import { Hero } from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
    const { t } = useTranslation();

    const scrollToNumbers = () => {
        const numbersSection = document.getElementById('here');
        if (numbersSection) {
            numbersSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    /* typed helpers — guard against the key-string returned before the HTTP backend loads */
    const factItemsRaw = t("about.facts.items", { returnObjects: true });
    const factItems: { label: string; value: string }[] = Array.isArray(factItemsRaw) ? factItemsRaw : [];

    const differentItemsRaw = t("about.different.items", { returnObjects: true });
    const differentItems: { title: string; desc: string }[] = Array.isArray(differentItemsRaw) ? differentItemsRaw : [];

    const icons = {
        Based: <MapPin className="h-4 w-4 sm:w-5 sm:h-5" />,
        Markets: <Globe className="h-4 w-4 sm:w-5 sm:h-5" />,
        Focus: <Package className="h-4 w-4 sm:w-5 sm:h-5" />,
        Support: <CheckCircle2 className="h-4 w-4 sm:w-5 sm:h-5" />
    };

    const differentIcons = [
        <MessagesSquare key="msg" className="w-6 h-6 lg:w-8 lg:h-8" />,
        <ShieldCheck key="shield" className="w-6 h-6 lg:w-8 lg:h-8" />,
        <FileText key="file" className="w-6 h-6 lg:w-8 lg:h-8" />,
        <Globe key="globe" className="w-6 h-6 lg:w-8 lg:h-8" />
    ];

    return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-[#f8f9fa] dark:bg-[#0b0c0d]">
        <main suppressHydrationWarning className="flex-1">           
            {/* Hero Section */}
            <Hero 
                backgroundImage = "/assets/images/About.png"
                title={
                    <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                        {t("about.hero.title")}
                    </span>
                }
                description={t("about.hero.description")}
                onScrollClick={scrollToNumbers}
            >
                <Link href="https://wa.me/97337061696" target="_blank">
                    <Button 
                    size="lg" 
                    className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#0b0b0a] hover:via-[#000000] hover:to-[#000000]  text-[#111116] hover:text-[#fbea94] cursor-pointer font-bold rounded-full px-8 h-10 transition-all active:scale-95"
                    >
                    <MessageCircle className="me-1 h-5 w-5" />
                        {t("about.hero.whatsapp_btn")}
                    </Button>
                </Link>
                <Link href="/products">
                    <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-xs sm:text-base cursor-pointer border-[#fbea94] bg-[#2f3056] hover:bg-[#1d1e32]  text-white hover:text-white dark:border-[#fbea94] dark:bg-[#2f3056] dark:hover:bg-[#1d1e32]  dark:text-white  font-semibold rounded-full px-8 h-10 transition-all"
                    >
                        {t("about.hero.products_btn")}
                    </Button>
                </Link>
            </Hero>

            {/* About Us Section */}
            <section suppressHydrationWarning id="here" className="relative py-20 px-6 md:px-20 bg-white dark:bg-[#0b0c0d] overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 end-0 w-1/3 h-full opacity-5 dark:opacity-10 pointer-events-none">
                    <Image
                        src="/assets/images/assistant1.png"
                        alt="Decorative"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Who We Are Text */}
                        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start start">
                            <h2 className="text-3xl md:text-4xl font-bold  mb-5 font-Playfair bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                                {t("about.who.title")}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base xl:text-lg leading-relaxed mb-3">
                                {t("about.who.p1")}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base xl:text-lg leading-relaxed">
                                {t("about.who.p2")}
                            </p>

                            <div className="my-4 lg:-ms-10 xl:-ms-12 relative h-10 w-full flex items-center justify-center opacity-80">
                                <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                                <div className="mx-6 h-6 w-6 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                                    <div className="h-2 w-2 bg-[#b89b4b] dark:bg-[#fbea94]" />
                                </div>
                                <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                <div className="p-5 rounded-xl bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-gray-100 dark:border-white/5 shadow-sm text-start">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t("about.who.quote_card.title")}</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">{t("about.who.quote_card.desc")}</p>
                                    <Link href="https://wa.me/97337061696" target="_blank" className="text-[#b89b4b] font-semibold text-xs hover:underline inline-flex items-center gap-1">
                                        {t("about.who.quote_card.btn")} <MessageCircle className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className="p-5 rounded-xl bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-gray-100 dark:border-white/5 shadow-sm text-start">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t("about.who.office_card.title")}</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">{t("about.who.office_card.desc")}</p>
                                    <span className="text-gray-500 text-xs lowercase">{t("about.who.office_card.loc")}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts Card */}
                        <div className="lg:col-span-5 lg:mt-12 w-full">
                            <div className="relative p-8 rounded-xl bg-linear-to-br from-[#c9b767] to-[#cdad56] dark:from-[#1d1e32] dark:to-[#0b0c0d] text-white shadow-2xl border border-white/10 overflow-hidden">
                                {/* Subtle texture overlay */}
                                <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/header.png')] bg-cover mix-blend-overlay"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-2 rounded-lg bg-[#202e68]/20 text-[#202e68] dark:bg-[#e3c05d]/20 dark:text-[#e3c05d]">
                                            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold font-Playfair text-[#202e68] dark:text-[#e3c05d]">{t("about.facts.title")}</h3>
                                    </div>

                                    <div className="space-y-4">
                                        {factItems.map((fact, i) => (
                                            <div key={i} className="flex gap-2 items-start group cursor-pointer text-start" >
                                                <div className="mt-1 dark:text-[#b89b4b] text-[#202e68] group-hover:scale-110 transition-transform">
                                                    {Object.values(icons)[i] || <CheckCircle2 className="h-4 w-4 sm:w-5 sm:h-5" />}
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-200 dark:text-gray-400 uppercase tracking-wider mb-1">{fact.label}</p>
                                                    <p className="text-[10px] sm:text-base font-medium text-black dark:text-gray-100">{fact.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section suppressHydrationWarning className="relative py-16 bg-[#f8f9fa] dark:bg-[#111116] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/assistant1.png"
                        alt="Mission background"
                        fill
                        className="object-cover opacity-20 dark:opacity-10 grayscale"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#f8f9fa] via-transparent to-[#f8f9fa] dark:from-[#111116] dark:via-transparent dark:to-[#111116]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#b2a256] dark:text-[#e3c05d] mb-12 font-Playfair">{t("about.mission.title")}</h2>
                    
                    <div className="mt-1 mb-8 relative h-10 w-full flex items-center justify-center opacity-80">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                        <div className="mx-6 h-8 w-8 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                            <div className="h-3 w-3 bg-[#b89b4b] dark:bg-[#fbea94]" />
                        </div>
                        <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                    </div>

                    <div className="relative p-10 md:p-16 cursor-pointer transition-all duration-700 hover:scale-105 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden group">
                        {/* Decorative Quote mark */}
                        <Quote className="absolute -top-6 -start-6 w-24 h-24 text-[#b89b4b]/10 group-hover:rotate-12 transition-transform duration-700" />
                        
                        <p className="text-lg md:text-2xl italic text-gray-800 dark:text-gray-200 font-medium leading-snug md:leading-normal relative z-10">
                            {t("about.mission.quote")}
                        </p>
                    </div>
                </div>
            </section>

            {/* What Makes Aytima Different */}
            <section suppressHydrationWarning className="relative py-24 px-6 md:px-20 bg-white dark:bg-[#0b0c0d]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent mb-4 font-Playfair">
                            {t("about.different.title")}
                        </h2>
                        
                        <div className="mt-1 mb-8 relative h-10 w-full flex items-center justify-center opacity-80">
                            <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                            <div className="mx-6 h-8 w-8 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                                <div className="h-3 w-3 bg-[#b89b4b] dark:bg-[#fbea94]" />
                            </div>
                            <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8">
                        {differentItems.map((item, idx) => (
                            <div key={idx} className="group p-4 lg:p-8 cursor-pointer rounded-2xl bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-gray-100 dark:border-white/5 hover:border-[#b89b4b]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center gap-3 lg:gap-6 text-start">
                                    <div className="shrink-0 p-2 lg:p-4 rounded-lg lg:rounded-xl bg-white dark:bg-[#0b0c0d] text-[#b89b4b] shadow-sm group-hover:bg-[#b89b4b] group-hover:text-white transition-all duration-500">
                                        {differentIcons[idx] || <CheckCircle2 />}
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 font-Playfair">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-xs xl:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                        <div className="mt-12 mb-4 relative h-10 w-full flex items-center justify-center opacity-80">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                        <div className="mx-6 h-8 w-8 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                            <div className="h-3 w-3 bg-[#b89b4b] dark:bg-[#fbea94]" />
                        </div>
                        <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Contact Us Form */}
            <ContactUsForm/> 

            {/* Contact CTA Section */}
            <ContactCTA  />
        </main>

    <Footer />  
    </div>
    );
}
