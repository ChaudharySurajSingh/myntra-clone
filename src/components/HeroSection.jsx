import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function HeroSection({ couponBanner, slides }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const showPreviousSlide = () => {
    setActiveSlide((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));
  };

  const showNextSlide = () => {
    setActiveSlide((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <section className="myntraHero" id="home">
      <div className="couponBanner">
        <img src={couponBanner.image} alt={couponBanner.alt} />
      </div>

      <div className="heroCarousel">
        <button className="heroArrow left" type="button" onClick={showPreviousSlide} aria-label="Previous banner">
          <ChevronLeft size={24} />
        </button>
        <img src={currentSlide.image} alt={currentSlide.alt} />
        <button className="heroArrow right" type="button" onClick={showNextSlide} aria-label="Next banner">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="carouselDots" aria-label="Homepage banner selector">
        {slides.map((slide, index) => (
          <button key={slide.id} className={activeSlide === index ? "active" : ""} type="button" onClick={() => setActiveSlide(index)}>
            {index + 1}
          </button>
        ))}
      </div>

      <div className="sideOfferTab">UPTO Rs200 OFF</div>
    </section>
  );
}

export default HeroSection;
