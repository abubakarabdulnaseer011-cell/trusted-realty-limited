import type { ReactNode } from "react";

import Image from "next/image";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  highlights?: Array<{ label: string; value: string }>;
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  highlights,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#100e0d] pt-32 sm:pt-36", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,184,122,0.16),transparent_30%),linear-gradient(180deg,#151210_0%,#0c0a09_100%)]" />
      <Container className="relative grid gap-10 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">{eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[0.95] text-[#f7f2eb] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#bdb3a7] sm:text-lg">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          {highlights?.length ? (
            <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-[#f7f2eb]">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#9f9588]">{item.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {image ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a1713]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050403]/70 via-transparent to-transparent" />
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={900}
              className="h-[360px] w-full object-cover object-center sm:h-[420px] lg:h-[520px]"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
