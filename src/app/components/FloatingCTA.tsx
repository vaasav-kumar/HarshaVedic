import { useEffect, useState } from "react";
import { Calendar, Phone, X } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-6 md:left-auto md:right-6 md:p-0 animate-slide-up">
      <div className="md:hidden bg-white/95 backdrop-blur-md border border-brand-green/10 rounded-2xl shadow-2xl p-4 flex items-center gap-3">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground p-1"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
        <div className="flex-1 min-w-0 pr-6">
          <p className="text-sm font-semibold text-brand-green">
            Ready to heal naturally?
          </p>
          <p className="text-xs text-muted-foreground">
            Same-week appointments available
          </p>
        </div>
        <Button onClick={scrollToConsultation} className="btn-cta-gold shrink-0 px-4 py-2 h-auto text-sm">
          <Calendar size={16} />
          Book Now
        </Button>
      </div>

      <div className="hidden md:flex flex-col gap-2 items-end">
        <button
          onClick={() => setDismissed(true)}
          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-brand-green/10"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
        <Button
          onClick={scrollToConsultation}
          className="btn-cta-gold animate-pulse-glow px-6 py-6 text-base rounded-2xl shadow-2xl"
        >
          <Calendar className="mr-2" size={20} />
          Book Consultation
        </Button>
        <a
          href="tel:7904094949"
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md text-brand-green font-semibold text-sm hover:bg-white transition-colors border border-brand-green/10"
        >
          <Phone size={16} />
          7904094949
        </a>
        <a
          href="https://wa.me/917904094949"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] px-4 py-2 rounded-xl shadow-md text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
