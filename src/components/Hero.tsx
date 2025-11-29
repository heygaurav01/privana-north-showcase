import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { HeroForm } from "./HeroForm";

export const Hero = () => {
  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry-form');
    enquirySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="max-w-4xl animate-fade-in-up">
              {/* Main Heading */}
              <div className="mb-4 inline-block rounded-full bg-accent/20 px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wider text-accent">
                  PREMIUM LUXURY LIVING
                </span>
              </div>

              <h1 className="mb-4 text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
                DLF Privana North
              </h1>

              <p className="mb-6 text-2xl font-light text-primary-foreground/90 md:text-3xl">
                4 BHK Apartments & Penthouses
              </p>

              <div className="mb-8 flex flex-wrap items-center gap-6 text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-lg">Sector 77, Gurgaon</span>
                </div>
                <div className="h-6 w-px bg-primary-foreground/30" />
                <div className="text-lg">
                  <span className="text-2xl font-bold text-accent">₹8.50 Cr</span>
                  <span className="ml-1">Onwards*</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={scrollToEnquiry}
                  className="group relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold shadow-gold transition-all hover:shadow-2xl hover:scale-105"
                >
                  Enquire Now
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground bg-transparent px-8 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-primary-foreground/80">
                <div>
                  <div className="text-2xl font-bold text-accent">1162+</div>
                  <div>Premium Units</div>
                </div>
                <div className="h-8 w-px bg-primary-foreground/30" />
                <div>
                  <div className="text-2xl font-bold text-accent">17.7</div>
                  <div>Acres Land</div>
                </div>
                <div className="h-8 w-px bg-primary-foreground/30" />
                <div>
                  <div className="text-2xl font-bold text-accent">G+50</div>
                  <div>Floors</div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="hidden lg:block animate-fade-in-up delay-200">
              <div className="flex justify-end">
                <HeroForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <div className="h-8 w-px bg-primary-foreground/40" />
        </div>
      </div>
    </section>
  );
};
