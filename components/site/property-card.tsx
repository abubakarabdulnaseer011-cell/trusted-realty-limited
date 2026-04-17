import { Bath, BedDouble, Landmark, MoveRight, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Property } from "@/data/properties";
import { formatArea, formatPriceLabel } from "@/lib/format";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
};

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#11100f]">
      <div className="relative overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={900}
          height={700}
          priority={priority}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0908] via-[#0b0908]/70 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-[#d8b87a]/40 bg-[#14110f]/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d8b87a]">
            {property.status}
          </span>
          {property.featured ? (
            <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Featured
            </span>
          ) : null}
        </div>
      </div>
      <div className="space-y-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-[#998f83]">{property.city}</p>
            <h3 className="mt-2 font-serif text-3xl leading-tight text-[#f7f2eb]">{property.title}</h3>
            <p className="mt-2 text-sm leading-7 text-[#bdb3a7]">{property.summary}</p>
          </div>
          <p className="text-right text-lg font-semibold text-[#d8b87a]">
            {formatPriceLabel(property.price, property.priceQualifier)}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#cfc5b7]">
          <Landmark className="h-4 w-4 text-[#c9aa71]" />
          <span>{property.location}</span>
        </div>

        <div className="grid gap-3 border-y border-white/8 py-4 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-[#cfc5b7]">
            <BedDouble className="h-4 w-4 text-[#c9aa71]" />
            <span>{property.bedrooms ? `${property.bedrooms} beds` : property.category}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#cfc5b7]">
            <Bath className="h-4 w-4 text-[#c9aa71]" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#cfc5b7]">
            <Ruler className="h-4 w-4 text-[#c9aa71]" />
            <span>{formatArea(property.areaSqm)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.14em] text-[#998f83]">{property.type}</p>
          <Link href={`/properties/${property.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#f7f2eb] transition hover:text-[#d8b87a]">
            View Details
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
