import { z } from "zod";

// Form validation schema for contact form (UI only - no database)
export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  service: z.string().optional(),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
