"use client";
import { ScrollItems } from "@/config/scrollSection";
import Section from "./Section";


type Props = {};

const HeroSection = (props: Props) => {
 
  return (
    <div className="overflow-y-scroll scroll-smooth">
      {ScrollItems?.map((item, index) => (
        <Section index={index} name={item.name} bg={ item.bg} />
      ))}


    </div>
  );
};

export default HeroSection;
