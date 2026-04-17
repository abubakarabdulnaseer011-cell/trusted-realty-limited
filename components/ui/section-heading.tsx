import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#c9aa71]">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-6xl",
          tone === "light" ? "text-[#f7f2eb]" : "text-[#171411]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 sm:text-lg",
            tone === "light" ? "text-[#bdb3a7]" : "text-[#5f564d]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
