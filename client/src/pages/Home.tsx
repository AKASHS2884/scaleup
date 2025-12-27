import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  Bot, 
  Calendar, 
  ArrowRight, 
  CheckCircle2,
  Rocket
} from "lucide-react";
import founderImg from "@assets/founder.jpg";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10" />
        
        <div className="container-padding text-center max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/10 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Projects
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
              Smart Websites. <br/>
              <span className="text-gradient">Applied AI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We build high-performance digital solutions that automate your workflow and scale your business using the latest in Generative AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all"
              >
                Start Your Project <Rocket className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-white/10 bg-transparent hover:bg-white/5 backdrop-blur-sm"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="container-padding">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for Growth</h2>
            <p className="text-muted-foreground text-lg">
              We don't just build websites; we build engines for your business growth using modern tech stacks and AI integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Modern Websites"
              description="Fast, responsive, and SEO-optimized websites built with React and Tailwind that convert visitors into customers."
              icon={Globe}
              delay={0}
            />
            <ServiceCard 
              title="Automation"
              description="Streamline your operations with custom workflows that connect your favorite tools and save hours of manual work."
              icon={Cpu}
              delay={0.1}
            />
            <ServiceCard 
              title="Applied AI"
              description="Leverage Generative AI for content creation, customer support chatbots, and intelligent data analysis."
              icon={Bot}
              delay={0.2}
            />
            <ServiceCard 
              title="Lead Systems"
              description="Integrated booking and lead management systems that ensure you never miss a potential client opportunity."
              icon={Calendar}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 bg-secondary/20 border-y border-white/5">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">How We Work</h2>
              <div className="space-y-8">
                {[
                  { title: "Discovery & Strategy", desc: "We analyze your business goals and identify high-impact automation opportunities." },
                  { title: "Development & AI Integration", desc: "We build your custom solution integrating cutting-edge AI models and workflows." },
                  { title: "Launch & Optimization", desc: "We deploy your system and continuously refine it based on real-world performance data." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={scrollToContact} className="mt-8 bg-white text-black hover:bg-white/90">
                Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10" />
              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <div className="space-y-4 font-mono text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-4 h-4" /> <span>Analysis Complete</span>
                  </div>
                  <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                    <span className="text-blue-400">const</span> <span className="text-yellow-400">growth</span> = <span className="text-purple-400">await</span> scaleup.<span className="text-blue-300">optimize</span>(business);
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-4 h-4" /> <span>AI Models Trained</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-4 h-4" /> <span>System Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="founder" className="py-24">
        <div className="container-padding">
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-96 md:h-auto relative">
                <img 
                  src={founderImg} 
                  alt="Founder" 
                  className="w-full h-full object-cover absolute inset-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold font-display">Akash Subramani</h3>
                  <p className="text-white/80">Founder & Lead Engineer</p>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold font-display mb-6">Engineering the Future</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a GenAI engineer and full-stack developer, I founded ScaleUp with a singular mission: to democratize access to enterprise-grade automation and AI tools for growing businesses.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We don't just write code; we architect systems that work for you while you sleep. From simple landing pages to complex AI agents, we build with precision and purpose.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://akashs2884.github.io/portfoliosite/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    View Personal Portfolio →
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/akashsx28" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px] -z-10" />
        
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Ready to Scale Up?</h2>
              <p className="text-xl text-muted-foreground">
                Leave your details below and we'll engineer a solution tailored to your goals.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
