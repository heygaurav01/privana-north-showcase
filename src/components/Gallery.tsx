import { Card } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.jpg";
import interior from "@/assets/interior-1.jpg";
import amenities from "@/assets/amenities.jpg";

const galleryImages = [
  { src: heroBanner, alt: "Exterior View", title: "Modern Architecture" },
  { src: interior, alt: "Interior Living Space", title: "Luxury Interiors" },
  { src: amenities, alt: "Amenities", title: "Premium Amenities" },
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Gallery
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore the luxury and elegance of DLF Privana North
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-premium"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-primary-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
