
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const websiteSamples = [
  {
    id: 1,
    title: "Harmony Spa & Wellness",
    description: "A relaxing spa website with online booking and service showcase.",
    imageUrl: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    tags: ["Wellness", "Booking System", "Service Showcase"]
  },
  {
    id: 2,
    title: "Metro Bistro",
    description: "Restaurant website featuring menu, gallery, and reservation system.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    tags: ["Restaurant", "Menu", "Reservations"]
  },
  {
    id: 3,
    title: "Greenleaf Landscaping",
    description: "Professional landscaping service with portfolio and quote request.",
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop",
    tags: ["Service Business", "Portfolio", "Quote System"]
  },
  {
    id: 4,
    title: "Bright Future Tutoring",
    description: "Educational service with tutor profiles and session booking.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2122&auto=format&fit=crop",
    tags: ["Education", "Booking System", "Team Showcase"]
  }
];

const SampleCard = ({ sample }: { sample: typeof websiteSamples[0] }) => {
  return (
    <div className="bg-background rounded-xl overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all duration-300">
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
      </div>
    </div>
  );
};

const Samples = () => {
  const [selectedSample, setSelectedSample] = useState<typeof websiteSamples[0] | null>(null);

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
              <SampleCard key={sample.id} sample={sample} />
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
      <Footer />
    </div>
  );
};

export default Samples;
