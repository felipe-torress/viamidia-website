import React from "react";
import styles from "./productsSection.module.css";
import typography from "@styles/typography.module.css";
import classNames from "classnames";
import HomeProductCard from "@components/cards/HomeProductCard";
import acmFacadeImage from "@images/acm-facade.jpg";
import dimentionalLetterImage from "@images/letra-caixa.jpg";

const ProductsSection: React.FC = () => {
  return (
    <div className={styles.productsSection}>
      <p className={classNames(typography.h2, typography.radialGradientText)}>
        Conheça nossos serviços
      </p>
      <div className={styles.contactUsSectionContent}>
        <HomeProductCard
          title="Fachadas em ACM"
          text="teste"
          imageSrc={acmFacadeImage.src}
          contentDescription="Fachada geométrica amarela em ACM"
          isTextLeftAligned={true}
        />
        <HomeProductCard
          title="Letras Caixa"
          text="teste"
          imageSrc={dimentionalLetterImage.src}
          contentDescription="Letra caixa iluminada"
          isTextLeftAligned={false}
        />
      </div>
    </div>
  );
};

export default ProductsSection;
