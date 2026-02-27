"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
    MessageCircle, 
    MapPin, 
    ShieldCheck, 
    Zap, 
    Package, 
    Truck, 
    Users, 
    Building2, 
    Store, 
    UtensilsCrossed,
    ArrowRight,
    CheckCircle2,
    Globe2,
    Gem
} from "lucide-react";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { ContactUsForm } from "@/components/contact-us-form";
import { Hero } from "@/components/hero";

export default function MarketsPage() {
    const { t } = useTranslation();

    const scrollToNumbers = () => {
        const marketsSection = document.getElementById('here');
        if (marketsSection) {
        marketsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Typed helpers for translated arrays
    const regionItemsRaw = t("markets_page.region.items", { returnObjects: true });
    const standardPointsRaw = t("markets_page.standards.points", { returnObjects: true });
    const buyerProfilesRaw = t("markets_page.buyer_profiles.items", { returnObjects: true });

    const regionItems: { name: string; desc: string; flag: string }[] = Array.isArray(regionItemsRaw) ? regionItemsRaw : [];
    const regionColors = [
        "from-red-500/10 to-transparent",
        "from-green-500/10 to-transparent",
        "from-emerald-500/10 to-transparent",
        "from-amber-500/10 to-transparent"
    ];

    const standardPoints: { title: string; desc: string }[] = Array.isArray(standardPointsRaw) ? standardPointsRaw : [];
    const standardIcons = [
        <Zap key="zap" className="w-6 h-6 text-[#e3c05d]" />,
        <Package key="pkg" className="w-6 h-6 text-[#e3c05d]" />,
        <Globe2 key="globe" className="w-6 h-6 text-[#e3c05d]" />,
        <Truck key="truck" className="w-6 h-6 text-[#e3c05d]" />
    ];

    const buyerProfiles: { title: string; desc: string }[] = Array.isArray(buyerProfilesRaw) ? buyerProfilesRaw : [];
    const buyerIcons = [
        <Building2 key="dist" className="w-12 h-12" />,
        <UtensilsCrossed key="horeca" className="w-12 h-12" />,
        <Store key="super" className="w-12 h-12" />,
        <Users key="catering" className="w-12 h-12" />
    ];

    return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-white dark:bg-[#0b0c0d] selection:bg-[#e3c05d]/30">
        <main suppressHydrationWarning className="flex-1">        
            {/* Refined Hero Section */}
            <Hero 
            backgroundImage = "/assets/images/markets.png"
            title={
                <>
                <span className=" bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                    {t("markets_page.hero.title")}
                </span>
                </>
            }
            description={t("markets_page.hero.description")}
            onScrollClick={scrollToNumbers}
            >
            <Link href="https://wa.me/97337061696" target="_blank">
                <Button 
                size="lg" 
                className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#0b0b0a] hover:via-[#000000] hover:to-[#000000]  text-[#111116] hover:text-[#fbea94] cursor-pointer font-bold rounded-full px-8 h-10 transition-all active:scale-95"
                >
                <MessageCircle className="me-1 h-5 w-5" />
                {t("markets_page.hero.whatsapp_btn")}
                </Button>
            </Link>
            <Link href="/contact-us">
                <Button 
                variant="outline" 
                size="lg" 
                className="text-xs sm:text-base cursor-pointer border-[#fbea94] bg-[#2f3056] hover:bg-[#1d1e32]  text-white hover:text-white dark:border-[#fbea94] dark:bg-[#2f3056] dark:hover:bg-[#1d1e32]  dark:text-white  font-semibold rounded-full px-8 h-10 transition-all"
                >
                {t("markets_page.hero.contact_btn")}
                </Button>
            </Link>
            </Hero>
        
            {/* Region Focus - Modern Layout */}
            <section suppressHydrationWarning id="here" className="relative pt-15 pb-10 px-6 md:px-20 overflow-hidden">            
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-start mb-20">
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#b89b4b] font-bold tracking-widest text-sm uppercase">{t("markets_page.region.badge")}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white font-Playfair leading-tight">
                    {t("markets_page.region.title_main")} <br /> {t("markets_page.region.title_sub")} <span className="text-[#e3c05d]">{t("markets_page.region.title_italic")}</span>
                    </h2>
                </div>
                <div className="lg:w-1/3">
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base leading-relaxed border-l-2 border-[#e3c05d] pl-8">
                    {t("markets_page.region.description")}
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {regionItems.map((market, idx) => (
                    <div key={idx} className="group relative p-5 sm:p-10 bg-white dark:bg-[#111116] border border-gray-100 dark:border-white/5 rounded-xl cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-linear-to-br ${regionColors[idx] || "from-gray-500/10 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="relative z-10">
                        <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{market.flag}</div>
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-Playfair">{market.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium tracking-wide uppercase">{market.desc}</p>
                        <div className="mt-8 flex items-center gap-2 text-[#e3c05d] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                        <span className="text-[10px] sm:text-xs font-bold font-mono">{t("markets_page.region.partnership")}</span>
                        <CheckCircle2 className="h-4 w-4" />
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* Brand Standards - Asymmetrical Impact Section */}
            <section suppressHydrationWarning className="relative pt-5 pb-30 px-6 md:px-20 bg-[#f8f9fa] dark:bg-[#0b0c0d] overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-200/70 dark:text-white/5 pointer-events-none uppercase whitespace-nowrap z-0 select-none">
                {t("markets_page.standards.bg_text")}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative">
                    <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-2xl group">
                    <Image
                        src="/assets/images/About.png"
                        alt="Quality Sourcing"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111116] via-[#111116]/20 to-transparent opacity-80" />
                    
                    <div className="absolute top-3 md:top-8 right-3 md:right-8">
                        <div className="bg-white/5 backdrop-blur-xl p-2 md:p-3 rounded-xl border border-white/20 text-white flex items-center gap-1 sm:gap-3">
                            <div className="h-4 w-4 md:h-8 md:w-8 bg-[#e3c05d] rounded-lg flex items-center justify-center text-black">
                                <Gem className="h-2 w-2 md:h-4 md:w-4" />
                            </div>
                            <span className="text-[10px] sm:text-xs md:text-sm sm:font-bold tracking-tight">{t("markets_page.standards.premium_badge")}</span>
                        </div>
                    </div>

                    <div className="absolute bottom-6 sm:bottom-10 md:bottom-30 left-6 sm:left-12 right-6 sm:right-12">
                        <p className="text-white text-xs sm:text-sm md:text-lg font-Playfair italic leading-relaxed">
                        {t("markets_page.standards.quote")}
                        </p>
                    </div>
                    </div>
                    
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-10 -right-10 hidden md:block bg-white dark:bg-[#1a1b1e] p-3 rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 max-w-[280px]">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-10 w-10 bg-linear-to-br from-[#b89b4b] to-[#e3c05d] rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div className="font-bold text-sm text-gray-900 dark:text-white leading-tight">
                            {t("markets_page.standards.floating_card.title")}
                        </div>
                    </div>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{t("markets_page.standards.floating_card.desc")}</p>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-12 bg-[#e3c05d]" />
                    <span className="text-[#b89b4b] font-bold tracking-widest text-xs sm:text-sm uppercase">{t("markets_page.standards.badge")}</span>
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 font-Playfair">
                    {t("markets_page.standards.title_main")} <br />
                    <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">{t("markets_page.standards.title_gold")}</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-4">
                    {standardPoints.map((item, idx) => (
                        <div key={idx} className="flex gap-6 group">
                        <div className="h-12 w-12 shrink-0 rounded-xl bg-white dark:bg-[#1a1b1e] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-gray-100 dark:border-white/5">
                            {standardIcons[idx]}
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm sm:text-lg xl:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#b89b4b] transition-colors">{item.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-sm lg:text-xs xl:text-sm leading-relaxed max-w-sm">{item.desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Global Buyer Profiles - Premium Grid */}
            <section suppressHydrationWarning className="relative py-16 px-6 md:px-20 bg-white dark:bg-[#111116] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-Playfair">
                    {t("markets_page.buyer_profiles.title")}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                    {t("markets_page.buyer_profiles.description")}
                </p>
                <div className="mt-10 flex justify-center">
                    <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-[#e3c05d] to-transparent" />
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {buyerProfiles.map((buyer, idx) => (
                    <div key={idx} className="group cursor-pointer relative pt-10 sm:pt-20 pb-8 sm:pb-12 px-8 sm:px-10 bg-gray-50 dark:bg-[#1a1b1e] rounded-2xl transition-all duration-700 hover:bg-[#2a3043] dark:hover:bg-[#e3c05d]/80 overflow-hidden shadow-sm">
                    <div className="absolute top-8 right-10 text-9xl font-black text-gray-200/50 dark:text-white/5 pointer-events-none  transition-colors">
                        0{idx + 1}
                    </div>
                    <div className="relative z-10">
                        <div className="mb-5 sm:mb-10 text-[#e3c05d] group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-[#888c97] dark:not-visited:group-hover:text-[#3a3b3d] transition-all duration-500">
                        {buyerIcons[idx]}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-[#e1e1e8] mb-2 sm:mb-4 font-Playfair">
                        {buyer.title}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 dark:group-hover:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {buyer.desc}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="mt-20 text-center">
                    <Link 
                        href="/contact-us" 
                        className="inline-flex items-center gap-2 text-xs sm:text-base bg-linear-to-r from-[#d1b158] via-[#fbea94] to-[#e0c16c] hover:from-[#fbea94] hover:to-[#d1b158] text-gray-900 px-6 py-3 rounded-full border border-[#e3c05d] shadow-lg transition-all duration-700 transform hover:-translate-y-1 hover:shadow-xl font-bold group"
                    >
                        {t("markets_page.buyer_profiles.cta")}
                        
                    </Link>
                </div>
            </div>
            </section>
        
            {/* Contact Us Form */}
            <section className="bg-[#f8f9fa] dark:bg-[#0b0c0d]">
            <ContactUsForm/> 
            </section>

            {/* Contact CTA Section */}
            <ContactCTA />
        </main>

        <Footer />
    </div>
    );
}

