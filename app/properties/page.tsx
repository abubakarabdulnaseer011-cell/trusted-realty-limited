import Link from "next/link";

import { PageHero } from "@/components/site/page-hero";
import { PropertiesExplorer } from "@/components/site/properties-explorer";
import { buttonVariants } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Properties",
  description:
    "Browse premium residential and commercial listings from Trusted Realty Limited across Lagos, Abuja, Port Harcourt, Enugu, and Kano State.",
  path: "/properties",
  image: "/images/mountain-penthouse.jpg",
});

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Property listings"
        title="Curated homes, apartments, offices, and commercial spaces across our core markets."
        description="Filter by city, property type, status, price, bedrooms, or bathrooms, then move directly into a more focused conversation with our team."
        image="/images/mountain-penthouse.jpg"
        imageAlt="Premium penthouse interior"
        highlights={[
          { value: String(properties.length), label: "Showcase listings" },
          { value: "Residential + commercial", label: "Asset coverage" },
          { value: "Client-ready filtering", label: "Search by fit" },
        ]}
        actions={
          <Link href="/contact?service=Property%20Sourcing" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Request a custom shortlist
          </Link>
        }
      />

      <PropertiesExplorer properties={properties} />
    </>
  );
}
