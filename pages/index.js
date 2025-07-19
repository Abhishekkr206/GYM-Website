import Navbar from "@/components/section/navbar";
import HeroSection from "@/components/section/HeroSection";
import AboutUs from "@/components/section/about";

export default function home(){
  return(
    <>
      <Navbar/>
      <HeroSection />
      <AboutUs />
    </>
  )
}