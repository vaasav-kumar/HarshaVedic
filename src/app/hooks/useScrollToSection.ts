import { useCallback } from "react";
import { useNavigate } from "react-router";

const HEADER_OFFSET = 96;

export function useScrollToSection() {
  const navigate = useNavigate();

  return useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      } else {
        navigate(`/#${id}`);
      }
    },
    [navigate],
  );
}
