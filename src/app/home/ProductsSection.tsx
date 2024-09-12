import HomeProductCard from "@components/cards/HomeProductCard";
import acmFacadeImage from "@images/acm-facade.jpg";
import dimensionalLetterImage from "@images/letra-caixa.jpg";
import colors from "@styles/colors.module.css";
import typography from "@styles/typography.module.css";
import classNames from "classnames";
import React from "react";
import styles from "./productsSection.module.css";

const ProductsSection: React.FC = () => {
  return (
    <div className={styles.productsSection}>
      <p className={classNames(typography.h2, typography.radialGradientText)}>
        Conheça nossos serviços
      </p>
      <HomeProductCard
        title="Fachadas em ACM"
        Text={ACMFacadesDescription}
        imageSrc={acmFacadeImage.src}
        contentDescription="Fachada geométrica amarela em ACM"
        isTextLeftAligned={true}
      />
      <HomeProductCard
        title="Letras Caixa"
        Text={DimensionalLettersDescription}
        imageSrc={dimensionalLetterImage.src}
        contentDescription="Letra caixa iluminada"
        isTextLeftAligned={false}
      />
    </div>
  );
};

export default ProductsSection;

const ACMFacadesDescription: React.FC = () => {
  return (
    <p className={typography.bodyLarge}>
      A <span className={colors.pastelBlue}>fachada</span> do seu
      estabelecimento é o primeiro contato visual que os clientes têm com sua
      marca, sendo crucial para causar uma{" "}
      <span className={colors.pastelBlue}>boa impressão</span> e{" "}
      <span className={colors.pastelBlue}>atrair novos consumidores</span>. Uma
      fachada atraente e bem cuidada não só destaca seu negócio da concorrência,
      mas também comunica a identidade e os valores da sua marca de forma
      eficaz.
    </p>
  );
};

const DimensionalLettersDescription: React.FC = () => {
  return (
    <p className={typography.bodyLarge}>
      As letras caixa destacam a identidade visual do seu negócio, oferecendo
      alta visibilidade e uma{" "}
      <span className={colors.salmon}>aparência moderna</span>. São duráveis,
      personalizáveis e podem incluir{" "}
      <span className={colors.salmon}>iluminação</span>, valorizando a fachada e
      transmitindo profissionalismo e credibilidade. Ideais para qualquer tipo
      de estabelecimento.
    </p>
  );
};
