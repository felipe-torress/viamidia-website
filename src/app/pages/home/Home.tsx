import ContactUsSection from "@/app/pages/home/sections/contact/ContactSection";
import * as styles from "./home.module.css";
import ClientsSection from "./sections/clients/ClientsSection";
import HomeTopSection from "./sections/top/HomeTopSection";
import ServicesSection from "./sections/services/ServicesSection";

export default function Home() {
  return (
    <main className={styles.home}>
      <HomeTopSection />
      <ServicesSection />
      <ClientsSection />
      <ContactUsSection />
    </main>
  );
}
