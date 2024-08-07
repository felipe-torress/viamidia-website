import typography from "@styles/typography.module.css";
import styles from "./footer.module.css";
import Link from "next/link";

const PagesSection: React.FC = () => {
  return (
    <div className={styles.pagesSection}>
      <p className={typography.subHeader2}>Páginas</p>
      <Link className={typography.bodySmall} href="/">
        Home
      </Link>
      <Link className={typography.bodySmall} href="/sobre-nos/">
        Sobre Nós
      </Link>
      <Link className={typography.bodySmall} href="/servicos/">
        Serviços
      </Link>
      <Link className={typography.bodySmall} href="/cases/">
        Cases
      </Link>
      <Link className={typography.bodySmall} href="/contato/">
        Contato
      </Link>
      <Link className={typography.bodySmall} href="/orcamento/">
        Orçamento
      </Link>
    </div>
  );
};

export default PagesSection;
