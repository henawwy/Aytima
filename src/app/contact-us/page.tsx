"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight, ChevronsDown } from "lucide-react";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { ContactUsForm } from "@/components/contact-us-form";
import { Hero } from "@/components/hero";

export default function ContactUsPage() {
  const { t } = useTranslation();

  const scrollToNumbers = () => {
    const numbersSection = document.getElementById('here');
    if (numbersSection) {
        numbersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div suppressHydrationWarning className="flex flex-col min-h-screen bg-[#f8f9fa] dark:bg-[#0b0c0d]">
      <main suppressHydrationWarning className="flex-1">
        
        {/* Hero Section */}
        <Hero 
          backgroundImage = "/assets/images/contact.png"
          title={
            <>
              <span className=" bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent">
                {t("contact_page.hero.title")}
              </span> <br />
            </>
          }
          description={t("contact_page.hero.description")}
          onScrollClick={scrollToNumbers}
        >
          <Link href="https://wa.me/97337061696" target="_blank">
            <Button 
              size="lg" 
              className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#0b0b0a] hover:via-[#000000] hover:to-[#000000]  text-[#111116] hover:text-[#fbea94] cursor-pointer font-bold rounded-full px-8 h-10 transition-all active:scale-95"
            >
              <MessageCircle className="me-1 h-5 w-5" />
              {t("contact_page.hero.whatsapp_bh")}
            </Button>
          </Link>
          <Link href="https://wa.me/8619924554911" target="_blank">
            <Button 
              size="lg" 
              className="text-xs sm:text-base bg-linear-to-r from-[#b89b4b] via-[#fbea94] to-[#e3c05d] hover:bg-linear-to-r hover:from-[#0b0b0a] hover:via-[#000000] hover:to-[#000000]  text-[#111116] hover:text-[#fbea94] cursor-pointer font-bold rounded-full px-8 h-10 transition-all active:scale-95"
            >
              <MessageCircle className="me-1 h-5 w-5" />
              {t("contact_page.hero.whatsapp_cn")}
            </Button>
          </Link>
          <Link href="mailto:Customerservice.aytima@gmail.com">
            <Button 
            variant="outline" 
            size="lg" 
            className="text-xs sm:text-base cursor-pointer border-[#fbea94] bg-[#2f3056] hover:bg-[#1d1e32]  text-white hover:text-white dark:border-[#fbea94] dark:bg-[#2f3056] dark:hover:bg-[#1d1e32]  dark:text-white  font-semibold rounded-full px-8 h-10 transition-all"
            >
            {t("contact_page.hero.email_btn")}
            </Button>
          </Link>
        </Hero>
        
        <div suppressHydrationWarning id="here" className="pt-20 bg-[#ffffff] dark:bg-[#0a0a0c]"></div>

        {/* Contact Us Form */}
          <ContactUsForm/> 

        {/* Contact CTA Section */}
        <ContactCTA  />
      </main>

      <Footer />
    </div>
  );
}

