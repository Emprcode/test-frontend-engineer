import { FC } from "react";
import HERO_IMAGE from "../../public/HERO_ICON5.png";
import Image from "next/image";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="w-full aspect-[2.5/1] sm:aspect-[3/1] relative">
      <Image src={HERO_IMAGE} fill alt="HERO-IMAGE" />
    </div>
  );
};

export default HeroSection;
