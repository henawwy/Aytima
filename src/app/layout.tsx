import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Providers } from "@/components/ui/providers";

const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://aytima.org"
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Aytima | International Trading & Sourcing for GCC",
  description:
    "Aytima is an international trading company based in China, serving Bahrain, UAE, Saudi Arabia and the Gulf. We source, verify, and deliver reliable packaging products with end-to-end support.",

  icons: {
    icon: "/assets/images/A.png",
    shortcut: "/assets/images/main_logo.png",
    apple: "/assets/images/main_logo.png",
  },

  openGraph: {
    title: "Aytima | International Trading & Sourcing for GCC",
    description:
    "Aytima is an international trading company based in China, serving Bahrain, UAE, Saudi Arabia and the Gulf. We source, verify, and deliver reliable packaging products with end-to-end support.",
    type: "website",
    images: [
      {
        url: "/assets/images/main_logo.png",
        width: 1200,
        height: 630,
        alt: "Aytima Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aytima | International Trading & Sourcing for GCC",
    description:
    "Aytima is an international trading company based in China, serving Bahrain, UAE, Saudi Arabia and the Gulf. We source, verify, and deliver reliable packaging products with end-to-end support.",
    images: ["/assets/images/main_logo.png"],
  },
};



import { WhatsAppFloat } from "@/components/whatsapp-float";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";
import RouteLoadingIndicator from "@/components/RouteLoadingIndicator";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white dark:bg-neutral-900 premium-scrollbar transition-colors">
        <Providers>
          <Suspense fallback={null}>
            <RouteLoadingIndicator>
              <ScrollToTop />
              {children}
              <WhatsAppFloat />
            </RouteLoadingIndicator>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
