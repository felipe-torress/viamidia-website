import ServiceCard from "@/app/components/ui/cards/serviceCard/ServiceCard";
import acmFacadeImage from "@images/acm-facade.jpg";
import carWrapping from "@images/envelopamento-automotivo.jpg";
import dimensionalLetterImage from "@images/letra-caixa.jpg";
import * as colors from "@styles/colors.module.css";
import * as typography from "@styles/typography.module.css";
import React from "react";
import BaseHomeSection from "../base/BaseHomeSection";
import * as styles from "./servicesSection.module.css";

const ProductsSection: React.FC = () => (
  <BaseHomeSection id="servicesSection" title="Conheça nossos serviços">
    <div className={styles.servicesSectionContent}>
      <ServiceCard
        title="Fachadas em ACM"
        Text={ACMFacadesDescription}
        imageSrc={acmFacadeImage}
        contentDescription="Fachada em ACM 3D"
      />
      <ServiceCard
        title="Letras Caixa"
        Text={DimensionalLettersDescription}
        imageSrc={dimensionalLetterImage}
        contentDescription="Letra Caixa Iluminada"
      />
      <ServiceCard
        title="Adesivagem de Frotas"
        Text={CarWrappingDescription}
        imageSrc={carWrapping}
        contentDescription="Adesivagem de Frota"
      />
    </div>
  </BaseHomeSection>
);

export default ProductsSection;

const ACMFacadesDescription: React.FC = () => {
  return (
    <p className={typography.bodyLarge}>
      A <span className={colors.acmYellow}>fachada</span> do seu estabelecimento
      é o primeiro contato visual que os clientes têm com sua marca, sendo
      crucial para causar uma{" "}
      <span className={colors.acmYellow}>boa impressão</span> e{" "}
      <span className={colors.acmYellow}>atrair novos consumidores</span>. Uma
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

const CarWrappingDescription: React.FC = () => {
  return (
    <p className={typography.bodyLarge}>
      A adesivagem automotiva é ideal para{" "}
      <span className={colors.carWrappingBlue}>reforçar a identidade</span> da
      sua empresa e garantir alta visibilidade. Com adesivos duráveis e
      personalizáveis, você transforma sua frota em uma poderosa ferramenta de
      marketing. Esses adesivos oferecem uma{" "}
      <span className={colors.carWrappingBlue}>
        aparência profissional e marcante
      </span>
      , ajudando a destacar sua marca e ampliar sua presença no mercado.
    </p>
  );
};
