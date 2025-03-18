import React, { useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  speed?: number; // seconds for one complete loop
  height?: number; // height in pixels
}

export function ImageCarousel({
  images,
  speed = 10,
  height = 50,
}: ImageCarouselProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate the number of copies needed to fill the container
  const itemWidth = height * 1.5; // Maintain 3:2 aspect ratio
  const itemsNeeded = Math.ceil((containerWidth * 2) / itemWidth) + 1;
  const repeatedImages = Array(itemsNeeded).fill(images).flat();

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height }}
    >
      <div
        className="animate-carousel flex"
        style={{
          animationDuration: `${speed}s`,
          gap: "2rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        {repeatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-none"
            style={{
              width: `${itemWidth}px`,
              height: "100%",
            }}
          >
            <img
              src={src}
              alt={`Carousel image ${index}`}
              className="h-full w-full object-cover rounded-lg"
              loading={index < itemsNeeded ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
