"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { ContactUsForm } from "@/components/contact-us-form";
import { Hero } from "@/components/hero";

export default function HomePage() {
  const { t } = useTranslation();

  const scrollToNumbers = () => {
    const numbersSection = document.getElementById("here");
    if (numbersSection) {
      numbersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* typed helpers — guard against the key-string returned before the HTTP backend loads */
  const whyPointsRaw = t("home.why.points", { returnObjects: true });
  const audienceCardsRaw = t("home.audience.cards", { returnObjects: true });
  const whyPoints: { title: string; desc: string }[]    = Array.isArray(whyPointsRaw)    ? whyPointsRaw    : [];
  const audienceCards: { title: string; desc: string }[] = Array.isArray(audienceCardsRaw) ? audienceCardsRaw : [];

  const audienceIcons = [
    <svg key="dist" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v7m14 0l-7-4-7 4" /></svg>,
    <svg key="super" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
    <svg key="rest" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m12 14a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
    <svg key="bake" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.5a5 5 0 11-10 0 5 5 0 0110 0zM7 15.5a5 5 0 11-10 0 5 5 0 0110 0zM12 12V3" /></svg>,
    <svg key="air" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
  ];

  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-[#f8f9fa] dark:bg-[#0b0c0d]">
      <main suppressHydrationWarning className="flex-1">

        {/* Hero Section */}
        <Hero 
          backgroundImage="/assets/images/header.png"
          title={
            <>
              <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                {t("home.hero.title_gold")}
              </span>{" "}
              <br />
              {t("home.hero.title_rest")}{" "}
              <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                {t("home.hero.title_gulf")}
              </span>
            </>
          }
          description={t("home.hero.description")}
          onScrollClick={scrollToNumbers}
        >
          <Link href="https://wa.me/97337061696" target="_blank">
            <Button
              size="lg"
              className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#0b0b0a] hover:via-[#000000] hover:to-[#000000] text-[#111116] hover:text-[#fbea94] cursor-pointer font-bold rounded-full px-8 h-10 transition-all active:scale-95"
            >
              <MessageCircle className="me-1 h-5 w-5" />
              {t("home.hero.whatsapp_btn")}
            </Button>
          </Link>
          <Link href="/about-us">
            <Button
              variant="outline"
              size="lg"
              className="text-xs sm:text-base cursor-pointer border-[#fbea94] bg-[#2f3056] hover:bg-[#1d1e32] text-white hover:text-white dark:border-[#fbea94] dark:bg-[#2f3056] dark:hover:bg-[#1d1e32] dark:text-white font-semibold rounded-full px-8 h-10 transition-all"
            >
              {t("home.hero.about_btn")}
            </Button>
          </Link>
        </Hero>

        {/* Product Categories Section */}
        <section suppressHydrationWarning id="here" className="relative pt-10 min-h-[60vh] px-2 md:px-20 bg-[#ced5de] dark:bg-[#111116] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 -top-78 md:-top-36 lg:-top-6">
            <Image
              src="/assets/images/assistant1.png"
              alt="Background Decoration"
              fill
              className="object-cover sm:object-fit lg:object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white dark:from-[#111116] dark:via-transparent dark:to-[#111116]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto mt-10">
            <div className="text-center px-2 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-Playfair">
                {t("home.products.section_title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto sm:text-base text-xs">
                {t("home.products.section_desc")}
              </p>
              <div className="my-4 relative h-10 w-full flex items-center justify-center opacity-80">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#090909] dark:via-[#f0ffff]/30 to-transparent" />
                <div className="mx-6 h-6 w-6 border border-[#0b0b0b] dark:border-[#f0ffff]/30 rotate-45 flex items-center justify-center">
                  <div className="h-2 w-2 bg-[#0b0b0b] dark:bg-[#f0ffff]" />
                </div>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#0b0b0b] dark:via-[#f0ffff]/30 to-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 gap-3 lg:gap-2">
              {/* Aluminum Foil Containers */}
              <Card className="border-none shadow-xl shadow-black/5 bg-white/90 dark:bg-[#1a1b1efb] rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 hover:bg-[#eff0ea] dark:hover:bg-[#1d1e20] hover:scale-95">
                <div className="relative w-[90%] sm:w-[95%] md:w-[86%] h-64 mx-auto rounded-sm overflow-hidden">
                  <Image src="/assets/images/AluminumFoil.png" alt="Aluminum Foil Containers" fill className="object-cover rounded-sm" />
                </div>
                <CardContent className="py-4 px-6">
                  <h3 className="text-base sm:text-xl md:text-lg font-bold text-gray-900 dark:text-white mb-4 font-Playfair">
                    {t("home.products.foil.title")}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs">
                      <div className="me-2 h-1.5 w-1.5 rounded-full bg-[#e3c05d] mt-1.5 shrink-0" />
                      {t("home.products.foil.desc")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Baking & Roasting Cups */}
              <Card className="border-none shadow-xl shadow-black/5 dark:bg-[#1a1b1e] rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 hover:bg-[#eff0ea] dark:hover:bg-[#1d1e20] hover:scale-95">
                <div className="relative w-[90%] sm:w-[95%] md:w-[86%] h-64 mx-auto rounded-sm overflow-hidden">
                  <Image src="/assets/images/Baking_Cups.png" alt="Baking & Roasting Cups" fill className="object-cover rounded-sm" />
                </div>
                <CardContent className="py-4 px-6">
                  <h3 className="text-base sm:text-xl md:text-lg font-bold text-gray-900 dark:text-white mb-4 font-Playfair">
                    {t("home.products.baking.title")}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs">
                      <div className="me-2 h-1.5 w-1.5 rounded-full bg-[#e3c05d] mt-1.5 shrink-0" />
                      {t("home.products.baking.desc")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Lids & Sealing Options */}
              <Card className="border-none shadow-xl shadow-black/5 dark:bg-[#1a1b1e] rounded-xl overflow-hidden group cursor-pointer transition-all duration-700 hover:bg-[#eff0ea] dark:hover:bg-[#1d1e20] hover:scale-95">
                <div className="relative w-[90%] sm:w-[95%] md:w-[86%] h-64 mx-auto rounded-sm overflow-hidden">
                  <Image src="/assets/images/Lids_Options.png" alt="Lids & Sealing Options" fill className="object-cover rounded-sm" />
                </div>
                <CardContent className="py-4 px-6">
                  <h3 className="text-base sm:text-xl md:text-lg font-bold text-gray-900 dark:text-white mb-4 font-Playfair">
                    {t("home.products.lids.title")}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs">
                      <div className="me-2 h-1.5 w-1.5 rounded-full bg-[#e3c05d] mt-1.5 shrink-0" />
                      {t("home.products.lids.desc1")}
                    </li>
                    <li className="flex items-start text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs">
                      <div className="me-2 h-1.5 w-1.5 rounded-full bg-[#e3c05d] mt-1.5 shrink-0" />
                      {t("home.products.lids.desc2")}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Bottom CTA Button */}
            <div className="my-16 text-center">
              <Link
                href="https://wa.me/97337061696"
                target="_blank"
                className="inline-flex items-center gap-2 text-[9px] sm:text-base bg-linear-to-r from-[#d1b158] via-[#fbea94] to-[#e0c16c] hover:bg-linear-to-r hover:from-[#fbea94] hover:via-[#d1b158] hover:to-[#fbea94] text-gray-900 px-5 py-3 md:px-6 md:py-4 rounded-full border border-[#e3c05d] shadow-lg transition-all duration-700 transform hover:-translate-y-1 hover:shadow-xl font-bold group"
              >
                {t("home.products.cta")}
                <div className="bg-[#128c7e] rounded-full p-1 text-white group-hover:rotate-12 transition-transform">
                  <MessageCircle className="h-2 w-2 sm:h-4 sm:w-4 fill-current" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section suppressHydrationWarning className="relative py-20 px-6 md:px-20 bg-white dark:bg-[#0b0c0d] overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-full opacity-10 dark:opacity-6 pointer-events-none">
            <Image src="/assets/images/AssistantTwo.png" alt="Decorative" fill className="object-contain -scale-x-100 rotate-12" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-Playfair">
                  {t("home.why.title1")} <br />
                  <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                    {t("home.why.title2")}
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-xl text-[10px] sm:text-sm xl:text-base">
                  {t("home.why.desc")}
                </p>

                <div className="my-4 lg:-ms-10 xl:-ms-20 relative h-10 w-full flex items-center justify-center opacity-80">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                  <div className="mx-6 h-6 w-6 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                    <div className="h-2 w-2 bg-[#b89b4b] dark:bg-[#fbea94]" />
                  </div>
                  <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                </div>

                <div className="space-y-3 mt-10">
                  {whyPoints.map((item, idx) => (
                    <div key={idx} className="cursor-pointer group flex gap-4 transition-all duration-300">
                      <div className="h-7 w-7 sm:h-9 sm:w-9 shrink-0 rounded-xl bg-[#fbea94]/20 flex items-center justify-center group-hover:bg-[#e3c05d] transition-all duration-500">
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#e3c05d] group-hover:bg-white" />
                      </div>
                      <div>
                        <h4 className="text-[10px] sm:text-sm md:text-base xl:text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-[9px] sm:text-sm md:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 cursor-pointer relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-xl group">
                <Image src="/assets/images/AssistantTwo.png" alt="Quality Sourcing" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-[#111116]/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/10 backdrop-blur-md p-2 sm:p-6 rounded-2xl border border-white/20">
                    <p className="text-white text-xs sm:text-lg font-Playfair italic leading-relaxed">
                      {t("home.why.quote")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section suppressHydrationWarning className="relative pt-24 pb-16 px-6 md:px-20 bg-[#f8f9fa] dark:bg-[#111116] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-Playfair">
                {t("home.audience.title1")}{" "}
                <span className="text-[#b89b4b]">{t("home.audience.title_gold")}</span>
                {t("home.audience.title2")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-sm sm:text-lg">
                {t("home.audience.desc")}
              </p>

              <div className="my-4 relative h-10 w-full flex items-center justify-center opacity-80">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
                <div className="mx-6 h-6 w-6 border border-[#b89b4b] dark:border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                  <div className="h-2 w-2 bg-[#b89b4b] dark:bg-[#fbea94]" />
                </div>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#b89b4b] dark:via-[#fbea94]/30 to-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {audienceCards.map((item, idx) => (
                <div key={idx} className="cursor-pointer relative p-6 bg-white dark:bg-[#1a1b1e] rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500 group text-center flex flex-col items-center hover:-translate-y-2">
                  <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                    <div className="p-3 bg-[#fbea94]/10 rounded-full text-[#b89b4b] group-hover:bg-[#e3c05d] group-hover:text-white transition-all">
                      {audienceIcons[idx]}
                    </div>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-gray-900 dark:text-white mb-3 leading-snug">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Form */}
        <ContactUsForm />

        {/* Contact CTA Section */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
