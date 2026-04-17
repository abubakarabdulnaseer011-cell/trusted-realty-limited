import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { LeadershipCard } from "@/components/site/leadership-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusMarkets, leadership, trustPillars } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Investors",
  description:
    "Understand why Trusted Realty Limited is positioned as an investor-ready Nigerian real estate brand with multi-city reach, legal discipline, and founder-led oversight.",
  path: "/investors",
  image: "/images/office-tower.jpg",
});

const investorReasons = [
  {
    title: "Urban demand with layered entry points",
    description:
      "Nigeria's leading cities continue to generate demand across owner-occupation, executive leasing, diaspora acquisition, and commercial occupancy, creating more than one pathway to real estate participation.",
  },
  {
    title: "Property as a confidence asset",
    description:
      "In premium segments, buyers and tenants increasingly reward quality, location, infrastructure, and documentation integrity, not just availability.",
  },
  {
    title: "A business positioned around execution quality",
    description:
      "Trusted Realty aims to win through market focus, disciplined advisory, premium client handling, and transaction credibility rather than indiscriminate volume.",
  },
] as const;

const partnershipOpportunities = [
  "Acquisition mandates for premium residential or commercial assets",
  "Developer sales representation and strategic property marketing",
  "Diaspora-focused purchase support and managed sourcing briefs",
  "Structured introductions for investor partnerships and selective growth opportunities",
] as const;

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="A premium Nigerian real estate brand with the kind of operating signals investors look for."
        description="Trusted Realty Limited combines multi-city market focus, founder-led governance, legal precision, and financial discipline to support growth in a sector where trust is commercially significant."
        image="/images/office-tower.jpg"
        imageAlt="Modern commercial tower"
        highlights={[
          { value: "5", label: "Strategic urban markets" },
          { value: "Legal + financial leadership", label: "Structured operating base" },
          { value: "Residential + commercial", label: "Multiple revenue pathways" },
        ]}
        actions={
          <>
            <Link href="/contact?service=Investor%20Relations" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Request Investor Deck
            </Link>
            <Link href="/contact?service=Real%20Estate%20Advisory" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Speak with the founders
            </Link>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Nigerian real estate"
              title="The opportunity is strongest where demand, clarity, and urban relevance intersect."
              description="For thoughtful investors, the case is not about noise. It is about city-level demand drivers, resilient asset classes, and the quality of local execution."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {investorReasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.07}>
                <article className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6 sm:p-8">
                  <h2 className="font-serif text-4xl text-[#f7f2eb]">{reason.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">{reason.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#100e0d] py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why these five cities"
              title="The operating footprint is narrow enough to stay disciplined and broad enough to matter."
              description="Each market contributes differently to the business case, from prestige-led liquidity in Lagos to executive and institutional demand in Abuja and selective strategic opportunity in Port Harcourt, Enugu, and Kano State."
            />
          </Reveal>
          <div className="mt-12 grid gap-5">
            {focusMarkets.map((market, index) => (
              <Reveal key={market.city} delay={index * 0.05}>
                <div className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[220px_1fr]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7f2eb]">{market.city}</p>
                  <div>
                    <p className="text-lg leading-8 text-[#f1ebe3]">{market.headline}</p>
                    <p className="mt-3 text-sm leading-7 text-[#bdb3a7]">{market.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why Trusted Realty"
                title="The company communicates investor-readiness through how it operates."
                description="The strongest signals are not slogans. They are leadership balance, legal protection, financial discipline, market focus, and an obvious respect for execution quality."
              />
            </Reveal>
          </div>
          <div className="space-y-5">
            {trustPillars.map((pillar, index) => (
              <Reveal key={pillar.label} delay={index * 0.05}>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                  <h3 className="font-serif text-3xl text-[#f7f2eb]">{pillar.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#bdb3a7]">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#100e0d] py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Leadership credibility"
              title="Governance cues begin with who is building the company."
              description="The combination of executive leadership, financial oversight, and legal counsel gives Trusted Realty a strong base for controlled growth."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.07}>
                <LeadershipCard {...person} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Partnership opportunities"
              title="An investable operating company should be able to articulate where partnership can create value."
              description="Trusted Realty can accommodate several forms of strategic conversation as the business grows and its market footprint deepens."
            />
          </Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-[#11100f] p-6 sm:p-8">
            <ul className="space-y-4">
              {partnershipOpportunities.map((item) => (
                <li key={item} className="border-b border-white/8 pb-4 text-sm leading-7 text-[#ddd4c7] last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Investor inquiry"
        title="Request the investor deck or start a direct strategic conversation."
        description="If you would like to explore partnership, growth, or investment positioning, the company is structured to begin that conversation from a place of substance."
        primaryLabel="Request Investor Deck"
        primaryHref="/contact?service=Investor%20Relations"
        secondaryLabel="View markets"
        secondaryHref="/markets"
      />
    </>
  );
}
