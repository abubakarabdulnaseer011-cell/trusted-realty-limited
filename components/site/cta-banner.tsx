import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d8b87a]/20 bg-[linear-gradient(135deg,#181410_0%,#0f0d0b_55%,#1f1a14_100%)] px-8 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-12 sm:py-14">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(216,184,122,0.22),transparent_55%)]" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9aa71]">{eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#f7f2eb] sm:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#bdb3a7]">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} className={buttonVariants({ variant: "primary", size: "lg" })}>
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link href={secondaryHref} className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
