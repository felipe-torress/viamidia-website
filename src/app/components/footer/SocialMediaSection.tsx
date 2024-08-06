import SocialMediaButton from "@components/buttons/SocialMediaButton";
import typography from "@styles/typography.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../logo/Logo";
import styles from "./footer.module.css";

const SocialMediaSection: React.FC = () => {
  return (
    <div className={styles.socialMediaSection}>
      <Logo />
      <p className={typography.bodySmall}>Visite Nossas Redes</p>
      <div className={styles.socialMediaButtons}>
        <SocialMediaButton href="https://www.facebook.com/ViaMidiaComunicacaoVisual">
          <FaFacebook />
        </SocialMediaButton>
        <SocialMediaButton href="https://www.instagram.com/viamidia_rp/">
          <FaInstagram />
        </SocialMediaButton>
        <SocialMediaButton href="https://wa.me/551636350101">
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
