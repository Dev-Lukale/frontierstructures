import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/types";
import Image from "next/image";
import Link from "next/link";

type SectionProps = {
  index: number;
  name: SectionName;
  img: string;
  id: string;
};

const Section = ({ index, name, img ,id}: SectionProps) => {
  const { ref } = useSectionInView(name);
  const variants = {
    initial: { opacity: 0.7, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };
  return (
    <section
      key={index}
      ref={ref}
      id={id}
      className={`h-screen relative snap-start snap-always`}
    >
      <Link href="/" className="">
        {" "}
        <Image
          src={img}
          className="h-full w-full"
          fill
          quality={100}
          alt="Architectural Illustration"
        />
      </Link>

      <Link
        href="/"
        className="absolute top-8 left-8 text-left text-6xl text-zinc-300 block after:block after:content-[''] after:absolute after:h-[3px] after:bg-zinc-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center  hover:translate-x-2 transition ease-in-out delay-150"
      >
        {name}
      </Link>
    </section>
  );
};

export default Section;
