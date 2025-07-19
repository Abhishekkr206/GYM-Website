// components/Footer.jsx
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        
        {/* Logo / Name */}
        <div className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} FitZone
        </div>

        {/* Links (optional nav) */}
        <div className="sm:flex gap-4 text-sm hidden">
          <a href="#about" className="hover:underline">About us</a>
          <a href="#trainers" className="hover:underline">Trainers</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <a href="#" target="_blank" rel="noopener noreferrer" >
            <Facebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" >
            <Instagram />
          </a>
          <a href="https://x.com/Abhishek_kr28" target="_blank" rel="noopener noreferrer" >
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
