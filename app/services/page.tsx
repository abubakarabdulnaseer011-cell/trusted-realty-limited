import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  Globe2,
  Home,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore Trusted Realty Limited's services across residential sales, rentals, leasing, commercial property, sourcing, advisory, documentation support, and diaspora representation.",
  path: "/services",
  image: "/images/showroom-interior.jpg",
});

const serviceIcons = [
  Home,
  Home,
  Building2,
  BriefcaseBusiness,
  TrendingUp,
  Search,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Globe2,
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="High-trust real estate services designed to convert complexity into clear action."
        description="Trusted Realty Limited serves buyers, tenants, landlords, developers, and investors with premium service lines that remain practical, disciplined, and easy to engage."
        image="/images/showroom-interior.jpg"
        imageAlt="Premium property interior"
        highlights={[
          { value: "10", label: "Core service lines" },
          { value: "Residential + commercial", label: "Coverage across asset classes" },
          { value: "Local and diaspora support", label: "Client reach" },
        ]}
        actions={
          <Link href="/contact?service=General%20Inquiry" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Talk to an Advisor
          </Link>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Service architecture"
              title="Each service exists to help clients move with better information, stronger protection, and less friction."
              description="The company does not aim to overwhelm clients with options. It aims to guide the right choice, with the right structure, at the right level of quality."
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              const reversed = index % 2 === 1;

              return (
                <Reveal key={service.title} delay={index * 0.03}>
                  <article className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#11100f] p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
                    <div className={reversed ? "lg:order-2" : undefined}>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c9aa71]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-4 font-serif text-4xl text-[#f7f2eb]">{service.title}</h2>
                      <p className="mt-4 text-base leading-8 text-[#c8bfb3]">{service.description}</p>
                    </div>
                    <div className={reversed ? "lg:order-1" : undefined}>
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-[#d8b87a]/25 bg-[#1a1713] text-[#d8b87a]">
                        <Icon className="h-7 w-7" />
                      </div>
                      <ul className="mt-6 space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-sm leading-7 text-[#ddd4c7]">
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#c9aa71]" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Conversion point"
        title="Need a tailored service path rather than a generic inquiry?"
        description="Tell us the city, asset class, and mandate. We will advise on the right starting point and structure the next steps clearly."
        primaryLabel="Book a Consultation"
        primaryHref="/contact?service=Real%20Estate%20Advisory"
        secondaryLabel="Browse listings"
        secondaryHref="/properties"
      />
    </>
  );
}
