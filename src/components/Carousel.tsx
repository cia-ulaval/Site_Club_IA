import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StyledCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    if (!isHovered) {
      const timer = setInterval(nextSlide, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <section className="w-full max-w-4xl mx-auto mb-16 p-4">
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-red-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-950/20 z-20">
          <div
            className="h-full bg-red-600 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        <div className="relative group">
          <div className="aspect-[16/9] relative">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="object-cover w-full h-full transition-transform duration-500"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent"
              style={{
                background:
                  "linear-gradient(to top, rgba(127, 29, 29, 0.9) 0%, rgba(127, 29, 29, 0) 30%)",
              }}
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform">
              <h3 className="text-xl font-bold text-white">
                {slides[currentSlide].title}
              </h3>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-950/70 hover:bg-red-900 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-950/70 hover:bg-red-900 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-red-500 w-4" : "bg-red-500/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyledCarousel;
