import { z } from "zod";

export const serviceOptions = [
  "Residential Property Sales",
  "House Rentals",
  "Apartment Leasing",
  "Commercial Property Services",
  "Property Marketing",
  "Property Sourcing",
  "Real Estate Advisory",
  "Investment Property Opportunities",
  "Property Documentation Support",
  "Diaspora Client Support",
  "Investor Relations",
  "General Inquiry",
] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a reachable phone number."),
  service: z.string().trim().min(2, "Please choose a service."),
  city: z.string().trim().optional().default(""),
  budget: z.string().trim().optional().default(""),
  message: z.string().trim().min(16, "Please share a little more detail."),
  propertyTitle: z.string().trim().optional().default(""),
  propertyUrl: z.string().trim().optional().default(""),
  source: z.string().trim().optional().default("Website inquiry"),
});

export type InquiryPayload = z.infer<typeof inquirySchema>;
