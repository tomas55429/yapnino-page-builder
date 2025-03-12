
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, Star, User, Building, Users, List, Heart } from "lucide-react";
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
    logoUrl: "https://images.unsplash.com/photo-1588845948177-35a6cd787a28?w=500&auto=format&fit=crop&q=60",
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
        {
          name: "Deep Tissue Massage",
          description: "Targets the deeper layers of muscle and connective tissue to release chronic tension.",
          price: "$95 / 60 min",
          icon: "massage"
        },
        {
          name: "Hot Stone Therapy",
          description: "Smooth, heated stones are placed on specific points of the body to warm and relax muscles.",
          price: "$110 / 75 min",
          icon: "stone"
        },
        {
          name: "Aromatherapy",
          description: "Essential oils are added to enhance your massage experience and promote healing.",
          price: "$85 / 60 min",
          icon: "essential-oil"
        },
        {
          name: "Facial Treatments",
          description: "Customized facial treatments to rejuvenate and nourish your skin.",
          price: "$75 / 45 min",
          icon: "facial"
        }
      ],
      testimonialsHeading: "What Our Clients Say",
      testimonials: [
        {
          name: "Sarah M.",
          text: "The deep tissue massage was exactly what I needed. The therapist was attentive and addressed all my problem areas. Highly recommend!",
          rating: 5,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "James L.",
          text: "The staff is professional and the atmosphere is so calming. My hot stone therapy session was incredible. This is my go-to spa now.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "Olivia P.",
          text: "The aromatherapy session helped with my stress and anxiety. I left feeling completely refreshed.",
          rating: 4,
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60"
        }
      ],
      aboutText: "Founded in 2015, Harmony Spa & Wellness is dedicated to providing holistic healing and relaxation services. Our team of certified therapists combines ancient techniques with modern approaches to deliver exceptional experiences tailored to your needs.",
      aboutMission: "Our mission is to create a sanctuary where clients can escape the stresses of everyday life and focus on their wellbeing. We believe in the power of touch and natural elements to restore balance to body and mind.",
      aboutTeam: "Our diverse team includes specialists in massage therapy, skincare, and holistic treatments, all committed to your wellness journey."
    }
  },
  {
    id: 2,
    title: "Metro Bistro",
    description: "Restaurant website featuring menu, gallery, and reservation system.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    fullImageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    logoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60",
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
        {
          name: "Truffle Risotto",
          description: "Arborio rice cooked to perfection, finished with black truffle and aged parmesan.",
          price: "$24",
          dietary: "Vegetarian"
        },
        {
          name: "Pan-Seared Salmon",
          description: "Wild-caught salmon with lemon butter sauce, served with seasonal vegetables.",
          price: "$28",
          dietary: "Gluten-Free"
        },
        {
          name: "Grass-Fed Filet Mignon",
          description: "8oz tender filet with red wine reduction, garlic mashed potatoes and grilled asparagus.",
          price: "$36",
          dietary: ""
        },
        {
          name: "Seasonal Vegetable Tart",
          description: "Flaky pastry filled with roasted vegetables, goat cheese and fresh herbs.",
          price: "$19",
          dietary: "Vegetarian"
        }
      ],
      specialsHeading: "Today's Specials",
      specialsText: "Join us for Happy Hour Monday-Friday, 4-7pm. All drinks 50% off!",
      aboutHeading: "Our Story",
      aboutText: "Metro Bistro was founded in 2010 by award-winning chef Michael Laurent, with a vision to bring fresh, local ingredients to creative, globally-inspired dishes. What started as a small café has grown into one of the city's most beloved dining destinations.",
      aboutMission: "We believe in sustainable cooking practices, supporting local farmers, and creating memorable dining experiences that bring people together.",
      aboutTeam: "Our kitchen team is led by Executive Chef Maria Santos, whose innovative approach to seasonal ingredients has earned the restaurant numerous accolades.",
      testimonialsHeading: "Diner Reviews",
      testimonials: [
        {
          name: "Robert J.",
          text: "The truffle risotto is simply outstanding. The ambiance is perfect for both special occasions and casual dinners.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "Emma T.",
          text: "Excellent service and phenomenal food. The seasonal tart changes regularly and is always delicious.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "David L.",
          text: "Perfect spot for business lunches. Quick service but you never feel rushed.",
          rating: 4,
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60"
        }
      ],
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
    logoUrl: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=500&auto=format&fit=crop&q=60",
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
        {
          name: "Landscape Design",
          description: "Custom designs that blend beauty and functionality, tailored to your property and preferences.",
          price: "Starting at $500",
          icon: "design"
        },
        {
          name: "Garden Maintenance",
          description: "Regular maintenance services to keep your outdoor space looking its best year-round.",
          price: "From $150/month",
          icon: "maintenance"
        },
        {
          name: "Irrigation Systems",
          description: "Efficient watering solutions that save water while keeping your landscape healthy.",
          price: "Custom quote",
          icon: "irrigation"
        },
        {
          name: "Outdoor Lighting",
          description: "Enhance security and ambiance with professionally installed lighting systems.",
          price: "Starting at $800",
          icon: "lighting"
        }
      ],
      portfolioHeading: "Recent Projects",
      portfolioText: "View our latest transformations and get inspired for your project.",
      aboutHeading: "About Greenleaf",
      aboutText: "Established in 2005, Greenleaf Landscaping has been transforming ordinary outdoor spaces into extraordinary landscapes for over 15 years. What sets us apart is our commitment to sustainable practices and attention to detail.",
      aboutMission: "We're dedicated to creating beautiful, functional outdoor spaces that enhance property values and improve quality of life while respecting the environment.",
      aboutTeam: "Our team includes certified landscape architects, experienced gardeners, and installation specialists who bring creativity and expertise to every project.",
      guaranteeHeading: "Our Guarantee",
      guaranteeText: "We stand behind all our work with a 100% satisfaction guarantee.",
      testimonialsHeading: "Client Testimonials",
      testimonials: [
        {
          name: "Jennifer H.",
          text: "Greenleaf completely transformed our backyard from an unused space to our favorite part of the house. Their design team listened to our needs and delivered beyond expectations.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "Thomas R.",
          text: "The irrigation system they installed has both saved us money on water bills and kept our lawn looking perfect even during the dry months.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "Patricia M.",
          text: "Their maintenance team is reliable and thorough. Our property has never looked better.",
          rating: 4,
          image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=500&auto=format&fit=crop&q=60"
        }
      ]
    }
  },
  {
    id: 4,
    title: "Bright Future Tutoring",
    description: "Educational service with tutor profiles and session booking.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2122&auto=format&fit=crop",
    fullImageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
    logoUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60",
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
        {
          name: "Mathematics",
          description: "From basic arithmetic to advanced calculus, our math tutors make complex concepts accessible.",
          levels: "Elementary through College",
          icon: "math"
        },
        {
          name: "Science",
          description: "Expert tutoring in biology, chemistry, physics, and environmental science.",
          levels: "Middle School through College",
          icon: "science"
        },
        {
          name: "English & Writing",
          description: "Improve reading comprehension, essay writing, grammar, and literature analysis.",
          levels: "All ages and levels",
          icon: "english"
        },
        {
          name: "Foreign Languages",
          description: "Spanish, French, Mandarin, and more taught by fluent speakers with teaching experience.",
          levels: "Beginner to Advanced",
          icon: "language"
        }
      ],
      statsHeading: "Why Choose Us",
      stats: [
        "95% student satisfaction rate",
        "Over 500 qualified tutors",
        "Available 7 days a week",
        "Online and in-person options"
      ],
      aboutHeading: "About Bright Future",
      aboutText: "Founded in 2012 by education specialists Dr. Sarah Williams and James Chen, Bright Future Tutoring was created to provide personalized learning experiences that help students reach their full potential.",
      aboutMission: "Our mission is to build students' confidence and skills through customized tutoring that addresses their unique learning styles and academic needs.",
      aboutTeam: "All our tutors hold advanced degrees in their fields and undergo thorough background checks and teaching methodology training.",
      approachHeading: "Our Approach",
      approachText: "We create customized learning plans tailored to each student's unique needs and learning style.",
      testimonialsHeading: "Success Stories",
      testimonials: [
        {
          name: "Alex's Mom",
          text: "My son's math grades went from C to A- in just one semester of working with his Bright Future tutor. The confidence he's gained is priceless.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "Maya J.",
          text: "As a college student struggling with advanced chemistry, I was about to drop the course until I found Bright Future. My tutor explained concepts in ways my professors never could.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=500&auto=format&fit=crop&q=60"
        },
        {
          name: "William T.",
          text: "The SAT prep program helped my daughter raise her score by 200 points. Well worth the investment!",
          rating: 4,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
        }
      ]
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
                  <div className="flex items-center gap-3">
                    <img 
                      src={sample.logoUrl} 
                      alt={`${sample.title} logo`} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="font-bold text-xl">{sample.title}</div>
                  </div>
                  <div className="hidden md:flex space-x-6 text-sm">
                    <span className="cursor-pointer hover:text-primary">Home</span>
                    <span className="cursor-pointer hover:text-primary">About</span>
                    <span className="cursor-pointer hover:text-primary">Services</span>
                    <span className="cursor-pointer hover:text-primary">Reviews</span>
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
              
              {/* Services Section */}
              <div className="pt-8 pb-4">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  {sample.homePageContent.servicesHeading || 
                   sample.homePageContent.menuHeading || 
                   sample.homePageContent.subjectsHeading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(sample.homePageContent.services || 
                   sample.homePageContent.menuItems || 
                   sample.homePageContent.subjects || []).map((item, i) => (
                    <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="mr-4 bg-primary/10 p-2 rounded-full">
                          <List className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                          <div className="mt-2 text-sm font-medium">
                            {item.price && <span>{item.price}</span>}
                            {item.dietary && <span className="text-green-600 ml-2">{item.dietary}</span>}
                            {item.levels && <span className="text-blue-600 ml-2">{item.levels}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* About Section */}
              <div className="pt-8 pb-4 border-t">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  {sample.homePageContent.aboutHeading || "About Us"}
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-primary/10 p-6 rounded-full">
                      <Building className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <p>{sample.homePageContent.aboutText}</p>
                    <p className="font-medium">Our Mission</p>
                    <p>{sample.homePageContent.aboutMission}</p>
                    <p className="font-medium">Our Team</p>
                    <p>{sample.homePageContent.aboutTeam}</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonials Section */}
              <div className="pt-8 pb-4 border-t">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  {sample.homePageContent.testimonialsHeading || "What Our Customers Say"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sample.homePageContent.testimonials.map((testimonial, i) => (
                    <div key={i} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <div className="flex">
                            {[...Array(5)].map((_, index) => (
                              <Star 
                                key={index} 
                                className={`h-4 w-4 ${index < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Additional Section */}
              <div className="mt-6 pt-4 border-t">
                <h2 className="text-xl font-semibold mb-3">
                  {sample.homePageContent.guaranteeHeading || 
                   sample.homePageContent.hoursHeading ||
                   sample.homePageContent.approachHeading || 
                   sample.homePageContent.specialsHeading || ""}
                </h2>
                <p>{sample.homePageContent.guaranteeText || 
                    sample.homePageContent.hours || 
                    sample.homePageContent.approachText ||
                    sample.homePageContent.specialsText || ""}
                </p>
              </div>
              
              {/* Website Footer */}
              <div className="mt-8 pt-4 border-t text-sm text-muted-foreground">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img 
                      src={sample.logoUrl} 
                      alt={`${sample.title} logo`} 
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>© 2023 {sample.title}. All rights reserved.</span>
                  </div>
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
