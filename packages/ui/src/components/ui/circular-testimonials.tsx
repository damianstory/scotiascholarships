"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const CHARACTER_LIMIT = 855;

  // Reset expanded state when changing students
  useEffect(() => {
    setIsExpanded(false);
  }, [currentIndex]);

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    
    // Find the last space before the limit to avoid cutting words
    let truncateIndex = text.lastIndexOf(' ', limit);
    if (truncateIndex === -1) truncateIndex = limit;
    
    return text.slice(0, truncateIndex).trim();
  };

  const highlightScotiabank = (text: string) => {
    // Replace any variation of scotiabank with proper capitalization and wrap in span
    const parts = text.split(/(\bscotiabank\b)/gi);
    return parts.map((part, index) => {
      if (part.toLowerCase() === 'scotiabank') {
        return (
          <span key={index} style={{ color: colors.arrowBackground, fontWeight: 'bold' }}>
            Scotiabank
          </span>
        );
      }
      return part;
    });
  };

  const currentQuote = testimonials[currentIndex].quote;
  const shouldShowViewMore = currentQuote.length > CHARACTER_LIMIT;
  const displayQuote = isExpanded ? currentQuote : truncateText(currentQuote, CHARACTER_LIMIT);

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
          <div className="flex flex-col text-center md:text-left flex-1 h-[400px] md:h-[450px] lg:h-[500px] overflow-y-auto">
            {testimonials[currentIndex].name === "Nada" ? (
              <p
                className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed"
                style={{ color: colors.testimony }}
              >
                {highlightScotiabank(displayQuote)}
              </p>
            ) : (
              <div className="mb-6">
                <blockquote
                  className="text-sm md:text-base lg:text-lg leading-relaxed"
                  style={{ color: colors.testimony }}
                >
                  "{highlightScotiabank(displayQuote)}
                  {shouldShowViewMore && !isExpanded && "... "}
                  {shouldShowViewMore && isExpanded && " "}
                  {shouldShowViewMore && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="inline text-sm md:text-base font-medium hover:underline transition-colors"
                      style={{ color: colors.arrowBackground }}
                      type="button"
                    >
                      {isExpanded ? 'View less' : 'View more'}
                    </button>
                  )}
                  {!shouldShowViewMore || isExpanded || (shouldShowViewMore && !isExpanded) ? '"' : ''}
                </blockquote>
              </div>
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