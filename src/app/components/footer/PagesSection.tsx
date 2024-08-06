import typography from "@styles/typography.module.css";
import styles from "./footer.module.css";

const PagesSection: React.FC = () => {
  return (
    <div className={styles.pagesSection}>
      <p className={typography.subHeader2}>Páginas</p>
      <a className={typography.bodySmall} href="/">
        Home
      </a>
      <a className={typography.bodySmall} href="/sobre-nos/">
        Sobre Nós
      </a>
      <a className={typography.bodySmall} href="/servicos/">
        Serviços
      </a>
      <a className={typography.bodySmall} href="/cases/">
        Cases
      </a>
      <a className={typography.bodySmall} href="/contato/">
        Contato
      </a>
      <a className={typography.bodySmall} href="/orcamento/">
        Orçamento
      </a>
    </div>
  );
};

export default PagesSection;
