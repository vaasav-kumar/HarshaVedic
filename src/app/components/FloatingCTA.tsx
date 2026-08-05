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
      </div>
    </div>
  );
}
