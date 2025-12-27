import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private inquiryIdCounter: number;

  constructor() {
    this.inquiries = new Map();
    this.inquiryIdCounter = 1;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.inquiryIdCounter++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date(),
      service: insertInquiry.service ?? null // Ensure optional field is handled
    };
    this.inquiries.set(id, inquiry);
    console.log("New Inquiry Received:", inquiry); // Log for verification since we are in-memory
    return inquiry;
  }
}

export const storage = new MemStorage();
