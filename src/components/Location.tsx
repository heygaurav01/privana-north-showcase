import { MapPin, Navigation, School, Hospital, ShoppingBag, Plane } from "lucide-react";
import { Card } from "@/components/ui/card";

const locationFeatures = [
  { icon: Navigation, title: "2.5 Km", description: "SPR Road" },
  { icon: Navigation, title: "2.8 Km", description: "Hyatt Regency" },
  { icon: ShoppingBag, title: "2.9 Km", description: "Corner Walk" },
  { icon: School, title: "3.6 Km", description: "Suraj School" },
  { icon: Navigation, title: "3.7 Km", description: "Golf Retreat" },
  { icon: Navigation, title: "4.3 Km", description: "DLF Corporate Greens" },
  { icon: Navigation, title: "5.6 Km", description: "Karma Lake" },
  { icon: Hospital, title: "10.7 Km", description: "Aarvy Hospital" },
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

          {/* Location Map */}
          <Card className="overflow-hidden border-none shadow-premium h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.004999060932!2d76.98104047628951!3d28.38891697579868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dd83ea4a749%3A0x75bef0037f1644ec!2sPrivana%20North%20Sector%2076%20Gurgaon!5e0!3m2!1sen!2sin!4v1764323038279!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};
