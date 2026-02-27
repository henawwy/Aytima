"use client";

import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { ContactUsForm } from "@/components/contact-us-form";
import { Hero } from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function ProductsPage() {
    const { t } = useTranslation();

    const scrollToNumbers = () => {
        const numbersSection = document.getElementById('here');
        if (numbersSection) {
            numbersSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const productItemsRaw = t("products_page.items", { returnObjects: true });
    const productItems: any[] = Array.isArray(productItemsRaw) ? productItemsRaw : [];

    const productImages = [
        "/assets/images/AluminumFoil.png",
        "/assets/images/Baking_Cups.png",
        "/assets/images/Lids_Options.png",
        "/assets/images/CustomPacking.png"
    ];

    return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-white dark:bg-[#0b0c0d]">
        <main suppressHydrationWarning className="flex-1">           
            {/* Hero Section */}
            <Hero 
                backgroundImage = "/assets/images/Products.png"
                title={
                    <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                        {t("products_page.hero.title")}
                    </span>
                }
                description={t("products_page.hero.description")}
                onScrollClick={scrollToNumbers}
            >
                <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                    <Link href="https://wa.me/97337061696" target="_blank">
                        <Button 
                        size="lg" 
                        className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:from-[#e3c05d] hover:to-[#b89b4b] text-neutral-900 cursor-pointer font-bold rounded-full px-8 h-12 transition-all active:scale-95 shadow-lg"
                        >
                        <MessageCircle className="me-2 h-5 w-5" />
                            {t("products_page.hero.whatsapp_btn")}
                        </Button>
                    </Link>
                    <Link href="/services">
                    <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-xs sm:text-base cursor-pointer border-[#fbea94] bg-[#2f3056] hover:bg-[#1d1e32]  text-white hover:text-white dark:border-[#fbea94] dark:bg-[#2f3056] dark:hover:bg-[#1d1e32]  dark:text-white  font-semibold rounded-full px-8 h-10 transition-all"
                    >
                        {t("products_page.hero.services_btn")}
                    </Button>
                </Link>
                </div>
            </Hero>

            <section suppressHydrationWarning id="here" className="py-15 px-6 md:px-20 bg-[#fdfcfb] dark:bg-[#0b0c0d] overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-12 md:space-y-24 lg:space-y-20 xl:space-y-24">
                    {productItems.map((product, index) => (
                        <div key={index} className="group relative">
                            {/* Decorative line between sections on mobile */}
                            {index !== 0 && 
                            <div className="mt-2 mb-16 relative h-10 w-full flex items-center justify-center opacity-80">
                                <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                                <div className="mx-6 h-8 w-8 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                                    <div className="h-3 w-3 bg-[#b89b4b] dark:bg-[#fbea94]" />
                                </div>
                                <div className="h-px flex-1 bg-linear-to-r from-transparent  via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                            </div>
                            }
                            
                            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                                {/* Text Content */}
                                <div className="flex-1 space-y-8 lg:space-y-3 xl:space-y-8 text-center lg:text-start start">
                                    <div className="space-y-3">
                                        <span className="text-xs sm:text-sm lg:text-xs xl:text-sm font-bold tracking-widest text-[#b89b4b] uppercase">{product.category}</span>
                                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl font-Playfair text-[#2f3056] dark:text-[#fbea94] leading-tight">
                                            {product.title}
                                        </h2>
                                        <p className="text-xs sm:text-base md:text-lg lg:text-sm xl:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                                            {product.intro}
                                        </p>
                                    </div>

                                    {product.benefits && (
                                        <div className="space-y-2 xl:space-y-4">
                                            <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-bold text-neutral-800 dark:text-neutral-200">{product.benefits_title}</h3>
                                            <ul className="grid grid-cols-1 gap-2 xl:gap-3">
                                                {product.benefits.map((benefit: string, bIndex: number) => (
                                                    <li key={bIndex} className="flex items-start gap-2 xl:gap-3 text-start justify-center lg:justify-start">
                                                        <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5 text-[#b89b4b] mt-1 shrink-0" />
                                                        <span className="text-xs sm:text-base md:text-lg lg:text-[10px] xl:text-lg text-neutral-700 dark:text-neutral-300">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {product.options && (
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">{product.options_title}</h3>
                                            <div className="grid grid-cols-1 gap-2 xl:gap-4">
                                                {product.options.map((option: any, oIndex: number) => (
                                                    <div key={oIndex} className="transition-all duration-700 hover:scale-105 cursor-pointer  flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 shadow-sm text-start">
                                                        <div className="h-2 w-2 rounded-full bg-[#b89b4b] mt-2 shrink-0" />
                                                        <div>
                                                            <span className="font-bold text-[10px] sm:text-sm lg:text-xs xl:text-base text-neutral-800 dark:text-neutral-200">{option.label}: </span>
                                                            <span className="text-neutral-600 dark:text-neutral-400 text-[10px] sm:text-sm lg:text-xs xl:text-base">{option.desc}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {product.note && (
                                                <p className="text-xs sm:text-sm italic text-neutral-500 dark:text-neutral-400 mt-4">
                                                    {product.note_prefix}{product.note}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {product.support && (
                                        <div className="space-y-4">
                                            <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-bold text-neutral-800 dark:text-neutral-200">{product.support_title}</h3>
                                            <ul className="grid grid-cols-1 gap-3">
                                                {product.support.map((support: string, sIndex: number) => (
                                                    <li key={sIndex} className="flex items-start gap-3 text-start justify-center lg:justify-start">
                                                        <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5 text-[#b89b4b] mt-1 shrink-0" />
                                                        <span className="text-xs sm:text-base md:text-lg lg:text-[10px] xl:text-lg text-neutral-700 dark:text-neutral-300">{support}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {product.uses && (
                                        <div className="pt-4">
                                            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                                                <span className="uppercase tracking-wider text-[8px] block mb-1">{product.uses_title}</span>
                                                {product.uses}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 w-full max-w-2xl">
                                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 transform group-hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={productImages[index] || "/assets/images/placeholder.png"}
                                            alt={product.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-w-768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Bottom CTA Button */}
                    <div className="mt-24 text-center">
                    <Link 
                        href="https://wa.me/97337061696"  target="_blank"
                        className="inline-flex items-center gap-2 text-[9px] sm:text-base bg-linear-to-r from-[#d1b158] via-[#fbea94] to-[#e0c16c] hover:bg-linear-to-r hover:from-[#fbea94] hover:via-[#d1b158] hover:to-[#fbea94]  text-gray-900 px-5 py-3 md:px-6 md:py-4 rounded-full border border-[#e3c05d] shadow-lg transition-all duration-700 transform hover:-translate-y-1 hover:shadow-xl font-bold group"
                    >
                        {t("products_page.section_btn")}
                        <div className="bg-[#128c7e] rounded-full p-1 text-white group-hover:rotate-12 transition-transform mx-2">
                        <MessageCircle className="h-2 w-2 sm:h-4 sm:w-4 fill-current" />
                        </div>
                    </Link>
                    </div>
                </div>
            </section>
            
            {/* Contact Us Form */}
            <ContactUsForm/>

            {/* Contact CTA Section */}
            <ContactCTA />
        </main>

    <Footer />  
    </div>
    );
}
