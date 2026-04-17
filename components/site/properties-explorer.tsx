"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useDeferredValue, useState } from "react";

import type { Property } from "@/data/properties";
import { propertyCities, propertyStatuses, propertyTypes } from "@/data/properties";

import { PropertyCard } from "@/components/site/property-card";
import { Container } from "@/components/ui/container";

type PropertiesExplorerProps = {
  properties: Property[];
};

export function PropertiesExplorer({ properties }: PropertiesExplorerProps) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All cities");
  const [status, setStatus] = useState("All statuses");
  const [type, setType] = useState("All property types");
  const [maxPrice, setMaxPrice] = useState("Any price");
  const [minimumBedrooms, setMinimumBedrooms] = useState("Any beds");
  const [minimumBathrooms, setMinimumBathrooms] = useState("Any baths");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const deferredQuery = useDeferredValue(query);

  const visibleProperties = properties.filter((property) => {
    const searchableText = `${property.title} ${property.location} ${property.city} ${property.type} ${property.summary}`.toLowerCase();
    const matchesQuery = deferredQuery ? searchableText.includes(deferredQuery.toLowerCase()) : true;
    const matchesCity = city === "All cities" ? true : property.city === city;
    const matchesStatus = status === "All statuses" ? true : property.status === status;
    const matchesType = type === "All property types" ? true : property.type === type;
    const matchesFeatured = featuredOnly ? property.featured : true;
    const matchesPrice =
      maxPrice === "Any price" ? true : property.price <= Number(maxPrice);
    const matchesBedrooms =
      minimumBedrooms === "Any beds" ? true : property.bedrooms >= Number(minimumBedrooms);
    const matchesBathrooms =
      minimumBathrooms === "Any baths" ? true : property.bathrooms >= Number(minimumBathrooms);

    return (
      matchesQuery &&
      matchesCity &&
      matchesStatus &&
      matchesType &&
      matchesFeatured &&
      matchesPrice &&
      matchesBedrooms &&
      matchesBathrooms
    );
  });

  return (
    <section className="pb-20 sm:pb-24">
      <Container className="space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-[#100e0d] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.24)] sm:p-8">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-[#c9aa71]">
            <SlidersHorizontal className="h-4 w-4" />
            Filter listings
          </div>
          <div className="mt-6 grid gap-4 xl:grid-cols-[1.4fr_repeat(6,1fr)]">
            <label className="relative block">
              <span className="sr-only">Search properties</span>
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7e7367]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-[#161311] py-3 pr-4 pl-11 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
                placeholder="Search by title, city, or location"
              />
            </label>

            <SelectField value={city} onChange={setCity} options={["All cities", ...propertyCities]} label="City" />
            <SelectField value={status} onChange={setStatus} options={["All statuses", ...propertyStatuses]} label="Status" />
            <SelectField value={type} onChange={setType} options={["All property types", ...propertyTypes]} label="Type" />
            <SelectField
              value={maxPrice}
              onChange={setMaxPrice}
              label="Price"
              options={[
                "Any price",
                "15000000",
                "40000000",
                "150000000",
                "500000000",
                "2000000000",
              ]}
              labels={{
                "Any price": "Any price",
                "15000000": "Up to ₦15M",
                "40000000": "Up to ₦40M",
                "150000000": "Up to ₦150M",
                "500000000": "Up to ₦500M",
                "2000000000": "Up to ₦2B",
              }}
            />
            <SelectField value={minimumBedrooms} onChange={setMinimumBedrooms} options={["Any beds", "1", "2", "3", "4", "5"]} label="Bedrooms" />
            <SelectField value={minimumBathrooms} onChange={setMinimumBathrooms} options={["Any baths", "1", "2", "3", "4", "5"]} label="Bathrooms" />
          </div>

          <label className="mt-5 inline-flex items-center gap-3 text-sm text-[#d8d0c5]">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(event) => setFeaturedOnly(event.target.checked)}
              className="h-4 w-4 rounded border-white/15 bg-[#161311] text-[#d8b87a] focus:ring-[#d8b87a]/60"
            />
            Featured properties only
          </label>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-[#998f83]">
            {visibleProperties.length} curated listing{visibleProperties.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {visibleProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index < 3} />
          ))}
        </div>

        {visibleProperties.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-white/12 bg-[#100e0d] px-6 py-12 text-center text-[#bdb3a7]">
            No properties match the current filter set. Adjust the filters or contact our team for a custom shortlist.
          </div>
        ) : null}
      </Container>
    </section>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  labels?: Record<string, string>;
};

function SelectField({ label, value, options, onChange, labels }: SelectFieldProps) {
  return (
    <label className="space-y-2">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-[#161311] px-4 py-3 text-sm text-white outline-none transition focus:border-[#d8b87a]"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#161311]">
            {labels?.[option] ?? option}
          </option>
        ))}
      </select>
    </label>
  );
}
