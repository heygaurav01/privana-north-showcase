import { MapPin, Navigation, School, Hospital, ShoppingBag, Plane } from "lucide-react";
import { Card } from "@/components/ui/card";

const locationFeatures = [
  { icon: Navigation, title: "5 Minutes", description: "NH-8 Highway" },
  { icon: School, title: "10 Minutes", description: "Top Schools" },
  { icon: Hospital, title: "8 Minutes", description: "Multi-Specialty Hospitals" },
  { icon: ShoppingBag, title: "15 Minutes", description: "Shopping Malls" },
  { icon: Plane, title: "30 Minutes", description: "IGI Airport" },
];

export const Location = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Prime Location
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Strategically located in Sector 77, Gurgaon with excellent connectivity 
            to major landmarks and business hubs
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Location Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Sector 77, Gurgaon</h3>
                <p className="text-muted-foreground">Haryana, India</p>
              </div>
            </div>

            {locationFeatures.map((feature, index) => (
              <Card
                key={index}
                className="flex items-center gap-4 border-none bg-card p-6 shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <Card className="overflow-hidden border-none shadow-premium">
            <div className="aspect-square w-full bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2605908919394!2d77.06721931508076!3d28.45319098248847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f6b123456f%3A0x1234567890abcdef!2sSector%2077%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DLF Privana North Location"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
