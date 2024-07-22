import Image from "next/image";
import { useCallback } from "react";
import { useNavbarContext } from "./components/navbar/NavbarContext";
import "../app/styles/home.css";
import "../app/styles/typography.css";

export default function Home() {
  return (
    <main>
      <div className="top-text">
        <h1 className="h1 centeredText">
          Você sonha,<br/> a gente<span className="h1Meddon gradientText"> faz</span>
        </h1>
      </div>

      <div className="products-carousel">

      </div>

      <div className="clients-carousel">

      </div>
    </main>
  );
}
