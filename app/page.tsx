import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Cost from "@/components/Cost";
import Support from "@/components/Support";
import Flexibility from "@/components/Flexibility";
import Careers from "@/components/Careers";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Experience />
      <Cost />
      <Support />
      <Flexibility />
      <Careers />
      <FinalCTA />
      <Footer />
    </main>
  );
}
