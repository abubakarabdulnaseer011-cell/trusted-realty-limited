import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  Globe2,
  Home,
  MoveRight,
  Search,
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
  diasporaTrustLayers,
  focusMarkets,
  investorHighlights,
  leadership,
  services,
  siteConfig,
  testimonials,
  trustPillars,
} from "@/data/company";
import { getFeaturedProperties } from "@/data/properties";
import { formatPriceLabel } from "@/lib/format";

const featuredProperties = getFeaturedProperties(3);

const [heroProperty, ...secondaryFeaturedProperties] = featuredProperties;

const serviceIcons = [Home, Building2, BriefcaseBusiness, Sparkles, ShieldCheck, FileCheck2];
const diasporaTrustIcons = [ShieldCheck, Home, Search, FileCheck2];

const heroStats = [
  { value: "5", label: "Core urban markets" },
  { value: "Investor-ready", label: "Legal, financial, operational balance" },
  { value: "Founder-led", label: "Executive, fiscal, and legal oversight" },
] as const;

const citySequence = ["Lagos", "Abuja", "Port Harcourt", "Enugu", "Kano State"] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#060505] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-living-room.jpg"
            alt="Elegant premium living room interior"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,4,4,0.92)_10%,rgba(5,4,4,0.78)_36%,rgba(5,4,4,0.34)_66%,rgba(5,4,4,0.74)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(216,184,122,0.24),transparent_22%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.08),transparent_18%)]" />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-[7%] hidden border-l border-white/10 lg:block" />
        <div className="pointer-events-none absolute bottom-[15%] right-[8%] hidden h-32 w-32 rounded-full border border-[#d8b87a]/30 lg:block" />

        <Container className="relative flex min-h-[100svh] flex-col justify-end px-0 sm:px-0 lg:px-0">
          <div className="grid min-h-[100svh] items-end lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.62fr)]">
            <div className="flex min-h-[100svh] flex-col justify-between px-6 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32 lg:px-12 lg:pb-14 lg:pt-40">
              <div className="max-w-[860px]">
                <Reveal>
                  <div className="flex flex-wrap items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#d8b87a]">
                    <span>{siteConfig.name}</span>
                    <span className="hidden h-px w-14 bg-white/20 sm:block" />
                    <span className="text-[#e6dccd]/76">Premium Homes. Trusted Deals.</span>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <h1 className="mt-8 max-w-[820px] font-serif text-[3.7rem] leading-[0.86] text-[#f7f2eb] sm:text-[5.15rem] lg:text-[7.4rem] xl:text-[8.2rem]">
                    A rarer standard of property confidence.
                  </h1>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className="mt-8 grid gap-6 border-l border-white/12 pl-5 sm:max-w-2xl sm:grid-cols-[1.05fr_0.95fr] sm:pl-7">
                    <p className="text-lg leading-8 text-[#e1d7c9] sm:text-[1.15rem]">
                      Trusted Realty Limited brings editorial-level presentation, legal care, and investment-grade calm to premium property decisions across Nigeria&apos;s most important cities.
                    </p>
                    <p className="max-w-md text-sm uppercase tracking-[0.18em] text-[#b8ab9a] sm:pt-1">
                      Sales, leasing, rentals, sourcing, and investor-minded advisory for clients who expect clarity before commitment.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.24}>
                  <div className="mt-10 flex flex-wrap gap-3">
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

              <div className="mt-14 grid gap-6 border-t border-white/12 pt-7 sm:grid-cols-[1.15fr_0.85fr] sm:items-end lg:max-w-[900px]">
                <Reveal className="grid gap-5 sm:grid-cols-3">
                  {heroStats.map((item) => (
                    <div key={item.label} className="max-w-[220px]">
                      <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#a89987]">
                        {item.label}
                      </p>
                      <p className="mt-3 font-serif text-2xl leading-tight text-[#f7f2eb] sm:text-[2rem]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[#d7ccb9]">
                    {citySequence.map((city, index) => (
                      <div key={city} className="flex items-center gap-5">
                        <span>{city}</span>
                        {index < citySequence.length - 1 ? (
                          <span className="h-px w-6 bg-white/12" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="relative hidden min-h-[100svh] items-end pr-6 pb-8 sm:pr-8 lg:flex lg:pr-12 lg:pb-10">
              <Reveal delay={0.18} className="ml-auto w-full max-w-[430px] self-center pt-28">
                <div className="relative overflow-hidden rounded-t-[13rem] rounded-b-[2.6rem] border border-white/12 bg-[#120f0d]/58 p-3 shadow-[0_42px_120px_rgba(0,0,0,0.4)] backdrop-blur-[2px]">
                  <div className="relative overflow-hidden rounded-t-[11.5rem] rounded-b-[2rem]">
                    <Image
                      src="/images/villa-exterior.jpg"
                      alt="Signature luxury residence exterior"
                      width={900}
                      height={1200}
                      className="h-[72svh] min-h-[540px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080706]/90 via-[#080706]/18 to-transparent" />
                  </div>

                  <div className="absolute left-8 top-8 rounded-full border border-white/12 bg-black/26 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#efe6da] backdrop-blur-md">
                    Investor-grade access
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#d8b87a]">
                      Market focus
                    </p>
                    <p className="mt-4 max-w-xs font-serif text-4xl leading-[0.95] text-[#f7f2eb]">
                      Architecture, address, and assurance in one frame.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal
                delay={0.28}
                className="absolute -left-8 bottom-16 max-w-[260px] rounded-[1.9rem] border border-white/12 bg-[#110f0d]/88 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d8b87a]">
                  Diaspora-ready handling
                </p>
                <p className="mt-4 text-sm leading-7 text-[#ddd2c3]">
                  Remote shortlisting, viewing coordination, verification discipline, and structured transaction guidance.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-white/8 bg-[#0a0908] py-24 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8b87a]/40 to-transparent" />
        <Container className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b87a]">
                Trusted by design
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-[620px] font-serif text-[2.9rem] leading-[0.92] text-[#f7f2eb] sm:text-[3.8rem] lg:text-[4.9rem]">
                Serious property guidance should feel composed before a word is spoken.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#beb3a5] sm:text-lg">
                Trusted Realty Limited is structured to do more than present listings. The company is built to reduce uncertainty, protect decision quality, and make premium transactions feel measured from the first conversation onward.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100e] p-3">
                <Image
                  src="/images/showroom-interior.jpg"
                  alt="Refined property viewing environment"
                  width={900}
                  height={1200}
                  className="h-[380px] w-full rounded-[1.45rem] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="max-w-[180px] text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#efe7db]">
                    Calm presentation. Stronger decisions.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {trustPillars.map((pillar, index) => (
                <Reveal key={pillar.label} delay={index * 0.07}>
                  <article className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[220px_1fr]">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-[#f0e6d7]">
                      {pillar.label}
                    </p>
                    <p className="text-sm leading-7 text-[#b8ab9a]">{pillar.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f0e8] py-24 text-[#171411] sm:py-28">
        <Container className="grid gap-10">
          <Reveal className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <SectionHeading
              eyebrow="Featured properties"
              title="A more selective view of the inventory than a typical listing page."
              description="Curated opportunities across Lagos, Abuja, and beyond, presented with the kind of hierarchy serious buyers expect."
              tone="dark"
            />

            <div className="grid gap-5 border-t border-[#171411]/12 pt-5 sm:grid-cols-3 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              {[
                "Large-format image presentation",
                "Address-first residential and commercial selection",
                "Clear leasing, sales, and investor positioning",
              ].map((item) => (
                <p key={item} className="text-sm uppercase tracking-[0.16em] text-[#675d54]">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <article className="overflow-hidden rounded-[2.4rem] bg-[#171411] text-white shadow-[0_28px_100px_rgba(23,20,17,0.18)]">
                <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[420px] overflow-hidden">
                    <Image
                      src={heroProperty.images[0]}
                      alt={heroProperty.title}
                      fill
                      priority
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b09]/84 via-[#0e0b09]/10 to-transparent" />
                    <div className="absolute left-7 top-7 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#d8b87a]/35 bg-[#120f0d]/68 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#d8b87a]">
                        {heroProperty.status}
                      </span>
                      <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
                        {heroProperty.city}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d8b87a]">
                        Signature listing
                      </p>
                      <h3 className="mt-3 max-w-[420px] font-serif text-4xl leading-[0.94] text-[#f7f2eb] sm:text-[2.9rem]">
                        {heroProperty.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-8 lg:p-10">
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-[#8f8375]">
                        {heroProperty.location}
                      </p>
                      <p className="mt-5 text-lg leading-8 text-[#d7ccbe]">{heroProperty.summary}</p>
                      <p className="mt-5 text-sm leading-7 text-[#aa9f92]">{heroProperty.marketDescription}</p>

                      <div className="mt-8 grid gap-4 border-y border-white/10 py-5 text-sm uppercase tracking-[0.15em] text-[#d8cec1] sm:grid-cols-2">
                        <div>
                          <p className="text-[#85796c]">Type</p>
                          <p className="mt-2 text-[#f7f2eb]">{heroProperty.type}</p>
                        </div>
                        <div>
                          <p className="text-[#85796c]">Pricing</p>
                          <p className="mt-2 text-[#f7f2eb]">
                            {formatPriceLabel(heroProperty.price, heroProperty.priceQualifier)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/properties/${heroProperty.slug}`}
                        className={buttonVariants({ variant: "primary", size: "lg" })}
                      >
                        View Details
                      </Link>
                      <Link
                        href="/contact?service=Property%20Inquiry"
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#f7f2eb] transition hover:text-[#d8b87a]"
                      >
                        Schedule a Viewing
                        <MoveRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-8">
              {secondaryFeaturedProperties.map((property, index) => (
                <Reveal key={property.id} delay={index * 0.08}>
                  <PropertyCard property={property} priority={index === 0} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.22}>
            <div className="flex justify-end">
              <Link href="/properties" className={buttonVariants({ variant: "light", size: "lg" })}>
                Explore all properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Core services"
              title="Service lines designed to feel polished, not procedural."
              description="The work spans premium acquisitions, rentals, leasing, sourcing, and advisory, but the experience is unified by restraint, clarity, and high-trust handling."
            />
          </Reveal>

          <div className="grid gap-5">
            {services.slice(0, 6).map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[auto_1fr] sm:gap-6">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b87a]/24 bg-[#181410] text-[#d8b87a]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <h3 className="font-serif text-3xl text-[#f7f2eb]">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#bdb3a7]">{service.description}</p>
                      </div>
                      <ul className="grid gap-2">
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

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(216,184,122,0.08),transparent_62%)] lg:block" />
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Diaspora trust layer"
                title="A dedicated confidence layer for overseas investors and homebuyers."
                description="For clients buying from abroad, the real question is not only what to buy. It is who is screening, guiding, documenting, and protecting the process on the ground. Trusted Realty is built to answer that question clearly."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 flex items-start gap-4 border-l border-[#d8b87a]/30 pl-5">
                <Globe2 className="mt-1 h-5 w-5 shrink-0 text-[#d8b87a]" />
                <p className="max-w-xl text-sm uppercase tracking-[0.16em] text-[#c9b9a6]">
                  Secure transactions, guided buying, remote property sourcing, documentation support, and calmer decision-making for diaspora families and cross-border investors.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5">
              {diasporaTrustLayers.map((item, index) => {
                const Icon = diasporaTrustIcons[index];

                return (
                  <Reveal key={item.title} delay={index * 0.07}>
                    <article className="grid gap-4 border-t border-white/10 py-5 sm:grid-cols-[auto_1fr] sm:gap-5">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b87a]/24 bg-[#181410] text-[#d8b87a]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif text-3xl text-[#f7f2eb]">{item.title}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#bdb3a7]">{item.description}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5">
              {investorHighlights.map((item, index) => (
                <Reveal key={item.title} delay={0.24 + index * 0.08}>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                    <h3 className="font-serif text-3xl text-[#f7f2eb]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#bdb3a7]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11100f] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
              <div className="absolute right-8 top-8 z-10 rounded-full border border-white/12 bg-[#0d0b09]/60 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#efe6da] backdrop-blur-md">
                Remote property sourcing
              </div>
              <Image
                src="/images/office-tower.jpg"
                alt="Modern commercial tower"
                width={1200}
                height={1200}
                className="h-[560px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b87a]">
                  Overseas buyer confidence
                </p>
                <p className="mt-4 max-w-lg text-lg leading-8 text-[#f1ebe3]">
                  The goal is simple: if you are buying or investing from abroad, the process should feel guided, verified, and visibly under control at every stage.
                </p>
                <div className="mt-7 grid gap-4 border-t border-white/10 pt-5 text-sm uppercase tracking-[0.15em] text-[#efe6da] sm:grid-cols-2">
                  <div>
                    <p className="text-[#a99684]">Ideal for</p>
                    <p className="mt-2 leading-7 text-[#f7f2eb]">Diaspora families, overseas homebuyers, and investor-led mandates</p>
                  </div>
                  <div>
                    <p className="text-[#a99684]">Support style</p>
                    <p className="mt-2 leading-7 text-[#f7f2eb]">Mandate-led sourcing, verification updates, and documentation-minded guidance</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact?service=Diaspora%20Client%20Support"
                    className={buttonVariants({ variant: "primary" })}
                  >
                    Talk to a Diaspora Advisor
                  </Link>
                  <Link href="/investors" className={buttonVariants({ variant: "secondary" })}>
                    Explore investor positioning
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
