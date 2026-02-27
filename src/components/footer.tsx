'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const popularItemsRaw = t("footer.popular_items", { returnObjects: true });
    const popularItems: string[] = Array.isArray(popularItemsRaw) ? popularItemsRaw : [];

    return (
        <footer suppressHydrationWarning className="relative w-full bg-[#151d34] dark:bg-[#0b0c0d] overflow-hidden border-t border-white/5">
        
        {/* Top Banner Section - Map/Social Style */}
        <div className="relative w-full py-8 px-6 md:px-20 border-b border-white/5">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-15">
            <Image
                src="/assets/images/header.png"
                alt="World Map"
                fill
                className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#212741] via-transparent to-[#212741] dark:from-[#0b0c0d] dark:via-transparent dark:to-[#0b0c0d]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="mb-1">
                <Image
                src="/assets/images/logo2.png"
                alt="Aytima"
                width={180}
                height={60}
                className="h-auto w-auto dark:brightness-110"
                />
            </div>
            
            <p className="text-xl md:text-2xl text-white dark:text-gray-200 font-Playfair mb-6 max-w-2xl leading-relaxed">
                {t("footer.banner_text")} <br />
                <span className="bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent italic">{t("footer.banner_gold")}</span>
            </p>

            <div className="flex gap-4">
                {[
                    { Icon: Mail, href: "mailto:Customerservice.aytima@gmail.com" },
                    { Icon: Facebook, href: "https://www.facebook.com/share/1HMLRYmGUQ/" },
                    { Icon: Instagram, href: "https://www.instagram.com/aytimatrade?igsh=MXM1bjl6MGFtNGZpNw==" },
                ].map((item, idx) => (
                <Link 
                    key={idx} 
                    href={item.href} 
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    className="h-10 w-10 rounded-full border border-[#fbea94]/30 flex items-center justify-center text-[#fbea94] hover:bg-[#fbea94] hover:text-black dark:hover:text-black transition-all duration-300"
                >
                    <item.Icon className="h-4 w-4" />
                </Link>
                ))}
            </div>
            </div>
        </div>

        {/* Main Footer Links Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-start">
            
            {/* Column 1: Company Info */}
            <div className="flex flex-col space-y-6">
                <h4 className="text-xl font-bold bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent font-Playfair border-b border-[#fbea94]/20 pb-2 w-fit">
                {t("nav.brand")}
                </h4>
                <p className="text-sm text-gray-200 dark:text-gray-200 font-medium tracking-wide">
                {t("footer.company_name")}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                {t("footer.company_desc")}
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col space-y-6">
                <h4 className="text-xl font-bold bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent font-Playfair border-b border-[#fbea94]/20 pb-2 w-fit">
                {t("footer.nav_title")}
                </h4>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {['home', 'about_us', 'products', 'services', 'markets', 'contact_us'].map((key) => (
                    <li key={key}>
                    <Link 
                        href={key === 'home' ? '/home' : `/${key.replace(/_/g, '-')}`}
                        className="text-sm text-gray-400 hover:text-[#fbea94] transition-colors flex items-center gap-2 group"
                    >
                        <span className="h-1 w-1 rounded-full bg-[#fbea94]/30 group-hover:bg-[#fbea94]" />
                        {t(`nav.${key}`)}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Column 3: Products */}
            <div className="flex flex-col space-y-4">
                <h4 className="text-xl font-bold bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent font-Playfair border-b border-[#fbea94]/20 pb-2 w-fit">
                {t("footer.popular_title")}
                </h4>
                <ul className="space-y-3">
                {popularItems.map((item) => (
                    <li key={item}>
                    <div className="text-sm cursor-pointer text-gray-400 hover:text-[#fbea94] transition-colors flex items-center gap-2">
                        <span className="h-px w-3 bg-[#fbea94]/20 " />
                        {item}
                    </div>
                    </li>
                ))}
                </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col space-y-4">
                <h4 className="text-xl font-bold bg-linear-to-b from-[#b89b4b] via-[#fbea94] to-[#e3c05d] bg-clip-text text-transparent font-Playfair border-b border-[#fbea94]/20 pb-2 w-fit">
                {t("footer.contact_title")}
                </h4>
                <div className="space-y-4">
                <div className="space-y-3">
                    <div className="flex items-start gap-4">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#fbea94]">
                        <Mail className="h-4 w-4" />
                    </div>
                    <div className="text-xs space-y-1 text-start">
                        <p className="text-gray-200 uppercase tracking-tighter font-bold">{t("footer.email")}</p>
                        <Link href="mailto:Customerservice.aytima@gmail.com" className="text-gray-300 hover:text-[#fbea94] transition-colors">
                            Customerservice.aytima@gmail.com
                        </Link>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#fbea94]">
                        <MessageCircle className="h-4 w-4" />
                    </div>
                    <div className="text-xs space-y-1 text-start">
                        <p className="text-gray-200 uppercase tracking-tighter font-bold">{t("footer.whatsapp")}</p>
                        <p className="text-gray-300">{t("footer.bahrain")}+973 3706 1696</p>
                        <p className="text-gray-300">{t("footer.china")}+86 199 2455 4911</p>
                    </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#fbea94]">
                        <Phone className="h-4 w-4" />
                    </div>
                    <div className="text-xs space-y-1 text-start">
                        <p className="text-gray-200 uppercase tracking-tighter font-bold">{t("footer.telephone")}</p>
                        <p className="text-gray-300">{t("footer.bahrain")}+973 3888 4367</p>
                        <p className="text-gray-300">{t("footer.china")}+86 199 2455 4911</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#fbea94]">
                        <MapPin className="h-4 w-4" />
                    </div>
                    <div className="text-xs space-y-1 text-start">
                        <p className="text-gray-200 uppercase tracking-tighter font-bold">{t("footer.address")}</p>
                        <p className="text-gray-300 leading-relaxed text-start">
                        {t("footer.address_val") || t("contact_form.address")}
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Separator Image Decoration */}
            <div className="mt-20 relative h-10 w-full flex items-center justify-center opacity-40">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#fbea94]/30 to-transparent" />
            <div className="mx-6 h-6 w-6 border border-[#fbea94]/30 rotate-45 flex items-center justify-center">
                <div className="h-2 w-2 bg-[#fbea94] " />
            </div>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#fbea94]/30 to-transparent" />
            </div>

            {/* Bottom Bar: Copyright */}
            <div className="mt-6 flex flex-col items-center space-y-4">
            <p className="text-xs text-gray-500 tracking-widest uppercase">
                &copy; 2026 <span className="text-[#fbea94]">{t("nav.brand")}</span>. {t("footer.rights")}
            </p>
            <div className="absolute -bottom-20 -end-20 w-64 h-64 pointer-events-none opacity-5">
                <Image 
                    src="/assets/images/assistant1.png"
                    alt="Decorative"
                    fill
                    className="object-contain"
                />
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
