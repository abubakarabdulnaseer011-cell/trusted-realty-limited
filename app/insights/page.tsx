import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { journalEntries } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "A premium journal layout for future market updates, investor perspectives, property documentation guidance, and city-focused real estate insight.",
  path: "/insights",
  image: "/images/dining-room.jpg",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="A future-facing journal for market intelligence, city context, and property guidance."
        description="This section is structured for future publishing and can accommodate market updates, investor viewpoints, city guides, and transaction-focused articles."
        image="/images/dining-room.jpg"
        imageAlt="Elegant interior suitable for editorial content"
        highlights={[
          { value: "Market Briefs", label: "Urban market movement and context" },
          { value: "Documentation", label: "Practical legal and process guidance" },
          { value: "Investor Notes", label: "Signal-driven opportunities and risk framing" },
        ]}
        actions={
          <Link href="/contact?service=General%20Inquiry" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Request tailored advice
          </Link>
        }
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Editorial structure"
              title="Designed to sound intelligent, practical, and investor-aware."
              description="The sample entries below show how Trusted Realty can publish with the same calm authority reflected across the rest of the site."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {journalEntries.map((entry, index) => (
              <Reveal key={entry.title} delay={index * 0.06}>
                <article className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9aa71]">{entry.category}</p>
                  <h2 className="mt-5 font-serif text-4xl text-[#f7f2eb]">{entry.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-[#bdb3a7]">{entry.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Future publishing"
        title="Ready to turn this journal into a live thought-leadership channel?"
        description="The page structure is already in place for future CMS or markdown-backed publishing whenever the brand is ready."
        primaryLabel="Contact the team"
        primaryHref="/contact?service=General%20Inquiry"
        secondaryLabel="View services"
        secondaryHref="/services"
      />
    </>
  );
}
