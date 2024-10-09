import * as typography from "@styles/typography.module.css";
import classNames from "classnames";
import { SVGProps } from "react";
import * as styles from "./contactField.module.css";

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
