import Navbar from "@/components/section/navbar";
import HeroSection from "@/components/section/HeroSection";
import AboutUs from "@/components/section/about";
import FitnessTrainers from "@/components/section/trainersSection";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contect";

export default function home(){
  return(
    <>
      <Navbar/>
      <HeroSection />
      <AboutUs />
      <FitnessTrainers />
      <Testimonials />
      <ContactForm />
    </>
  )
}