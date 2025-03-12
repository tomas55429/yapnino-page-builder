
import { Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/c20a7c1c-e4c3-48f0-af3f-5b59edf1ae83.png" 
                alt="NINO Web Design & Marketing" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              We create beautiful, affordable websites for small businesses. Get your professional online presence without the premium price tag.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-accent/50 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-foreground/80" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-accent/50 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-foreground/80" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-accent/50 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-foreground/80" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-accent/50 hover:bg-accent flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground/80" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors underline-animation">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/50 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-foreground/80" />
                </div>
                <a href="mailto:info@yapnino.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@yapnino.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/50 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-foreground/80" />
                </div>
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} yapnino.com - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
