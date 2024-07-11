import Image from "next/image";
import { Inter } from "next/font/google";
import Tabuleiro from "@/components/Tabuleiro";
import Quadrado from "@/components/Quadrado";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className="container">
      <Tabuleiro tam={8}></Tabuleiro>
    </div>

  );
}
