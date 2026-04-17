import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-[0.02em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9aa71]/60 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-[#d8b87a] bg-[#d8b87a] px-6 py-3 text-[#15110d] hover:-translate-y-0.5 hover:bg-[#e1c48e]",
        secondary:
          "border-white/20 bg-white/6 px-6 py-3 text-white backdrop-blur hover:bg-white/12",
        outline:
          "border-[#3b3329] bg-transparent px-6 py-3 text-[#f5f0e8] hover:border-[#d8b87a] hover:text-[#d8b87a]",
        ghost:
          "border-transparent bg-transparent px-0 py-0 text-[#f5f0e8] hover:text-[#d8b87a]",
        light:
          "border-[#d8c7a6] bg-[#f5f0e8] px-6 py-3 text-[#171411] hover:-translate-y-0.5 hover:bg-white",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs uppercase tracking-[0.18em]",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
