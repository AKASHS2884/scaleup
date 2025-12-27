import type { Express } from "express";
import type { Server } from "http";
import { sendInquiryEmail } from "./email";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Email API endpoint - no storage, just send email
  app.post("/api/inquiries", async (req, res) => {
    try {
      // Validate input
      const input = insertInquirySchema.parse(req.body);
      
      // Send email
      await sendInquiryEmail(input);
      
      res.status(200).json({ 
        success: true,
        message: "Inquiry sent successfully" 
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      
      console.error("Error sending email:", err);
      return res.status(500).json({
        success: false,
        message: err instanceof Error ? err.message : "Failed to send inquiry",
      });
    }
  });

  return httpServer;
}
