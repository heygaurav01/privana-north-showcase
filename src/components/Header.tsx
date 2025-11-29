import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-background/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`transition-colors ${isScrolled ? "text-primary" : "text-primary-foreground"
              }`}>
              <div className="text-2xl font-bold leading-tight">
                PRIVANA
              </div>
              <div className="text-sm font-light tracking-widest -mt-1">
                NORTH
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
            >
              Gallery
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => window.open('tel:+918200201202')}
              variant="outline"
              className={`hidden sm:inline-flex items-center gap-2 border-none shadow-sm transition-colors ${isScrolled
                  ? "bg-white text-gray-800 hover:bg-gray-100"
                  : "bg-white/90 text-gray-800 hover:bg-white"
                }`}
            >
              <Phone className="h-4 w-4" />
              +91 8200 201 202
            </Button>

            <Button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=918200201202&text&type=phone_number&app_absent=0', '_blank')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="text-left text-sm font-medium text-foreground hover:text-accent"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="text-left text-sm font-medium text-foreground hover:text-accent"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="text-left text-sm font-medium text-foreground hover:text-accent"
              >
                Location
              </button>
              <button
                onClick={() => scrollToSection("enquiry-form")}
                className="text-left text-sm font-medium text-foreground hover:text-accent"
              >
                Gallery
              </button>
              <Button
                onClick={() => scrollToSection("enquiry-form")}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
