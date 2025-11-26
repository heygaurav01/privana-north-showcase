import { Waves, Dumbbell, Trees, ShieldCheck, Sparkles, Users, Car, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import amenitiesImage from "@/assets/amenities.jpg";

const amenitiesList = [
  { icon: Waves, title: "Swimming Pool", description: "Olympic-size pool with kids section" },
  { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gym equipment" },
  { icon: Trees, title: "Landscaped Gardens", description: "Beautiful green spaces" },
  { icon: ShieldCheck, title: "24/7 Security", description: "Advanced security systems" },
  { icon: Sparkles, title: "Clubhouse", description: "Premium amenities & facilities" },
  { icon: Users, title: "Community Hall", description: "For events and gatherings" },
  { icon: Car, title: "Parking", description: "Ample covered parking space" },
  { icon: Zap, title: "Power Backup", description: "100% power backup facility" },
];

export const Amenities = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            World-Class Amenities
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Experience a lifestyle of comfort and convenience with our premium amenities
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Amenities Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {amenitiesList.map((amenity, index) => (
              <Card
                key={index}
                className="group border-none bg-card p-6 shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <amenity.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground">
                  {amenity.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-premium">
            <img
              src={amenitiesImage}
              alt="Luxury Amenities"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
