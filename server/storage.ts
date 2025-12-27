import { users, type User, type InsertUser, inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Inquiry methods
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private inquiries: Map<number, Inquiry>;
  private inquiryIdCounter: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.inquiryIdCounter = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = (this.users.size + 1).toString(); // Simple ID generation
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
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
