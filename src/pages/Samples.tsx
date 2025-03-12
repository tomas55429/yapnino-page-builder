
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
    ]
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
    ]
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
    ]
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
    ]
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
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{sample.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-base">{sample.description}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="rounded-lg overflow-hidden border border-border mb-6">
            <img 
              src={sample.fullImageUrl} 
              alt={`${sample.title} full website`} 
              className="w-full object-cover"
            />
          </div>
          
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
            </CardContent>
          </Card>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground mb-4">Interested in a similar website for your business?</p>
            <Button asChild>
              <Link to="/#contact">Start Your Project</Link>
            </Button>
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
