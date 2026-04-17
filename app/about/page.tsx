import Link from "next/link";

import { CtaBanner } from "@/components/site/cta-banner";
import { LeadershipCard } from "@/components/site/leadership-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { leadership, trustPillars, values } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Trusted Realty Limited, the leadership behind the company, and the disciplined legal, financial, and market foundations that shape its work.",
  path: "/about",
  image: "/images/villa-exterior.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="A premium real estate company built around trust, legal clarity, and long-term value."
        description="Trusted Realty Limited specializes in the sale, rental, leasing, and strategic marketing of residential and commercial property across Lagos, Abuja, Port Harcourt, Enugu, and Kano State."
        image="/images/villa-exterior.jpg"
        imageAlt="Trusted Realty premium residential property"
        highlights={[
          { value: "5", label: "Core markets across Nigeria" },
          { value: "3", label: "Founder-led disciplines" },
          { value: "Residential + commercial", label: "Primary service focus" },
        ]}
        actions={
          <>
            <Link href="/contact?service=General%20Inquiry" className={buttonVariants({ variant: "primary", size: "lg" })}>
              Speak with the team
            </Link>
            <Link href="/investors" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Investor overview
            </Link>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Company overview"
              title="Modern real estate practice grounded in professionalism rather than noise."
              description="Trusted Realty Limited was conceived as a premium operating company for clients who expect clear guidance, transaction discipline, and a strong sense of stewardship over capital."
            />
          </Reveal>
          <div className="space-y-6 text-base leading-8 text-[#c7bdb0]">
            <Reveal delay={0.06}>
              <p>
                The company serves homeowners, tenants, investors, developers, and diaspora clients by connecting them to well-positioned properties and supporting each transaction with a strong commitment to transparency, professionalism, and legal compliance.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                That positioning matters in a market where quality inventory, accurate representation, documentation integrity, and disciplined local insight can meaningfully change the outcome of a property decision.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                The business activity of Trusted Realty Limited covers acquisition, sale, leasing, renting, development, management, and marketing of residential, commercial, and investment property, as well as property sourcing, transaction support, and documentation guidance across Nigeria.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#100e0d] py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-[#13110f] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9aa71]">Mission</p>
              <p className="mt-5 font-serif text-4xl text-[#f7f2eb]">
                To provide secure, transparent, and high-quality real estate solutions that protect client interests and deliver value.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-[#13110f] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9aa71]">Vision</p>
              <p className="mt-5 font-serif text-4xl text-[#f7f2eb]">
                To become one of Nigeria&apos;s most trusted and distinguished real estate companies across key urban markets.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Brand promise"
              title="Every instruction deserves composure, diligence, and respect for what is at stake."
              description="The brand promise is simple: handle every transaction with the professionalism, legal awareness, and operational clarity required to build trust over time."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <article className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6">
                  <h3 className="font-serif text-3xl text-[#f7f2eb]">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">{value.description}</p>
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
              eyebrow="Why clients trust the firm"
              title="The company is intentionally structured around the issues that matter most in premium real estate."
              description="Leadership balance, documentation awareness, and local market focus all reinforce the brand's credibility."
            />
          </Reveal>
          <div className="mt-12 grid gap-5">
            {trustPillars.map((pillar, index) => (
              <Reveal key={pillar.label} delay={index * 0.05}>
                <div className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[260px_1fr]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f7f2eb]">{pillar.label}</p>
                  <p className="text-sm leading-7 text-[#bdb3a7]">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Executive, financial, and legal oversight from the beginning."
              description="Trusted Realty Limited is led by founders whose backgrounds reinforce strategic direction, financial discipline, and legal credibility."
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

      <CtaBanner
        eyebrow="Next step"
        title="If the mandate matters, the representation should too."
        description="Bring the brief to a team that understands premium property, legal discipline, and the importance of a calm, investor-grade process."
        primaryLabel="Talk to Trusted Realty"
        primaryHref="/contact?service=General%20Inquiry"
        secondaryLabel="View properties"
        secondaryHref="/properties"
      />
    </>
  );
}
