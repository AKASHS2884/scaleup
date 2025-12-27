import { Resend } from "resend";
import type { InsertInquiry } from "@shared/schema";

// Constant recipient email address
const CONTACT_EMAIL = "akashsubramani28@gmail.com";

export async function sendInquiryEmail(inquiry: InsertInquiry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  // For development, allow missing API key (just log instead of sending)
  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.log("📧 [DEV MODE] Email would be sent:", {
        to: CONTACT_EMAIL,
        from: process.env.FROM_EMAIL || "onboarding@resend.dev",
        subject: `New Contact Form Inquiry${inquiry.service ? ` - ${inquiry.service}` : ""}`,
        inquiry,
      });
      return; // Don't actually send in dev mode without config
    }
    throw new Error("RESEND_API_KEY environment variable must be set");
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = CONTACT_EMAIL;

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `New Contact Form Inquiry${inquiry.service ? ` - ${inquiry.service}` : ""}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      ${inquiry.service ? `<p><strong>Service Interest:</strong> ${inquiry.service}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${inquiry.message.replace(/\n/g, "<br>")}</p>
    `,
    replyTo: inquiry.email,
  });
}

