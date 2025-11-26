import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Highlights } from "@/components/Highlights";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { PricingPlans } from "@/components/PricingPlans";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Overview />
      <Highlights />
      <Amenities />
      <Gallery />
      <PricingPlans />
      <Location />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
