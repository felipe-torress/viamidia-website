"use client";

import styles from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { CarouselImage } from "./model/models";

interface HorizontalCarouselProps {
  images: CarouselImage[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const HorizontalImageCarousel: React.FC<HorizontalCarouselProps> = ({
  images,
  currentSlide,
  onSlideChange,
}) => {
  return (
    <ReactCarousel
      className={styles.horizontalCarousel}
      selectedItem={currentSlide}
      onChange={(index, _) => onSlideChange(index)}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
    >
      {images.map((element, index) => (
        <img
          key={index}
          src={element.imageUrl}
          alt="carousel image"
          onClick={element.onClick}
        />
      ))}
    </ReactCarousel>
  );
};

export default HorizontalImageCarousel;
