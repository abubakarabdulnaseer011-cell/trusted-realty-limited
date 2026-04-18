import { Bath, BedDouble, Landmark, ShieldCheck, Sparkles, Ruler } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/site/cta-banner";
import { ContactForm } from "@/components/site/contact-form";
import { PropertyCard } from "@/components/site/property-card";
import { PropertyGallery } from "@/components/site/property-gallery";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getPropertyBySlug,
  getRelatedProperties,
  properties,
} from "@/data/properties";
import { formatArea, formatPriceLabel } from "@/lib/format";
import { absoluteUrl, createMetadata } from "@/lib/metadata";

type PropertyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return createMetadata({
      title: "Property not found",
      description: "This property is no longer available.",
      path: `/properties/${slug}`,
    });
  }

  return createMetadata({
    title: property.title,
    description: property.summary,
    path: `/properties/${property.slug}`,
    image: property.images[0],
    keywords: [property.city, property.location, property.type, property.status],
  });
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = getRelatedProperties(property, 3);
  const propertySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Properties",
            item: absoluteUrl("/properties"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: property.title,
            item: absoluteUrl(`/properties/${property.slug}`),
          },
        ],
      },
      {
        "@type": "Offer",
        price: property.price,
        priceCurrency: "NGN",
        url: absoluteUrl(`/properties/${property.slug}`),
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": property.category === "Commercial" ? "Place" : "SingleFamilyResidence",
          name: property.title,
          description: property.summary,
          image: property.images.map((image) => absoluteUrl(image)),
          address: {
            "@type": "PostalAddress",
            streetAddress: property.location,
            addressRegion: property.city,
            addressCountry: "NG",
          },
          floorSize: {
            "@type": "QuantitativeValue",
            value: property.areaSqm,
            unitCode: "MTK",
          },
          numberOfBathroomsTotal: property.bathrooms,
          numberOfRooms: property.bedrooms || undefined,
          amenityFeature: property.amenities.map((amenity) => ({
            "@type": "LocationFeatureSpecification",
            name: amenity,
            value: true,
          })),
        },
        seller: {
          "@type": "Organization",
          name: "TRUSTED REALTY LIMITED",
          url: absoluteUrl("/"),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
      />
      <section className="pt-32 sm:pt-36">
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#a79c8f]">
            <Link href="/properties" className="transition hover:text-[#d8b87a]">
              Properties
            </Link>
            <span>/</span>
            <span>{property.city}</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#d8b87a]/40 bg-[#14110f]/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d8b87a]">
                  {property.status}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d9d0c4]">
                  {property.type}
                </span>
              </div>
              <h1 className="mt-6 font-serif text-5xl leading-[0.94] text-[#f7f2eb] sm:text-6xl">
                {property.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#bdb3a7]">{property.summary}</p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9aa71]">Pricing</p>
              <p className="mt-4 font-serif text-4xl text-[#f7f2eb]">
                {formatPriceLabel(property.price, property.priceQualifier)}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">{property.marketDescription}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center gap-3 text-[#ddd4c7]">
              <BedDouble className="h-5 w-5 text-[#c9aa71]" />
              <span>{property.bedrooms ? `${property.bedrooms} bedrooms` : property.category}</span>
            </div>
            <div className="flex items-center gap-3 text-[#ddd4c7]">
              <Bath className="h-5 w-5 text-[#c9aa71]" />
              <span>{property.bathrooms} bathrooms</span>
            </div>
            <div className="flex items-center gap-3 text-[#ddd4c7]">
              <Ruler className="h-5 w-5 text-[#c9aa71]" />
              <span>{formatArea(property.areaSqm)}</span>
            </div>
            <div className="flex items-center gap-3 text-[#ddd4c7]">
              <Landmark className="h-5 w-5 text-[#c9aa71]" />
              <span>{property.location}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.55fr] lg:items-start">
          <PropertyGallery title={property.title} images={property.images} />

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c9aa71]">Quick inquiry</p>
              <p className="mt-4 text-sm leading-7 text-[#bdb3a7]">
                Share your brief and we will respond with the next sensible step, whether that is a viewing, further documentation context, or a tailored shortlist.
              </p>
              <div className="mt-6">
                <ContactForm
                  compact
                  initialService={property.category === "Commercial" ? "Commercial Property Services" : "Residential Property Sales"}
                  propertyTitle={property.title}
                  propertyUrl={`/properties/${property.slug}`}
                  source="Property details"
                />
              </div>
            </div>
            <Link href="/contact?service=Property%20Sourcing" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              Request a broader shortlist
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Property summary"
              title="A premium asset positioned for clarity, comfort, and credible long-term value."
              description={property.description}
            />
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-[#11100f] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c9aa71]">Amenities and positioning</p>
            <ul className="mt-6 space-y-3">
              {property.amenities.map((amenity) => (
                <li key={amenity} className="flex items-start gap-3 text-sm leading-7 text-[#ddd4c7]">
                  <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#c9aa71]" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-[#161311] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#c9aa71]" />
                <p className="text-sm leading-7 text-[#c7bdb0]">
                  Trusted Realty approaches each listing with a strong emphasis on market fit, transaction composure, and documentation awareness.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Related properties"
            title="Other listings that may suit the same brief."
            description="Each recommendation is selected to stay close to the same market profile, asset category, or client objective."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {relatedProperties.map((related) => (
              <PropertyCard key={related.id} property={related} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Need more than one option?"
        title="Bring us the full acquisition or leasing brief."
        description="If this property is close but not exact, Trusted Realty can curate alternatives across your preferred city, budget, and asset type."
        primaryLabel="Request a custom shortlist"
        primaryHref="/contact?service=Property%20Sourcing"
        secondaryLabel="Back to listings"
        secondaryHref="/properties"
      />
    </>
  );
}
