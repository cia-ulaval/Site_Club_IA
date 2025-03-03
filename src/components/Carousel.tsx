import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/img/compétition.png", title: "Compétition CIA" },
    { image: "/img/club2024.png", title: "Première Rencontre 2024" },
    { image: "/img/clubrencontre.png", title: "Début de FlappyEEG" },
    { image: "/img/testclub.png", title: "Démonstration du casque EEG" },
    { image: "/img/presentation.png", title: "5-7 présentation" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden border-2 border-red-600 rounded-lg">
        <div className="relative w-full pt-[56.25%]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-red-600">
                <p className="text-white text-center">{slide.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-full z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
