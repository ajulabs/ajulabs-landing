"use client";

import { useHeaderViewModel } from "../../viewModels/useHeaderViewModel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "../../../../../public/logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const {
    locale,
    handleLocaleChange,
    navigationItems,
    ctaText,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  } = useHeaderViewModel();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black header-font">
      <div className="container mx-auto px-4 sm:px-6 md:px-2 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0">
            <a href="/">
              <Image
                src={logo}
                alt="AjuLabs"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 md:gap-6">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-[#E6E6E6] text-sm font-normal hover:text-[#F2760F] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 text-white text-xs font-regular">
              <button
                onClick={() => handleLocaleChange("pt")}
                className={cn(
                  "transition-colors cursor-pointer",
                  locale === "pt"
                    ? "font-regular text-white"
                    : "text-gray-400 hover:text-[#F2760F]"
                )}
              >
                PT
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => handleLocaleChange("en")}
                className={cn(
                  "transition-colors cursor-pointer",
                  locale === "en"
                    ? "font-regular text-white"
                    : "text-gray-400 hover:text-[#F2760F]"
                )}
              >
                EN
              </button>
            </div>

            <Button
              variant="default"
              className="bg-[#F2760F] hover:bg-[#ffffff] hover:text-[#000000] text-white rounded-[12px] px-6 py-2 text-sm font-light cursor-pointer"
            >
              {ctaText}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <div className="flex items-center gap-2 text-white text-xs font-regular">
              <button
                onClick={() => handleLocaleChange("pt")}
                className={cn(
                  "transition-colors cursor-pointer",
                  locale === "pt"
                    ? "font-regular text-white"
                    : "text-gray-400 hover:text-[#F2760F]"
                )}
              >
                PT
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => handleLocaleChange("en")}
                className={cn(
                  "transition-colors cursor-pointer",
                  locale === "en"
                    ? "font-regular text-white"
                    : "text-gray-400 hover:text-[#F2760F]"
                )}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:text-[#F2760F] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="md:hidden border-t border-gray-800 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <nav className="flex flex-col py-4">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className="text-[#E6E6E6] text-sm font-normal py-3 px-4 hover:text-[#F2760F] hover:bg-gray-900 transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{
                      duration: 0.4,
                      delay: navigationItems.length * 0.08,
                      ease: "easeOut",
                    }}
                    className="px-4 pt-2"
                  >
                    <Button
                      variant="default"
                      onClick={closeMobileMenu}
                      className="w-full bg-[#F2760F] hover:bg-[#ffffff] hover:text-[#000000] rounded-[12px] px-4 py-2 text-sm font-light cursor-pointer"
                    >
                      {ctaText}
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
