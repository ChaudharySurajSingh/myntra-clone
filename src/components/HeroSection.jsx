import { useEffect, useState } from "react";

function HeroSection({ couponBanner, slides }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const showNextSlide = () => {
    setActiveSlide((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
  };

  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const slideTimer = window.setInterval(showNextSlide, 3500);
    return () => window.clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <section className="myntraHero" id="home">
      <div className="couponBanner">
        <img src={couponBanner.image} alt={couponBanner.alt} />
      </div>

      <div className="heroCarousel">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            className={activeSlide === index ? "heroSlide active" : "heroSlide"}
            src={slide.image}
            alt={slide.alt}
          />
        ))}
      </div>

      <div className="carouselDots" aria-label="Homepage banner indicator">
        {slides.map((slide, index) => (
          <span key={slide.id} className={activeSlide === index ? "active" : ""} />
        ))}
      </div>

      <div className="sideOfferTab">UPTO Rs200 OFF</div>
    </section>
  );
}

export default HeroSection;
