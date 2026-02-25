import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoWithTitle from "../../assets/logo-with-title.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-green-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logoWithTitle}
              alt="Harsha Vedic Logo"
              className="h-18 w-auto object-contain hover:scale-105 transition-transform"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("prakriti")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Prakriti Test
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            {/* <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button> */}
            <button
              onClick={() => scrollToSection("consultation")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Consultation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7904094949"
              className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition"
            >
              <Phone size={18} />
              <span className="font-semibold">7904094949</span>
            </a>
            <Button
              onClick={() => scrollToSection("consultation")}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("prakriti")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Prakriti Test
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("consultation")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Consultation
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Contact
            </button>
            <a
              href="tel:7904094949"
              className="flex items-center gap-2 text-green-700 py-2"
            >
              <Phone size={18} />
              <span className="font-semibold">7904094949</span>
            </a>
            <Button
              onClick={() => scrollToSection("consultation")}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full"
            >
              Book Appointment
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
