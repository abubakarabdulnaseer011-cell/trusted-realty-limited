"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

import { navLinks, siteConfig } from "@/data/company";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const updateScrolledState = useEffectEvent(() => {
    setScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    const listener = () => updateScrolledState();

    listener();
    window.addEventListener("scroll", listener, { passive: true });

    return () => window.removeEventListener("scroll", listener);
  }, []);

  const overlayMode = pathname === "/" && !scrolled;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <Container className="pt-4">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6",
              overlayMode
                ? "border-white/10 bg-black/18 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-md"
                : "border-[#2f2923] bg-[#11100f]/92 shadow-[0_28px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl",
            )}
          >
            <Logo />
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm text-[#e3dacc]/80 transition hover:text-white",
                      isActive && "text-[#d8b87a]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/contact?service=Real%20Estate%20Advisory"
                className={buttonVariants({ variant: "secondary" })}
              >
                Talk to an Advisor
              </Link>
              <Link href="/properties" className={buttonVariants({ variant: "primary" })}>
                View Properties
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d8b87a] hover:text-[#d8b87a] lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#080706]/88 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex min-h-screen flex-col justify-between pt-32 pb-10">
              <div className="space-y-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/8 pb-5 font-serif text-3xl text-[#f7f2eb]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-4">
                <Link
                  href="/contact?service=Real%20Estate%20Advisory"
                  onClick={() => setMenuOpen(false)}
                  className={buttonVariants({ variant: "light", size: "lg" })}
                >
                  Book a Consultation
                </Link>
                <Link
                  href={siteConfig.whatsappUrl}
                  onClick={() => setMenuOpen(false)}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  WhatsApp
                </Link>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
