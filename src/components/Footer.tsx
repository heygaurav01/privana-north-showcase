import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-accent">DLF Privana North</h3>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Experience luxury living in the heart of Gurgaon with world-class amenities 
              and exceptional connectivity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  About Project
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Floor Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  RERA Details
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Sector 77, Gurgaon, Haryana, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">info@dlfprivana.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-primary-foreground/60 md:flex-row">
            <p>© 2024 DLF Privana North. All rights reserved.</p>
            <p className="text-xs">
              RERA No: GGM/954/686/2025/57 | This is a template website with placeholder content
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
