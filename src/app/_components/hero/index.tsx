"use client";
import { mergeClass } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import ShinyStar from "./shiny-star.svg";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className={mergeClass(
        "w-full max-w-[1280px] h-screen mx-auto",
        "flex items-center",
      )}
    >
      <HeroBranding />
    </div>
  );
};

const words = [
  "Creativity",
  "Innovation",
  "Potential",
  "Exploration",
]

const HeroBranding = () => {
  return (
    <div
      className={mergeClass(
        "w-1/2 h-screen",
        "flex flex-col justify-center items-start gap-4",
      )}
    >
      <div className="w-full">
        <AnimatedGradientText>
          <Image src={ShinyStar} alt="Shiny Star" className="inline h-4 w-4" />
          <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className="inline animate-gradient bg-gradient-to-r from-purple-400/75 via-pink-300 to-purple-400/75 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
          >
            New Blog Post
          </span>
          <IoIosArrowForward className="ml-2" />
        </AnimatedGradientText>
      </div>
      <h1 className="text-5xl font-bold inline-flex gap-4 flex-wrap">
        <WhitenessText text="Limitless" />
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-300 to-pink-400">Creativity</span>
      </h1>
    </div>
  );
};

const WhitenessText = ({ text }: { text: string }) => {
  return <span className="bg-clip-text text-transparent " style={{
    backgroundImage: "linear-gradient(180deg,color(display-p3 .9411764706 .9333333333 .9764705882/.8) 0%,color(display-p3 .8862745098 .9098039216 1/1) 100%)"
  }}>{text}</span>
}
