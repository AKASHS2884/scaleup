# ScaleUp Agency Website

A premium, high-impact digital agency website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Professional design with smooth animations and responsive layout.
- **Services Showcase**: Detailed sections for Website Development, Automation, and AI Solutions.
- **Lead Generation**: Contact form that sends emails directly (no storage needed).
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

## Contact Form Email Setup

The contact form sends emails directly using Resend (no storage needed). To enable email functionality:

1. **Get a Resend API Key**:
   - Sign up at [resend.com](https://resend.com)
   - Create an API key in your dashboard

2. **Set Environment Variables**:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: The email address where you want to receive inquiries
   - `FROM_EMAIL`: (Optional) The "from" email address (defaults to `onboarding@resend.dev`)

3. **For Local Development**:
   Create a `.env` file in the project root:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=your-email@example.com
   FROM_EMAIL=noreply@yourdomain.com
   ```

4. **For Vercel Deployment**:
   - Go to your Vercel project settings
   - Add the environment variables in the "Environment Variables" section
   - Redeploy your project
