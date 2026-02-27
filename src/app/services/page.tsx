"use client";

import { MessageCircle, ShieldCheck, Globe, CheckCircle2, FileText, Zap, Users, BarChart3, Search, ClipboardCheck, Container, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { ContactUsForm } from "@/components/contact-us-form";
import { Hero } from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
    const { t } = useTranslation();

    const scrollToNumbers = () => {
        const numbersSection = document.getElementById('here');
        if (numbersSection) {
            numbersSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const serviceStepsRaw = t("services_page.process.steps", { returnObjects: true });
    const serviceSteps: any[] = Array.isArray(serviceStepsRaw) ? serviceStepsRaw : [];

    const serviceIcons = [
        <Search key="search" className="h-8 w-8 text-[#2f3056] dark:text-[#fbea94]" />,
        <ShieldCheck key="shield" className="h-8 w-8 text-[#2f3056] dark:text-[#fbea94]" />,
        <FileText key="file" className="h-8 w-8  text-[#2f3056] dark:text-[#fbea94]" />,
        <ClipboardCheck key="clip" className="h-8 w-8  text-[#2f3056] dark:text-[#fbea94]" />,
        <Container key="cont" className="h-8 w-8  text-[#2f3056] dark:text-[#fbea94]" />,
        <Truck key="truck" className="h-8 w-8  text-[#2f3056] dark:text-[#fbea94]" />
    ];

    const roiItemsRaw = t("services_page.roi.items", { returnObjects: true });
    const roiItems: any[] = Array.isArray(roiItemsRaw) ? roiItemsRaw : [];

    const roiIcons = [
        <Zap key="zap" className="h-6 w-6 text-[#b89b4b]" />,
        <BarChart3 key="bar" className="h-6 w-6 text-[#b89b4b]" />,
        <Users key="users" className="h-6 w-6 text-[#b89b4b]" />,
        <Globe key="globe" className="h-6 w-6 text-[#b89b4b]" />
    ];

    return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-white dark:bg-[#0b0c0d]">
        <main suppressHydrationWarning className="flex-1">           
            {/* Hero Section */}
            <Hero 
                backgroundImage = "/assets/images/services.png"
                title={
                    <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                        {t("services_page.hero.title")}
                    </span>
                }
                description={t("services_page.hero.description")}
                onScrollClick={scrollToNumbers}
            >
                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                    <Link href="https://wa.me/97337061696" target="_blank">
                        <Button 
                        size="lg" 
                        className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:from-[#e3c05d] hover:to-[#b89b4b] text-neutral-900 cursor-pointer font-bold rounded-full px-8 h-12 transition-all active:scale-95 shadow-lg"
                        >
                        <MessageCircle className="me-2 h-5 w-5" />
                            {t("services_page.hero.whatsapp_btn")}
                        </Button>
                    </Link>
                    <Link href="/markets">
                    <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-xs sm:text-base cursor-pointer border-[#fbea94] bg-[#2f3056] hover:bg-[#1d1e32]  text-white hover:text-white dark:border-[#fbea94] dark:bg-[#2f3056] dark:hover:bg-[#1d1e32]  dark:text-white  font-semibold rounded-full px-8 h-10 transition-all"
                    >
                        {t("services_page.hero.markets_btn")}
                    </Button>
                </Link>
                </div>
            </Hero>

            {/* Services Flow Section */}
            <section suppressHydrationWarning id="here" className="py-15 px-6 md:px-20 bg-white dark:bg-[#0b0c0d]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-6">
                        <span className="text-sm font-bold tracking-widest text-[#b89b4b] uppercase">{t("services_page.process.badge")}</span>
                        <h2 className="text-3xl md:text-5xl font-Playfair text-[#2f3056] dark:text-[#fbea94] mt-4 mb-6">
                            {t("services_page.process.title")}
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-sm sm:text-lg">
                            {t("services_page.process.description")}
                        </p>
                    </div>

                    <div className="mb-10 relative h-10 w-full flex items-center justify-center opacity-80">
                        <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                        <div className="mx-6 h-6 w-6 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                            <div className="h-2 w-2 bg-[#b89b4b] dark:bg-[#fbea94]" />
                        </div>
                        <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                    </div>

                    <div className="space-y-25 sm:space-y-35">
                        {serviceSteps.map((service, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                                {/* Icon Side */}
                                <div className="flex-1 flex justify-center">
                                    <div className="relative">
                                        {/* Decorative Background Number */}
                                        <span className="absolute -top-12 -start-12 text-[120px] font-Playfair font-black text-neutral-100 dark:text-neutral-900 leading-none select-none -z-10">
                                            0{index + 1}
                                        </span>
                                        <div className="relative z-10 p-6 rounded-full bg-[#fdfcfb] dark:bg-neutral-900 border border-[#b89b4b]/20 shadow-xl group">
                                            <div className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
                                                {serviceIcons[index] || <CheckCircle2 />}
                                            </div>
                                        </div>
                                        {/* Connecting Line (Vertical) */}
                                        {index !== serviceSteps.length - 1 && (
                                            <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 h-32 w-px bg-linear-to-b from-[#b89b4b]/30 to-transparent" />
                                        )}
                                    </div>
                                </div>

                                {/* Text Content Side */}
                                <div className="flex-1 space-y-6 text-center lg:text-start start">
                                    <div className="space-y-2">
                                        <span className="text-xs font-bold tracking-[0.3em] text-[#b89b4b] uppercase">{service.category}</span>
                                        <h3 className="text-3xl md:text-4xl font-Playfair text-[#2f3056] dark:text-[#fbea94] leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0">
                                            {service.intro}
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
                                            {service.benefits.map((benefit: string, bIndex: number) => (
                                                <li key={bIndex} className="flex items-center justify-center lg:justify-start gap-3 text-sm md:text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                                    <CheckCircle2 className="h-5 w-5 text-[#b89b4b] shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Matters / ROI Section */}
            <section suppressHydrationWarning className="py-15 px-6 md:px-20 bg-white dark:bg-[#0b0c0d] border-t border-neutral-100 dark:border-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-sm font-bold tracking-widest text-[#b89b4b] uppercase">{t("services_page.roi.badge")}</span>
                        <h2 className="text-3xl mt-3 md:text-5xl font-Playfair text-[#2f3056] dark:text-[#fbea94]">
                            {t("services_page.roi.title")}
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                            {t("services_page.roi.description")}
                        </p>

                        <div className="mb-10 relative h-10 w-full flex items-center justify-center opacity-80">
                            <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                            <div className="mx-6 h-6 w-6 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                                <div className="h-2 w-2 bg-[#b89b4b] dark:bg-[#fbea94]" />
                            </div>
                            <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {roiItems.map((benefit, index) => (
                            <div key={index} className="p-6 cursor-pointer rounded-xl bg-[#fdfcfb] dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow group text-start">
                                <div className="mb-4 inline-block p-3 rounded-xl bg-[#b89b4b]/10 group-hover:bg-[#b89b4b]/40 transition-colors duration-300">
                                    <div className="group-hover:text-white transition-colors duration-300">
                                        {roiIcons[index] || <Zap />}
                                    </div>
                                </div>
                                <h3 className="text-sm sm:text-lg lg:text-sm xl:text-xl font-bold mb-2 text-[#2f3056] dark:text-[#fbea94]">{benefit.title}</h3>
                                <p className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link 
                            href="https://wa.me/97337061696" target="_blank"
                            className="inline-flex items-center gap-2 text-[8px] sm:text-base bg-linear-to-r from-[#d1b158] via-[#fbea94] to-[#e0c16c] hover:from-[#fbea94] hover:to-[#d1b158] text-gray-900 px-6 py-3 rounded-full border border-[#e3c05d] shadow-lg transition-all duration-700 transform hover:-translate-y-1 hover:shadow-xl font-bold group"
                        >
                            {t("services_page.roi.whatsapp_cta")}
                            <div className="bg-[#128c7e] rounded-full p-1 text-white group-hover:rotate-12 transition-transform shadow-md mx-2">
                                <MessageCircle className="h-5 w-5 fill-current" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            
            <ContactUsForm/>

            <ContactCTA />
        </main>

        <Footer />  
    </div>
    );
}
