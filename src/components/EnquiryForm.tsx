import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitFormData } from "@/lib/api";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export const EnquiryForm = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    countryCode: "+91",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmCampaign = searchParams.get("utm_campaign") || undefined;
      const utmSource = searchParams.get("utm_source") || undefined;
      const utmMedium = searchParams.get("utm_medium") || undefined;

      const { success, message } = await submitFormData({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        countryCode: formData.countryCode,
        utmCampaign,
        utmSource,
        utmMedium,
      });

      if (success) {
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "Our team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          countryCode: "+91",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="enquiry-form" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Get In Touch
            </h2>
            <div className="mx-auto h-1 w-24 bg-accent" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Schedule a site visit or request more information about DLF
              Privana North
            </p>
          </div>

          <Card className="border-none bg-card p-8 shadow-premium md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <User className="h-4 w-4 text-accent" />
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="h-12 border-border bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="h-12 border-border bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="h-12 border-border bg-background"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent py-6 text-lg font-semibold text-accent-foreground hover:bg-accent/90 shadow-gold transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-none bg-card p-6 text-center shadow-md">
              <Phone className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 font-semibold text-foreground">Call Us</h3>
              <p className="text-sm text-muted-foreground">+91 8200 201 202</p>
            </Card>
            <Card className="border-none bg-card p-6 text-center shadow-md">
              <Mail className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 font-semibold text-foreground">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                contact@elaris.consulting
              </p>
            </Card>
            <Card className="border-none bg-card p-6 text-center shadow-md">
              <MessageSquare className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 font-semibold text-foreground">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">+91 8200 201 202</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
