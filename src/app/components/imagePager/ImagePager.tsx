import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import bombomImage from "@images/homeCarousel/Bombom.jpg";
import dcorImage from "@images/homeCarousel/Dcor.jpg";
import gibaImage from "@images/homeCarousel/Giba.jpg";
import styles from "./imagePager.module.css";
import classNames from "classnames";

const images = [dcorImage, bombomImage, gibaImage];

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
          src={images[index].src}
          alt={`Slider Image ${index}`}
          style={{ ...style }}
          className={classNames(styles.imagePagerImage)}
        />
      ))}
    </div>
  );
};

export default ImagePager;
