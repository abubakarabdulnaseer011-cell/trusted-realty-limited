import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusMarkets } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Markets",
  description:
    "Discover Trusted Realty Limited's focus markets across Lagos, Abuja, Port Harcourt, Enugu, and Kano State, with insight into where and why each city matters.",
  path: "/markets",
  image: "/images/lagos-skyline.jpg",
});

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Five strategically relevant cities, each served with local attention and a premium standard."
        description="Trusted Realty Limited focuses on urban markets where property decisions carry real weight for lifestyle, liquidity, occupancy, and long-term value creation."
        image="/images/lagos-skyline.jpg"
        imageAlt="Lagos skyline"
        highlights={[
          { value: "Lagos", label: "Liquidity and prestige demand" },
          { value: "Abuja", label: "Executive and diplomatic demand" },
          { value: "Port Harcourt • Enugu • Kano", label: "Selective opportunity with local intelligence" },
        ]}
        actions={
          <Link href="/properties" className={buttonVariants({ variant: "primary", size: "lg" })}>
            View properties
          </Link>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Market positioning"
              title="The value of a city lies in more than demand alone. It also lies in how well that demand is interpreted."
              description="Trusted Realty approaches each city with a different operating emphasis, because premium residential and commercial decisions are shaped by local behavior, not broad assumptions."
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {focusMarkets.map((market, index) => (
              <Reveal key={market.city} delay={index * 0.04}>
                <article className="grid gap-4 rounded-[2rem] border border-white/10 bg-[#11100f] p-6 sm:p-8 lg:grid-cols-[180px_1fr_1fr] lg:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9aa71]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 font-serif text-4xl text-[#f7f2eb]">{market.city}</h2>
                  </div>
                  <div>
                    <p className="text-lg leading-8 text-[#f2ece5]">{market.headline}</p>
                    <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">{market.summary}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/8 bg-[#161311] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9aa71]">Where Trusted Realty adds value</p>
                    <p className="mt-4 text-sm leading-7 text-[#ddd4c7]">{market.highlight}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Need a city-specific brief?"
        title="Tell us the market, budget, and property type. We will build a sharper shortlist."
        description="Whether the requirement is owner-occupation, executive leasing, or an investor-led acquisition, the right city context should shape the first recommendation."
        primaryLabel="Start a market inquiry"
        primaryHref="/contact?service=Property%20Sourcing"
        secondaryLabel="Explore properties"
        secondaryHref="/properties"
      />
    </>
  );
}
