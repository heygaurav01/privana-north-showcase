import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitFormData } from "@/lib/api";

import { useNavigate, useSearchParams } from "react-router-dom";

export const HeroForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",

  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }



    setIsSubmitting(true);

    try {
      const utmCampaign = searchParams.get("utm_campaign") || undefined;
      const utmSource = searchParams.get("utm_source") || undefined;
      const utmMedium = searchParams.get("utm_medium") || undefined;

      const { success, message } = await submitFormData({
        name: formData.name,
        phone: formData.mobile,
        email: formData.email || "",
        countryCode: "+91",
        message: "Hero section registration",
        utmCampaign,
        utmSource,
        utmMedium,
      });

      if (!success) {
        toast({
          title: "Submission Failed",
          description: message,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      toast({
        title: "Registration Successful!",
        description: "We will contact you shortly with the best offers.",
      });
      setFormData({ name: "", mobile: "", email: "" });
      navigate("/thank-you.html");
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      console.error("Error submitting hero form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <Card className="w-full max-w-md bg-white p-6 shadow-2xl rounded-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-gray-900">
          Pre-Register for Best Offers
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Get exclusive pricing and floor plans
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm font-semibold text-gray-800">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-10 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
          />
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="mobile"
            className="text-sm font-semibold text-gray-800"
          >
            Mobile No *
          </Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="h-10 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
          />
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="email"
            className="text-sm font-semibold text-gray-800"
          >
            Email (Optional)
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="h-10 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
          />
        </div>



        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1e3a8a] hover:bg-[#172554] text-white font-semibold h-11 text-base mt-2"
        >
          {isSubmitting ? "Submitting..." : "Register Now"}
        </Button>
      </form>
    </Card>
  );
};
