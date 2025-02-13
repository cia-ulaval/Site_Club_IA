import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StyledCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/media/compétition.png",
      title: "Compétition CIA",
      alt: "Compétition CIA",
    },
    {
      image: "/media/club2024.png",
      title: "Première Rencontre 2024",
      alt: "Première Rencontre 2024",
    },
    {
      image: "/media/clubrencontre.png",
      title: "Début de FlappyEEG",
      alt: "Début de FlappyEEG",
    },
    {
      image: "/media/testclub.png",
      title: "Démonstration du casque EEG",
      alt: "Démonstration du casque EEG",
    },
    {
      image: "/media/presentation.png",
      title: "5-7 présentation",
      alt: "5-7 présentation",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto mb-16 p-4">
      <div className="relative rounded-xl overflow-hidden border-5 border-red-900">
        {/* Main carousel container */}
        <div className="relative">
          {/* Image container */}
          <div className="aspect-video relative">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="object-cover w-full h-full"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-red-900 p-2">
              <h3 className="text-xl font-bold text-white text-center">
                {slides[currentSlide].title}
              </h3>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-800/50 hover:bg-red-800/75 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-800/50 hover:bg-red-800/75 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StyledCarousel;
