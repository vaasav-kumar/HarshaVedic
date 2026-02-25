import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Sparkles,
} from "lucide-react";
import logoIcon from "../../assets/logo.png";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform border border-white/20">
                <img
                  src={logoIcon}
                  alt="Harsha Vedic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Harsha Vedic</h3>
                <p className="text-xs text-green-200">
                  Ayurvedic Wellness Clinic
                </p>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Bringing the ancient wisdom of Ayurveda to modern healthcare. Your
              trusted partner in holistic wellness.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-green-700/50 hover:bg-green-600 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-green-700/50 hover:bg-green-600 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-green-700/50 hover:bg-green-600 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-green-600 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Products
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Online Consultation
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-green-600 rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Panchakarma Detox
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Herbal Treatments
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Therapeutic Massages
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Chronic Disease Care
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Stress Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                Online Consultations
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-green-600 rounded-full"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-green-100 group">
                <div className="w-10 h-10 bg-green-700/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="pt-2">
                  123 Wellness Street, Your City, State - 123456
                </span>
              </li>
              <li className="flex gap-3 text-green-100 group">
                <div className="w-10 h-10 bg-green-700/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition">
                  <Phone size={18} className="text-white" />
                </div>
                <a
                  href="tel:7904094949"
                  className="pt-2 hover:text-white transition font-semibold"
                >
                  7904094949
                </a>
              </li>
              <li className="flex gap-3 text-green-100 group">
                <div className="w-10 h-10 bg-green-700/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="pt-2">info@harshavedic.com</span>
              </li>
              <li className="flex gap-3 text-green-100 group">
                <div className="w-10 h-10 bg-green-700/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition">
                  <Clock size={18} className="text-white" />
                </div>
                <div className="pt-1">
                  <div>Mon - Sat: 9:00 AM - 7:00 PM</div>
                  <div>Sun: 10:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-center md:text-left">
              © 2026 Harsha Vedic Ayurvedic Clinic. All rights reserved.
            </p>
            <p className="text-sm text-green-300 text-center md:text-right">
              Led by{" "}
              <span className="font-semibold text-amber-300">
                Dr. Harsita Devi
              </span>{" "}
              - Certified Ayurvedic Physician
            </p>
          </div>
          <p className="text-sm mt-4 text-center text-green-300">
            Disclaimer: Results may vary from person to person. Consult with our
            doctor for personalized treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
