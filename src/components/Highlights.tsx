import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  "Gated Community Spread over 25 Acres part of 115 acres township",
  "Exclusive High Rise Towers With Breathtaking Views",
  "World-Class Amenities & Facilities",
  "Premium 4 BHK Apartments with Modern Architecture",
  "Strategic Location with Excellent Connectivity",
  "Lush Green Landscapes and Open Spaces",
  "State-of-the-art Security Systems",
  "Smart Home Features and Automation",
  "Sustainable and Eco-Friendly Design",
  "Close to Schools, Hospitals & Shopping Centers",
];

export const Highlights = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Project Highlights
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover the exceptional features that make DLF Privana North 
            a premier choice for luxury living
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group border-none bg-card p-6 shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 transition-all group-hover:bg-accent group-hover:scale-110">
                    <CheckCircle2 className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-foreground">
                  {highlight}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
