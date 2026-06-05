import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import FloatingGrid from "../components/FloatingGrid";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <FloatingGrid />
      <Navbar />
      <HeroSection />
    </main>
  );
}