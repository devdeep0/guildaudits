import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
  <>
  <ThemeProvider attribute="class">
    
  <Header/>
  <HeroSection/>
  <Footer/>
  </ThemeProvider>
  </>
  );
}