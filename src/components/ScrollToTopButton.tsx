import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-red-800 text-white shadow-md hover:bg-red-700 focus:ring-2 focus:ring-gray-300 focus:outline-none transition-all duration-300 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}

export default ScrollToTopButton;
