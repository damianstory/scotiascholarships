"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  theme?: string;
  src: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: {
    name?: string;
    designation?: string;
    testimony?: string;
    arrowBackground?: string;
    arrowForeground?: string;
    arrowHoverBackground?: string;
  };
}

export default function CircularTestimonials({
  testimonials,
  autoplay = true,
  colors = {
    name: "#333333",
    designation: "#6b7280",
    testimony: "#4b5563",
    arrowBackground: "#EC111A",
    arrowForeground: "#FFFFFF",
    arrowHoverBackground: "#333333",
  },
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay, isHovered]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      handlePrevious();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[600px] w-full overflow-hidden py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Student testimonials carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 px-4 max-w-6xl mx-auto"
        >
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src={testimonials[currentIndex].src}
                alt={`Portrait of ${testimonials[currentIndex].name}`}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 288px, 320px"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left flex-1">
            {testimonials[currentIndex].name === "Nada" ? (
              <p
                className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed"
                style={{ color: colors.testimony }}
              >
                {testimonials[currentIndex].quote}
              </p>
            ) : (
              <blockquote
                className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed"
                style={{ color: colors.testimony }}
              >
                "{testimonials[currentIndex].quote}"
              </blockquote>
            )}
            <h3
              className="text-xl md:text-2xl font-bold mb-2"
              style={{ color: colors.name }}
            >
              {testimonials[currentIndex].name}
            </h3>
            <p
              className="text-lg md:text-xl"
              style={{ color: colors.designation }}
            >
              {testimonials[currentIndex].designation}
            </p>
            {testimonials[currentIndex].theme && (
              <p
                className="text-base md:text-lg mt-2 font-medium"
                style={{ color: colors.arrowBackground }}
              >
                Scholarship Theme: {testimonials[currentIndex].theme}
              </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center items-center space-x-6 md:justify-start md:ml-[320px] lg:ml-[352px]">
        <button
          onClick={handlePrevious}
          className="p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: colors.arrowBackground,
            color: colors.arrowForeground,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.arrowHoverBackground || colors.arrowBackground || "#333333";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.arrowBackground || "#EC111A";
          }}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8" : ""
              }`}
              style={{
                backgroundColor: index === currentIndex ? colors.arrowBackground : colors.designation,
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: colors.arrowBackground,
            color: colors.arrowForeground,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.arrowHoverBackground || colors.arrowBackground || "#333333";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.arrowBackground || "#EC111A";
          }}
          aria-label="Next testimonial"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}