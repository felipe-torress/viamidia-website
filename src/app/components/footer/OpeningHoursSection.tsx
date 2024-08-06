import typography from "@styles/typography.module.css";
import styles from "./footer.module.css";

const OpeningHoursSection: React.FC = () => {
  return (
    <div className={styles.pagesSection}>
      <p className={typography.subHeader2}>Horário de Atendimento</p>
      <p className={typography.bodySmall}>
        <span className={typography.bold}>WhatsApp:</span> Segunda a Sexta das
        9:00 às 18:00
      </p>
    </div>
  );
};

export default OpeningHoursSection;
