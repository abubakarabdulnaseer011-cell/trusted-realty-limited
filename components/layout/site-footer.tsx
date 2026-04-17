import Link from "next/link";

import { focusMarkets, navLinks, services, siteConfig } from "@/data/company";

import { Logo } from "@/components/layout/logo";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#0b0908]">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-6 text-sm leading-7 text-[#bdb3a7]">
              Premium property sales, rentals, leasing, and advisory across Lagos, Abuja, Port Harcourt, Enugu, and Kano State.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?service=General%20Inquiry" className={buttonVariants({ variant: "light" })}>
                Book a Consultation
              </Link>
              <Link href={siteConfig.whatsappUrl} className={buttonVariants({ variant: "secondary" })}>
                WhatsApp
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#d5cbbc] transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">Services</p>
            <ul className="mt-6 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title} className="text-sm text-[#d5cbbc]">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">Markets and Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-[#d5cbbc]">
              {focusMarkets.map((market) => (
                <li key={market.city}>{market.city}</li>
              ))}
              <li className="pt-4 text-white">{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>By appointment across our core cities</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-[#887d70] sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.name}. Calm execution for clients, partners, and investors.</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
