import typography from "@styles/typography.module.css";
import { SVGProps } from "react";
import styles from "./contactField.module.css";
import classNames from "classnames";

interface ContactFieldProps {
  Icon: React.FC<SVGProps<SVGElement>>;
  title: string;
  description: string;
}

const ContactField: React.FC<ContactFieldProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className={styles.contactFieldContainer}>
      <div className={styles.contactFieldHeader}>
        <Icon />
        <p className={classNames(typography.bodySmall, typography.bold)}>
          {title}
        </p>
      </div>
      <p className={typography.bodySmall}>{description}</p>
    </div>
  );
};

export default ContactField;