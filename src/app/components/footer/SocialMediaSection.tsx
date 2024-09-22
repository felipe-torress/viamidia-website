import SocialMediaButton from "@components/buttons/SocialMediaButton";
import typography from "@styles/typography.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../logo/Logo";
import styles from "./footer.module.css";
import constants from "@utils/contants";

const SocialMediaSection: React.FC = () => {
  return (
    <div className={styles.socialMediaSection}>
      <Logo />
      <p className={typography.bodySmall}>Visite Nossas Redes</p>
      <div className={styles.socialMediaButtons}>
        <SocialMediaButton href={constants.facebookUrl}>
          <FaFacebook />
        </SocialMediaButton>
        <SocialMediaButton href={constants.instagramUrl}>
          <FaInstagram />
        </SocialMediaButton>
        <SocialMediaButton href={constants.whatsappUrl}>
          <FaWhatsapp />
        </SocialMediaButton>
      </div>
      <p className={typography.bodySmall}>
        © 2024 - Via Midia Comunicação Visual.
        <br />
        Todos os direitos reservados
      </p>
    </div>
  );
};

export default SocialMediaSection;
