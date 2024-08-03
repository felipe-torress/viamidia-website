"use client";

import typography from "@styles/typography.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./carousel.module.css";
import { CarouselItemIndicator } from "./model/models";

interface CarouselIndicatorProps {
  indicators: CarouselItemIndicator[];
  currentSlide: number;
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  indicators,
  currentSlide,
}) => {
  const [currentIndicator, setCurrentIndicator] = useState(
    indicators[currentSlide]
  );
  const [fadeState, setFadeState] = useState(styles.fadeIn);

  useEffect(() => {
    setFadeState(styles.fadeOut);
    const timeout = setTimeout(() => {
      setCurrentIndicator(indicators[currentSlide]);
      setFadeState(styles.fadeIn);
    }, 500); // duration of the fade-out

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className={classNames(styles.carouselIndicator, fadeState)}>
      <span className={classNames(typography.h2, styles.carouselIndicatorTitle)}>{currentIndicator.title}</span>
      <span className={typography.bodyLarge}>
        {currentIndicator.description}
      </span>
    </div>
  );
};

export default CarouselIndicator;
