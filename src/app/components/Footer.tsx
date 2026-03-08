import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
                href="https://www.instagram.com/harsha_vedic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-11 h-11 bg-green-700/50 hover:bg-green-600 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/harsita-kamlesh-335a4b238/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="w-11 h-11 bg-green-700/50 hover:bg-green-600 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
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
                  Casagrand Firstcity, Cheran Nagar, Perumbakkam, Chennai -
                  600100
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
                  +91-7904094949
                </a>
              </li>
              <li className="flex gap-3 text-green-100 group">
                <div className="w-10 h-10 bg-green-700/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="pt-2">harshavedic@gmail.com</span>
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
