import Link from "next/link";
import { Mail, MapPinned, MessageCircleMore, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusMarkets, siteConfig } from "@/data/company";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Trusted Realty Limited for premium property inquiries, investor discussions, advisory consultations, and multi-city real estate support.",
  path: "/contact",
  image: "/images/office-lounge.jpg",
});

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function getInitialService(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "General Inquiry";
  }

  return value ?? "General Inquiry";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const initialService = getInitialService(resolvedSearchParams.service);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Bring us the brief, the city, or the property objective."
        description="Whether the requirement is a home purchase, lease, landlord mandate, diaspora acquisition, or investor conversation, Trusted Realty is built to respond with clarity."
        image="/images/office-lounge.jpg"
        imageAlt="Premium office lounge"
        highlights={[
          { value: "WhatsApp-ready", label: "Quick first contact" },
          { value: "Email routing", label: "Deployment-friendly inquiry flow" },
          { value: "Five-city reach", label: "Support across core markets" },
        ]}
        actions={
          <>
            <Link href={siteConfig.whatsappUrl} className={buttonVariants({ variant: "primary", size: "lg" })}>
              Open WhatsApp
            </Link>
            <Link href={`mailto:${siteConfig.email}`} className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Send email
            </Link>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Reach us"
              title="A premium inquiry experience should feel simple from the first step."
              description="Use the form for structured requests, or start with WhatsApp for quick direction before moving into a more detailed brief."
            />

            <div className="space-y-4">
              <article className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                <div className="flex items-center gap-3 text-[#f7f2eb]">
                  <Mail className="h-5 w-5 text-[#c9aa71]" />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">{siteConfig.email}</p>
              </article>

              <article className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                <div className="flex items-center gap-3 text-[#f7f2eb]">
                  <PhoneCall className="h-5 w-5 text-[#c9aa71]" />
                  <span className="font-semibold">Phone</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">{siteConfig.phone}</p>
              </article>

              <article className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                <div className="flex items-center gap-3 text-[#f7f2eb]">
                  <MessageCircleMore className="h-5 w-5 text-[#c9aa71]" />
                  <span className="font-semibold">WhatsApp</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">
                  Ideal for fast property questions, first contact, and diaspora clients coordinating across time zones.
                </p>
                <Link href={siteConfig.whatsappUrl} className={buttonVariants({ variant: "secondary" })}>
                  Start WhatsApp conversation
                </Link>
              </article>

              <article className="rounded-[1.5rem] border border-white/10 bg-[#11100f] p-6">
                <div className="flex items-center gap-3 text-[#f7f2eb]">
                  <MapPinned className="h-5 w-5 text-[#c9aa71]" />
                  <span className="font-semibold">Coverage</span>
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-[#bdb3a7]">
                  {focusMarkets.map((market) => (
                    <li key={market.city}>{market.city}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#11100f] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">Inquiry form</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#bdb3a7]">
              This form is wired for production and can send via Resend as soon as the required environment variables are added in Vercel.
            </p>
            <div className="mt-8">
              <ContactForm initialService={initialService} source="Contact page" />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#11100f]">
            <div className="grid gap-8 p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">Office note</p>
                <h2 className="mt-4 font-serif text-4xl text-[#f7f2eb]">Office details can be replaced easily when the final locations are confirmed.</h2>
                <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">
                  The current layout is designed to accommodate a headquarters address, appointment-only locations, or a multi-office structure without redesigning the page.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(135deg,#171310_0%,#211b15_100%)] p-6">
                <div className="grid h-full min-h-[260px] place-items-center rounded-[1.25rem] border border-dashed border-[#d8b87a]/30 bg-[radial-gradient(circle_at_center,rgba(216,184,122,0.08),transparent_48%)]">
                  <p className="max-w-md text-center text-sm leading-7 text-[#cfc5b7]">
                    Map or embedded location module placeholder. Replace with the final office map, studio address, or appointment hub when ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
