"use client";

import React, { useState } from "react";
import HorizontalImageCarousel from "./HorizontalImageCarousel";
import VerticalIndicatorCarousel from "./VerticalIndicatorCarousel";
import styles from "@components/carousel/carousel.module.css";
import { CarouselItem } from "./model/models";
import { useRouter } from "next/navigation";
import {
  mapToImagesList,
  mapToCarouselItemIndicatorsList,
} from "./model/mappers";
import acmPannelsImage from "@images/acm-panels.jpg";
import dimentionalLetterImage from "@images/letra-caixa.jpg";
import adesivagemImage from "@images/adesivagem.jpeg";

const CarouselWithIndicator: React.FC = () => {
    const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const carouselItems: CarouselItem[] = [
    { imageUrl: acmPannelsImage.src, title: "Fachadas", onClick: () => router.push('/servicos/') },
    { imageUrl: dimentionalLetterImage.src, title: "Letras Caixa", onClick: () => router.push('/servicos/') },
    { imageUrl: adesivagemImage.src, title: "Adesivagem", onClick: () => router.push('/servicos/') },
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.horizontalCarouselWrapper}>
        <HorizontalImageCarousel
          images={mapToImagesList(carouselItems)}
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
        />
        <div className={styles.gradientOverlay}></div>
      </div>
      <VerticalIndicatorCarousel
        indicators={mapToCarouselItemIndicatorsList(carouselItems)}
        currentSlide={currentSlide}
      />
    </div>
  );
};

export default CarouselWithIndicator;
