import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-28">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9aa71]">Not found</p>
        <h1 className="mt-6 font-serif text-5xl text-[#f7f2eb] sm:text-6xl">
          This address does not lead to a live listing.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#bdb3a7]">
          The page may have moved, or the property has already been repositioned. Continue with a curated search or speak directly with our team.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/properties" className={buttonVariants({ variant: "primary", size: "lg" })}>
            Browse Properties
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            Contact Trusted Realty
          </Link>
        </div>
      </Container>
    </section>
  );
}
