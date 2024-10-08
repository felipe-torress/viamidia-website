import ContactUsSection from "@/app/pages/home/sections/ContactSection";
import * as styles from "./home.module.css";
import ClientsSection from "./sections/ClientsSection";
import HomeTopSection from "./sections/HomeTopSection";
import ServicesSection from "./sections/ServicesSection";

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
