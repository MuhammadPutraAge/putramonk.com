import Image from "next/image";
import { Button, Gap } from "../global";

interface HeroSectionProps {
  greetingText: string;
  mainTitle: string;
  description: string;
  profileSrc: string;
}

export default function HeroSection({
  greetingText,
  mainTitle,
  description,
  profileSrc,
}: HeroSectionProps) {
  return (
    <section className="hero-background mb-180 sm:mb-60 pt-80 xxs:pt-32">
      <div className="px-150 md:px-80 sm:px-60 pt-80 xxs:pt-0 lg:pt-24 pb-180 lg:pb-80 xxs:pb-24 flex lg:flex-col-reverse justify-between items-center">
        <div className="max-w-4xl lg:mt-24 xxs:-mt-24 lg:flex lg:flex-col lg:items-center">
          <h3 className="text-white text-24 sm:text-18 xxs:text-14 font-medium mb-8 lg:text-center">
            {greetingText}
          </h3>
          <h1 className="text-white text-60 sm:text-42 xxs:text-32 font-bold mb-16 leading-tight lg:text-center">
            {mainTitle}
          </h1>
          <p className="text-white text-16 sm:text-14 xxs:text-12 font-normal mb-40 xxs:mb-8 max-w-2xl sm:max-w-xl xxs:max-w-sm lg:text-center">
            {description}
          </p>

          <div className="flex items-center sm:scale-75 xxs:scale-50">
            <Button
              className="flex justify-center items-center bg-white text-darkPurple text-16 font-bold py-20 rounded-8"
              href="#projects"
              title="My Project"
              style={{ width: 160 }}
            />
            <Gap width={24} />
            <Button
              className="flex justify-center items-center bg-gold text-darkPurple text-16 font-bold py-20 rounded-8"
              href="#contact"
              title="Hire Me"
              style={{ width: 160 }}
            />
          </div>
        </div>

        <div className="relative w-320 h-320 lg:scale-75 xxs:scale-50">
          <div className="absolute-center w-320 h-320 border-gold border-4 rounded-circle">
            <div className="absolute-center w-280 h-280 rounded-circle border-dashed border-2 border-gold" />
            <div className="w-237 h-237 absolute-center bg-white rounded-circle overflow-hidden">
              <Image
                style={{ transform: "translateX(8px)" }}
                src={profileSrc}
                alt="Muhammad Putra Age"
                width={237}
                height={237}
              />
            </div>
          </div>

          <div className="absolute-center w-320 h-320 border-transparent border-4 rounded-circle -rotate-135">
            <div className="hero-circle w-60 h-60 rounded-circle bg-red" />
          </div>

          <div className="absolute-center w-320 h-320 border-transparent border-4 rounded-circle -rotate-45">
            <div className="hero-circle w-42 h-42 rounded-circle bg-pink" />
          </div>

          <div className="absolute-center w-320 h-320 border-transparent border-4 rounded-circle rotate-65">
            <div className="hero-circle w-36 h-36 rounded-circle bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
