import ScaleInView from "@/components/ScaleInView";
import { AnimatedText } from "@/components/AnimatedText";
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import SectionNav from "@/components/nav/SectionNav";

export default function Home() {
  return (
    <main className="w-full xl:h-screen flex flex-col xl:flex-row opacity-70">
      <div className="h-1/2 xl:h-full container text-center justify-evenly  flex flex-col xl:flex-1 xl:text-left">
        <Navbar />
        <AnimatedText
          text="FRONTIER STRUCTURES"
          className=" font-semibold text-black  text-5xl xl:text-7xl  2xl:text-[10rem] py-4"
        />
        <ScaleInView className=" font-semibold text-black text-3xl lg:text-4xl   py-4 ">
          Transforming Your Dreams Into Reality
        </ScaleInView>
        <SectionNav />
        <Footer />
      </div>

      <HeroSection className="w-full xl:flex-1 overflow-y-scroll snap-y snap-mandatory xl:h-full h-[90vh]" />
    </main>
  );
}
