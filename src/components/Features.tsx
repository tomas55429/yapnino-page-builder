
import { useEffect, useRef } from "react";
import { 
  Layout, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  PenTool, 
  Smartphone, 
  Zap 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0
}: { 
  icon: any, 
  title: string, 
  description: string, 
  delay?: number 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Card 
      ref={cardRef} 
      className="opacity-0 h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300"
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-balance">{description}</p>
      </CardContent>
    </Card>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30 -z-10"></div>
      
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All-Inclusive Web Design Package</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to establish your online presence for just $399
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard 
            icon={Layout} 
            title="4-Page Website" 
            description="Home, About, Services, and Contact pages fully designed to showcase your business."
            delay={100}
          />
          
          <FeatureCard 
            icon={Smartphone} 
            title="Mobile Responsive" 
            description="Your site will look great on all devices - desktop, tablet, and smartphone."
            delay={200}
          />
          
          <FeatureCard 
            icon={PenTool} 
            title="Custom Design" 
            description="Tailored to your brand with your logo, colors, and content preferences."
            delay={300}
          />
          
          <FeatureCard 
            icon={Clock} 
            title="Fast Turnaround" 
            description="Get your complete website up and running within 48 hours."
            delay={400}
          />
          
          <FeatureCard 
            icon={ShieldCheck} 
            title="SSL Certificate" 
            description="Built-in security to protect your site and build visitor trust."
            delay={500}
          />
          
          <FeatureCard 
            icon={Zap} 
            title="Performance Optimized" 
            description="Fast-loading pages designed for optimal user experience and SEO."
            delay={600}
          />
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-4 bg-background p-4 rounded-lg border border-border/40 shadow-sm">
            <Sparkles className="text-primary h-6 w-6" />
            <p className="font-medium">Need additional pages? Add extra pages for just $99 each.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
