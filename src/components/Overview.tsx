import { Card } from "@/components/ui/card";
import { Building2, Home, MapPin, TowerControl, Layers, Bed, CheckCircle2, Calendar } from "lucide-react";

const overviewData = [
  { icon: MapPin, label: "Location", value: "Sector 77, Gurgaon" },
  { icon: Building2, label: "Land Area", value: "17.7 Acres*" },
  { icon: Home, label: "No. of Units", value: "1162*" },
  { icon: TowerControl, label: "No. of Towers", value: "06*" },
  { icon: Layers, label: "No. of Floors", value: "G + 50*" },
  { icon: Bed, label: "Unit Variants", value: "4 BHK" },
  { icon: CheckCircle2, label: "Status", value: "Under Construction" },
  { icon: Calendar, label: "RERA ID", value: "GGM/954/686/2025/57" },
];

export const Overview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Project Overview
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Experience luxury living at DLF Privana North, a premium residential development 
            offering world-class amenities and exceptional connectivity in the heart of Gurgaon.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {overviewData.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/10 transition-transform group-hover:scale-150" />
              
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon className="h-7 w-7" />
                </div>
                
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </h3>
                
                <p className="text-xl font-bold text-foreground">
                  {item.value}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
