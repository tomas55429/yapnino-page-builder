
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const websiteSamples = [
  {
    id: 1,
    title: "Harmony Spa & Wellness",
    description: "A relaxing spa website with online booking and service showcase.",
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    fullImageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    tags: ["Wellness", "Booking System", "Service Showcase"],
    features: [
      "Responsive design for all devices",
      "Online booking system",
      "Service catalog with detailed descriptions",
      "Team member profiles",
      "Testimonials and reviews section"
    ],
    homePageContent: {
      heroTitle: "Relax. Renew. Rejuvenate.",
      heroSubtitle: "Your journey to wellness begins here",
      ctaText: "Book Your Visit",
      servicesHeading: "Our Services",
      services: [
        "Deep Tissue Massage",
        "Hot Stone Therapy",
        "Aromatherapy",
        "Facial Treatments"
      ],
      testimonialsHeading: "What Our Clients Say",
      testimonials: [
        {
          name: "Sarah M.",
          text: "The deep tissue massage was exactly what I needed. Highly recommend!"
        },
        {
          name: "James L.",
          text: "The staff is professional and the atmosphere is so calming. My go-to spa."
        }
      ],
      aboutText: "Founded in 2015, Harmony Spa & Wellness is dedicated to providing holistic healing and relaxation services."
    }
  },
  {
    id: 2,
    title: "Metro Bistro",
    description: "Restaurant website featuring menu, gallery, and reservation system.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    fullImageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    tags: ["Restaurant", "Menu", "Reservations"],
    features: [
      "Interactive food menu with images",
      "Online reservation system",
      "Photo gallery of restaurant and dishes",
      "Special events and promotions page",
      "Contact form and location map"
    ],
    homePageContent: {
      heroTitle: "Culinary Excellence in Every Bite",
      heroSubtitle: "Farm to table cuisine in the heart of the city",
      ctaText: "Reserve a Table",
      menuHeading: "Signature Dishes",
      menuItems: [
        "Truffle Risotto",
        "Pan-Seared Salmon",
        "Grass-Fed Filet Mignon",
        "Seasonal Vegetable Tart"
      ],
      specialsHeading: "Today's Specials",
      specialsText: "Join us for Happy Hour Monday-Friday, 4-7pm. All drinks 50% off!",
      hoursHeading: "Hours",
      hours: "Monday-Thursday: 11am-10pm\nFriday-Saturday: 11am-11pm\nSunday: 10am-9pm"
    }
  },
  {
    id: 3,
    title: "Greenleaf Landscaping",
    description: "Professional landscaping service with portfolio and quote request.",
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop",
    fullImageUrl: "https://images.unsplash.com/photo-1582324113767-79b531e2dfcd?q=80&w=2070&auto=format&fit=crop",
    tags: ["Service Business", "Portfolio", "Quote System"],
    features: [
      "Project portfolio with before/after photos",
      "Service descriptions with pricing information",
      "Online quote request form",
      "Testimonials from satisfied customers",
      "Blog with landscaping tips and advice"
    ],
    homePageContent: {
      heroTitle: "Transform Your Outdoor Space",
      heroSubtitle: "Professional landscaping services for homes and businesses",
      ctaText: "Get a Free Quote",
      servicesHeading: "Our Services",
      services: [
        "Landscape Design",
        "Garden Maintenance",
        "Irrigation Systems",
        "Outdoor Lighting"
      ],
      portfolioHeading: "Recent Projects",
      portfolioText: "View our latest transformations and get inspired for your project.",
      guaranteeHeading: "Our Guarantee",
      guaranteeText: "We stand behind all our work with a 100% satisfaction guarantee."
    }
  },
  {
    id: 4,
    title: "Bright Future Tutoring",
    description: "Educational service with tutor profiles and session booking.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2122&auto=format&fit=crop",
    fullImageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
    tags: ["Education", "Booking System", "Team Showcase"],
    features: [
      "Tutor profiles with qualifications and specialties",
      "Subject catalog with detailed descriptions",
      "Online session booking and payment",
      "Student success stories",
      "Resources and study materials section"
    ],
    homePageContent: {
      heroTitle: "Achieve Your Academic Goals",
      heroSubtitle: "Personalized tutoring for students of all ages",
      ctaText: "Find a Tutor",
      subjectsHeading: "Subjects We Cover",
      subjects: [
        "Mathematics",
        "Science",
        "English & Writing",
        "Foreign Languages"
      ],
      statsHeading: "Why Choose Us",
      stats: [
        "95% student satisfaction rate",
        "Over 500 qualified tutors",
        "Available 7 days a week",
        "Online and in-person options"
      ],
      approachHeading: "Our Approach",
      approachText: "We create customized learning plans tailored to each student's unique needs and learning style."
    }
  }
];

const SampleCard = ({ 
  sample, 
  onClick 
}: { 
  sample: typeof websiteSamples[0],
  onClick: () => void
}) => {
  return (
    <div 
      className="bg-background rounded-xl overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={sample.imageUrl} 
          alt={sample.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{sample.title}</h3>
        <p className="text-muted-foreground mb-4">{sample.description}</p>
        <div className="flex flex-wrap gap-2">
          {sample.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-primary text-sm mt-4 font-medium">Click to view full website</p>
      </div>
    </div>
  );
};

const SampleDetail = ({ 
  sample, 
  isOpen, 
  onClose 
}: { 
  sample: typeof websiteSamples[0] | null,
  isOpen: boolean,
  onClose: () => void 
}) => {
  if (!sample) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{sample.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-base">{sample.description}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 flex flex-col md:flex-row gap-6">
          {/* Full Website Preview - Left side */}
          <div className="md:w-2/3">
            <div className="space-y-6 border border-border rounded-lg overflow-hidden bg-background p-4">
              {/* Website Header */}
              <div className="border-b pb-4">
                <nav className="flex justify-between items-center mb-8">
                  <div className="font-bold text-xl">{sample.title}</div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="cursor-pointer hover:text-primary">Home</span>
                    <span className="cursor-pointer hover:text-primary">About</span>
                    <span className="cursor-pointer hover:text-primary">Services</span>
                    <span className="cursor-pointer hover:text-primary">Contact</span>
                  </div>
                  <Button size="sm">Menu</Button>
                </nav>
              </div>
              
              {/* Hero Section */}
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={sample.fullImageUrl} 
                  alt={`${sample.title} hero`} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6 text-center">
                  <h1 className="text-3xl font-bold mb-3">{sample.homePageContent.heroTitle}</h1>
                  <p className="mb-4">{sample.homePageContent.heroSubtitle}</p>
                  <Button className="mt-2">{sample.homePageContent.ctaText}</Button>
                </div>
              </div>
              
              {/* Main Content Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* First Content Section */}
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">
                    {sample.homePageContent.servicesHeading || sample.homePageContent.menuHeading || sample.homePageContent.subjectsHeading}
                  </h2>
                  <ul className="space-y-2">
                    {(sample.homePageContent.services || 
                      sample.homePageContent.menuItems || 
                      sample.homePageContent.subjects || []).map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Second Content Section */}
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">
                    {sample.homePageContent.testimonialsHeading || 
                     sample.homePageContent.specialsHeading || 
                     sample.homePageContent.portfolioHeading ||
                     sample.homePageContent.statsHeading}
                  </h2>
                  {sample.homePageContent.testimonials ? (
                    <div className="space-y-3">
                      {sample.homePageContent.testimonials.map((testimonial, i) => (
                        <blockquote key={i} className="border-l-2 border-primary pl-3 italic">
                          "{testimonial.text}" - <span className="font-medium">{testimonial.name}</span>
                        </blockquote>
                      ))}
                    </div>
                  ) : (
                    <p>
                      {sample.homePageContent.specialsText || 
                       sample.homePageContent.portfolioText || 
                       sample.homePageContent.stats?.join(' • ')}
                    </p>
                  )}
                </div>
              </div>
              
              {/* About/Additional Section */}
              <div className="mt-6 pt-4 border-t">
                <h2 className="text-xl font-semibold mb-3">
                  {sample.homePageContent.aboutText ? "About Us" : 
                   sample.homePageContent.guaranteeHeading || 
                   sample.homePageContent.hoursHeading ||
                   sample.homePageContent.approachHeading}
                </h2>
                <p>{sample.homePageContent.aboutText || 
                    sample.homePageContent.guaranteeText || 
                    sample.homePageContent.hours || 
                    sample.homePageContent.approachText}</p>
              </div>
              
              {/* Website Footer */}
              <div className="mt-8 pt-4 border-t text-sm text-muted-foreground">
                <div className="flex flex-wrap justify-between items-center">
                  <div>© 2023 {sample.title}. All rights reserved.</div>
                  <div className="flex space-x-4">
                    <span className="cursor-pointer hover:text-primary">Privacy</span>
                    <span className="cursor-pointer hover:text-primary">Terms</span>
                    <span className="cursor-pointer hover:text-primary">Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Website Features - Right side */}
          <div className="md:w-1/3">
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-4">Website Features</h4>
                <ul className="space-y-2">
                  {sample.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary/10 text-primary rounded-full w-5 h-5 inline-flex items-center justify-center mr-2 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {sample.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-secondary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">Interested in a similar website?</p>
                  <Button asChild>
                    <Link to="/#contact">Start Your Project</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Samples = () => {
  const [selectedSample, setSelectedSample] = useState<typeof websiteSamples[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleSampleClick = (sample: typeof websiteSamples[0]) => {
    setSelectedSample(sample);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold">Website Examples</h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            These sample websites showcase our design capabilities. Each website was created for small businesses
            with our affordable $399 package, which includes responsive design and essential pages.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {websiteSamples.map((sample) => (
              <SampleCard 
                key={sample.id} 
                sample={sample} 
                onClick={() => handleSampleClick(sample)}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Ready to get started with your own website?</p>
            <Button size="lg" asChild>
              <Link to="/#contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <SampleDetail 
        sample={selectedSample} 
        isOpen={isDetailOpen} 
        onClose={handleCloseDetail} 
      />
      
      <Footer />
    </div>
  );
};

export default Samples;
