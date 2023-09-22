import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/types";

type SectionProps = {
  index: number;
  name: SectionName;
  bg: string;
};

const Section = ({ index, name, bg }: SectionProps) => {
  const { ref } = useSectionInView(name);
  return (
    <section
      key={index}
      ref={ref}
      id={name}
      className={` h-screen ${bg}`}
    ></section>
  );
};

export default Section;
