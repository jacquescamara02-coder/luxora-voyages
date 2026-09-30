import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  imageAlt: string;
}

export function CircularTestimonials({ testimonials, autoplay = true }: { testimonials: Testimonial[]; autoplay?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  const showPrevious = useCallback(() => {
    if (total < 2) return;
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    if (total < 2) return;
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    if (!autoplay || paused || total < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(showNext, 6500);
    return () => window.clearInterval(interval);
  }, [autoplay, paused, showNext, total]);

  if (total === 0) return null;
  const activeTestimonial = testimonials[activeIndex];
  if (!activeTestimonial) return null;

  function positionFor(index: number) {
    if (index === activeIndex) return "is-active";
    if (index === (activeIndex - 1 + total) % total) return "is-previous";
    if (index === (activeIndex + 1) % total) return "is-next";
    return "is-hidden";
  }

  return (
    <div
      ref={sectionRef}
      className="circular-testimonials"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Avis clients Luxora"
      tabIndex={0}
      onFocus={() => setPaused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); showPrevious(); }
        if (event.key === "ArrowRight") { event.preventDefault(); showNext(); }
      }}
    >
      <div className="testimonial-images" aria-hidden="true">
        {testimonials.map((testimonial, index) => (
          <img
            key={`${testimonial.src}-${index}`}
            className={`testimonial-image ${positionFor(index)}`}
            src={testimonial.src}
            alt=""
            loading="lazy"
            width={900}
            height={1125}
          />
        ))}
      </div>

      <div className="testimonial-copy" aria-live="polite" aria-atomic="true">
        <Quote className="testimonial-quote-mark" aria-hidden="true" />
        <div key={activeIndex} className="testimonial-copy-inner">
          <blockquote>« {activeTestimonial.quote} »</blockquote>
          <p className="testimonial-name">{activeTestimonial.name}</p>
          <p className="testimonial-designation">{activeTestimonial.designation}</p>
        </div>

        <div className="testimonial-controls">
          <div className="flex gap-3">
            <Button variant="icon" className="testimonial-arrow" onClick={showPrevious} aria-label="Voir l’avis précédent">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="icon" className="testimonial-arrow" onClick={showNext} aria-label="Voir l’avis suivant">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <p className="testimonial-count" aria-label={`Avis ${activeIndex + 1} sur ${total}`}>
            <span>{String(activeIndex + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}