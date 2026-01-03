import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slideshow1 from "@/assets/slideshow-1.jpg";
import slideshow2 from "@/assets/slideshow-2.jpg";
import slideshow3 from "@/assets/slideshow-3.jpg";
import slideshow4 from "@/assets/slideshow-4.jpg";
import slideshow5 from "@/assets/slideshow-5.jpg";
import slideshow6 from "@/assets/slideshow-6.jpg";
import slideshow7 from "@/assets/slideshow-7.jpg";
import slideshow8 from "@/assets/slideshow-8.jpg";
import slideshow9 from "@/assets/slideshow-9.jpg";
import slideshow10 from "@/assets/slideshow-10.jpg";
import slideshow11 from "@/assets/slideshow-11.jpg";
import slideshow12 from "@/assets/slideshow-12.jpg";
import slideshow13 from "@/assets/slideshow-13.jpg";
import slideshow14 from "@/assets/slideshow-14.jpg";
import slideshow15 from "@/assets/slideshow-15.jpg";
import slideshow16 from "@/assets/slideshow-16.jpg";
import slideshow17 from "@/assets/slideshow-17.jpg";
import slideshow18 from "@/assets/slideshow-18.jpg";

const slides = [
  slideshow1,
  slideshow2,
  slideshow3,
  slideshow4,
  slideshow5,
  slideshow6,
  slideshow7,
  slideshow8,
  slideshow9,
  slideshow10,
  slideshow11,
  slideshow12,
  slideshow13,
  slideshow14,
  slideshow15,
  slideshow16,
  slideshow17,
  slideshow18,
];

export const ProjectSlideshow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / 2.5;
    
    if (direction === "right") {
      // If at the end, loop back to start
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      // If at the start, loop to end
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(interval);
  }, [scroll, isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 p-3 shadow-lg transition-all hover:bg-white hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(40%-1rem)] aspect-[4/3] rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={slide}
              alt={`Project ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
