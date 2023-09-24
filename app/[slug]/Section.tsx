import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/types";
import Image from "next/image";

type SectionProps = {
  index?: number;
  name: SectionName;
  img: string;
  id?: string;
  content?: string;
};

const Section = ({ name, img }: SectionProps) => {
  return (
    <section className={`relative  w-full md:flex-1  md:h-full h-[90vh]`}>
      <Image src={img} height={100} width={200} objectFit="contain"  className="!w-full"quality={100} alt={name} />

      <span className="absolute left-4 top-4 xl:top-8 xl:left-8 text-left text-3xl xl:text-6xl text-zinc-300 block after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center  hover:-translate-y-2 transition ease-in-out delay-150">
        {name}
      </span>
    </section>
  );
};

export default Section;
