import ScaleInView from "@/components/ScaleInView";
import HeroSection from "@/components/HeroSection";

import Footer from "@/components/nav/Footer";
import Navbar from "@/components/nav/Navbar";

import { ScrollItems } from "@/config/scrollSection";
import Section from "./Section";
import { SectionName } from "@/types";

interface DetailParams{
  params: { slug: string }
}
export default function Detail({ params }: DetailParams) {
  const slug = params.slug;
  const Item=ScrollItems.find(function (item) {
    return item.id === slug;
  });

  const variants = {
    initial: { opacity: 0, y:-10 },
    animate: { opacity: 1, y: 0, transition: { duration:.3 } },
  };
  return (
    <main className="w-full md:h-screen flex flex-col md:flex-row opacity-70">
      <div className="h-1/2 md:h-full container text-center justify-between  flex flex-col md:flex-1 md:text-left">
        <div>
          <Navbar />
          <ScaleInView variants={variants} className="lg:big-text text-2xl font-semibold">{Item?.name}</ScaleInView>
          <p className=" text-md lg:text-xl font-jetbrains">{ Item?.content}</p>
        </div>

        <Footer />
      </div>

      <Section name={Item?.name as SectionName} img={Item?.img as string } />
    </main>
  );
}
