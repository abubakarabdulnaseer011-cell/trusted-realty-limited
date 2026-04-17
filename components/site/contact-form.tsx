"use client";

import { ArrowRight } from "lucide-react";
import { useId, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { serviceOptions } from "@/lib/validators";

type ContactFormProps = {
  initialService?: string;
  propertyTitle?: string;
  propertyUrl?: string;
  source?: string;
  compact?: boolean;
  className?: string;
};

type SubmissionState =
  | {
      status: "idle";
      message?: string;
    }
  | {
      status: "success" | "error";
      message: string;
    };

export function ContactForm({
  initialService = "General Inquiry",
  propertyTitle = "",
  propertyUrl = "",
  source = "Website inquiry",
  compact = false,
  className,
}: ContactFormProps) {
  const formId = useId();
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      city: String(formData.get("city") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
      propertyTitle,
      propertyUrl,
      source,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      startTransition(() => {
        if (response.ok) {
          form.reset();
          setResult({
            status: "success",
            message: data.message ?? "Thank you. Your inquiry has been received.",
          });
          setIsSubmitting(false);
          return;
        }

        setResult({
          status: "error",
          message: data.message ?? "We could not submit your inquiry. Please try again.",
        });
        setIsSubmitting(false);
      });
    } catch {
      startTransition(() => {
        setResult({
          status: "error",
          message: "We could not submit your inquiry. Please check your connection and try again.",
        });
        setIsSubmitting(false);
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} aria-describedby={`${formId}-message`}>
      <div className={cn("grid gap-4", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}>
        <label className="space-y-2 text-sm text-[#e7dfd4]">
          <span>Full name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="w-full rounded-2xl border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm text-[#e7dfd4]">
          <span>Email address</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-2xl border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-2 text-sm text-[#e7dfd4]">
          <span>Phone number</span>
          <input
            required
            name="phone"
            autoComplete="tel"
            className="w-full rounded-2xl border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
            placeholder="+234..."
          />
        </label>

        <label className="space-y-2 text-sm text-[#e7dfd4]">
          <span>Service type</span>
          <select
            name="service"
            defaultValue={initialService}
            className="w-full rounded-2xl border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition focus:border-[#d8b87a]"
          >
            {serviceOptions.map((service) => (
              <option key={service} value={service} className="bg-[#110f0e]">
                {service}
              </option>
            ))}
          </select>
        </label>

        {!compact ? (
          <>
            <label className="space-y-2 text-sm text-[#e7dfd4]">
              <span>Preferred city</span>
              <input
                name="city"
                className="w-full rounded-2xl border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
                placeholder="Lagos, Abuja, Port Harcourt..."
              />
            </label>

            <label className="space-y-2 text-sm text-[#e7dfd4]">
              <span>Budget or mandate</span>
              <input
                name="budget"
                className="w-full rounded-2xl border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
                placeholder="₦250M budget, 2-year lease..."
              />
            </label>
          </>
        ) : null}
      </div>

      <label className="space-y-2 text-sm text-[#e7dfd4]">
        <span>How can we help?</span>
        <textarea
          required
          name="message"
          rows={compact ? 5 : 6}
          className="w-full rounded-[1.5rem] border border-white/10 bg-[#110f0e] px-4 py-3 text-white outline-none transition placeholder:text-[#7e7367] focus:border-[#d8b87a]"
          placeholder="Share the property, location, brief, or investment goal you would like us to help with."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="min-w-[220px]" disabled={isSubmitting || isPending}>
          {isSubmitting || isPending ? "Submitting..." : "Submit Inquiry"}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <p className="text-xs leading-6 text-[#8b8175]">
          Email delivery switches on automatically when <code>RESEND_API_KEY</code>, <code>CONTACT_TO_EMAIL</code>, and <code>CONTACT_FROM_EMAIL</code> are configured.
        </p>
      </div>

      <div id={`${formId}-message`} aria-live="polite">
        {result.status !== "idle" ? (
          <p
            className={cn(
              "rounded-2xl border px-4 py-3 text-sm leading-7",
              result.status === "success"
                ? "border-[#32553f] bg-[#14221a] text-[#d5f0dd]"
                : "border-[#744040] bg-[#261313] text-[#f5d8d8]",
            )}
          >
            {result.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
