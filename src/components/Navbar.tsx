
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-effect shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/c20a7c1c-e4c3-48f0-af3f-5b59edf1ae83.png" 
            alt="NINO Web Design & Marketing" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="underline-animation text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#benefits" className="underline-animation text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Why Us
          </a>
          <a href="#contact" className="underline-animation text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
          <Button>Get Started</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-effect shadow-lg p-6 flex flex-col gap-4 md:hidden animate-slide-up">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="text-foreground/80 hover:text-foreground px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-foreground px-4 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="mt-2" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
