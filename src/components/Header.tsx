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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              DLF <span className="text-accent">Privana North</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("enquiry-form")}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Gallery
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("enquiry-form")}
              className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
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
