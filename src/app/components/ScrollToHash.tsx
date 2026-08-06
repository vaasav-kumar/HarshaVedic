import { useEffect } from "react";
import { useLocation } from "react-router";

const HEADER_OFFSET = 96;

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = setTimeout(() => scrollToId(id), 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
