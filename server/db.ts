import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// For Vercel/Windows "no complex backend" mode, we don't strictly enforce DATABASE_URL
// if we are using MemStorage. We'll just export a dummy or null if it's missing.

const connectionString = process.env.DATABASE_URL;

export const pool = connectionString ? new Pool({ connectionString }) : null;
export const db = pool ? drizzle(pool, { schema }) : null;
