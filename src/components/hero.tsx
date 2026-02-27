import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title?: React.ReactNode;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  children?: React.ReactNode;
  showScrollArrow?: boolean;
  onScrollClick?: () => void;
  className?: string;
  overlayClassName?: string;
}

export function Hero({
  title,
  description,
  backgroundImage,
  backgroundImageAlt = "Hero Background",
  children,
  showScrollArrow = true,
  onScrollClick,
  className,
  overlayClassName,
}: HeroProps) {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex flex-col justify-center items-start pt-12 sm:pt-2 px-6 sm:px-12 xl:px-24 overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div suppressHydrationWarning className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className={cn("absolute inset-0 bg-black/30 dark:bg-black/50", overlayClassName)} />
      </div>

      <div className="relative z-10 max-w-4xl text-start">
        {title && (
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-Playfair">
            {title}
          </h1>
        )}
        
        {description && (
          <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        
        {children && (
          <div className="flex flex-wrap gap-4">
            {children}
          </div>
        )}
      </div>

      {/* Scroll Down Arrow */}
      {showScrollArrow && (
        <div 
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" 
          onClick={onScrollClick}
        >
            <div className="p-3 rounded-full transition-all duration-700 shadow-lg hover:text-[#dcb703]">
                <ChevronsDown className="w-6 h-6 text-white hover:text-[#dcb703]" />
            </div>
        </div>
      )}
    </section>
  );
}
