"use client";

import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./carousel.module.css";
import { CarouselImage } from "./model/models";

interface HorizontalImageCarouselProps {
  images: CarouselImage[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const HorizontalImageCarousel: React.FC<HorizontalImageCarouselProps> = ({
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
      autoPlay={false}
      emulateTouch={false}
    >
      {images.map((element, index) => (
        <img key={index} src={element.imageUrl} alt="carousel image" />
      ))}
    </ReactCarousel>
  );
};

export default HorizontalImageCarousel;
