import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  inquiryType: z.enum(["travel_quote", "business_meeting", "appointment"]),
  fullName: z.string().trim().min(2, "Indiquez votre nom complet.").max(100),
  email: z.string().trim().email("Indiquez une adresse e-mail valide.").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(120).optional(),
  roleTitle: z.string().trim().max(100).optional(),
  destination: z.string().trim().max(160).optional(),
  departureCity: z.string().trim().max(120).optional(),
  travelDates: z.string().trim().max(120).optional(),
  travelers: z.string().trim().max(50).optional(),
  budget: z.string().trim().max(80).optional(),
  travelType: z.string().trim().max(120).optional(),
  accommodation: z.string().trim().max(120).optional(),
  activities: z.string().trim().max(500).optional(),
  occasion: z.string().trim().max(120).optional(),
  frequency: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Décrivez votre demande en quelques mots.").max(2000),
  preferredDate: z.string().trim().max(80).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((input: InquiryInput) => inquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      inquiry_type: data.inquiryType,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      role_title: data.roleTitle || null,
      destination: data.destination || null,
      departure_city: data.departureCity || null,
      travel_dates: data.travelDates || null,
      travelers: data.travelers || null,
      budget: data.budget || null,
      travel_type: data.travelType || null,
      accommodation: data.accommodation || null,
      activities: data.activities || null,
      occasion: data.occasion || null,
      frequency: data.frequency || null,
      message: data.message,
      preferred_date: data.preferredDate || null,
    });

    if (error) throw new Error("Votre demande n’a pas pu être envoyée. Veuillez réessayer.");
    return { success: true };
  });