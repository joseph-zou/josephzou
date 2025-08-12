import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };
  return (
    <div className="relative w-full mx-auto">
      <img
        className="project-pic"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
