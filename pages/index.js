import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header title="Freelance" />
      <h1>Hello</h1>
    </main>
  );
}
