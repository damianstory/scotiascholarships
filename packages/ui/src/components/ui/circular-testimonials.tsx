"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  theme?: string;
  src: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
  currentIndex: number;
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
  currentIndex,
  colors = {
    name: "#333333",
    designation: "#6b7280",
    testimony: "#4b5563",
    arrowBackground: "#EC111A",
    arrowForeground: "#FFFFFF",
    arrowHoverBackground: "#333333",
  },
}: TestimonialsProps) {

  return (
    <div
      className="relative flex items-center justify-center min-h-[500px] w-full overflow-hidden"
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
              Headed to: {testimonials[currentIndex].designation}
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

    </div>
  );
}