"use client";

import styles from "./carousel.module.css";
import typography from "@styles/typography.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { CarouselItemIndicator } from "./model/models";
import classNames from "classnames";

interface VerticalCarouselProps {
  indicators: CarouselItemIndicator[];
  currentSlide: number;
}

const VerticalIndicatorCarousel: React.FC<VerticalCarouselProps> = ({
  indicators,
  currentSlide,
}) => {
  const getNextIndex = () => (currentSlide + 1) % indicators.length;
  const getSecondNextIndex = () => (currentSlide + 2) % indicators.length;

  return (
    <div className={styles.verticalCarousel}>
      <div className={classNames(styles.title, styles.titleCurrent, typography.h1)}>
        {indicators[currentSlide].title}
      </div>
      <div className={classNames(styles.title, styles.titleNext, typography.h2)}>
        {indicators[getNextIndex()].title}
      </div>
      <div className={classNames(styles.title, styles.titleSecondNext, typography.h3)}>
        {indicators[getSecondNextIndex()].title}
      </div>
    </div>
  );
};

export default VerticalIndicatorCarousel;
