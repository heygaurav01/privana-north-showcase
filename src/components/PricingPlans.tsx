import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, Crown } from "lucide-react";

const plans = [
  {
    name: "4 BHK Apartments",
    icon: Home,
    price: "₹8.50 Cr",
    suffix: "Onwards*",
    features: [
      "Spacious 4 Bedroom Layout",
      "3,200 - 3,800 Sq.ft*",
      "Premium Finishes",
      "Modular Kitchen",
      "3 Balconies with Views",
      "Dedicated Servant Room",
    ],
    highlighted: false,
  },
  {
    name: "4 BHK Penthouses",
    icon: Crown,
    price: "₹12.50 Cr",
    suffix: "Onwards*",
    features: [
      "Exclusive Penthouse Design",
      "4,500 - 5,200 Sq.ft*",
      "Private Terrace Garden",
      "Premium Imported Fixtures",
      "Panoramic City Views",
      "Smart Home Automation",
    ],
    highlighted: true,
  },
];

export const PricingPlans = () => {
  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry-form');
    enquirySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Pricing & Floor Plans
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Choose from our exclusive collection of premium apartments and penthouses
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-none p-8 shadow-lg transition-all duration-300 hover:shadow-premium hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-accent/10 via-card to-card ring-2 ring-accent"
                  : "bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-4 top-4 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  EXCLUSIVE
                </div>
              )}

              <div className="mb-6">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <plan.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.suffix}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToEnquiry}
                className={`w-full py-6 text-base font-semibold ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Details
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          * All prices and specifications are subject to change without notice. 
          Please contact us for the latest information.
        </p>
      </div>
    </section>
  );
};
