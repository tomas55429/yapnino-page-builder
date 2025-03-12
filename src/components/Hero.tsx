
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="absolute top-1/4 left-[15%] w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-[15%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-secondary rounded-full py-1.5 px-4 text-xs font-medium inline-flex items-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <span className="bg-primary/10 text-primary rounded-full w-5 h-5 inline-flex items-center justify-center mr-2">✓</span>
            Professional websites starting at just $399
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-in opacity-0 text-balance" style={{ animationDelay: "0.4s" }}>
            Beautiful <span className="text-primary">Websites</span> Without The Premium Price Tag
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 text-balance" style={{ animationDelay: "0.6s" }}>
            Get a professionally designed 4-page website perfect for your small business without breaking the bank. Simple pricing, fast delivery.
          </p>
          
          <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="group text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Project 
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
