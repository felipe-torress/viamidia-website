import Link from "next/link";
import './styles/logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src={"/images/Logo-ViaMidia.png"} alt="Logo"/>
      </Link>
    </div>
  );
};

export default Logo;