import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoWithTitle from "../../assets/logo-with-title.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goToSection = (id: string) => {
    setIsMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-green-100">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              if (isHome) {
                goToSection("home");
              }
            }}
          >
            <img
              src={logoWithTitle}
              alt="Harsha Vedic Logo"
              className="h-10 sm:h-12 md:h-14 w-auto max-h-14 object-contain hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => goToSection("home")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => goToSection("about")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => goToSection("prakriti")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Prakriti Test
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => goToSection("services")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => goToSection("consultation")}
              className="text-gray-700 hover:text-green-700 transition font-medium relative group"
            >
              Consultation
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => goToSection("contact")}
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
            <a
              href="https://wa.me/917904094949"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 text-white bg-[#25D366] px-4 py-2 rounded-full hover:bg-[#20bd5a] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-semibold">WhatsApp</span>
            </a>
            <Button
              onClick={() => goToSection("consultation")}
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
              onClick={() => goToSection("home")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Home
            </button>
            <button
              onClick={() => goToSection("about")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => goToSection("prakriti")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Prakriti Test
            </button>
            <button
              onClick={() => goToSection("services")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => goToSection("consultation")}
              className="text-gray-700 hover:text-green-700 transition text-left py-2"
            >
              Consultation
            </button>
            <button
              onClick={() => goToSection("contact")}
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
            <a
              href="https://wa.me/917904094949"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-semibold">WhatsApp</span>
            </a>
            <Button
              onClick={() => goToSection("consultation")}
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
