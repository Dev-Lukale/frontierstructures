import HeroSection from "@/components/HeroSection";
import StaggeredAnimation from "@/components/StaggeredAnimation";
import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import SectionNav from "@/components/nav/SectionNav";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-y-scroll grid lg:grid-cols-2">
      <div className="w-full">
        <Navbar />
        <div className=" flex flex-col gap-y-4  pt-8">
          <StaggeredAnimation className="mx-auto ">
            <p className="text-[64px] lg:text-[96px] font-semibold leading-[48px] lg:leading-[36px] opacity-80 tracking-widest">
              FRONTIER
            </p>
            <p className=" text-[64px]  lg:text-[96px] font-semibold opacity-80 tracking-widest">
              STRUCTURES
            </p>
          </StaggeredAnimation>
          <SectionNav />
          <Footer />
        </div>
      </div>

      <HeroSection />
    </main>
  );
}
