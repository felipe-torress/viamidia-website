"use client";

import styles from "./carousel.module.css";
import typography from "@styles/typography.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselItemIndicator } from "./model/models";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface CarouselIndicator {
  indicators: CarouselItemIndicator[];
  currentSlide: number;
}

const VerticalIndicatorCarousel: React.FC<CarouselIndicator> = ({
  indicators,
  currentSlide,
}) => {
  const [currentIndicator, setVisibleString] = useState(indicators[currentSlide].title);
  const [fadeState, setFadeState] = useState(styles.fadeIn);

  useEffect(() => {
    setFadeState(styles.fadeOut);
    const timeout = setTimeout(() => {
      setVisibleString(indicators[currentSlide].title);
      setFadeState(styles.fadeIn);
    }, 500); // duration of the fade-out

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className={classNames(styles.carouselIndicator, fadeState)}>
      <span className={typography.h1}>{currentIndicator}</span>
    </div>
  );
};

export default VerticalIndicatorCarousel;
