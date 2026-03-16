import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Academics from "@/components/Academics";
import Campus from "@/components/Campus";
import StudentLife from "@/components/StudentLife";
import Admissions from "@/components/Admissions";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Academics />
      <Campus />
      <StudentLife />
      <Admissions />
      <About />
      <Footer />
    </main>
  );
}
