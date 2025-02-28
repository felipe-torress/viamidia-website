import bombomImage from "@images/homeImagePager/Bombom.jpg";
import dcorImage from "@images/homeImagePager/Dcor.jpg";
import gibaImage from "@images/homeImagePager/Giba.jpg";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import * as styles from "./imagePager.module.css";

const images = [dcorImage, bombomImage, gibaImage];
const contentDescriptions = [
  "Fachada em Letra Caixa - DCor - Ribeirão Preto",
  "Fachada em Letra Caixa - Bombom - Ribeirão Preto",
  "Fachada em ACM - IBuy Giba - Ribeirão Preto",
];

const ImagePager: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const transitions = useTransition(currentImageIndex, {
    key: currentImageIndex, // Use the index as the key
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames(styles.imagePager)}>
      {transitions((style, index) => (
        <animated.img
          key={index} // Ensure each animated item has a unique key
          src={images[index]}
          alt={contentDescriptions[index]}
          style={{ ...style }}
          className={classNames(styles.imagePagerImage)}
        />
      ))}
    </div>
  );
};

export default ImagePager;
