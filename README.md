# ScaleUp Agency Website

A premium, high-impact digital agency website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Professional design with smooth animations and responsive layout.
- **Services Showcase**: Detailed sections for Website Development, Automation, and AI Solutions.
- **Lead Generation**: Functional contact form (currently logs inquiries).
- **Founder Profile**: dedicated section for the founder.

## Running Locally on Windows

1.  **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2.  **Clone/Download**: Download this project folder to your computer.
3.  **Install Dependencies**:
    Open Command Prompt or PowerShell in the project folder and run:
    ```bash
    npm install
    ```
4.  **Start Development Server**:
    ```bash
    npm run dev
    ```
5.  **View Site**: Open `http://localhost:5000` in your browser.

## Deploying to Vercel

1.  **Push to GitHub**: Upload this project to a GitHub repository.
2.  **Import to Vercel**:
    - Go to [Vercel.com](https://vercel.com) and log in.
    - Click **Add New Project**.
    - Select your GitHub repository.
3.  **Configure Project**:
    - Framework Preset: **Other** (or **Vite** - Vercel will auto-detect)
    - Root Directory: `./`
    - Build Command: `npm run build`
    - Output Directory: `dist/public`
4.  **Deploy**: Click **Deploy**.

## Note on Contact Form

By default, the contact form saves inquiries to in-memory storage (RAM). When the server restarts (or on Vercel serverless functions), data may be reset. For production, you should connect a database (like Supabase or Neon) or an email service (like Resend or SendGrid).
