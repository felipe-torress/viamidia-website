import React from "react";
import styles from "./productsSection.module.css";
import typography from "@styles/typography.module.css";
import classNames from "classnames";
import HomeProductCard from "@components/cards/HomeProductCard";
import acmFacadeImage from "@images/acm-facade.jpg";
import dimensionalLetterImage from "@images/letra-caixa.jpg";
import strings from "@utils/strings";

const ProductsSection: React.FC = () => {
  return (
    <div className={styles.productsSection}>
      <p className={classNames(typography.h2, typography.radialGradientText)}>
        Conheça nossos serviços
      </p>
      <HomeProductCard
        title="Fachadas em ACM"
        text={strings.acmFacadesDescription}
        imageSrc={acmFacadeImage.src}
        contentDescription="Fachada geométrica amarela em ACM"
        isTextLeftAligned={true}
      />
      <HomeProductCard
        title="Letras Caixa"
        text={strings.dimensionalLettersDescription}
        imageSrc={dimensionalLetterImage.src}
        contentDescription="Letra caixa iluminada"
        isTextLeftAligned={false}
      />
    </div>
  );
};

export default ProductsSection;
