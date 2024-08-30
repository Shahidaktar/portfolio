import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className=" w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Projects />
          <Achievements />
          <Footer />
        </div>
      </main>
    </>
  );
}
