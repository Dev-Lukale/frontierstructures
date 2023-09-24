"use client";
import { ScrollItems } from "@/config/scrollSection";
import Section from "./Section";



type Props = {
  className?: string;
};

const HeroSection = ({ className }: Props) => {

  return (
    <div className={`scroll-smooth ${className} no-scrollbar max-xl:grid md:grid-cols-2 gap-2`}>
      {ScrollItems?.map((item: any, index) => (
        <Section index={index} id={item.id} name={item.name} img={item.img} />
      ))}
    </div>
  );
};

export default HeroSection;
