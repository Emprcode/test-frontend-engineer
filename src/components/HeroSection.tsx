import { FC } from "react";
import HERO_IMAGE from "../../public/HERO_ICON.png";
import Image from "next/image";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="w-full aspect-[2.5/1] sm:aspect-[3/1] relative">
      <Image src={HERO_IMAGE} fill alt="HERO_ICON" />
    </div>
  );
};

export default HeroSection;
