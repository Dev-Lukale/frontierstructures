import ScaleInView from "@/components/ScaleInView";
import { AnimatedText } from "@/components/AnimatedText";
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";
import SectionNav from "@/components/nav/SectionNav";


export default function Home() {
  return (
    <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full w-full lg:col-span-1 py-6">
        <Navbar />
        <div className=" flex flex-col gap-y-12  text-center lg:text-left lg:gap-y-8 lg:px-12 py-8 lg:py-0">
          <AnimatedText
            text="FRONTIER STRUCTURES"
            className=" font-semibold text-black text-6xl xl:text-8xl xl:pt-6 opacity-60 "
          />
          <ScaleInView className=" font-semibold text-black text-4xl lg:text-3xl xl:mb-12 opacity-60">
            Transforming Your Dreams Into Reality
          </ScaleInView>
          <SectionNav />
          <Footer />
        </div>
      </div>

      <HeroSection className="w-full lg:col-span-1 overflow-y-scroll snap-y snap-mandatory max-h-screen" />
    </main>
  );
}
