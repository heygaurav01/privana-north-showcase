import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Maximize2 } from "lucide-react";
import floorPlanImage from "@/assets/floor-plan.png";

export const FloorPlans = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = floorPlanImage;
    link.download = 'DLF-Privana-North-Floor-Plan.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Floor Plans & Master Plan
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore the thoughtfully designed floor plans of our 4 BHK apartments
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-none shadow-premium">
            <div className="relative group">
              <img 
                src={floorPlanImage}
                alt="DLF Privana North 4 BHK Floor Plan"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <Button
                  onClick={handleDownload}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Floor Plan
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="p-6 border-none bg-card shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-2">4 BHK + SQ</h3>
              <p className="text-muted-foreground mb-1">Area: 3977 Sq. Ft.* Onwards</p>
              <p className="text-accent font-semibold">₹8.50 Cr* Onwards</p>
            </Card>
            
            <Card className="p-6 border-none bg-card shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-2">Total Units</h3>
              <p className="text-muted-foreground mb-1">1162 Premium Units*</p>
              <p className="text-accent font-semibold">6 Towers, G+50 Floors</p>
            </Card>
            
            <Card className="p-6 border-none bg-card shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-2">Land Area</h3>
              <p className="text-muted-foreground mb-1">17.7 Acres*</p>
              <p className="text-accent font-semibold">Part of 115 Acres Township</p>
            </Card>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          * All dimensions and specifications are indicative and subject to change. 
          Please refer to the official documentation for accurate details.
        </p>
      </div>
    </section>
  );
};
