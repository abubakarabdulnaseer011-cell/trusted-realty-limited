import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 text-left text-[#f7f2eb]", className)}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b87a]/60 bg-[#16120f]/70 font-serif text-lg tracking-[0.2em] text-[#d8b87a]">
        TR
      </span>
      <span className="block">
        <span className="block text-[0.66rem] uppercase tracking-[0.32em] text-[#c9aa71]">
          Trusted Realty
        </span>
        <span className="block font-serif text-lg tracking-[0.08em] text-[#f7f2eb]">
          Limited
        </span>
      </span>
    </Link>
  );
}
