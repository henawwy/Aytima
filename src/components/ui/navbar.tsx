"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Menu,
  Home,
  Info,
  Package,
  Briefcase,
  Globe,
  Users,
  ChevronDown,
  Check,
} from "lucide-react";
import NavItem from "@/components/NavItem";
import { FLAG_MAP } from "@/components/FlagIcons";

/* -------- Language config -------- */
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
];

/* ---------------- Navbar ---------------- */
export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [darkMode, setDarkMode]   = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  const router   = useRouter();
  const pathname = usePathname();

  /* -------- Restore dark mode on mount -------- */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  /* -------- Scroll listener -------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------- Sync RTL direction whenever language changes (incl. refresh) -------- */
  useEffect(() => {
    const lang = i18n.language || "en";
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [i18n.language]);

  /* -------- Dark mode -------- */
  const toggleDark = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  /* -------- Language switcher -------- */
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    // dir + lang are handled reactively by the useEffect above
  };

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  /* -------- Active link -------- */
  const isActive = (path: string) =>
    pathname === path
      ? "text-[#fbdf95] dark:text-[#fbdf95] transition-all"
      : "text-white hover:text-[#f9e28a] dark:hover:text-[#f9e28a]";

  return (
    <nav suppressHydrationWarning
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#131a2f]/90 dark:bg-[#0b0c0d]/90 py-3 border-b border-[#e6d58a]/50 dark:border-[#e6d58a]/30 backdrop-blur-md shadow-lg"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between pe-4 md:pe-0">

        {/* Logo */}
        <Link href="/home" className="flex items-center justify-start h-12 w-48">
          <Image
            src="/assets/images/main_logo.png"
            alt="Aytima"
            width={200}
            height={200}
            className="h-auto w-auto -ms-2 sm:-ms-6 md:-ms-3 lg:ms-0 xl:-ms-12"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-4 font-medium">
          <li>
            <NavItem href="/home"     label={t("nav.home")}     icon={<Home     className="w-5 h-5" />} activeClass={isActive("/home")}     />
          </li>
          <li>
            <NavItem href="/about-us" label={t("nav.about")}    icon={<Users    className="w-5 h-5" />} activeClass={isActive("/about-us")} />
          </li>
          <li>
            <NavItem href="/products" label={t("nav.products")} icon={<Package  className="w-5 h-5" />} activeClass={isActive("/products")} />
          </li>
          <li>
            <NavItem href="/services" label={t("nav.services")} icon={<Briefcase className="w-5 h-5" />} activeClass={isActive("/services")} />
          </li>
          <li>
            <NavItem href="/markets"  label={t("nav.markets")}  icon={<Globe    className="w-5 h-5" />} activeClass={isActive("/markets")}  />
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-1 pe-0 md:pe-12">

          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDark}
            className="cursor-pointer hover:bg-gray-100/10 dark:hover:bg-white/10"
          >
            {darkMode ? (
              <Sun  className="text-yellow-500" />
            ) : (
              <Moon className="text-yellow-500" />
            )}
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer flex items-center gap-1 text-white hover:text-[#f9e28a] hover:bg-gray-100/10 dark:hover:bg-white/10 rounded-lg px-3 text-xs font-semibold"
              >
                {(() => { const F = FLAG_MAP[currentLang.code]; return F ? <F className="h-3.5 w-5 rounded-[2px] shrink-0" /> : null; })()}
                <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="min-w-[160px] bg-[#1a1f35] dark:bg-[#111116] border border-[#e6d58a]/70 text-white rounded-xl shadow-xl p-1"
            >
              {LANGUAGES.map((lang) => {
                const Flag = FLAG_MAP[lang.code];
                return (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#e6d58a]/10 hover:text-[#fbdf95] focus:bg-[#e6d58a]/10 focus:text-[#fbdf95] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {Flag && <Flag className="h-3.5 w-5 rounded-[2px] shrink-0" />}
                      <span className="text-sm">{lang.label}</span>
                    </span>
                    {i18n.language === lang.code && (
                      <Check className="h-3.5 w-3.5 text-[#fbdf95]" />
                    )}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Us button (desktop) */}
          <Button
            onClick={() => router.push("/contact-us")}
            variant="outline"
            className={`text-center mx-1 hidden md:block rounded-full text-[#f6c042] border transition-all cursor-pointer ${
              "bg-[#2f3056] border-[#e6d58a] dark:bg-[#111116] dark:border-[#e6d58a]"
            }`}
          >
            {t("nav.contact")}
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={
                    isScrolled
                      ? "text-[#eacd4f] dark:text-[#f6c042] cursor-pointer hover:text-[#eacd4f] dark:hover:text-[#f6c042] hover:bg-[#908d8d5d] dark:hover:bg-[#1f1f1e]"
                      : "text-white cursor-pointer hover:text-[#eacd4f] dark:hover:text-[#f6c042] hover:bg-[#908d8d5d] dark:hover:bg-[#1f1f1e]"
                  }
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side={i18n.language === "ar" ? "left" : "right"} className="bg-[#ffffff] dark:bg-[#0b0c0d]">
                <SheetHeader className={i18n.language === "ar" ? "mt-6" : ""}>
                  <SheetTitle className="text-[#e3c05d]">Aytima</SheetTitle>
                  <SheetDescription className="text-xs">
                    {t("nav.branding_subtitle")}
                  </SheetDescription>
                </SheetHeader>

                <ul className="mt-6 space-y-6 px-5">
                  {[
                    ["/home",     t("nav.home"),     Home],
                    ["/about-us", t("nav.about"),    Info],
                    ["/products", t("nav.products"), Package],
                    ["/services", t("nav.services"), Briefcase],
                    ["/markets",  t("nav.markets"),  Globe],
                  ].map(([href, label, Icon]: any) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex gap-2 transition-colors ${
                          pathname === href
                            ? "text-[#edca68] dark:text-[#fbdf95] font-semibold"
                            : "text-black dark:text-white hover:text-[#e1c140] dark:hover:text-[#efe1ac]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {label}
                      </Link>
                    </li>
                  ))}

                  {/* Mobile language switcher */}
                  <li>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase  mb-3 font-bold">
                      {t("nav.language")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {LANGUAGES.map((lang) => {
                        const Flag = FLAG_MAP[lang.code];
                        return (
                          <button
                            key={lang.code}
                            onClick={() => { changeLanguage(lang.code); setMenuOpen(false); }}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                              i18n.language === lang.code
                                ? "bg-[#e3c05d] border-[#e3c05d] text-black"
                                : "border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:border-[#e3c05d] hover:text-[#e3c05d]"
                            }`}
                          >
                            {Flag && <Flag className="h-3.5 w-5 rounded-[2px] shrink-0" />}
                            <span>{lang.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </li>

                  <li>
                    <Button
                      onClick={() => { setMenuOpen(false); router.push("/contact-us"); }}
                      variant="outline"
                      className="w-full text-left border-none rounded-full text-white hover:text-[#ebc05a] bg-[#e3c05d] hover:bg-[#131318] dark:bg-[#e3c05d] dark:hover:bg-[#141419] cursor-pointer"
                    >
                      {t("nav.contact")}
                    </Button>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
