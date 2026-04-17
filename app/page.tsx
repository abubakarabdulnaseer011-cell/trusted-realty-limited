import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  Home,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { LeadershipCard } from "@/components/site/leadership-card";
import { MarketCard } from "@/components/site/market-card";
import { PropertyCard } from "@/components/site/property-card";
import { Reveal } from "@/components/site/reveal";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  focusMarkets,
  investorHighlights,
  leadership,
  services,
  siteConfig,
  testimonials,
  trustPillars,
} from "@/data/company";
import { getFeaturedProperties } from "@/data/properties";

const featuredProperties = getFeaturedProperties(3);

const serviceIcons = [Home, Building2, BriefcaseBusiness, Sparkles, ShieldCheck, FileCheck2];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#090807] pt-28 text-white sm:pt-32">
        <Image
          src="/images/hero-living-room.jpg"
          alt="Elegant premium living room interior"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,5,4,0.92)_0%,rgba(7,5,4,0.72)_44%,rgba(7,5,4,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,184,122,0.2),transparent_24%)]" />

        <Container className="relative flex min-h-[calc(100svh-2rem)] flex-col justify-between pb-12">
          <div className="max-w-3xl pt-12 sm:pt-16 lg:pt-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8b87a]">
                {siteConfig.name}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 font-serif text-5xl leading-[0.92] text-[#f7f2eb] sm:text-6xl lg:text-[5.5rem]">
                Property confidence, shaped for Nigeria&apos;s most important cities.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#ddd4c7] sm:text-xl">
                Trusted Realty Limited guides buyers, landlords, tenants, and investors through premium sales, rentals, leasing, and advisory with the calm precision serious property decisions require.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/properties" className={buttonVariants({ variant: "primary", size: "lg" })}>
                  View Properties
                </Link>
                <Link
                  href="/contact?service=Real%20Estate%20Advisory"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Book a Consultation
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-8 border-t border-white/12 py-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal className="grid gap-6 sm:grid-cols-3">
              {[
                { value: "5", label: "Core urban markets" },
                { value: "12", label: "Curated showcase listings" },
                { value: "3", label: "Founder-led disciplines" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-semibold text-[#f7f2eb] sm:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b6aa9a]">{item.label}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.12} className="lg:pl-10 lg:border-l lg:border-white/12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b87a]">
                Premium Homes. Trusted Deals.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#d5cbbc]">
                Built for decisive buyers, diaspora clients, and investor-minded partners who value legal clarity, financial discipline, and a composed process from first viewing to final documentation.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/villa-exterior.jpg"
                alt="Luxury residential exterior"
                width={1200}
                height={1200}
                className="h-[520px] w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Trusted by design"
                title="An upscale real estate company with the discipline clients can feel immediately."
                description="Trusted Realty Limited is structured to do more than list properties. The business is built to guide the right transaction, protect client interests, and present every recommendation with professional calm."
              />
            </Reveal>
            <div className="mt-10 grid gap-5">
              {trustPillars.map((pillar, index) => (
                <Reveal key={pillar.label} delay={index * 0.07}>
                  <div className="grid gap-3 border-t border-white/10 py-5 sm:grid-cols-[220px_1fr]">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f7f2eb]">
                      {pillar.label}
                    </p>
                    <p className="text-sm leading-7 text-[#bdb3a7]">{pillar.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f0e8] py-20 text-[#171411] sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Featured properties"
              title="Curated listings across the cities where confidence compounds."
              description="A small view into the type of residential and commercial opportunities Trusted Realty is positioned to represent."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProperties.map((property, index) => (
              <Reveal key={property.id} delay={index * 0.08}>
                <PropertyCard property={property} priority={index === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="mt-10 flex justify-end">
              <Link href="/properties" className={buttonVariants({ variant: "light", size: "lg" })}>
                Explore all properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Core services"
              title="Clear service lines for buyers, tenants, landlords, developers, and investors."
              description="Every service is designed to reduce noise, improve decision quality, and keep execution aligned with the value of the asset."
            />
          </Reveal>

          <div className="grid gap-5">
            {services.slice(0, 6).map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d8b87a]/25 bg-[#1b1713] text-[#d8b87a]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl text-[#f7f2eb]">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#bdb3a7]">{service.description}</p>
                      <ul className="mt-4 space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-sm leading-7 text-[#ddd4c7]">
                            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[#c9aa71]" />
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

      <section className="bg-[#100e0d] py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Focus markets"
              title="Five cities. One disciplined standard."
              description="Our operating footprint is intentionally concentrated around urban markets with meaningful residential demand, executive tenancy, commercial relevance, and investor interest."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusMarkets.map((market, index) => (
              <Reveal key={market.city} delay={index * 0.06}>
                <MarketCard {...market} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Diaspora and investor support"
                title="A composed local partner for clients who cannot afford uncertainty."
                description="Whether the brief is a family home, an executive lease, or an investor-led acquisition mandate, Trusted Realty is built to represent clients with clear communication, verification discipline, and quiet confidence."
              />
            </Reveal>
            <div className="mt-10 grid gap-5">
              {investorHighlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                    <h3 className="font-serif text-3xl text-[#f7f2eb]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#bdb3a7]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/office-tower.jpg"
                alt="Modern commercial tower"
                width={1200}
                height={1200}
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b87a]">
                  Investor-ready cues
                </p>
                <p className="mt-4 max-w-lg text-lg leading-8 text-[#f1ebe3]">
                  Executive leadership, fiscal oversight, legal counsel, and a multi-city focus combine to position the company as a serious operating platform rather than a speculative intermediary.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/investors" className={buttonVariants({ variant: "primary" })}>
                    Request Investor Deck
                  </Link>
                  <Link
                    href="/contact?service=Diaspora%20Client%20Support"
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    Talk to an Advisor
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#100e0d] py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Three founder disciplines shaping the company from the start."
              description="Executive strategy, financial structure, and legal precision sit at the heart of how Trusted Realty approaches growth and transaction confidence."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.08}>
                <LeadershipCard {...person} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Client perspective"
              title="The experience is designed to feel informed, measured, and premium."
              description="Placeholder testimonials below are written to reflect the type of relationships this brand is built to earn."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={`${testimonial.name}-${index}`} delay={index * 0.05}>
                <TestimonialCard {...testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Closing invitation"
        title="Bring us the brief. We will bring structure, access, and conviction."
        description="From premium home searches to investor-led mandates, Trusted Realty Limited is built to turn high-value property decisions into calm, well-managed outcomes."
        primaryLabel="Talk to an Advisor"
        primaryHref="/contact?service=General%20Inquiry"
        secondaryLabel="Request Investor Deck"
        secondaryHref="/investors"
      />
    </>
  );
}
