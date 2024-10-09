import SocialMediaButton from "@/app/components/ui/buttons/socialMediaButton/SocialMediaButton";
import Logo from "@/app/components/ui/logo/Logo";
import * as typography from "@styles/typography.module.css";
import constants from "@utils/constants";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import * as styles from "./socialMediaSection.module.css";

const SocialMediaSection: React.FC = () => {
  return (
    <div className={styles.socialMediaSection}>
      <Logo />
      <p className={typography.bodySmall}>Visite Nossas Redes</p>
      <div className={styles.socialMediaButtons}>
        <SocialMediaButton href={constants.whatsappUrl}>
          <FaWhatsapp />
        </SocialMediaButton>
        <SocialMediaButton href={constants.instagramUrl}>
          <FaInstagram />
        </SocialMediaButton>
        <SocialMediaButton href={constants.facebookUrl}>
          <FaFacebook />
        </SocialMediaButton>
      </div>
      <p className={typography.caption}>
        © 2024 - Via Midia Comunicação Visual.
        <br />
        Todos os direitos reservados
      </p>
    </div>
  );
};

export default SocialMediaSection;
