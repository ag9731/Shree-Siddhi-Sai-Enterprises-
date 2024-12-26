import React, { useCallback, useState, useEffect } from "react";
import img1 from "../../assets/Gallery1/galleryImages/1.jpg";
import img2 from "../../assets/Gallery1/galleryImages/2.jpg";
import img3 from "../../assets/Gallery1/galleryImages/3.jpg";
import img4 from "../../assets/Gallery1/galleryImages/4.jpg";
import img5 from "../../assets/Gallery1/galleryImages/5.jpg";
import img6 from "../../assets/Gallery1/galleryImages/6.jpg";
import img7 from "../../assets/Gallery1/galleryImages/7.jpg";
import img8 from "../../assets/Gallery1/galleryImages/8.jpg";
import img9 from "../../assets/Gallery1/galleryImages/9.jpg";
import img10 from "../../assets/Gallery1/galleryImages/10.jpg";
import img11 from "../../assets/Gallery1/galleryImages/11.jpg";
import img12 from "../../assets/Gallery1/galleryImages/12.jpg";
import img13 from "../../assets/Gallery1/galleryImages/13.jpg";
import img14 from "../../assets/Gallery1/galleryImages/14.jpg";
import img15 from "../../assets/Gallery1/galleryImages/15.jpg";
import img16 from "../../assets/Gallery1/galleryImages/16.jpg";
import img17 from "../../assets/Gallery1/galleryImages/17.jpg";
import img18 from "../../assets/Gallery1/galleryImages/18.jpg";
import img19 from "../../assets/Gallery1/galleryImages/19.jpg";
import img20 from "../../assets/Gallery1/galleryImages/20.jpg";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GallerySection2 = () => {
  const gallery = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleImageClick = (index) => setCurrentIndex(index);

  const handleCloseModal = () => setCurrentIndex(null);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }, [gallery.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }, [gallery.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleCloseModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, handleNext, handlePrev]);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <img
              src={gallery[currentIndex]}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handleCloseModal}
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection2;
