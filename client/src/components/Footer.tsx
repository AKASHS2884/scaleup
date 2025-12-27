import { Link } from "wouter";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
const logo = "/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 pt-16 pb-8">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md overflow-hidden border border-white/10">
                <img src={logo} alt="ScaleUp" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-xl">SCALEUP.AI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Helping businesses grow through smart websites, intelligent automation, and applied AI solutions.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/akashs2884" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/akashsx28" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/scaleup.ai?igsh=MW9qZzE1NXo1bG4zOQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:akashsubramani28@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Process</a></li>
              <li><a href="#founder" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Chennai, India</li>
              <li>
                <a href="mailto:akashsubramani28@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  akashsubramani28@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ScaleUp AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
