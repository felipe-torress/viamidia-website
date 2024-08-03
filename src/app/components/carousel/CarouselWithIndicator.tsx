"use client";

import styles from "@components/carousel/carousel.module.css";
import acmPannelsImage from "@images/acm-panels.jpg";
import adesivagemImage from "@images/adesivagem.jpeg";
import dimentionalLetterImage from "@images/letra-caixa.jpg";
import React, { useEffect, useState } from "react";
import HorizontalImageCarousel from "./HorizontalImageCarousel";
import {
  mapToCarouselItemIndicatorsList,
  mapToImagesList,
} from "./model/mappers";
import { CarouselItem } from "./model/models";
import CarouselIndicator from "./CarouselIndicator";

const CarouselWithIndicator: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      imageUrl: acmPannelsImage.src,
      title: "Fachadas",
      description: "A melhor opção para se destacar",
    },
    {
      imageUrl: dimentionalLetterImage.src,
      title: "Letras Caixa",
      description:
        "A alternativa moderna, que pode contar com iluminação integrada",
    },
    {
      imageUrl: adesivagemImage.src,
      title: "Adesivagem",
      description:
        "Sua frota de veículos personalizada com sua identidade visual",
    },
  ];

  const onClick = () => {
    const currentItem = carouselItems[currentSlide];
    alert(currentItem.title);
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const totalPages = carouselItems.length;

  // Function to go to the next page
  const goToNextPage = () => {
    setCurrentSlide((prevPage) => (prevPage + 1) % totalPages);
  };

  // Set up an effect to change the page every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNextPage, 5000);
    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer} onClick={onClick}>
      <div className={styles.horizontalCarouselWrapper}>
        <HorizontalImageCarousel
          images={mapToImagesList(carouselItems)}
          currentSlide={currentSlide}
          onSlideChange={handleSlideChange}
        />
        <div className={styles.gradientOverlay}></div>
      </div>
      <CarouselIndicator
        indicators={mapToCarouselItemIndicatorsList(carouselItems)}
        currentSlide={currentSlide}
      />
    </div>
  );
};

export default CarouselWithIndicator;
