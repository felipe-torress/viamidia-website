import styles from "./carousel.module.css";
import typography from "@styles/typography.module.css";
import classNames from 'classnames';

interface CarouselItemProps {
  imageUrl: string;
  title: string;
  onClick: () => void;
}

// Define the Navbar component
const CarouselItem: React.FC<CarouselItemProps> = ({imageUrl, title, onClick}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.gradientOverlay}></div>
      <div className={classNames(styles.topLeftCornerAlign, typography.h2)}>{title}</div>
    </div>
  );
}; 

export default CarouselItem;
