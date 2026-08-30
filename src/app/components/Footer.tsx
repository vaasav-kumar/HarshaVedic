import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoIcon from "../../assets/logo.png";
import {
  FORMATTED_ADDRESS,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_MAPS_EMBED_URL,
} from "../config/seo";
import { SERVICE_PAGES } from "../config/servicePages";

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

      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
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
                  Ayurveda Clinic & Wellness Center in Medavakkam, Chennai
                </p>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Harsha Vedic brings Kerala Panchakarma, detox therapy, pain
              management, women's health, and stress relief from our Medavakkam
              clinic — serving Tambaram, Pallikaranai, Velachery, Perumbakkam,
              and surrounding areas. Your trusted partner in natural healing and
              holistic wellness.
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
                href="https://wa.me/917904094949"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dr-harsita-kamlesh-335a4b238/"
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
                <Link
                  to="/"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Services
                </Link>
              </li>
              <li>
                <Link
                  to="/treatments"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Treatments
                </Link>
              </li>
              <li>
                <Link
                  to="/wellness-programs"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Wellness Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/#consultation"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-green-100 hover:text-white transition hover:pl-2 inline-block"
                >
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-green-600 rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-3 text-green-100">
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    to={`/${page.slug}`}
                    className="flex items-center gap-2 hover:text-white transition hover:pl-1"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>
                    {page.h1
                      .replace(" in Chennai", "")
                      .replace(" in Medavakkam, Chennai", "")}
                  </Link>
                </li>
              ))}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <a
                  href="https://wa.me/917904094949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-2 hover:text-white transition font-semibold"
                >
                  WhatsApp: +91-7904094949
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
                  <div>Mon - Sat: 9:00 AM - 9:00 PM</div>
                  <div>Sun: 9:00 AM - 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 md:mb-12">
          <h4 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-green-600 rounded-full"></span>
            Visit Us
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="space-y-4">
              <div className="flex gap-3 text-green-100">
                <div className="w-10 h-10 bg-green-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-white mb-1">
                    Harsha Vedic Ayurveda Clinic & Wellness Center
                  </p>
                  <p className="leading-relaxed">{FORMATTED_ADDRESS}</p>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-amber-300 hover:text-amber-200 font-medium transition"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-green-700/50 shadow-xl">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Harsha Vedic Ayurveda Clinic location on Google Maps"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-green-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center sm:text-left">
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
