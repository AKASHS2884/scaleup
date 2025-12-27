// Vercel serverless function handler
// Import the app to ensure routes are registered
import '../server/index';
import { app } from '../server/index';

// Export as default handler for Vercel
export default app;
