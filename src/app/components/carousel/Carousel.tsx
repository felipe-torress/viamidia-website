"use client";

import styles from "./carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import CarouselItem from "@components/carousel/CarouselItem";
import acmImage from '@images/acm-panels.jpg';
import channelLetterImage from '@images/letra-caixa.jpg';

const Carousel: React.FC = () => {
  return (
    <ReactCarousel
      className={styles.carousel}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      emulateTouch={true}
      interval={4000}
    >
      <CarouselItem
        title="Fachadas"
        imageUrl={acmImage.src}
        onClick={() => alert("Clicked!")}
      />
      <CarouselItem
        title="Letras Caixa"
        imageUrl={channelLetterImage.src}
        onClick={() => alert("Clicked!")}
      />
    </ReactCarousel>
  );
};

export default Carousel;
