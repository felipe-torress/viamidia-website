import * as typography from "@styles/typography.module.css";
import * as styles from "./pagesSection.module.css";

const PagesSection: React.FC = () => {
  return (
    <div className={styles.pagesSection}>
      <p className={typography.subHeader2}>Páginas</p>
      <a className={typography.bodySmall} href="#servicesSection">
        Serviços
      </a>
      <a className={typography.bodySmall} href="#contactSection">
        Contato
      </a>
      <a className={typography.bodySmall} href="#clientsSection">
        Clientes
      </a>
    </div>
  );
};

export default PagesSection;
