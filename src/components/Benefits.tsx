
import { useRef, useEffect } from "react";
import { Check } from "lucide-react";

const BenefitItem = ({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode, 
  delay?: number 
}) => {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in");
              entry.target.classList.remove("opacity-0");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <li 
      ref={itemRef} 
      className="flex items-start gap-3 opacity-0"
    >
      <div className="bg-primary/10 rounded-full p-1 mt-1 text-primary">
        <Check className="h-4 w-4" />
      </div>
      <span>{children}</span>
    </li>
  );
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 relative bg-accent/30">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Small Businesses Choose Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand small business needs and budget constraints. Our affordable web design services deliver professional results without the premium agency price tag.
            </p>
            
            <ul className="space-y-4">
              <BenefitItem delay={100}>
                <span className="font-medium">Transparent pricing</span> - No hidden fees or surprise costs
              </BenefitItem>
              <BenefitItem delay={200}>
                <span className="font-medium">Simplified process</span> - We handle the technical details so you don't have to
              </BenefitItem>
              <BenefitItem delay={300}>
                <span className="font-medium">Fast delivery</span> - Get your site up and running quickly
              </BenefitItem>
              <BenefitItem delay={400}>
                <span className="font-medium">Professional results</span> - Modern design principles without the agency price
              </BenefitItem>
              <BenefitItem delay={500}>
                <span className="font-medium">Ongoing support</span> - We're here to help even after your site launches
              </BenefitItem>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
            
            <div className="relative glass-effect rounded-xl p-6 md:p-8 h-full">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold">$</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Just $399</h3>
              <p className="text-xl text-primary mb-6">Complete 4-Page Website</p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Custom design & development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>SEO fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Contact form setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Social media integration</span>
                </li>
              </ul>
              
              <div className="text-muted-foreground text-sm border-t border-border/30 pt-4">
                One-time payment, no recurring fees (hosting and domain not included)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
